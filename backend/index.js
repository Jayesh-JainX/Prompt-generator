import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// CORS configuration - only allow frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Rate limiting - 10 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    error: "Too many requests, please try again later.",
    retryAfter: 60,
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/generate", limiter);

// Cache for storing generated prompts
const promptCache = new Map();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// System prompt for better prompt generation
const SYSTEM_PROMPT = `You are an expert prompt engineering specialist designed to transform simple user inputs into comprehensive, well-crafted prompts for other AI systems. Your role is to analyze the user's input and generate a single, detailed prompt that another AI can use effectively to produce the desired output.

CORE FUNCTIONALITY:
Analyze the user input to determine the intent and required output type. Transform brief concepts, keywords, or sentences into detailed, actionable prompts that provide clear instructions, context, and specifications for optimal AI performance.

INPUT PROCESSING RULES:
- Accept inputs ranging from single words to 1000-character sentences
- Identify the primary intent behind the input
- Determine if the request involves visual content creation or text-based tasks
- Recognize domain-specific requirements across all fields including technology, education, creative writing, business, science, arts, and more

IMAGE GENERATION DETECTION:
If the input contains words like "create image", "design image", "generate image", "draw", "illustrate", "picture", "visual", "artwork", or similar visual creation terms, generate a prompt specifically for image generation AI systems. Include detailed visual descriptions, style specifications, composition elements, lighting, colors, and technical parameters.

TEXT-BASED PROMPT GENERATION:
For all non-image requests, create prompts for text generation, analysis, summarization, explanation, tutoring, document creation, theory discussion, problem-solving, creative writing, or any other text-based task. Include specific instructions about tone, format, depth, audience, and expected output structure.

OUTPUT REQUIREMENTS:
Generate exactly one comprehensive prompt consisting of 10-30 sentences organized into 2-4 coherent paragraphs. The output must be plain text without any formatting such as bold, italic, bullets, or special characters. Begin directly with the generated prompt without any introductory phrases or explanations and organized the output into 2-4 coherent paragraphs long and also do not add any words length in paragraphs.

PROMPT QUALITY STANDARDS:
Ensure the generated prompt is specific, actionable, and contains sufficient detail for another AI to produce high-quality results. Include context, constraints, desired outcomes, and any relevant specifications. The prompt should be professionally written and technically sound while remaining clear and accessible.

RESPONSE FORMAT:
Provide only the generated prompt as continuous sentences organized into well-structured paragraphs. Do not include any meta-commentary, introductory text, or explanatory notes. The response should flow naturally and provide comprehensive guidance for the target AI system.
`;

// Helper function to clean generated prompts
const cleanPrompt = (text) => {
  if (!text) return "";

  // Remove common prefixes and explanations
  const cleaned = text
    .replace(
      /^Here's? a (comprehensive )?prompt based on the user's? input:\s*/i,
      ""
    )
    .replace(/^Here's? a prompt:\s*/i, "")
    .replace(/^Here's? what I generated:\s*/i, "")
    .replace(/^Generated prompt:\s*/i, "")
    .replace(/^Prompt:\s*/i, "")
    .replace(/^"([^"]+)"$/, "$1") // Remove surrounding quotes
    .replace(/^'([^']+)'$/, "$1") // Remove surrounding single quotes
    .trim();

  return cleaned;
};

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

app.get("/", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Streaming prompt generation endpoint
app.post("/api/generate/stream", async (req, res) => {
  try {
    const { text, context = "" } = req.body;

    // Input validation
    if (!text || typeof text !== "string") {
      return res.status(400).json({
        error: "Invalid input. Please provide a text description.",
      });
    }

    if (text.length > 1000) {
      return res.status(400).json({
        error: "Input text is too long. Please keep it under 1000 characters.",
      });
    }

    // Set headers for streaming
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });

    // Prepare the user message
    const userMessage = context
      ? `Context: ${context}\n\nUser Input: ${text}\n\nGenerate a single prompt.`
      : `User Input: ${text}\n\nGenerate a single prompt.`;

    // Call Hugging Face API directly with streaming
    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: SYSTEM_PROMPT,
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
          model: "meta-llama/Llama-3.1-8B-Instruct:novita",
          stream: true,
          max_tokens: 500,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Hugging Face API error: ${response.status} ${response.statusText}`
      );
    }

    let generatedPrompt = "";
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    try {
      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);

            if (data === "[DONE]") {
              // Send completion signal
              res.write(
                `data: ${JSON.stringify({
                  content: "",
                  done: true,
                  fullPrompt: cleanPrompt(generatedPrompt),
                })}\n\n`
              );
              res.end();
              return;
            }

            try {
              const parsed = JSON.parse(data);
              if (parsed.choices && parsed.choices.length > 0) {
                const newContent = parsed.choices[0].delta?.content;
                if (newContent) {
                  generatedPrompt += newContent;
                  // Send the chunk to the frontend
                  res.write(
                    `data: ${JSON.stringify({
                      content: newContent,
                      done: false,
                    })}\n\n`
                  );
                }
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
  } catch (error) {
    console.error("Error generating prompt:", error);

    // Send error to frontend
    res.write(
      `data: ${JSON.stringify({
        error: "Failed to generate prompt. Please try again.",
        done: true,
      })}\n\n`
    );
    res.end();
  }
});

// Main prompt generation endpoint (non-streaming for compatibility)
app.post("/api/generate", async (req, res) => {
  try {
    const { text, context = "" } = req.body;

    // Input validation
    if (!text || typeof text !== "string") {
      return res.status(400).json({
        error: "Invalid input. Please provide a text description.",
      });
    }

    if (text.length > 1000) {
      return res.status(400).json({
        error: "Input text is too long. Please keep it under 1000 characters.",
      });
    }

    // Check cache first
    const cacheKey = `${text}:${context}`;
    const cachedResult = promptCache.get(cacheKey);
    if (cachedResult && Date.now() - cachedResult.timestamp < CACHE_DURATION) {
      return res.json({
        prompt: cachedResult.prompt,
        cached: true,
        timestamp: cachedResult.timestamp,
      });
    }

    // Prepare the user message
    const userMessage = context
      ? `Context: ${context}\n\nUser Input: ${text}\n\nGenerate a single prompt.`
      : `User Input: ${text}\n\nGenerate a single prompt.`;

    // Call Hugging Face API directly
    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: SYSTEM_PROMPT,
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
          model: "meta-llama/Llama-4-Scout-17B-16E-Instruct:novita",
          stream: false,
          max_tokens: 500,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Hugging Face API error: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    const generatedPrompt = cleanPrompt(result.choices[0].message.content);

    if (!generatedPrompt) {
      throw new Error("Failed to generate prompt");
    }

    // Cache the result
    promptCache.set(cacheKey, {
      prompt: generatedPrompt,
      timestamp: Date.now(),
    });

    // Clean old cache entries (older than 24 hours)
    const now = Date.now();
    for (const [key, value] of promptCache.entries()) {
      if (now - value.timestamp > CACHE_DURATION) {
        promptCache.delete(key);
      }
    }

    res.json({
      prompt: generatedPrompt,
      cached: false,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error("Error generating prompt:", error);

    if (
      error.message.includes("rate limit") ||
      error.message.includes("too many requests")
    ) {
      return res.status(429).json({
        error: "Service temporarily unavailable. Please try again in a moment.",
        retryAfter: 30,
      });
    }

    res.status(500).json({
      error: "Failed to generate prompt. Please try again.",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    error: "Internal server error",
    details: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📊 Rate limit: 10 requests per minute`);
  console.log(`💾 Cache enabled with 24-hour duration`);
  console.log(`🌊 Streaming endpoint available at /api/generate/stream`);
  console.log(`✨ Prompt cleaning enabled for clean output`);
});
