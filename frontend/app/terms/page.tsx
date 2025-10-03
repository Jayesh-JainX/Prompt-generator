import type { Metadata } from "next";
import {
  FileText,
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Squares from "@/components/Squares";

export const metadata: Metadata = {
  title: "Terms of Service - PromptCue | Usage Terms & Conditions",
  description:
    "Read PromptCue's terms of service and usage conditions. Understand the rules and guidelines for using our free AI prompt generator service.",
  keywords:
    "terms of service, usage terms, AI prompt generator terms, service conditions",
};

export default function TermsPage() {
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
            <span className="pb-2">Terms of</span>
            <span className="pl-3 pb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Simple, fair terms for using our free AI prompt generator service.
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
              📋 Quick Summary
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  Free to use, no hidden costs
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  No account creation required
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  Use responsibly and legally
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  We protect your privacy
                </span>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              By using PromptCue, you agree to these simple terms. We've kept
              them straightforward and fair. If you don't agree with any part of
              these terms, please don't use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Description of Service
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              PromptCue is a free AI-powered prompt generation service that
              helps users create professional, detailed prompts for various
              creative and professional purposes. The service is provided "as
              is" and we make no warranties about its availability or
              functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              User Responsibilities
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Acceptable Use
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  You agree to use the Service only for lawful purposes and in
                  accordance with these Terms. You are responsible for ensuring
                  that your use of the Service complies with all applicable
                  laws.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Prohibited Activities
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <li>
                    Using the Service to generate harmful, offensive, or illegal
                    content
                  </li>
                  <li>Attempting to reverse engineer or hack the Service</li>
                  <li>
                    Using automated systems to access the Service excessively
                  </li>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Impersonating others or providing false information</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Intellectual Property
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Our Rights
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The Service and its original content, features, and
                  functionality are owned by PromptCue and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property laws.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Your Rights
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  You retain ownership of any content you submit to the Service.
                  By using the Service, you grant us a limited license to
                  process your content solely for the purpose of providing the
                  prompt generation service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Disclaimers
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The Service is provided on an "as is" and "as available" basis. We
              make no warranties, express or implied, regarding the Service,
              including but not limited to warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              In no event shall PromptCue be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Service Availability
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We strive to maintain the Service's availability but do not
              guarantee uninterrupted access. We may temporarily suspend or
              discontinue the Service for maintenance, updates, or other reasons
              without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Privacy
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy,
              which also governs your use of the Service, to understand our
              practices regarding the collection and use of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Termination
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We may terminate or suspend your access to the Service
              immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Changes to Terms
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will try to provide at least 30 days
              notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Governing Law
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of [Your
              Jurisdiction], without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Severability
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              If any provision of these Terms is held to be unenforceable or
              invalid, such provision will be changed and interpreted to
              accomplish the objectives of such provision to the greatest extent
              possible under applicable law.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
