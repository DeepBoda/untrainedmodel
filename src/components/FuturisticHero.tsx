import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Cpu, Zap, Globe, Users, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FuturisticHero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { label: 'AI Models', value: '50+', icon: Cpu },
    { label: 'Active Users', value: '10K+', icon: Users },
    { label: 'Generated Content', value: '1M+', icon: Code2 },
    { label: 'Countries', value: '150+', icon: Globe }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(96, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-primary opacity-20 blur-xl animate-float"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Hero Badge */}
        <Badge variant="outline" className="mb-8 px-6 py-2 bg-background/50 backdrop-blur-sm border-primary/30 text-primary">
          <Sparkles className="w-4 h-4 mr-2" />
          Next-Generation AI Platform
        </Badge>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="text-shimmer bg-gradient-primary bg-clip-text text-transparent">
            UntrainedModel
          </span>
          <br />
          <span className="text-2xl sm:text-4xl lg:text-6xl text-muted-foreground">
            AI for Everyone
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience the future of artificial intelligence with our comprehensive platform. 
          Generate, create, and innovate with cutting-edge AI models at your fingertips.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button asChild size="lg" className="btn-glow px-8 py-6 text-lg">
            <Link to="/playground">
              Start Creating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/10">
            <Link to="/about">
              Learn More
            </Link>
          </Button>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isActive = index === currentStat;
            
            return (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-500 ${
                  isActive ? 'scale-105 shadow-glow border-primary/50' : ''
                }`}
              >
                <Icon className={`h-8 w-8 mb-4 mx-auto transition-colors duration-500 ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`} />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10 animate-pulse" />
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default FuturisticHero;