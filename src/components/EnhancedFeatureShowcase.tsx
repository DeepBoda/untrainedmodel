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
import { Link } from 'react-router-dom';

const EnhancedFeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: Brain,
      title: 'AI Text Generation',
      description: 'Advanced language models for content creation, writing assistance, and creative storytelling with unprecedented accuracy.',
      demo: 'Generate blog posts, emails, code documentation, and creative content with state-of-the-art AI that understands context and maintains your unique voice.',
      stats: { accuracy: '99.2%', speed: '<1s', models: '15+' },
      color: 'from-blue-500 via-blue-600 to-purple-600',
      highlight: 'Most Popular'
    },
    {
      icon: Code2,
      title: 'Code Generation',
      description: 'Intelligent code completion, debugging, and full application generation across multiple programming languages and frameworks.',
      demo: 'From simple functions to complete applications - our AI understands your coding patterns and generates production-ready code.',
      stats: { languages: '50+', accuracy: '97.8%', frameworks: '25+' },
      color: 'from-green-500 via-emerald-600 to-teal-600',
      highlight: 'Developer Favorite'
    },
    {
      icon: Image,
      title: 'Visual Creation',
      description: 'Generate stunning images, logos, and visual content using cutting-edge AI models trained on millions of high-quality assets.',
      demo: 'Create professional artwork, logos, illustrations, and photos from simple text descriptions with unlimited variations.',
      stats: { resolution: '4K+', styles: '100+', speed: '<5s' },
      color: 'from-pink-500 via-rose-600 to-red-600',
      highlight: 'Creative Choice'
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Intelligent chat interfaces with advanced context awareness and multi-turn conversations that remember your preferences.',
      demo: 'Have natural conversations, get expert advice, and solve complex problems with AI that adapts to your communication style.',
      stats: { languages: '95+', context: '32K', response: '<0.5s' },
      color: 'from-orange-500 via-amber-600 to-yellow-600',
      highlight: 'Enterprise Ready'
    }
  ];

  const achievements = [
    { icon: Users, label: 'Happy Users', value: '50K+', growth: '+125%' },
    { icon: Zap, label: 'Generations', value: '2M+', growth: '+340%' },
    { icon: Trophy, label: 'Satisfaction', value: '98%', growth: '+12%' }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-cycle features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden section-padding"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-[0.02]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-primary rounded-full opacity-[0.03] blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-variant to-primary rounded-full opacity-[0.02] blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-full relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center space-element ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <Badge 
            variant="outline" 
            className="glass-morphism border-primary/20 text-primary space-content"
            style={{ 
              fontSize: 'var(--font-size-sm)',
              padding: 'var(--space-3) var(--space-8)',
              borderRadius: 'var(--radius-3xl)',
              gap: 'var(--space-2)'
            }}
          >
            <Sparkles className="w-4 h-4" />
            Powerful Features
            <Star className="w-4 h-4" />
          </Badge>
          
          <h2 
            className="font-bold text-balance space-content"
            style={{ 
              fontSize: 'var(--font-size-5xl)',
              lineHeight: 'var(--leading-tight)'
            }}
          >
            <span className="text-shimmer block space-tight">Everything You Need</span>
            <span 
              className="text-muted-foreground block"
              style={{ fontSize: 'var(--font-size-3xl)' }}
            >
              in One Platform
            </span>
          </h2>
          
          <p 
            className="text-muted-foreground container-tight text-balance"
            style={{ 
              fontSize: 'var(--font-size-xl)',
              lineHeight: 'var(--leading-relaxed)'
            }}
          >
            Discover the complete suite of AI tools designed to transform your workflow, 
            boost creativity, and accelerate your projects with unprecedented ease and power.
          </p>
        </div>

        {/* Enhanced Feature Showcase */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 items-center space-element ${isVisible ? 'animate-slide-up stagger-2' : 'opacity-0'}`}
             style={{ gap: 'var(--space-4xl)' }}>
          
          {/* Feature Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeFeature;
              
              return (
                <Card 
                  key={index}
                  className={`cursor-pointer card-interactive relative overflow-hidden group transition-perfect-smooth ${
                    isActive 
                      ? 'border-primary/40 shadow-perfect-glow scale-[1.02]' 
                      : 'border-border/20 hover:border-primary/30'
                  }`}
                  style={{ padding: 'var(--space-8)' }}
                  onClick={() => setActiveFeature(index)}
                >
                  {/* Dynamic Background */}
                  <div className={`absolute inset-0 bg-gradient-primary transition-perfect-smooth ${
                    isActive ? 'opacity-[0.05]' : 'opacity-0 group-hover:opacity-[0.02]'
                  }`} />
                  
                  {/* Highlight Badge */}
                  {isActive && (
                    <div className="absolute" style={{ top: 'var(--space-4)', right: 'var(--space-4)' }}>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 font-medium"
                        style={{ 
                          fontSize: 'var(--font-size-xs)',
                          padding: 'var(--space-1) var(--space-3)'
                        }}
                      >
                        {feature.highlight}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="flex items-start relative z-10" 
                       style={{ gap: 'var(--space-6)' }}>
                    <div className={`rounded-perfect-2xl bg-gradient-to-br ${feature.color} text-white transition-perfect-smooth shadow-perfect-lg ${
                      isActive ? 'scale-110 shadow-perfect-glow' : 'group-hover:scale-105'
                    }`}
                    style={{ padding: 'var(--space-4)' }}>
                      <Icon style={{ 
                        width: 'var(--space-7)', 
                        height: 'var(--space-7)' 
                      }} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="font-bold flex items-center space-tight"
                        style={{ fontSize: 'var(--font-size-xl)' }}
                      >
                        {feature.title}
                        {isActive && (
                          <ChevronRight className="h-5 w-5 text-primary animate-pulse" 
                                      style={{ marginLeft: 'var(--space-2)' }} />
                        )}
                      </h3>
                      
                      <p 
                        className="text-muted-foreground space-tight"
                        style={{ 
                          fontSize: 'var(--font-size-sm)',
                          lineHeight: 'var(--leading-relaxed)'
                        }}
                      >
                        {feature.description}
                      </p>
                      
                      {/* Enhanced Stats */}
                      <div className="flex flex-wrap" style={{ gap: 'var(--space-3)' }}>
                        {Object.entries(feature.stats).map(([key, value]) => (
                          <Badge 
                            key={key} 
                            variant="outline" 
                            className="bg-background/50 border-border/50 font-medium"
                            style={{ 
                              fontSize: 'var(--font-size-xs)',
                              padding: 'var(--space-1) var(--space-3)'
                            }}
                          >
                            <span className="text-primary font-semibold">{key}:</span>
                            <span style={{ marginLeft: 'var(--space-1)' }}>{value}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Enhanced Demo Display */}
          <div className="relative">
            <Card className="glass-morphism border-border/20 flex flex-col justify-center relative overflow-hidden"
                  style={{ 
                    padding: 'var(--space-10)',
                    minHeight: '500px'
                  }}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}
                />
              </div>
              
              <div className="text-center relative z-10">
                <div className={`inline-flex rounded-perfect-3xl bg-gradient-to-br ${features[activeFeature].color} text-white shadow-perfect-elegant space-content`}
                     style={{ padding: 'var(--space-6)' }}>
                  {React.createElement(features[activeFeature].icon, { 
                    style: { width: 'var(--space-10)', height: 'var(--space-10)' }
                  })}
                </div>
                
                <h3 
                  className="font-bold text-balance space-content"
                  style={{ fontSize: 'var(--font-size-2xl)' }}
                >
                  {features[activeFeature].title}
                </h3>
                
                <p 
                  className="text-muted-foreground text-balance space-element"
                  style={{ 
                    fontSize: 'var(--font-size-lg)',
                    lineHeight: 'var(--leading-relaxed)'
                  }}
                >
                  {features[activeFeature].demo}
                </p>
                
                <Button asChild className="btn-glow shadow-perfect-elegant"
                        style={{ 
                          padding: 'var(--space-4) var(--space-8)'
                        }}>
                  <Link to="/playground" className="flex items-center"
                        style={{ gap: 'var(--space-2)' }}>
                    <Play className="h-5 w-5" />
                    Try It Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Floating Decorative Elements */}
            <div className="absolute rounded-perfect-full bg-gradient-primary opacity-10 animate-float"
                 style={{ 
                   top: 'calc(-1 * var(--space-6))',
                   right: 'calc(-1 * var(--space-6))',
                   width: 'var(--space-24)',
                   height: 'var(--space-24)',
                   filter: 'blur(var(--blur-xl))'
                 }} />
            <div className="absolute rounded-perfect-full bg-gradient-to-br from-primary-variant to-primary opacity-[0.06] animate-float"
                 style={{ 
                   bottom: 'calc(-1 * var(--space-8))',
                   left: 'calc(-1 * var(--space-8))',
                   width: 'var(--space-32)',
                   height: 'var(--space-32)',
                   filter: 'blur(var(--blur-2xl))',
                   animationDelay: '1s'
                 }} />
          </div>
        </div>

        {/* Enhanced Achievements */}
        <div className={`grid-stats container-tight ${isVisible ? 'animate-slide-up stagger-3' : 'opacity-0'}`}>
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index} 
                className="text-center glass-morphism border-border/20 card-interactive group relative overflow-hidden"
                style={{ padding: 'var(--space-8)' }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.03] transition-perfect-smooth" />
                
                <Icon className="mx-auto text-primary group-hover:scale-110 transition-perfect-smooth space-content" 
                      style={{ 
                        width: 'var(--space-14)', 
                        height: 'var(--space-14)' 
                      }} />
                
                <div 
                  className="font-bold text-primary space-tight"
                  style={{ fontSize: 'var(--font-size-3xl)' }}
                >
                  {achievement.value}
                </div>
                
                <div 
                  className="text-muted-foreground space-tight"
                  style={{ fontSize: 'var(--font-size-base)' }}
                >
                  {achievement.label}
                </div>
                
                <Badge 
                  variant="outline" 
                  className="bg-green-500/10 text-green-400 border-green-500/20"
                  style={{ fontSize: 'var(--font-size-xs)' }}
                >
                  {achievement.growth} this year
                </Badge>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeatureShowcase;