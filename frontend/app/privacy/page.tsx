import type { Metadata } from "next";
import { Shield, Lock, Eye, Users, RefreshCw, Mail } from "lucide-react";
import Link from "next/link";
import Squares from "@/components/Squares";

export const metadata: Metadata = {
  title: "Privacy Policy - PromptCue | How We Protect Your Data",
  description:
    "Learn how PromptCue protects your privacy and handles your data. Our commitment to transparency and data security in our free AI prompt generator service.",
  keywords:
    "privacy policy, data protection, AI prompt generator privacy, user data security",
};

export default function PrivacyPage() {
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
            <span className="pr-3 pb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Privacy
            </span>
            <span className="pb-2">Policy</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Your privacy is our priority. We believe in complete transparency
            about how we handle your data.
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
              🎯 Quick Summary
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  Your content is never stored permanently
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  No tracking or personal data collection
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  No account creation required
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  Data deleted after processing
                </span>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Our Commitment to Privacy
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              At PromptCue, we built our service with privacy in mind from day
              one. We believe you shouldn't have to sacrifice your privacy to
              use powerful AI tools. That's why we designed our platform to be
              completely private by default.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Information You Provide
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  When you use PromptCue, you may provide us with text content
                  that you want to transform into prompts. This content is
                  processed to generate AI prompts but is not stored permanently
                  on our servers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Automatically Collected Information
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  We may collect certain information automatically, including
                  your IP address, browser type, device information, and usage
                  patterns to improve our service and ensure security.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed">
              <li>To provide and improve our AI prompt generation service</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To ensure the security and integrity of our platform</li>
              <li>
                To communicate with you about our services (if you choose to
                provide contact information)
              </li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Data Security
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Data Retention
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We retain your information only for as long as necessary to
              provide our services and fulfill the purposes outlined in this
              privacy policy. Generated prompts are not stored permanently and
              are deleted after processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Third-Party Services
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We may use third-party services for analytics, hosting, and other
              operational purposes. These services have their own privacy
              policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Your Rights
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal data, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed">
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate data</li>
              <li>The right to erasure of your data</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Cookies
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We may use cookies and similar technologies to enhance your
              experience, analyze usage, and provide personalized content. You
              can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Children's Privacy
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Our service is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
