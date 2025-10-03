const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface GeneratePromptRequest {
  text: string;
  context?: string;
}

export interface GeneratePromptResponse {
  prompt: string;
  cached: boolean;
  timestamp: number;
}

export interface ApiError {
  error: string;
  details?: string;
  retryAfter?: number;
}

export interface StreamChunk {
  content: string;
  done: boolean;
  fullPrompt?: string;
  error?: string;
}

export async function generatePrompt(data: GeneratePromptRequest): Promise<GeneratePromptResponse> {
  const response = await fetch(`${API_BASE_URL}/api/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData: ApiError = await response.json();
    
    if (response.status === 429) {
      throw new Error('Too many requests. Please wait a moment and try again.');
    }
    
    throw new Error(errorData.error || 'Failed to generate prompt');
  }

  return response.json();
}

export async function generatePromptStream(
  data: GeneratePromptRequest,
  onChunk: (chunk: StreamChunk) => void
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/generate/stream`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData: ApiError = await response.json();
    
    if (response.status === 429) {
      throw new Error('Too many requests. Please wait a moment and try again.');
    }
    
    throw new Error(errorData.error || 'Failed to generate prompt');
  }

  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error('Failed to create stream reader');
  }

  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) break;
      
      buffer += decoder.decode(value, { stream: true });
      
      // Process complete lines
      const lines = buffer.split('\n');
      buffer = lines.pop() || ''; // Keep incomplete line in buffer
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const chunk: StreamChunk = JSON.parse(line.slice(6));
            onChunk(chunk);
            
            if (chunk.done) {
              return;
            }
          } catch (e) {
            console.error('Failed to parse stream chunk:', e);
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}

export async function checkHealth(): Promise<{ status: string; timestamp: string }> {
  const response = await fetch(`${API_BASE_URL}/api/health`);
  
  if (!response.ok) {
    throw new Error('Backend service is unavailable');
  }
  
  return response.json();
} 