import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Check for Authorization header
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
          message: 'API key is required. Please include a valid Bearer token in the Authorization header.',
          code: 'MISSING_API_KEY'
        },
        { status: 401 }
      );
    }

    const apiKey = authHeader.replace('Bearer ', '');
    
    // Validate API key format (basic validation)
    if (!apiKey || apiKey === 'YOUR_API_KEY' || apiKey.length < 10) {
      return NextResponse.json(
        {
          error: 'Invalid API Key',
          message: 'Please provide a valid API key.',
          code: 'INVALID_API_KEY'
        },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await request.json();
    
    // Validate request body
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        {
          error: 'Invalid Request',
          message: 'Request body must be a valid JSON object',
          code: 'INVALID_REQUEST_BODY'
        },
        { status: 400 }
      );
    }

    // Check for required fields
    const { type, topic, tone } = body;
    
    if (!type || !topic || !tone) {
      return NextResponse.json(
        {
          error: 'Missing Required Fields',
          message: 'Request must include: type, topic, and tone',
          code: 'MISSING_REQUIRED_FIELDS',
          required_fields: ['type', 'topic', 'tone']
        },
        { status: 400 }
      );
    }

    // Return "coming soon" response
    return NextResponse.json(
      {
        status: 'coming_soon',
        message: 'This API endpoint is coming soon! We\'re working hard to bring you the best AI prompt generation API.',
        request_received: {
          type,
          topic,
          tone,
          timestamp: new Date().toISOString(),
          request_id: generateRequestId()
        },
        next_steps: [
          'Join our waitlist to get early access',
          'Follow us for updates on launch date',
          'Contact us for partnership opportunities'
        ],
        contact: {
          email: 'jainjayesh799@gmail.com',
          waitlist: 'mailto:jainjayesh799@gmail.com?subject=API%20Waitlist%20Request',
          partnership: 'mailto:jainjayesh799@gmail.com?subject=API%20Partnership%20Inquiry'
        },
        estimated_launch: 'Q1 2024',
        features_planned: [
          'Multiple prompt types (blog_post, social_media, product_description, etc.)',
          'Custom tone and style options',
          'Rate limiting and usage tracking',
          'SDKs for multiple programming languages',
          'Enterprise-grade reliability and support'
        ]
      },
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'X-API-Version': '1.0.0',
          'X-Status': 'coming-soon'
        }
      }
    );

  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      {
        error: 'Internal Server Error',
        message: 'An unexpected error occurred. Please try again later.',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}

// Helper function to generate a unique request ID
function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'This endpoint only accepts POST requests',
      code: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'This endpoint only accepts POST requests',
      code: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'This endpoint only accepts POST requests',
      code: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
} 