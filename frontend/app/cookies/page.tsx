import type { Metadata } from "next";
import {
  Cookie,
  Settings,
  Shield,
  Eye,
  Clock,
  Trash2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Squares from "@/components/Squares";

export const metadata: Metadata = {
  title: "Cookie Policy - PromptCue | How We Use Cookies",
  description:
    "Learn about how PromptCue uses cookies to improve your experience. Understand what cookies we use, why we use them, and how you can control them.",
  keywords:
    "cookie policy, cookies, data tracking, privacy, AI prompt generator cookies",
};

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      type: "Essential Cookies",
      description:
        "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: [
        "Session management",
        "Security features",
        "Basic functionality",
        "Load balancing",
      ],
      duration: "Session or up to 1 year",
      icon: <Shield className="w-5 h-5" />,
      color: "emerald",
    },
    {
      type: "Analytics Cookies",
      description:
        "These cookies help us understand how visitors interact with our website by collecting anonymous information.",
      examples: [
        "Page views and navigation",
        "Popular features",
        "Error tracking",
        "Performance monitoring",
      ],
      duration: "Up to 2 years",
      icon: <Eye className="w-5 h-5" />,
      color: "blue",
    },
    {
      type: "Functional Cookies",
      description:
        "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
      examples: [
        "Language preferences",
        "Theme settings (dark/light mode)",
        "User interface preferences",
        "Feature customization",
      ],
      duration: "Up to 1 year",
      icon: <Settings className="w-5 h-5" />,
      color: "purple",
    },
    {
      type: "Performance Cookies",
      description:
        "These cookies help us improve website performance and user experience.",
      examples: [
        "Load time optimization",
        "Resource caching",
        "Bandwidth usage",
        "Server response times",
      ],
      duration: "Up to 1 year",
      icon: <Clock className="w-5 h-5" />,
      color: "orange",
    },
  ];

  const thirdPartyCookies = [
    {
      provider: "Vercel",
      purpose: "Website hosting and performance optimization",
      dataCollected: "Technical logs, performance metrics, error tracking",
      retention: "Up to 30 days",
      privacyPolicy: "https://vercel.com/legal/privacy-policy",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Background Squares - full page coverage */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <Squares
          speed={0.3}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(139, 92, 246, 0.15)"
          hoverFillColor="rgba(139, 92, 246, 0.4)"
        />
      </div>
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="flex flex-wrap items-center justify-center text-5xl sm:text-6xl font-bold text-slate-800 dark:text-slate-200 mb-4 text-center">
            <span className="pb-2">Cookie</span>
            <span className="pl-3 pb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
            We use cookies to make PromptCue work better for you. Here's
            everything you need to know about how we use them.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 dark:border-slate-700 space-y-8">
          {/* Quick Summary */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">
              🍪 What You Need to Know
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  We only use necessary and helpful cookies
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  No personal data is collected
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  You can control cookie settings
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Trash2 className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  Cookies are automatically deleted
                </span>
              </div>
            </div>
          </div>

          {/* What are Cookies */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              What Are Cookies?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Cookies are small text files that are stored on your device when
              you visit a website. They help websites remember information about
              your visit, such as your preferred language and other settings.
              This can make your next visit easier and the site more useful to
              you.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              At PromptCue, we use cookies to improve your experience,
              understand how our service is used, and make our website work
              better for everyone.
            </p>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8">
              Types of Cookies We Use
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {cookieTypes.map((cookie, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-600"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-10 h-10 bg-${cookie.color}-100 dark:bg-${cookie.color}-900/30 rounded-xl flex items-center justify-center`}
                    >
                      <div
                        className={`text-${cookie.color}-600 dark:text-${cookie.color}-400`}
                      >
                        {cookie.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                        {cookie.type}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Duration: {cookie.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {cookie.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Examples:
                    </h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, exampleIndex) => (
                        <li
                          key={exampleIndex}
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Third Party Cookies */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Third-Party Cookies
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              We work with trusted third-party services that may also place
              cookies on your device. These services help us provide and improve
              our website functionality.
            </p>
            <div className="space-y-4">
              {thirdPartyCookies.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-600"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                      {service.provider}
                    </h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      Retention: {service.retention}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">
                        Purpose:
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400">
                        {service.purpose}
                      </p>
                    </div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">
                        Data Collected:
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400">
                        {service.dataCollected}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href={service.privacyPolicy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium"
                    >
                      View Privacy Policy →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cookie Management */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Managing Your Cookie Preferences
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  Browser Settings
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  You can control and manage cookies through your browser
                  settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>View and delete existing cookies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Block cookies from specific websites</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Set preferences for different types of cookies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Clear cookies when you close your browser</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  Impact of Disabling Cookies
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  If you choose to disable cookies, some features of PromptCue
                  may not work properly:
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Theme preferences may not be saved</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Some performance optimizations may be disabled</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Analytics data may be incomplete</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Some features may require re-authentication</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Updates to This Policy
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the new policy on this page and updating the "Last
              updated" date.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
