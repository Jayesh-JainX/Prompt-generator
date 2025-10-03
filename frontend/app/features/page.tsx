import type { Metadata } from "next";
import {
  Zap,
  Brain,
  Target,
  Palette,
  Shield,
  Clock,
  Globe,
  Users,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Star,
  Lock,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import Squares from "@/components/Squares";

export const metadata: Metadata = {
  title: "Features - PromptCue | Advanced AI Prompt Generator Capabilities",
  description:
    "Explore PromptCue's powerful features: advanced AI engine, instant generation, multiple use cases, and professional prompt creation. All completely free with no signup required.",
  keywords:
    "AI prompt generator features, free prompt creation, advanced AI engine, professional prompts, content creation tools",
};

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced AI Engine",
      description:
        "Powered by cutting-edge language models that understand context and generate professional-quality prompts.",
      benefits: [
        "Context-aware prompt generation",
        "Industry-specific optimizations",
        "Professional tone and structure",
        "Multi-language support",
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Generation",
      description:
        "Get professional prompts in seconds, not minutes. Our optimized system delivers results instantly.",
      benefits: [
        "Sub-second response times",
        "Real-time processing",
        "No waiting in queues",
        "24/7 availability",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Crafting",
      description:
        "Every prompt is carefully crafted to be specific, detailed, and effective for your exact needs.",
      benefits: [
        "Detailed and specific prompts",
        "Customizable output length",
        "Style and tone control",
        "Purpose-driven generation",
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Intelligence",
      description:
        "AI that understands creativity and helps you unlock your artistic potential with better prompts.",
      benefits: [
        "Creative enhancement",
        "Style adaptation",
        "Artistic direction",
        "Innovation support",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const useCases = [
    {
      category: "Content Creation",
      icon: "📝",
      description:
        "Blog posts, articles, social media content, and marketing copy",
      examples: [
        "Blog post outlines",
        "Social media captions",
        "Email newsletters",
        "Product descriptions",
      ],
      color: "blue",
    },
    {
      category: "Creative Writing",
      icon: "✍️",
      description:
        "Stories, scripts, creative narratives, and artistic content",
      examples: [
        "Short stories",
        "Screenplay scenes",
        "Poetry prompts",
        "Character development",
      ],
      color: "purple",
    },
    {
      category: "Business Communication",
      icon: "💼",
      description:
        "Professional emails, proposals, reports, and business documents",
      examples: [
        "Client proposals",
        "Meeting summaries",
        "Business plans",
        "Professional emails",
      ],
      color: "emerald",
    },
    {
      category: "Academic Writing",
      icon: "🎓",
      description:
        "Research papers, essays, academic content, and educational materials",
      examples: [
        "Essay outlines",
        "Research summaries",
        "Academic papers",
        "Study guides",
      ],
      color: "orange",
    },
    {
      category: "Technical Documentation",
      icon: "🔧",
      description: "User guides, manuals, technical content, and documentation",
      examples: [
        "User manuals",
        "API documentation",
        "Technical guides",
        "Process documentation",
      ],
      color: "slate",
    },
    {
      category: "Creative Projects",
      icon: "🎨",
      description:
        "Art descriptions, design briefs, creative direction, and artistic content",
      examples: [
        "Art descriptions",
        "Design briefs",
        "Creative concepts",
        "Visual storytelling",
      ],
      color: "pink",
    },
  ];

  const technicalFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Free Forever",
      description:
        "No hidden costs, no premium tiers, no credit card required. We believe creativity should be accessible to everyone.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy First",
      description:
        "Your content is processed securely and never stored permanently. We respect your privacy and data.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "No Signup Required",
      description:
        "Start creating immediately. No account creation, no email verification, no barriers to entry.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Always Available",
      description:
        "24/7 availability with 99.9% uptime. Create prompts whenever inspiration strikes.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description:
        "Built with feedback from 10,000+ creators. We evolve based on real user needs.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Continuous Updates",
      description:
        "Regular improvements and new features based on user feedback and AI advancements.",
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
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="flex flex-wrap items-center justify-center text-5xl sm:text-6xl font-bold text-slate-800 dark:text-slate-200 mb-4 text-center">
            <span className="pb-2">Powerful</span>
            <span className="pl-3 pb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Features
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Everything you need to create professional, effective prompts. All
            completely free, with no signup required. See what makes PromptCue
            the choice of 10,000+ creators.
          </p>
        </div>

        {/* Main Features */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">
            Core Capabilities
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">
            Perfect for Every Creative Need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                  {useCase.category}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 text-sm uppercase tracking-wide">
                    Examples:
                  </h4>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
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

        {/* Technical Features */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">
            Why Choose PromptCue?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <div className="text-indigo-600 dark:text-indigo-400">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">
            PromptCue vs. Others
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  Other Tools
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-red-500">
                    <div className="w-4 h-4">✗</div>
                    <span className="text-sm">Require signup</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-red-500">
                    <div className="w-4 h-4">✗</div>
                    <span className="text-sm">Paid subscriptions</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-red-500">
                    <div className="w-4 h-4">✗</div>
                    <span className="text-sm">Limited features</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-red-500">
                    <div className="w-4 h-4">✗</div>
                    <span className="text-sm">Complex interfaces</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  PromptCue
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-emerald-500">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">No signup required</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-emerald-500">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">100% free forever</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-emerald-500">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Advanced AI engine</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-emerald-500">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Simple & intuitive</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  Premium Features
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-emerald-500">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">Instant generation</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-emerald-500">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">Professional quality</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-emerald-500">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">Multiple use cases</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-emerald-500">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">24/7 availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Join 10,000+ creators who have already discovered the power of
              professional prompt generation. Start creating better content
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 bg-white text-indigo-600 font-bold py-4 px-8 rounded-2xl hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span>Start Creating Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-block border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
