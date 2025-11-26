"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Zap,
  Code2,
  FileText,
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Shield,
  Rocket,
  Target
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PremiumContent = () => {
  const features = [
    {
      icon: Code2,
      title: "AI Code Assistant for Indian Developers",
      description: "Write code 10x faster in Python, Java, JavaScript, C++, React, Node.js. Perfect for college projects, freelancing, and cracking interviews at top Indian IT companies.",
      capabilities: ["Full-stack web apps", "DSA for interviews", "Bug fixing & debugging", "College project help"]
    },
    {
      icon: FileText,
      title: "Content Creation for Indian Market",
      description: "Generate viral blog posts, Instagram captions, YouTube scripts, and marketing copy in English, Hindi, or Hinglish. Perfect for content creators, bloggers, and digital marketers.",
      capabilities: ["SEO blog posts", "Social media content", "Product descriptions", "Email campaigns"]
    },
    {
      icon: Database,
      title: "AI Study Assistant for Students",
      description: "Get homework help, exam preparation support for JEE/NEET/UPSC, and learn any subject faster. Explains concepts in simple Hindi-English that Indian students understand.",
      capabilities: ["JEE/NEET/UPSC prep", "Homework solutions", "Concept explanations", "Practice questions"]
    },
    {
      icon: Shield,
      title: "Business & Career Growth",
      description: "Get business ideas, marketing strategies, resume building, and career advice tailored for Indian market. Perfect for entrepreneurs, freelancers, and job seekers.",
      capabilities: ["Business planning", "Resume building", "Interview prep", "Marketing strategies"]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Save ₹50,000+ Monthly",
      description: "Replace expensive tools & freelancers with free AI"
    },
    {
      icon: Target,
      title: "Works on Slow Internet",
      description: "Optimized for Indian internet speeds & mobile"
    },
    {
      icon: Users,
      title: "Hindi + English Support",
      description: "Understands Hinglish and Indian context perfectly"
    }
  ];

  const stats = [
    { value: "99.5%", label: "Uptime", icon: CheckCircle },
    { value: "<1s", label: "Response Time", icon: Zap },
    { value: "5K+", label: "Active Users", icon: Users },
    { value: "24/7", label: "Support", icon: Clock }
  ];

  return (
    <section className="section-spacing section-even relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Flag */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">Why Choose UntrainedModel</span>
          </motion.div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Why choose <br />
            <span className="text-gradient-premium">
              UntrainedModel?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            We bring together the best AI models for content, code, and design in one unified, free platform.
          </motion.p>
        </div>

        {/* Features Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <feature.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>

                <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/5">
                  {feature.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent rounded-[2.5rem] p-8 md:p-12 border border-primary/10 mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-background/50 shadow-xl border border-white/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <benefit.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-card/30 border border-white/5 rounded-2xl p-6 text-center hover:bg-card/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-12 h-12 mx-auto mb-4 text-primary/80 bg-primary/10 rounded-full flex items-center justify-center">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-1 tracking-tight">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] -z-10" />
          <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Join 5,000+ Indian Creators
          </h3>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Start using world-class AI tools for FREE. No credit card required. No signup needed.
          </p>

          <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
            <Link href="/playground" className="flex items-center gap-2">
              Get Started Free Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumContent;
