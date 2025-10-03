import Link from "next/link";

// Enhanced icon component
const Sparkles = ({ className }: { className?: string }) => (
  <span className={className}>✨</span>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white/60 to-slate-50/60 dark:from-slate-900/60 dark:to-slate-800/60 backdrop-blur-xl border-t border-slate-200/60 dark:border-slate-700/60 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-xl font-bold text-slate-800 dark:text-slate-200">
                PromptCue
              </span>
              <Sparkles className="w-5 h-5 text-purple-500" />
            </Link>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Transform your ideas into perfect prompts with our free AI-powered
              generator. No signup required. Used by 10,000+ creators worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://x.com/Jain_Jayesh_"
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              >
                Twitter
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jayesh--jain/"
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                href="https://github.com/Jayesh-JainX"
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                >
                  Prompt Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-8 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2025 PromptCue. All rights reserved. Empowering creativity through
            advanced AI prompt generation.
          </p>
        </div>
      </div>
    </footer>
  );
}
