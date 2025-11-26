"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Code2,
  Image,
  MessageSquare,
  Zap,
  Sparkles,
  ArrowRight,
  Play,
  Users,
  Trophy,
  ChevronRight,
  Star
} from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const EnhancedFeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Brain,
      title: 'Text Generation',
      description: 'Generate viral blog posts, SEO-optimized articles, social media content, and marketing copy in seconds. Perfect for Indian content creators, bloggers, and digital marketers who need high-quality content fast.',
      demo: 'Create a 2000-word blog post on "Best AI Tools for Indian Students 2025" with proper headings, keywords, and engaging hooks. Generate Instagram captions in Hinglish, write product descriptions for e-commerce, or create email campaigns that convert. Works in English, Hindi, and Hinglish.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Code2,
      title: 'Code Generation',
      description: 'Write production-ready code 10x faster with AI that understands Indian developer needs. Debug errors instantly, learn new frameworks, and build projects faster. Supports Python, JavaScript, Java, C++, React, Node.js, and more.',
      demo: 'Build a complete MERN stack authentication system in minutes. Debug complex React hooks errors. Generate REST APIs with MongoDB integration. Create responsive UI components with Tailwind CSS. Perfect for college projects, freelance work, and interview preparation at TCS, Infosys, Wipro.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: MessageSquare,
      title: 'AI Chat',
      description: '24/7 AI tutor and problem solver that understands Indian context. Get homework help, exam preparation support, business advice, and career guidance. Explains concepts in simple Hindi-English mix.',
      demo: 'Prepare for JEE/NEET/UPSC with personalized study plans. Get step-by-step solutions for physics, chemistry, math problems. Learn DSA for coding interviews. Get business ideas for Indian market. Understand GST, startup funding, digital marketing. Ask in English, Hindi, or Hinglish - AI understands all.',
      color: 'from-orange-500 to-yellow-600'
    }
  ];

  const achievements = [
    { icon: Users, label: 'Active Users', value: '5K+' },
    { icon: Zap, label: 'AI Generations', value: '500K+' },
    { icon: Trophy, label: 'User Rating', value: '4.6/5' }
  ];

  // Auto-cycle features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="section-spacing section-even relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div style={{ y }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Flag */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-flag"
          >
            <Sparkles className="w-4 h-4" />
            Premium AI Platform
          </motion.div>
        </div>

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="apple-section-title text-foreground"
        >
          Everything you need
          <span className="block text-foreground/60">in one platform</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="apple-section-subtitle text-foreground/70"
        >
          Powerful AI tools designed to transform your workflow and accelerate your projects.
        </motion.p>

        {/* Feature Showcase - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = index === activeFeature;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`relative p-8 rounded-3xl cursor-pointer group transition-all duration-500 overflow-hidden border ${isActive
                  ? 'bg-primary/5 border-primary/20 shadow-lg shadow-primary/5 scale-[1.02]'
                  : 'bg-card/30 border-border/50 hover:bg-card/50 hover:border-primary/10'
                  }`}
                onClick={() => setActiveFeature(index)}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeFeatureGlow"
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"
                  />
                )}

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    {feature.title}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full bg-primary"
                      />
                    )}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Demo Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative perspective-1000 group max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl p-8 md:p-12 text-center overflow-hidden transform transition-transform duration-700 group-hover:rotate-x-2">
            {/* Background Gradient Animation */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-5`}
            />

            <motion.div
              key={`icon-${activeFeature}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} text-white flex items-center justify-center shadow-lg`}
            >
              {React.createElement(features[activeFeature].icon, { className: 'w-10 h-10' })}
            </motion.div>

            <motion.h3
              key={`title-${activeFeature}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl font-bold text-foreground mb-6 relative z-10"
            >
              {features[activeFeature].title}
            </motion.h3>

            <motion.p
              key={`demo-${activeFeature}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto relative z-10"
            >
              {features[activeFeature].demo}
            </motion.p>

            <div className="relative z-10">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Link href="/playground" className="flex items-center gap-2">
                  <Play className="h-5 w-5 fill-current" />
                  Try It Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-3xl font-bold text-foreground mb-2">
                  {achievement.value}
                </div>

                <div className="font-semibold text-muted-foreground">
                  {achievement.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeatureShowcase;
