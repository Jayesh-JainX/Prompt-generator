# PromptCue Frontend

Modern, responsive frontend application for AI prompt generation built with Next.js 15 and TypeScript.

## 🚀 Features

- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 🌙 **Theme Support**: Dark and light mode with smooth transitions
- 📱 **Mobile Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Next.js 15 App Router
- 🔄 **Real-time Generation**: Streaming prompt generation
- 📋 **Copy to Clipboard**: One-click prompt copying
- 🎯 **Type Safety**: Full TypeScript implementation
- 🎨 **Custom Components**: Reusable UI components with shadcn/ui

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Backend server running (see backend README)

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_APP_NAME=PromptCue
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at http://localhost:3000

## 🏗️ Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes (if any)
│   ├── cookies/           # Cookies policy page
│   ├── features/          # Features page
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── favicon.ico        # App icon
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── not-found.tsx      # 404 page
│   ├── page.tsx           # Home page
│   ├── robots.ts          # SEO robots
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx     # Button component
│   │   └── toggle.tsx     # Toggle component
│   ├── copy-button.tsx    # Copy to clipboard component
│   ├── DotGrid.tsx        # Background pattern component
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Header component
│   └── theme-provider.tsx # Theme context provider
├── lib/                   # Utility libraries
│   └── utils.ts           # Utility functions
├── public/                # Static assets
│   ├── ai.png             # AI illustration
│   ├── light-next.png     # Light mode Next.js logo
│   ├── logo.png           # App logo
│   ├── moon.png           # Moon icon
│   ├── next.png           # Next.js logo
│   └── sun.png            # Sun icon
├── utils/                 # API utilities
│   └── api.ts             # API client functions
├── components.json        # shadcn/ui configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Design System

### Brand Colors

- **Primary**: Sarya Purple (#8C5BAA)
- **Accent**: Sunshine Yellow (#F4C542)
- **Secondary**:
  - Friendly Red (#D9534F) - used sparingly
  - Grass Green (#7CAF3F)
  - Sky Blue (#58AEDA)
- **Neutral**:
  - Soft Lavender (#D9CCEC) - card backgrounds
  - Muted Beige (#FAF5ED) - page background
  - Deep Brown (#4A3C2D) - text
  - Cloud White (#F7F9FB) - content cards/modals

### Design Principles

- High contrast without pure black/white
- Calming base with joyful accents
- Consistent rounded buttons with icon+text
- Modern, clean typography

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Key Technologies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Modern component library
- **Lucide React**: Beautiful icons
- **next-themes**: Theme management

## 📱 Pages

### Home Page (`/`)

- Main prompt generation interface
- Theme toggle
- Copy to clipboard functionality
- Responsive design

### About Page (`/about`)

- Project information
- Technology stack
- Team details

### Features Page (`/features`)

- Feature showcase
- Use cases
- Benefits

### Legal Pages

- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)
- Cookie Policy (`/cookies`)

## 🔧 Configuration

### Next.js Configuration

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

## 🔌 API Integration

The frontend communicates with the backend through the `utils/api.ts` file:

```typescript
// Example API calls
export const generatePrompt = async (text: string) => {
  const response = await fetch(`${API_BASE_URL}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return response.json();
};
```

## 🎯 Key Components

### ThemeProvider

Manages dark/light theme state across the application.

### CopyButton

Provides one-click copying functionality with visual feedback.

### Header

Navigation and theme toggle component.

### Footer

Site links and information.

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**

   - Ensure all dependencies are installed
   - Check TypeScript types
   - Verify Next.js configuration

2. **API Connection Errors**

   - Verify backend server is running
   - Check `NEXT_PUBLIC_API_URL` in `.env.local`
   - Ensure CORS is properly configured

3. **Theme Issues**

   - Check `theme-provider.tsx` configuration
   - Verify Tailwind CSS setup
   - Clear browser cache

4. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check PostCSS configuration
   - Verify component imports

## 📊 Performance

### Optimization Features

- **Next.js 15**: Latest performance optimizations
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting
- **Static Generation**: Where possible
- **Bundle Analysis**: Built-in bundle analyzer

### Best Practices

- Use Next.js Image component for images
- Implement proper loading states
- Optimize component re-renders
- Use TypeScript for type safety

## 🔒 Security

- **Environment Variables**: Properly configured for client-side
- **API Security**: Secure communication with backend
- **Input Validation**: Client-side validation
- **XSS Protection**: Built-in Next.js protections

---

**Built with Next.js 15, TypeScript, and Tailwind CSS**
