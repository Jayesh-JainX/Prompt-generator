# PromptCue Backend

AI-powered prompt generator backend using Hugging Face's advanced language models with Express.js.

## 🚀 Features

- ⚡ **Streaming Responses**: Real-time prompt generation with streaming
- 🔒 **Rate Limiting**: 10 requests per minute per IP
- 💾 **Intelligent Caching**: 24-hour cache for improved performance
- 🛡️ **CORS Protection**: Secure cross-origin requests
- 📊 **Health Monitoring**: Built-in health check endpoint
- 🔄 **Multiple Endpoints**: Text and image-based prompt generation

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Hugging Face API token

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file in the backend directory:

```env
HF_TOKEN=your_huggingface_token_here
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=10
CACHE_DURATION_HOURS=24
```

### 3. Hugging Face Token Setup

1. Go to https://huggingface.co/settings/tokens
2. Create a new token with read permissions
3. Add the token to your `.env` file

### 4. Start Development Server

```bash
npm run dev
```

The server will start on http://localhost:5000

## 📚 API Endpoints

### POST /api/generate

Generate a prompt from text input (non-streaming).

**Request:**

```json
{
  "text": "A futuristic cityscape with flying cars"
}
```

**Response:**

```json
{
  "prompt": "Create a stunning futuristic cityscape...",
  "cached": false,
  "timestamp": 1703123456789
}
```

### POST /api/generate/stream

Generate a prompt with streaming response.

**Request:**

```json
{
  "text": "A cat playing with yarn"
}
```

**Response:** Server-Sent Events stream

### GET /api/health

Health check endpoint for monitoring.

**Response:**

```json
{
  "status": "healthy",
  "timestamp": 1703123456789,
  "uptime": 3600
}
```

## 🔧 Configuration

### Rate Limiting

- **Window**: 60 seconds
- **Max Requests**: 10 per IP address
- **Headers**: Includes retry-after information

### Caching

- **Duration**: 24 hours (configurable)
- **Storage**: In-memory Map
- **Cleanup**: Automatic expiration

### Security

- **CORS**: Configured for frontend URL
- **Input Validation**: Text length and type checking
- **Error Handling**: Comprehensive error responses

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm start            # Start production server
npm test             # Run tests (if configured)
```

### Project Structure

```
backend/
├── index.js              # Main server file
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
├── test.js              # Hugging Face connection test
└── README.md            # This file
```

## 🔍 Environment Variables

| Variable                  | Description             | Default               |
| ------------------------- | ----------------------- | --------------------- |
| `HF_TOKEN`                | Hugging Face API token  | Required              |
| `PORT`                    | Server port             | 3001                  |
| `NODE_ENV`                | Environment mode        | development           |
| `FRONTEND_URL`            | Frontend URL for CORS   | http://localhost:3000 |
| `RATE_LIMIT_WINDOW_MS`    | Rate limit window (ms)  | 60000                 |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window | 10                    |
| `CACHE_DURATION_HOURS`    | Cache duration in hours | 24                    |

## 📝 Usage Examples

### Text Prompt Generation

```bash
curl -X POST http://localhost:3001/api/generate/stream \
  -H "Content-Type: application/json" \
  -d '{"text": "A futuristic cityscape with flying cars"}'
```

### Health Check

```bash
curl http://localhost:3001/api/health
```

## 🐛 Troubleshooting

### Common Issues

1. **Hugging Face Connection Error**

   - Verify your token is valid and has read permissions
   - Check network connectivity
   - Run `node test.js` to test connection

2. **CORS Errors**

   - Ensure `FRONTEND_URL` is correctly set in `.env`
   - Verify frontend is running on the specified URL

3. **Rate Limiting**

   - API allows 10 requests per minute per IP
   - Check response headers for retry-after information

4. **Port Already in Use**
   - Change `PORT` in `.env` file
   - Kill existing processes on port 3001

## 📊 Monitoring

The backend includes built-in monitoring:

- **Health Check**: `/api/health` endpoint
- **Rate Limiting**: Request tracking per IP
- **Error Logging**: Comprehensive error responses
- **Performance**: Response time tracking

## 🔒 Security Features

- **Input Validation**: Sanitizes and validates all inputs
- **Rate Limiting**: Prevents API abuse
- **CORS Protection**: Secure cross-origin requests
- **Error Handling**: No sensitive information in error responses

---

**Built with Express.js and Hugging Face AI**
