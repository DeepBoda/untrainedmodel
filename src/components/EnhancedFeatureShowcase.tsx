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
      description: 'Create professional content with advanced language models that understand context and maintain your unique voice. Ideal for marketers, writers, and students.',
      demo: 'For example, you can generate a detailed blog post on "The Future of Renewable Energy" or create compelling marketing copy for a new product launch. Our AI adapts to your writing style, ensuring the content is uniquely yours.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Code2,
      title: 'Code Generation',
      description: 'Accelerate your development process with intelligent code completion, debugging, and generation across multiple programming languages and frameworks.',
      demo: 'Quickly generate a Python script for data analysis, create a React component for your web app, or get help debugging a complex SQL query. Our AI understands your coding patterns and provides production-ready code.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: MessageSquare,
      title: 'AI Chat',
      description: 'Engage in natural, context-aware conversations with an AI assistant that can help you brainstorm, solve problems, and learn new topics.',
      demo: 'Ask complex questions like "Explain the theory of relativity in simple terms" or use it as a brainstorming partner to come up with ideas for your next project. Our AI remembers the context of your conversation for a seamless experience.',
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
