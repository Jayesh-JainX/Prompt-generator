# PromptCue - AI Prompt Generator

A modern, AI-powered prompt generator that transforms your ideas into detailed, professional prompts using Hugging Face's advanced language models.

![Perfect Prompt for AI](./frontend/public/og-image.png)

## 🚀 Features

- 🤖 **AI-Powered Generation**: Uses Hugging Face's Meta Llama model for high-quality prompt generation
- ⚡ **Lightning Fast**: Generate professional prompts in seconds
- 🎨 **Beautiful UI**: Modern, responsive design with dark/light theme support
- 🔒 **Secure**: Rate limiting and CORS protection
- 💾 **Caching**: Intelligent caching to improve performance
- 📱 **Responsive**: Works perfectly on desktop and mobile devices
- 🎯 **Precise Results**: Detailed, specific prompts tailored to your needs
- 🌙 **Theme Support**: Dark and light mode with smooth transitions
- 📋 **Copy to Clipboard**: One-click prompt copying functionality

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **shadcn/ui** - Modern UI components

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **Hugging Face Inference** - AI model integration
- **Rate Limiting** - API protection and abuse prevention
- **CORS** - Cross-origin resource sharing security

## 📋 Prerequisites

- Node.js 18+
- npm or yarn package manager
- Hugging Face API token

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Jayesh-JainX/Prompt-generator.git
cd prompt-generator
```

### 2. Backend Setup

```bash
cd backend
npm install
```

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

**Get your Hugging Face token:**

1. Go to https://huggingface.co/settings/tokens
2. Create a new token with read permissions
3. Add it to your `.env` file

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

### 4. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 📚 API Documentation

### POST /api/generate

Generate a prompt from user input.

**Request Body:**

```json
{
  "text": "A futuristic cityscape with flying cars"
}
```

**Response:**

```json
{
  "prompt": "Create a stunning futuristic cityscape featuring sleek flying cars soaring through neon-lit skyscrapers, with a cyberpunk aesthetic and high-resolution digital art style.",
  "cached": false,
  "timestamp": 1703123456789
}
```

### POST /api/generate/stream

Generate a prompt with streaming response.

### GET /api/health

Health check endpoint for monitoring.

## ⚙️ Configuration

### Rate Limiting

- **Window**: 1 minute
- **Max Requests**: 10 per IP address
- **Response**: 429 status with retry information

### Caching

- **Duration**: 24 hours
- **Storage**: In-memory Map
- **Cleanup**: Automatic removal of expired entries

### Security

- **CORS**: Restricted to frontend URL
- **Input Validation**: Text length and type checking
- **Error Handling**: Comprehensive error responses

## 🔧 Environment Variables

### Backend (.env)

| Variable                  | Description             | Default               |
| ------------------------- | ----------------------- | --------------------- |
| `HF_TOKEN`                | Hugging Face API token  | Required              |
| `PORT`                    | Server port             | 3001                  |
| `NODE_ENV`                | Environment mode        | development           |
| `FRONTEND_URL`            | Frontend URL for CORS   | http://localhost:3000 |
| `RATE_LIMIT_WINDOW_MS`    | Rate limit window (ms)  | 60000                 |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window | 10                    |
| `CACHE_DURATION_HOURS`    | Cache duration in hours | 24                    |

## 💡 Usage Guide

1. **Enter Your Idea**: Describe what you want to create in the text area
2. **Generate Prompt**: Click the "Generate Prompt" button
3. **Copy Result**: Use the copy button to copy the generated prompt
4. **Use Anywhere**: Paste the prompt into any AI model or image generator

## 📝 Examples

### Input

```
A cat playing with a ball of yarn
```

### Generated Prompt

```
Create a charming illustration of a playful cat engaging with a colorful ball of yarn, capturing the feline's natural curiosity and playful energy in a warm, inviting art style suitable for children's books or greeting cards.
```

### Input

```
A futuristic cityscape with flying cars
```

### Generated Prompt

```
Create a stunning futuristic cityscape featuring sleek flying cars soaring through neon-lit skyscrapers, with a cyberpunk aesthetic and high-resolution digital art style.
```

## 🏗️ Project Structure

```
prompt-generator/
├── backend/                 # Express.js API server
│   ├── index.js            # Main server file
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend documentation
├── frontend/               # Next.js application
│   ├── app/                # App Router pages
│   ├── components/         # React components
│   ├── lib/                # Utility functions
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend documentation
└── README.md               # Main project documentation
```

## 🐛 Troubleshooting

### Common Issues

1. **Hugging Face Token Error**

   - Ensure your token is valid and has read permissions
   - Check that the token is correctly set in the `.env` file

2. **CORS Errors**

   - Verify the `FRONTEND_URL` in your backend `.env` file
   - Ensure both frontend and backend are running

3. **Rate Limiting**

   - The API allows 10 requests per minute per IP
   - Wait for the rate limit window to reset

4. **Port Conflicts**
   - Backend runs on port 3001 by default
   - Frontend runs on port 3000 by default
   - Change ports in `.env` files if needed

## 📞 Support

For support and questions:

- Open an issue in the repository
- Check the troubleshooting section above
- Review the API documentation

---

**Built with ❤️ using Next.js, Node.js, and Hugging Face AI**
