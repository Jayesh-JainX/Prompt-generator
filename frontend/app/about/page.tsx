import type { Metadata } from "next";
import { Users, Target, Heart, Zap, Award, Globe } from "lucide-react";
import Link from "next/link";
import Squares from "@/components/Squares";

export const metadata: Metadata = {
  title: "About PromptCue - Free AI Prompt Generator | Our Mission & Story",
  description:
    "Learn about PromptCue's mission to democratize AI prompt creation. Discover our story, values, and commitment to helping creators worldwide generate professional prompts for free.",
  keywords:
    "about PromptCue, AI prompt generator story, free prompt creation, democratizing AI, creator tools",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jayesh Jain",
      role: "Founder & CEO",
      bio: "Former AI researcher of PrepBix, passionate about making AI tools accessible to everyone.",
      avatar: "👨‍💻",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Beginning",
      description:
        "Started as a weekend project to help friends create better AI prompts",
    },
    {
      year: "2024",
      title: "First 1,000 Users",
      description:
        "Reached our first milestone of 1,000 active creators using PromptCue",
    },
    {
      year: "2025",
      title: "10,000+ Creators",
      description:
        "Now serving over 10,000 creators worldwide with our free platform",
    },
  ];

  return (
    <div className="relative">
      {/* Background Squares - positioned to scroll with content */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Squares
          speed={0.3}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(139, 92, 246, 0.15)"
          hoverFillColor="rgba(139, 92, 246, 0.4)"
        />
      </div>

      {/* Content overlay with proper z-index */}
      <div className="relative z-10 min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="flex flex-wrap items-center justify-center text-5xl sm:text-6xl font-bold text-slate-800 dark:text-slate-200 mb-4 text-center">
              <span className="pb-2">About</span>
              <span className="pl-3 pb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                PromptCue
              </span>
            </h1>

            <p className="sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize AI creativity. Every creator
              deserves access to powerful tools, regardless of their budget or
              technical background.
            </p>
          </div>

          <div className="space-y-20">
            {/* Mission Section */}
            <section className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  In 2023, we noticed something troubling: while AI tools were
                  becoming incredibly powerful, many creators struggled to
                  unlock their full potential. The problem wasn't the AI
                  itself—it was the prompts.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  We built PromptCue to solve this exact problem. Our platform
                  helps creators of all levels generate professional, detailed
                  prompts that actually work. And we made it completely free,
                  because we believe creativity shouldn't have a price tag.
                </p>
                <div className="flex items-center space-x-4">
                  <Target className="w-6 h-6 text-indigo-500" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    Empowering 10,000+ creators worldwide
                  </span>
                </div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                      10K+
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      Active Creators
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      1M+
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      Prompts Generated
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                      100%
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      Free Forever
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                      24/7
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      Available
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Story Section */}
            <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
                Our Story
              </h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Values Section */}
            <section>
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">
                What We Believe In
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                    Accessibility First
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    We believe powerful tools should be accessible to everyone.
                    That's why PromptCue is completely free, with no hidden
                    costs or premium tiers.
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                    Quality Over Everything
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    We're obsessed with quality. Every prompt we generate is
                    crafted to be professional, detailed, and effective for
                    real-world use.
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                    Community Driven
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Our community of creators inspires everything we build. We
                    listen, learn, and evolve based on real user feedback and
                    needs.
                  </p>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section className="bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-sm rounded-3xl p-12 text-white border border-white/20">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Meet Our Team
              </h2>
              <div className="grid md:grid-cols-1 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-indigo-100 mb-4">{member.role}</p>
                    <p className="text-indigo-200 leading-relaxed lg:w-96 mx-auto">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                Start creating professional prompts today. No signup required.
                Completely free. Join thousands of creators who trust PromptCue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                >
                  Start Creating Now
                </Link>
                <Link
                  href="/features"
                  className="inline-block border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-4 px-8 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  Explore Features
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
