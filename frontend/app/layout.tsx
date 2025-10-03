import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppWrapper from "@/components/AppWrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "PromptCue - Free AI Prompt Generator | Create Professional Prompts Instantly",
  description:
    "Transform your ideas into perfect prompts with PromptCue. Free AI prompt generator with no signup required. Create professional, detailed prompts for content creation, creative writing, business communication, and more. Used by 10,000+ creators worldwide.",
  keywords:
    "AI prompt generator, free prompt creator, content creation, creative writing, business communication, AI tools, prompt engineering, content marketing, social media content, blog writing",
  authors: [{ name: "PromptCue Team" }],
  creator: "PromptCue",
  publisher: "PromptCue",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://prompt-cue.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PromptCue - Free AI Prompt Generator",
    description:
      "Create professional, detailed prompts instantly. No signup required. Completely free. Transform your creative ideas into perfect prompts.",
    url: "https://prompt-cue.vercel.app",
    siteName: "PromptCue",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PromptCue - AI Prompt Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptCue - Free AI Prompt Generator",
    description:
      "Create professional, detailed prompts instantly. No signup required. Completely free.",
    images: ["/og-image.png"],
    creator: "Jayesh Jain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="PromptCue" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#2299DD" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          <AppWrapper>
            <Header />
            {children}
            <Footer />
          </AppWrapper>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
