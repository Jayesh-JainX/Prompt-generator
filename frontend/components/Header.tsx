"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/toogle";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");
  const { theme, resolvedTheme } = useTheme();

  // Theme detection and mounting logic
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Use resolvedTheme if available, otherwise fall back to theme detection
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

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <header className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-700/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative group">
              <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/25 group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="PromptCue Logo"
                  width={40}
                  height={40}
                  className="sm:w-14 sm:h-14"
                />
              </div>
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-lg opacity-20 group-hover:opacity-30 animate-pulse transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                PromptCue
              </h1>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-widest uppercase hidden sm:block">
                AI Prompt Studio
              </p>
            </div>
          </Link>

          {/* Mobile Status Indicator */}
          <div className="flex sm:hidden items-center space-x-2">
            <ThemeToggle />
            <div className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-xs font-semibold text-green-700 dark:text-green-300">
                AI Active
              </span>
            </div>
          </div>

          {/* Desktop Status Indicator */}
          <div className="hidden sm:flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                AI Neural Network Active
              </span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              v1.0
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
