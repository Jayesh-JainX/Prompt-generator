import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      status: 'healthy',
      service: 'PromptCue API',
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      endpoints: {
        generate: {
          path: '/api/v1/generate',
          method: 'POST',
          status: 'coming_soon',
          description: 'Generate AI prompts with type, topic, and tone parameters'
        },
        health: {
          path: '/api/v1/health',
          method: 'GET',
          status: 'active',
          description: 'API health check endpoint'
        }
      },
      features: {
        authentication: 'Bearer token required',
        rate_limiting: 'Coming soon',
        caching: 'Coming soon',
        streaming: 'Coming soon'
      },
      contact: {
        email: 'jainjayesh799@gmail.com',
        waitlist: 'mailto:jainjayesh799@gmail.com?subject=API%20Waitlist%20Request',
        documentation: '/api'
      }
    },
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Version': '1.0.0',
        'X-Status': 'healthy'
      }
    }
  );
}

// Handle other HTTP methods
export async function POST() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'This endpoint only accepts GET requests',
      code: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'This endpoint only accepts GET requests',
      code: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'This endpoint only accepts GET requests',
      code: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
} 