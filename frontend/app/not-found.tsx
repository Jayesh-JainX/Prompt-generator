import Link from "next/link";
import { Rabbit } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen py-10 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Large Rabbit Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <Rabbit className="w-36 h-36 sm:w-48 sm:h-48 text-indigo-500 dark:text-indigo-400" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl sm:text-9xl font-bold text-slate-800 dark:text-slate-200 mb-6">
          404
        </h1>

        {/* Main Message */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
          Looks like this page hopped away! The content you're looking for might
          have been moved, deleted, or never existed. Let's get you back on
          track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            Go Back Home
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Looking for something specific?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/about"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              About PromptCue
            </Link>
            <Link
              href="/privacy"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              Terms of Service
            </Link>
            <a
              href="mailto:jainjayesh799@gmail.com"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              Contact Support
            </a>
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            🐰 Don't worry, even rabbits get lost sometimes!
          </p>
        </div>
      </div>
    </div>
  );
}
