import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Cpu, Zap, Globe, Users, Code2, Brain, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const FuturisticHero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  
  const typewriterPhrases = [
    'AI for Everyone',
    'Create with AI',
    'Build the Future',
    'Unleash Creativity',
    'Generate Anything'
  ];
  
  const stats = [
    { label: 'AI Models', value: '50+', icon: Cpu, color: 'text-blue-400' },
    { label: 'Active Users', value: '10K+', icon: Users, color: 'text-green-400' },
    { label: 'Generated Content', value: '1M+', icon: Code2, color: 'text-purple-400' },
    { label: 'Countries', value: '150+', icon: Globe, color: 'text-orange-400' }
  ];

  // Enhanced stats rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Enhanced Typewriter effect with smooth transitions
  useEffect(() => {
    const currentPhrase = typewriterPhrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (typewriterText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setTypewriterText(currentPhrase.slice(0, typewriterText.length + 1));
        }, 150); // Slower, more comfortable typing speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3500); // Longer pause to read the text
      }
    } else {
      if (typewriterText.length > 0) {
        timeout = setTimeout(() => {
          setTypewriterText(typewriterText.slice(0, -1));
        }, 100); // Moderate delete speed
      } else {
        timeout = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
          setIsTyping(true);
        }, 800); // Brief pause before starting next phrase
      }
    }

    return () => clearTimeout(timeout);
  }, [typewriterText, isTyping, currentPhraseIndex, typewriterPhrases]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out gpu-accelerated"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), 
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 25s ease-in-out infinite',
            transform: `translate3d(${mousePosition.x * 15 - 7.5}px, ${mousePosition.y * 15 - 7.5}px, 0)`
          }} 
        />
      </div>

      {/* Enhanced Floating Orbs with Depth */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full gpu-accelerated"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              left: `${5 + i * 8}%`,
              top: `${10 + i * 8}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary-variant) / 0.1) 50%, transparent 100%)'
                : 'radial-gradient(circle, hsl(var(--primary-variant) / 0.12) 0%, hsl(var(--primary) / 0.08) 50%, transparent 100%)',
              filter: `blur(${8 + i * 2}px)`,
              animation: `float ${4 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
              transform: `translate3d(${mousePosition.x * (8 + i * 3)}px, ${mousePosition.y * (8 + i * 3)}px, 0) scale(${1 + mousePosition.x * 0.1})`
            }}
          />
        ))}
      </div>

      {/* Sophisticated Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute gpu-accelerated"
            style={{
              left: '0',
              right: '0',
              height: '2px',
              top: `${15 + i * 12}%`,
              background: `linear-gradient(90deg, 
                transparent 0%, 
                hsl(var(--primary) / ${0.1 + i * 0.02}) 20%, 
                hsl(var(--primary-variant) / ${0.15 + i * 0.02}) 50%, 
                hsl(var(--primary) / ${0.1 + i * 0.02}) 80%, 
                transparent 100%
              )`,
              filter: `blur(${1 + i * 0.5}px)`,
              animation: `pulse-slow ${2.5 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
              transform: `rotate(${i * 12 - 36}deg) scale(${0.8 + mousePosition.x * 0.4}) translateZ(0)`,
              transformOrigin: 'center'
            }}
          />
        ))}
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-primary rounded-full opacity-[0.05] blur-3xl gpu-accelerated"
          style={{
            animation: 'float 8s ease-in-out infinite',
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0)`
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-primary-variant to-primary rounded-full opacity-[0.04] blur-3xl gpu-accelerated"
          style={{
            animation: 'float 10s ease-in-out infinite reverse',
            animationDelay: '2s',
            transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -15}px, 0)`
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 py-8">
        {/* Ultra-Enhanced Hero Badge */}
        <div className="mb-12 flex justify-center animate-scale-in">
          <Badge 
            variant="outline" 
            className="px-8 py-4 glass-morphism border-primary/20 text-primary hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <Brain className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-base font-medium">Next-Generation AI Platform</span>
            <Sparkles className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 border border-primary/30 rounded-full group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
          </Badge>
        </div>

        {/* Redesigned Main Heading with Perfect Typography */}
        <div className="mb-16 space-y-6">
          <h1 className="font-bold leading-[0.9] tracking-tight text-balance animate-slide-up">
            <div className="relative inline-block">
              <span 
                className="text-shimmer block"
                style={{ fontSize: 'var(--font-size-6xl)' }}
              >
                UntrainedModel
              </span>
              <div className="absolute -top-4 -right-6 lg:-right-12 animate-float">
                <Rocket className="w-8 h-8 lg:w-12 lg:h-12 text-primary opacity-80" />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 text-shimmer blur-sm opacity-30 -z-10" style={{ fontSize: 'var(--font-size-6xl)' }}>
                UntrainedModel
              </div>
            </div>
          </h1>
          
          <div 
            className="text-muted-foreground font-medium min-h-[1.2em] flex items-center justify-center animate-slide-up stagger-2"
            style={{ fontSize: 'var(--font-size-3xl)' }}
          >
            <span className="relative">
              {typewriterText}
              <span className="inline-block w-1 h-[1em] bg-primary/70 ml-1 animate-pulse-slow" />
            </span>
          </div>
        </div>

        {/* Enhanced Description with Perfect Spacing */}
        <p 
          className="text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed text-balance hover:text-foreground transition-colors duration-700 animate-slide-up stagger-3"
          style={{ 
            fontSize: 'var(--font-size-xl)',
            lineHeight: '1.6'
          }}
        >
          Experience the future of artificial intelligence with our comprehensive platform. 
          Generate, create, and innovate with cutting-edge AI models designed for creators, 
          developers, and visionaries who dare to push boundaries.
        </p>

        {/* Redesigned CTA Buttons with Magnetic Effect */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 animate-slide-up stagger-4">
          <Button 
            asChild 
            size="lg" 
            className="btn-glow px-10 py-5 text-lg font-semibold group relative overflow-hidden border-0 shadow-elegant hover:shadow-float"
            style={{ 
              background: 'var(--gradient-primary)',
              fontSize: 'var(--font-size-lg)'
            }}
          >
            <Link to="/playground" className="flex items-center relative z-10">
              <Zap className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
              Start Creating
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-10 py-5 text-lg font-semibold glass-morphism border-primary/20 hover:bg-primary/5 hover:scale-105 transition-all duration-500 hover:border-primary/40 group relative overflow-hidden"
            style={{ fontSize: 'var(--font-size-lg)' }}
          >
            <Link to="/about" className="flex items-center relative z-10">
              <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
              Learn More
            </Link>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
          </Button>
        </div>

        {/* Ultra-Enhanced Animated Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto animate-slide-up stagger-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isActive = index === currentStat;
            
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden transition-all duration-700 cursor-pointer ${
                  isActive ? 'scale-105' : 'hover:scale-110'
                }`}
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Glass Card */}
                <div className={`relative p-8 rounded-3xl glass-morphism border transition-all duration-700 ${
                  isActive 
                    ? 'border-primary/40 shadow-glow' 
                    : 'border-border/20 hover:border-primary/30 hover:shadow-card'
                }`}>
                  
                  {/* Dynamic Background Glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-primary transition-opacity duration-700 ${
                    isActive ? 'opacity-[0.08]' : 'opacity-0 group-hover:opacity-[0.03]'
                  }`} />
                  
                  {/* Floating Icon with Advanced Animation */}
                  <div className="relative mb-6 flex justify-center">
                    <div className={`relative transition-all duration-700 ${
                      isActive ? 'scale-110' : 'group-hover:scale-125'
                    }`}>
                      <Icon className={`h-12 w-12 transition-all duration-700 ${
                        isActive 
                          ? `text-primary drop-shadow-lg` 
                          : 'text-muted-foreground group-hover:text-primary'
                      }`} />
                      
                      {/* Icon Glow Ring */}
                      {isActive && (
                        <div className="absolute inset-0 -m-2">
                          <div className="w-16 h-16 rounded-full border-2 border-primary/20 animate-pulse" />
                          <div className="absolute inset-0 w-16 h-16 rounded-full bg-primary/10 blur-md animate-pulse" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Enhanced Stats Display */}
                  <div className="text-center relative z-10">
                    <div 
                      className={`font-bold mb-3 transition-all duration-700 ${
                        isActive 
                          ? 'text-primary scale-105 drop-shadow-sm' 
                          : 'text-foreground group-hover:text-primary'
                      }`}
                      style={{ fontSize: 'var(--font-size-3xl)' }}
                    >
                      {stat.value}
                    </div>
                    
                    <div 
                      className={`font-medium transition-colors duration-700 ${
                        isActive 
                          ? 'text-primary/80' 
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                      style={{ fontSize: 'var(--font-size-sm)' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Animated Border Effect */}
                  {isActive && (
                    <>
                      <div className="absolute -inset-px rounded-3xl bg-gradient-primary opacity-20 animate-pulse" />
                      <div className="absolute -inset-1 rounded-3xl border-2 border-primary/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </>
                  )}
                  
                  {/* Hover Sparkle Effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-4 h-4 text-primary/50" />
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

export default FuturisticHero;