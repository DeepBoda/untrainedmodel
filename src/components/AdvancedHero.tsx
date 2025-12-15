"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Cpu, Zap, Globe, Users, Code2, Play, Star, TrendingUp, FileText } from 'lucide-react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const AdvancedHero = () => {
  const [currentStat, setCurrentStat] = useState(0);

  // Mouse tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const stats = [
    { label: 'AI Models', value: '25+', icon: Cpu, description: 'GPT-5, Claude 4.5, Gemini Pro' },
    { label: 'Active Users', value: '5K+', icon: Users, description: 'Growing community worldwide' },
    { label: 'Content Generated', value: '500K+', icon: Code2, description: 'Articles, code, and more' },
    { label: 'Countries Served', value: '80+', icon: Globe, description: 'Global accessibility' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background section-odd overflow-hidden pt-20">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20">
          {/* Section Flag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Trusted by 5,000+ professionals worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            Transform your workflow with <br />
            <span className="text-gradient-premium">UntrainedModel</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            India's #1 FREE AI platform. Access GPT-5, Gemini 2.0 Pro, and Claude 4.5 Sonnet instantly.
            No signup required. Built for students, developers, and creators.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
              <Link href="/playground" className="flex items-center gap-2">
                <Play className="h-5 w-5 fill-current" />
                Start Creating Free
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-muted/50 transition-all duration-300 backdrop-blur-sm">
              <Link href="/use-cases" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Explore Features
              </Link>
            </Button>
          </motion.div>

          {/* 3D Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-5xl mx-auto perspective-2000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl p-2 group"
            >
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none z-50" />

              {/* Mock Browser Header */}
              <div className="h-10 bg-white/5 rounded-t-xl border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 w-64 h-5 rounded-full bg-white/5" />
              </div>

              {/* Mock Content */}
              <div className="p-6 grid grid-cols-12 gap-6 h-[500px] overflow-hidden bg-black/20 rounded-b-xl relative">
                {/* Sidebar */}
                <div className="col-span-3 space-y-4 hidden sm:block border-r border-white/5 pr-6">
                  <div className="h-10 w-full bg-primary/20 rounded-lg animate-pulse" />
                  <div className="h-8 w-3/4 bg-white/5 rounded-lg" />
                  <div className="h-8 w-5/6 bg-white/5 rounded-lg" />
                  <div className="h-8 w-4/5 bg-white/5 rounded-lg" />
                  <div className="mt-8 h-32 w-full bg-gradient-to-b from-white/5 to-transparent rounded-lg" />
                </div>

                {/* Main Area */}
                <div className="col-span-12 sm:col-span-9 space-y-6">
                  <div className="flex gap-4 mb-8">
                    <div className="h-12 w-40 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                      <div className="w-20 h-2 bg-white/20 rounded-full" />
                    </div>
                    <div className="h-12 w-40 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                      <div className="w-20 h-2 bg-white/20 rounded-full" />
                    </div>
                  </div>

                  <div className="h-64 w-full bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/5 p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
                    <div className="relative z-10 space-y-4">
                      <div className="h-4 w-1/3 bg-white/10 rounded" />
                      <div className="h-4 w-1/2 bg-white/10 rounded" />
                      <div className="h-4 w-1/4 bg-white/10 rounded" />
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="h-32 flex-1 bg-blue-500/10 rounded-2xl border border-blue-500/20 relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
                    </div>
                    <div className="h-32 flex-1 bg-purple-500/10 rounded-2xl border border-purple-500/20 relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Code Generated */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-20 z-20 hidden lg:block"
                style={{ transform: "translateZ(50px)" }}
              >
                <div className="glass-card px-4 py-3 flex items-center gap-3 bg-black/60 border-white/10 shadow-glow backdrop-blur-xl">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">AI Agent</div>
                    <div className="text-sm font-bold text-white">Code Generated</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Content Created */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-8 bottom-32 z-20 hidden lg:block"
                style={{ transform: "translateZ(50px)" }}
              >
                <div className="glass-card px-4 py-3 flex items-center gap-3 bg-black/60 border-white/10 shadow-glow backdrop-blur-xl">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Status</div>
                    <div className="text-sm font-bold text-white">Content Created</div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isActive = index === currentStat;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`p-6 rounded-2xl border transition-all duration-500 ${isActive
                  ? 'bg-primary/10 border-primary/30 shadow-lg shadow-primary/10 scale-105'
                  : 'bg-card/30 border-border/50 hover:bg-card/50'
                  }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>

                <div className="font-semibold text-foreground/80 mb-2">
                  {stat.label}
                </div>

                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvancedHero;
