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
    <section className="section-spacing section-even">
      <div className="section-container">
        {/* Section Flag */}
        <div className="flex justify-center">
          <div className="section-flag">
            <Sparkles className="w-4 h-4" />
            Premium AI Platform
          </div>
        </div>
        
        {/* Section Header */}
        <h2 className="apple-section-title text-foreground">
          Everything you need
          <span className="block text-foreground/60">in one platform</span>
        </h2>
        
        <p className="apple-section-subtitle text-foreground/70">
          Powerful AI tools designed to transform your workflow and accelerate your projects.
        </p>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeFeature;
              
              return (
                <div 
                  key={index}
                  className={`apple-card cursor-pointer transition-all ${
                    isActive ? 'ring-2 ring-primary/30 bg-primary/5' : 'hover:bg-primary/5'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center transition-transform ${
                      isActive ? 'scale-110' : ''
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="apple-card-title text-foreground flex items-center">
                        {feature.title}
                        {isActive && <ChevronRight className="w-5 h-5 text-primary ml-2" />}
                      </h3>
                      
                      <p className="text-foreground/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Demo Display */}
          <div className="apple-card text-center min-h-[400px] flex flex-col justify-center">
            <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} text-white flex items-center justify-center`}>
              {React.createElement(features[activeFeature].icon, { className: 'w-8 h-8' })}
            </div>
            
            <h3 className="apple-card-title text-foreground mb-4">
              {features[activeFeature].title}
            </h3>
            
            <p className="text-foreground/70 mb-8 leading-relaxed">
              {features[activeFeature].demo}
            </p>
            
            <Button asChild className="apple-button mx-auto">
              <Link to="/playground" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Try It Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Achievements */}
        <div className="apple-grid apple-grid-3 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="apple-card text-center">
                <div className="apple-card-icon mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="apple-card-content">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {achievement.value}
                  </div>
                  
                  <div className="font-semibold text-foreground/80">
                    {achievement.label}
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

export default EnhancedFeatureShowcase;
