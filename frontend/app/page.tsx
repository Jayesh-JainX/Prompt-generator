"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { generatePromptStream } from "@/utils/api";
import DotGrid from "@/components/DotGrid";
import Link from "next/link";
import Image from "next/image";
import { CircleCheck, CopyIcon } from "lucide-react";

// Icon components
const Sparkles = ({ className }: { className?: string }) => (
  <span className={className}>✨</span>
);
const Loader2 = ({ className }: { className?: string }) => (
  <span className={`${className} animate-spin`}>⏳</span>
);

const Lightbulb = ({ className }: { className?: string }) => (
  <span className={className}>💡</span>
);
const Target = ({ className }: { className?: string }) => (
  <span className={className}>🎯</span>
);
const Palette = ({ className }: { className?: string }) => (
  <span className={className}>🎨</span>
);
const Brain = ({ className }: { className?: string }) => (
  <span className={className}>🧠</span>
);
const Rocket = ({ className }: { className?: string }) => (
  <span className={className}>🚀</span>
);
const Star = ({ className }: { className?: string }) => (
  <span className={className}>⭐</span>
);
const Shield = ({ className }: { className?: string }) => (
  <span className={className}>🛡️</span>
);
const Clock = ({ className }: { className?: string }) => (
  <span className={className}>⏰</span>
);

const Globe = ({ className }: { className?: string }) => (
  <span className={className}>🌍</span>
);

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const { theme, resolvedTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (resolvedTheme) {
        setCurrentTheme(resolvedTheme as "light" | "dark");
      } else if (theme === "system") {
        const isDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setCurrentTheme(isDark ? "dark" : "light");
      } else if (theme === "light" || theme === "dark") {
        setCurrentTheme(theme);
      }
    }
  }, [theme, resolvedTheme, mounted]);

  const handleGenerate = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text to generate a prompt");
      return;
    }

    setIsLoading(true);
    setError("");
    setGeneratedPrompt("");

    try {
      await generatePromptStream({ text: inputText }, (chunk) => {
        if (chunk.error) {
          setError(chunk.error);
          setIsLoading(false);
          return;
        }

        if (chunk.content) {
          setGeneratedPrompt((prev) => prev + chunk.content);
        }

        if (chunk.done) {
          setIsLoading(false);
          if (chunk.fullPrompt) {
            setGeneratedPrompt(chunk.fullPrompt);
          }
        }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (generatedPrompt) {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced AI Engine",
      description:
        "Powered by cutting-edge language models for superior prompt quality",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Crafting",
      description:
        "Context-aware prompts tailored to your specific needs and industry",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Generate professional prompts in seconds, not minutes",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Intelligence",
      description:
        "AI that understands creativity and enhances your artistic vision",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const useCases = [
    {
      title: "Content Creation",
      description: "Blog posts, social media content, and marketing copy",
      icon: "📝",
    },
    {
      title: "Creative Writing",
      description: "Stories, scripts, and creative narratives",
      icon: "✍️",
    },
    {
      title: "Business Communication",
      description: "Emails, proposals, and professional documents",
      icon: "💼",
    },
    {
      title: "Academic Writing",
      description: "Research papers, essays, and academic content",
      icon: "🎓",
    },
    {
      title: "Technical Documentation",
      description: "User guides, manuals, and technical content",
      icon: "🔧",
    },
    {
      title: "Creative Projects",
      description: "Art descriptions, design briefs, and creative direction",
      icon: "🎨",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      content:
        "PromptCue has revolutionized my content creation process. The prompts are incredibly detailed and professional.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Director",
      content:
        "Our team saves hours every week using PromptCue. The quality of generated prompts is consistently excellent.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Creative Writer",
      content:
        "I love how PromptCue understands context and creates prompts that truly capture my creative vision.",
      rating: 5,
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 relative">
      {/* DotGrid Background - Updated to scroll with content */}
      <div
        className="absolute inset-0 w-full overflow-hidden pointer-events-none z-0"
        style={{
          minHeight: "100%",
          height: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor={currentTheme === "dark" ? "#1e293b" : "#cbd5e1"}
          activeColor={currentTheme === "dark" ? "#8b5cf6" : "#6366f1"}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="text-center mb-16 sm:mb-24">
            <div className="relative">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block mb-2">Transform Your Ideas Into</span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                  Perfect Prompts
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl -z-10 animate-pulse"></div>
                </span>
              </h1>
            </div>
            <p className="sm:text-xl relative text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium bg-transparent rounded-lg py-1 mb-8">
              Create professional, detailed prompts that unlock the full
              potential of AI tools. No signup required. Completely free. Start
              crafting better prompts today.
            </p>

            {/* Trust Indicators */}
            <div className="relative flex flex-wrap justify-center items-center gap-8 text-sm text-slate-700 dark:text-slate-50">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 mb-1" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 mb-1" />
                <span>No Signup Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 mb-1" />
                <span>Used by 10,000+ creators</span>
              </div>
            </div>
          </div>

          {/* Main Generator Section */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-20 sm:mb-28">
            {/* Input Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200 dark:border-slate-700">
                  <div className="mb-8">
                    <label
                      htmlFor="input"
                      className="block text-lg font-bold text-slate-800 dark:text-slate-200 mb-4"
                    >
                      <Lightbulb className="inline w-5 h-5 mr-2 text-amber-500" />
                      Describe Your Creative Vision
                    </label>
                    <div className="relative">
                      <textarea
                        id="input"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Tell us what you want to create. For example: A blog post about sustainable living, a social media caption for a new product launch, or a creative story about time travel..."
                        className="w-full h-48 px-6 py-5 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-2 border-slate-200 dark:border-slate-600 rounded-2xl resize-none focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300 text-base leading-relaxed shadow-inner scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-transparent hover:scrollbar-thumb-slate-500 dark:scrollbar-thumb-slate-500 dark:hover:scrollbar-thumb-slate-400"
                        style={{
                          scrollbarWidth: "thin",
                          scrollbarColor: "rgb(148 163 184) transparent",
                        }}
                        disabled={isLoading}
                        maxLength={1000}
                      />
                      <div className="absolute bottom-4 right-4 flex items-center space-x-3">
                        <div className="text-sm text-slate-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-600">
                          {inputText.length}/1000
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={isLoading || !inputText.trim()}
                    className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center space-x-4 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span className="text-lg">
                          Crafting Your Perfect Prompt...
                        </span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        <span className="text-lg">Generate Perfect Prompt</span>
                        <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="mt-6 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-5">
                      <p className="text-red-700 dark:text-red-400 font-semibold">
                        {error}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Arrow Section */}
            <div className="flex items-center justify-center w-full lg:w-auto py-2 lg:py-0">
              <Image
                src={currentTheme === "light" ? "/next.png" : "/light-next.png"}
                alt="Arrow"
                width={100}
                height={100}
                className="mx-auto transform transition-all duration-500 ease-in-out rotate-90 sm:rotate-0 hover:scale-110 animate-pulse"
              />
            </div>

            {/* Output Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 flex items-center">
                      <Target className="w-5 h-5 mr-4 text-emerald-500 mb-2" />
                      Generated Prompt
                    </h3>
                    {generatedPrompt && (
                      <button
                        onClick={handleCopy}
                        className="flex items-center space-x-2 text-sm font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600"
                      >
                        {copied ? (
                          <>
                            <CircleCheck className="w-4 h-4 text-green-500 " />
                            <span className="text-green-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <CopyIcon className="w-4 h-4" />
                            <span>
                              Copy{" "}
                              <span className="hidden sm:inline">Prompt</span>
                            </span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {generatedPrompt ? (
                    <div
                      className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-600 shadow-inner h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-transparent hover:scrollbar-thumb-slate-500 dark:scrollbar-thumb-slate-500 dark:hover:scrollbar-thumb-slate-400"
                      style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "rgb(148 163 184) transparent",
                      }}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                          Ready for Use
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-600"></div>
                      </div>
                      <p className="text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap text-base font-medium">
                        {generatedPrompt}
                      </p>
                    </div>
                  ) : (
                    <div className="px-2 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-600 h-72 flex flex-col items-center justify-center text-center">
                      <div className="relative mb-6">
                        <Sparkles className="w-16 h-16 text-slate-300 dark:text-slate-600" />
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-semibold text-base mb-2">
                        Your AI-crafted prompt will appear here
                      </p>
                      <p className="text-slate-500 dark:text-slate-500 text-sm">
                        Share your creative vision above to unlock the magic
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="relative mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-12 sm:p-16 shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200 dark:border-slate-700">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                  Why Choose PromptCue?
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                  Experience the future of AI-powered creativity with
                  cutting-edge features designed for modern creators
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 transform"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-lg"></div>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                    >
                      <div className="text-white text-2xl">{feature.icon}</div>
                    </div>
                    <h4 className="font-bold text-xl mb-4 text-slate-800 dark:text-slate-200">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                Perfect for Every Creative Need
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Whether you're a content creator, business professional, or
                creative artist, PromptCue has you covered
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="font-bold text-xl mb-3 text-slate-800 dark:text-slate-200">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                Loved by Creators Worldwide
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Join thousands of satisfied users who have transformed their
                creative process
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 sm:p-16 text-center text-white">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Transform Your Creativity?
              </h2>
              <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                Start creating professional prompts in seconds. No signup
                required. Completely free. Join thousands of creators who trust
                PromptCue.
              </p>
              <Link
                href={"/"}
                className="inline-block bg-white text-indigo-600 font-bold py-4 px-8 rounded-2xl hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start Creating Now - It's Free
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
