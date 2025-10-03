import type { Metadata } from "next";
import {
  Code,
  Zap,
  Clock,
  Users,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import Squares from "@/components/Squares";

export const metadata: Metadata = {
  title: "API - PromptCue | AI Prompt Generator API",
  description:
    "Access PromptCue's AI prompt generation capabilities through our powerful API. Coming soon - integrate professional prompt generation into your applications.",
  keywords:
    "AI prompt generator API, prompt generation API, AI tools API, content creation API, developer tools",
};

export default function ApiPage() {
  const plannedFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Generate prompts in milliseconds with our optimized API endpoints",
      color: "blue",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Developer Friendly",
      description: "Simple REST API with comprehensive documentation and SDKs",
      color: "emerald",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Multiple Languages",
      description: "SDKs available for JavaScript, Python, Node.js, and more",
      color: "purple",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Advanced Features",
      description:
        "Custom models, rate limiting, and enterprise-grade reliability",
      color: "amber",
    },
  ];

  const useCases = [
    {
      title: "Content Management Systems",
      description:
        "Integrate AI prompt generation directly into your CMS workflows",
      icon: "📝",
    },
    {
      title: "Marketing Automation",
      description:
        "Automatically generate marketing copy and social media content",
      icon: "📢",
    },
    {
      title: "Creative Tools",
      description:
        "Build applications that help creators generate better prompts",
      icon: "🎨",
    },
    {
      title: "Educational Platforms",
      description:
        "Help students and educators create effective learning materials",
      icon: "🎓",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Generate product descriptions and marketing content at scale",
      icon: "🛍️",
    },
    {
      title: "Social Media Apps",
      description:
        "Power content creation features in social media applications",
      icon: "📱",
    },
  ];

  const curlCommand = `curl -X POST https://prompt-cue.vercel.app/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"type": "blog_post", "topic": "AI in healthcare", "tone": "professional"}'`;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Background Squares - full page coverage */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <Squares
          speed={0.3}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(139, 92, 246, 0.15)"
          hoverFillColor="rgba(139, 92, 246, 0.4)"
        />
      </div>
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="flex flex-wrap items-center justify-center text-5xl sm:text-6xl font-bold text-slate-800 dark:text-slate-200 mb-4 text-center">
            <Link
              href={"/"}
              className="pr-3 pb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              PromptCue
            </Link>
            <span className="pb-2">API</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Integrate professional AI prompt generation into your applications.
            Powerful, reliable, and developer-friendly.
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-200 dark:border-amber-700 rounded-2xl px-6 py-3 mb-8">
            <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <span className="text-amber-800 dark:text-amber-200 font-semibold">
              Coming Soon
            </span>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We're building something amazing. Join our waitlist to be the first
            to know when our API launches.
          </p>
        </div>

        {/* Waitlist CTA */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 dark:border-slate-700 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Get Early Access
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Be among the first developers to access our API. Get exclusive
              early access, special pricing, and direct support from our team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="mailto:jainjayesh799@gmail.com?subject=API%20Waitlist%20Request"
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 inline-flex items-center space-x-2"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:jainjayesh799@gmail.com?subject=API%20Partnership%20Inquiry"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-4 px-8 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              >
                Partnership Inquiry
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Flexible paid plans available</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Priority support for early adopters</span>
              </div>
            </div>
          </div>
        </div>

        {/* Planned Features */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">
            What We're Building
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {plannedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <div
                    className={`text-${feature.color}-600 dark:text-${feature.color}-400`}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Current API Endpoints */}
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 dark:border-slate-700 mb-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
            Current API Endpoints
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  POST /api/v1/generate
                </h3>
                <span className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 text-xs font-semibold px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Generate AI prompts with type, topic, and tone parameters.
                Currently returns a "coming soon" response with request
                validation.
              </p>
              <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                <div>• Requires Bearer token authentication</div>
                <div>• Validates request body (type, topic, tone)</div>
                <div>• Returns detailed "coming soon" response</div>
                <div>• Includes request tracking and contact info</div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  GET /api/v1/health
                </h3>
                <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 text-xs font-semibold px-2 py-1 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Health check endpoint that provides API status, version
                information, and available endpoints.
              </p>
              <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                <div>• No authentication required</div>
                <div>• Returns API status and uptime</div>
                <div>• Lists all available endpoints</div>
                <div>• Includes contact information</div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Preview */}
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 dark:border-slate-700 mb-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
            Technical Preview
          </h2>
          <div className="relative bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 overflow-x-auto">
            <CopyButton textToCopy={curlCommand} />
            <div className="text-sm text-slate-300 font-mono">
              <div className="mb-4">
                <span className="text-green-400">#</span> Generate a
                professional blog post prompt
              </div>
              <div className="mb-2">
                <span className="text-blue-400">curl</span> -X POST
                https://prompt-cue.vercel.app/v1/generate \
              </div>
              <div className="ml-4 mb-2">
                -H{" "}
                <span className="text-yellow-400">
                  "Authorization: Bearer 'YOUR_API_KEY'"
                </span>{" "}
                \
              </div>
              <div className="ml-4 mb-2">
                -H{" "}
                <span className="text-yellow-400">
                  "Content-Type: application/json"
                </span>{" "}
                \
              </div>
              <div className="ml-4 mb-4">
                -d{" "}
                <span className="text-yellow-400">
                  {
                    '\'{"type": "blog_post", "topic": "AI in healthcare", "tone": "professional"}\''
                  }
                </span>
              </div>
              <div className="text-green-400"># Response (Coming Soon)</div>
              <div className="text-slate-400">{"{"}</div>
              <div className="ml-4 text-slate-400">
                <span className="text-blue-400">"status"</span>:{" "}
                <span className="text-green-400">"coming_soon"</span>,
              </div>
              <div className="ml-4 text-slate-400">
                <span className="text-blue-400">"message"</span>:{" "}
                <span className="text-green-400">
                  "This API endpoint is coming soon!"
                </span>
                ,
              </div>
              <div className="ml-4 text-slate-400">
                <span className="text-blue-400">"request_received"</span>:{" "}
                <span className="text-yellow-400">{"{...}"}</span>,
              </div>
              <div className="ml-4 text-slate-400">
                <span className="text-blue-400">"next_steps"</span>:{" "}
                <span className="text-yellow-400">
                  ["Join waitlist", "Follow updates"]
                </span>
              </div>
              <div className="text-slate-400">{"}"}</div>
            </div>
          </div>
          <p className="text-center text-slate-600 dark:text-slate-300 mt-6 text-sm">
            The API is currently in development. Try the generate endpoint with
            any valid API key to see the coming soon response.
          </p>
        </section>

        {/* Pricing Preview */}
        <section className="bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/80 dark:to-purple-900/80 rounded-3xl p-8 sm:p-12 mb-2">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
            Pricing Preview
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Starter API
              </h3>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                $2.99
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-6">
                <li>• 1,000 requests/month</li>
                <li>• Basic prompt types</li>
                <li>• Community support</li>
                <li>• Standard rate limits</li>
              </ul>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Perfect for testing and small projects
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-indigo-200 dark:border-indigo-700 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Pro
              </h3>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                $34.99<span className="text-lg">/month</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-6">
                <li>• 20,000 requests/month</li>
                <li>• All prompt types</li>
                <li>• Priority support</li>
                <li>• Advanced features</li>
              </ul>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Ideal for growing applications
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Enterprise
              </h3>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                Custom
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-6">
                <li>• Unlimited requests</li>
                <li>• Custom models</li>
                <li>• Dedicated support</li>
                <li>• SLA guarantees</li>
              </ul>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                For large-scale deployments
              </div>
            </div>
          </div>
          <p className="text-center text-slate-600 dark:text-slate-300 mt-6 text-sm">
            Pricing is subject to change. Early adopters may receive special
            pricing.
          </p>
        </section>
      </main>
    </div>
  );
}
