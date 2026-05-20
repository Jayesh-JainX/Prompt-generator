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

## 💡 Usage Guide

1. **Enter Your Idea**: Describe what you want to create in the text area
2. **Generate Prompt**: Click the "Generate Prompt" button
3. **Copy Result**: Use the copy button to copy the generated prompt
4. **Use Anywhere**: Paste the prompt into any AI model or image generator

---

**Built with ❤️ using Next.js, Node.js, and Hugging Face AI**
