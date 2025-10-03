"use client";

import { useState, useEffect } from "react";

export default function LoadingSpinner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      // Wait for fade animation to complete before hiding
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center transition-opacity duration-300 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center max-w-sm mx-auto">
        {/* Loading Spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-slate-200 dark:border-slate-700 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-indigo-500 rounded-full animate-spin"></div>
            {/* Inner spinner for more visual appeal */}
            <div className="absolute inset-3 border-2 border-slate-100 dark:border-slate-800 rounded-full"></div>
            <div
              className="absolute inset-3 border-2 border-transparent border-t-blue-400 rounded-full animate-spin"
              style={{
                animationDirection: "reverse",
                animationDuration: "0.8s",
              }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-slate-600 dark:text-slate-400 text-lg font-medium mb-4">
          Initializing AI workspace...
        </p>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 0.2, 0.4].map((delay, index) => (
            <div
              key={index}
              className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-bounce"
              style={{
                animationDelay: `${delay}s`,
                animationDuration: "1.4s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes lifeline-progress {
          0% {
            transform: scaleX(0.3);
            opacity: 0.7;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleX(0.3);
            opacity: 0.7;
          }
        }

        @keyframes lifeline-shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
      `}</style>
    </div>
  );
}
