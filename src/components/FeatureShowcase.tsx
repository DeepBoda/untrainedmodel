import React, { useState } from 'react';
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
  Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI Text Generation',
      description: 'Advanced language models for content creation, writing assistance, and creative storytelling.',
      demo: 'Generate blog posts, emails, code documentation, and creative content with state-of-the-art AI.',
      stats: { accuracy: '99.2%', speed: '<1s', models: '15+' },
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Code2,
      title: 'Code Generation',
      description: 'Intelligent code completion, debugging, and full application generation across multiple languages.',
      demo: 'From simple functions to complete applications - our AI understands your coding needs.',
      stats: { languages: '50+', accuracy: '97.8%', frameworks: '25+' },
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Image,
      title: 'Visual Creation',
      description: 'Generate stunning images, logos, and visual content using cutting-edge AI image models.',
      demo: 'Create professional artwork, logos, illustrations, and photos from simple text descriptions.',
      stats: { resolution: '4K+', styles: '100+', speed: '<5s' },
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Intelligent chat interfaces with context awareness and multi-turn conversations.',
      demo: 'Have natural conversations, get expert advice, and solve complex problems interactively.',
      stats: { languages: '95+', context: '32K', response: '<0.5s' },
      color: 'from-orange-500 to-red-600'
    }
  ];

  const achievements = [
    { icon: Users, label: 'Happy Users', value: '50K+' },
    { icon: Zap, label: 'Generations', value: '2M+' },
    { icon: Trophy, label: 'Satisfaction', value: '98%' }
  ];

  return (
    <section className="py-32 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-mesh" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 bg-background/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-shimmer">Everything You Need</span>
            <br />
            <span className="text-muted-foreground text-xl sm:text-3xl lg:text-4xl">in One Platform</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the complete suite of AI tools designed to transform your workflow, 
            boost creativity, and accelerate your projects.
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeFeature;
              
              return (
                <Card 
                  key={index}
                  className={`p-6 cursor-pointer transition-all duration-500 hover:shadow-float card-interactive ${
                    isActive ? 'border-primary/50 shadow-glow' : 'border-border/50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white transition-transform duration-300 ${
                      isActive ? 'scale-110' : ''
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 flex items-center">
                        {feature.title}
                        {isActive && <ArrowRight className="ml-2 h-4 w-4 text-primary animate-pulse" />}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{feature.description}</p>
                      
                      {/* Stats */}
                      <div className="flex space-x-4 text-xs">
                        {Object.entries(feature.stats).map(([key, value]) => (
                          <Badge key={key} variant="secondary" className="text-xs">
                            {key}: {value}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Demo Display */}
          <div className="relative">
            <Card className="p-8 bg-gradient-subtle border-border/50 min-h-[400px] flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} text-white mb-6`}>
                  {React.createElement(features[activeFeature].icon, { className: "h-8 w-8" })}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                <p className="text-muted-foreground mb-8">{features[activeFeature].demo}</p>
                
                <Button asChild className="btn-glow">
                  <Link to="/playground">
                    <Play className="mr-2 h-4 w-4" />
                    Try It Now
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-10 blur-2xl animate-float" />
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="p-8 text-center bg-gradient-subtle border-border/50 card-interactive">
                <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">{achievement.value}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;