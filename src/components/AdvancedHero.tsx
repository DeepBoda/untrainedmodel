import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Cpu, Zap, Globe, Users, Code2, Play, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdvancedHero = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { label: 'AI Models', value: '15+', icon: Cpu, description: 'GPT-4, Claude 3, Gemini Pro' },
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
    <section className="relative min-h-screen flex items-center justify-center bg-background section-odd overflow-hidden">
      {/* AI/Robot Glowing Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* AI Brain Glow */}
        <div className="absolute top-20 left-20 w-64 h-64">
          <div className="w-full h-full bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute inset-4 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded-full blur-xl animate-float" />
        </div>

        {/* Robot Circuit Glow */}
        <div className="absolute bottom-32 right-16 w-80 h-80">
          <div className="w-full h-full bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute inset-8 bg-gradient-to-r from-teal-400/30 to-green-500/30 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
        </div>

        {/* Neural Network Glow */}
        <div className="absolute top-1/3 right-1/4 w-48 h-48">
          <div className="w-full h-full bg-gradient-to-r from-pink-400/25 to-rose-600/25 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }} />
        </div>

        {/* Data Stream Glow */}
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56">
          <div className="w-full h-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Central AI Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="w-full h-full bg-gradient-to-r from-primary/8 via-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute inset-16 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-float-slow" />
        </div>
      </div>
      <div className="section-container relative z-10 pt-20 pb-32">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          {/* Section Flag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 animate-fade-in-up">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Trusted by 5,000+ professionals worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Transform your workflow with
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              UntrainedModel
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            India's #1 FREE AI platform. Access ChatGPT-4, Gemini 2.0, and Claude 3 instantly.
            No signup required. Built for students, developers, and creators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg" className="h-12 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
              <Link to="/playground" className="flex items-center gap-2">
                <Play className="h-5 w-5 fill-current" />
                Start Creating Free
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full border-2 hover:bg-muted/50 transition-all duration-300">
              <Link to="/about" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Explore Features
              </Link>
            </Button>
          </div>

          {/* 3D Dashboard Preview */}
          <div className="relative w-full max-w-4xl mx-auto perspective-1000 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-xl border border-border/50 bg-background/50 backdrop-blur-xl shadow-2xl transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700 ease-out p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-purple-500/10 to-pink-500/10 rounded-xl pointer-events-none" />

              {/* Mock Browser Header */}
              <div className="h-8 bg-muted/50 rounded-t-lg border-b border-border/50 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-4 w-64 h-4 rounded-full bg-muted/50" />
              </div>

              {/* Mock Content */}
              <div className="p-6 grid grid-cols-12 gap-6 h-[400px] overflow-hidden bg-background/80 rounded-b-lg">
                {/* Sidebar */}
                <div className="col-span-3 space-y-3 hidden sm:block">
                  <div className="h-8 w-full bg-muted/50 rounded-md" />
                  <div className="h-8 w-3/4 bg-muted/30 rounded-md" />
                  <div className="h-8 w-5/6 bg-muted/30 rounded-md" />
                  <div className="h-8 w-4/5 bg-muted/30 rounded-md" />
                </div>
                {/* Main Area */}
                <div className="col-span-12 sm:col-span-9 space-y-4">
                  <div className="flex gap-3 mb-6">
                    <div className="h-10 w-32 bg-primary/10 rounded-lg border border-primary/20" />
                    <div className="h-10 w-32 bg-muted/30 rounded-lg border border-border/50" />
                  </div>
                  <div className="h-32 w-full bg-muted/20 rounded-xl border border-border/50 p-4">
                    <div className="h-4 w-1/3 bg-muted/40 rounded mb-3" />
                    <div className="h-4 w-1/2 bg-muted/30 rounded" />
                  </div>
                  <div className="flex gap-4">
                    <div className="h-40 flex-1 bg-blue-500/5 rounded-xl border border-blue-500/10" />
                    <div className="h-40 flex-1 bg-purple-500/5 rounded-xl border border-purple-500/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-12 top-20 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-border/50 shadow-xl animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Code Generated</div>
                  <div className="text-xs text-muted-foreground">Python script ready</div>
                </div>
              </div>
            </div>

            <div className="absolute -left-12 bottom-20 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-border/50 shadow-xl animate-float-slow hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Content Created</div>
                  <div className="text-xs text-muted-foreground">Blog post optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="apple-grid apple-grid-4 max-w-5xl mx-auto gap-6 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isActive = index === currentStat;

            return (
              <div
                key={index}
                className={`apple-card text-center transition-all duration-500 ${isActive ? 'ring-2 ring-primary/30 bg-primary/5 scale-105' : ''
                  }`}
              >
                <div className="apple-card-icon mx-auto">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="apple-card-content">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>

                  <div className="font-semibold text-foreground/80 mb-2">
                    {stat.label}
                  </div>

                  <div className="text-sm text-foreground/60">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvancedHero;
