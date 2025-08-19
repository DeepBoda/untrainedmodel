import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Cpu, Zap, Globe, Users, Code2, Brain, Rocket, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdvancedHero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const typewriterPhrases = [
    'AI for Everyone',
    'Create with Intelligence',
    'Build the Future Today',
    'Unleash Your Creativity',
    'Generate Anything Instantly'
  ];
  
  const stats = [
    { label: 'AI Models Available', value: '50+', icon: Cpu, color: 'text-blue-400', description: 'Latest GPT-4, Claude 3, Gemini Pro' },
    { label: 'Active Creators', value: '10K+', icon: Users, color: 'text-green-400', description: 'Growing community worldwide' },
    { label: 'Content Generated', value: '1M+', icon: Code2, color: 'text-purple-400', description: 'Articles, code, images, and more' },
    { label: 'Countries Served', value: '150+', icon: Globe, color: 'text-orange-400', description: 'Global AI accessibility' }
  ];

  // Enhanced stats rotation with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Smooth typewriter effect
  useEffect(() => {
    const currentPhrase = typewriterPhrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (typewriterText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setTypewriterText(currentPhrase.slice(0, typewriterText.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 3000);
      }
    } else {
      if (typewriterText.length > 0) {
        timeout = setTimeout(() => {
          setTypewriterText(typewriterText.slice(0, -1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
          setIsTyping(true);
        }, 500);
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
    <motion.section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        y,
        background: 'var(--gradient-hero)',
        paddingTop: 'var(--space-xl)',
        paddingBottom: 'var(--space-xl)'
      }}
    >
      {/* Interactive Mesh Background */}
      <motion.div 
        className="absolute inset-0 opacity-[0.15]"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dynamic Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)'
                : 'radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)',
              filter: `blur(${10 + i * 3}px)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center container-full"
           style={{ 
             paddingTop: 'var(--space-2xl)', 
             paddingBottom: 'var(--space-xl)' 
           }}>
        {/* Premium Badge */}
        <motion.div 
          className="flex justify-center"
          style={{ marginBottom: 'var(--space-3xl)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge 
            variant="outline" 
            className="glass-morphism border-primary/30 text-primary cursor-pointer group relative overflow-hidden transition-perfect-smooth hover:scale-105"
            style={{ 
              padding: 'var(--space-4) var(--space-8)',
              fontSize: 'var(--font-size-base)',
              borderRadius: 'var(--radius-3xl)'
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10" 
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
            <Brain className="w-5 h-5 group-hover:rotate-12 transition-perfect-smooth" 
                   style={{ marginRight: 'var(--space-3)' }} />
            <span className="font-medium">Revolutionary AI Platform • Trusted by 10,000+ Creators</span>
            <Sparkles className="w-5 h-5 group-hover:scale-110 transition-perfect-smooth" 
                      style={{ marginLeft: 'var(--space-3)' }} />
          </Badge>
        </motion.div>

        {/* Main Heading with Advanced Typography */}
        <motion.div 
          className="space-element"
          style={{ 
            marginBottom: 'var(--space-4xl)',
            marginTop: 'var(--space-2xl)'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-bold text-balance"
              style={{ 
                fontSize: 'var(--font-size-6xl)',
                lineHeight: 'var(--leading-tight)',
                letterSpacing: '-0.025em',
                marginBottom: 'var(--space-2xl)'
              }}>
            <motion.div 
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-shimmer block">
                UntrainedModel
              </span>
              <motion.div 
                className="absolute"
                style={{ 
                  top: 'calc(-1 * var(--space-4))',
                  right: 'calc(-1 * var(--space-6))'
                }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Rocket className="text-primary opacity-80" 
                        style={{ 
                          width: 'var(--space-8)', 
                          height: 'var(--space-8)' 
                        }} />
              </motion.div>
            </motion.div>
          </h1>
          
          <motion.div 
            className="text-muted-foreground font-medium min-h-[1.2em] flex items-center justify-center"
            style={{ 
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--space-xl)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="relative">
              {typewriterText}
              <motion.span 
                className="inline-block w-1 h-[1em] bg-primary/70 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
          </motion.div>
        </motion.div>

        {/* Enhanced Description */}
        <motion.p 
          className="text-muted-foreground container-tight text-balance hover:text-foreground transition-perfect-smooth"
          style={{ 
            fontSize: 'var(--font-size-xl)',
            lineHeight: 'var(--leading-relaxed)',
            marginBottom: 'var(--space-4xl)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Transform your creative workflow with cutting-edge AI technology. Generate premium content, 
          write sophisticated code, and create stunning visuals using the world's most advanced AI models 
          including GPT-4, Claude 3, and Gemini Pro - all in one powerful platform.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center"
          style={{ 
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-xl)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button 
              asChild 
              className="btn-hero group relative overflow-hidden"
              style={{ 
                background: 'var(--gradient-primary)',
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600',
                padding: 'var(--space-6) var(--space-12)',
                borderRadius: 'var(--radius-xl)',
                border: 'none'
              }}
            >
              <Link to="/playground" className="flex items-center relative z-10"
                    style={{ gap: 'var(--space-3)' }}>
                <Play className="h-5 w-5 group-hover:scale-110 transition-perfect-smooth" />
                Start Creating Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-perfect-smooth" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="outline" 
              className="glass-morphism border-primary/30 hover:bg-primary/5 hover:border-primary/50 group relative overflow-hidden transition-perfect-smooth"
              style={{ 
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600',
                padding: 'var(--space-6) var(--space-12)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <Link to="/about" className="flex items-center relative z-10"
                    style={{ gap: 'var(--space-3)' }}>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-perfect-smooth" />
                Explore Features
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Revolutionary Stats Display */}
        <motion.div 
          className="grid-stats container-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isActive = index === currentStat;
            
            return (
              <motion.div 
                key={index}
                className="group relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <motion.div 
                  className={`relative glass-morphism border transition-perfect-smooth ${
                    isActive 
                      ? 'border-primary/50 shadow-perfect-glow' 
                      : 'border-border/20 hover:border-primary/40'
                  }`}
                  style={{ 
                    padding: 'var(--space-8)',
                    borderRadius: 'var(--radius-3xl)'
                  }}
                  animate={isActive ? { 
                    boxShadow: [
                      'var(--shadow-elegant)',
                      'var(--shadow-glow)',
                      'var(--shadow-elegant)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  
                  {/* Icon with Advanced Animation */}
                  <motion.div 
                    className="relative flex justify-center"
                    style={{ marginBottom: 'var(--space-6)' }}
                    animate={isActive ? { 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className={`transition-perfect-smooth ${
                      isActive 
                        ? 'text-primary drop-shadow-lg' 
                        : 'text-muted-foreground group-hover:text-primary'
                    }`} 
                    style={{ 
                      width: 'var(--space-12)', 
                      height: 'var(--space-12)' 
                    }} />
                  </motion.div>
                  
                  {/* Stats Content */}
                  <div className="text-center relative z-10">
                    <motion.div 
                      className={`font-bold transition-perfect-smooth ${
                        isActive 
                          ? 'text-primary scale-105' 
                          : 'text-foreground group-hover:text-primary'
                      }`}
                      style={{ 
                        fontSize: 'var(--font-size-3xl)',
                        marginBottom: 'var(--space-3)'
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div 
                      className={`font-semibold transition-perfect-smooth ${
                        isActive 
                          ? 'text-primary/90' 
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                      style={{ 
                        fontSize: 'var(--font-size-lg)',
                        marginBottom: 'var(--space-2)'
                      }}
                    >
                      {stat.label}
                    </div>

                    <div 
                      className="text-muted-foreground/80"
                      style={{ fontSize: 'var(--font-size-sm)' }}
                    >
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvancedHero;