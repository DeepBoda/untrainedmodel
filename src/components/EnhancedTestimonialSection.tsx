import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Zap, TrendingUp } from 'lucide-react';

const EnhancedTestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "AI Researcher",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      content: "UntrainedModel has revolutionized our research workflow. The code generation capabilities saved us months of development time, and the accuracy is phenomenal.",
      rating: 5,
      highlight: "Saved 6 months",
      category: "Research",
      metrics: { timesSaved: "6 months", productivity: "300%" }
    },
    {
      name: "Marcus Rodriguez",
      role: "Content Creator",
      company: "Creative Studio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      content: "The content generation quality is phenomenal. I've increased my productivity by 400% while maintaining exceptional quality. This is a game-changer for creators.",
      rating: 5,
      highlight: "400% productivity boost",
      category: "Creative",
      metrics: { contentCreated: "10K+", efficiency: "400%" }
    },
    {
      name: "Dr. Emily Watson",
      role: "Data Scientist",
      company: "DataTech Inc",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      content: "The AI models are incredibly accurate and fast. Perfect for rapid prototyping and production-ready solutions. The 99.2% accuracy rate speaks for itself.",
      rating: 5,
      highlight: "99.2% accuracy",
      category: "Data Science",
      metrics: { accuracy: "99.2%", models: "50+" }
    },
    {
      name: "Alex Kim",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      content: "As a non-technical founder, this platform gave me the tools to build and prototype quickly. It's democratizing AI access for everyone.",
      rating: 5,
      highlight: "Non-technical friendly",
      category: "Startup",
      metrics: { prototypes: "25+", timeToMarket: "70% faster" }
    },
    {
      name: "Lisa Zhang",
      role: "Marketing Director",
      company: "Growth Co",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      content: "Our campaign creation time dropped from weeks to hours. The AI understands our brand voice perfectly and maintains consistency across all content.",
      rating: 5,
      highlight: "Weeks to hours",
      category: "Marketing",
      metrics: { campaigns: "150+", engagement: "+285%" }
    }
  ];

  const trustMetrics = [
    { icon: Award, value: '4.9/5', label: 'Average Rating', subtext: 'From 10K+ reviews' },
    { icon: Star, value: '50K+', label: 'Happy Users', subtext: 'Worldwide community' },
    { icon: TrendingUp, value: '99.8%', label: 'Uptime', subtext: 'Enterprise reliability' },
    { icon: Zap, value: '24/7', label: 'Support', subtext: 'Always here to help' }
  ];

  // Intersection Observer
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden section-padding"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-primary rounded-full opacity-[0.03] blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-primary-variant to-primary rounded-full opacity-[0.02] blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-gradient-mesh opacity-[0.01]" />
      </div>

      <div className="container-full relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center space-element ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <Badge 
            variant="outline" 
            className="glass-morphism border-primary/20 text-primary space-content"
            style={{ 
              padding: 'var(--space-3) var(--space-8)',
              borderRadius: 'var(--radius-3xl)',
              gap: 'var(--space-2)'
            }}
          >
            <Star className="w-4 h-4 text-yellow-500" />
            Success Stories
            <Award className="w-4 h-4" />
          </Badge>
          
          <h2 
            className="font-bold text-balance space-content"
            style={{ 
              fontSize: 'var(--font-size-5xl)',
              lineHeight: 'var(--leading-tight)'
            }}
          >
            <span className="text-shimmer block space-tight">Loved by Creators</span>
            <span 
              className="text-muted-foreground block"
              style={{ fontSize: 'var(--font-size-3xl)' }}
            >
              Worldwide
            </span>
          </h2>
          
          <p 
            className="text-muted-foreground container-tight text-balance"
            style={{ 
              fontSize: 'var(--font-size-xl)',
              lineHeight: 'var(--leading-relaxed)'
            }}
          >
            Join thousands of satisfied users who have transformed their workflows with our AI platform. 
            Real stories from real people who are building the future.
          </p>
        </div>

        {/* Enhanced Main Testimonial Display */}
        <div className={`relative container-tight space-element ${isVisible ? 'animate-slide-up stagger-2' : 'opacity-0'}`}>
          <Card className="glass-morphism border-border/20 relative overflow-hidden lg:p-16"
                style={{ padding: 'var(--space-12)' }}>
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-primary opacity-[0.02]" />
            <Quote className="absolute top-8 left-8 h-16 w-16 text-primary/15" />
            
            {/* Category Badge */}
            <div className="absolute top-8 right-8">
              <Badge 
                variant="outline" 
                className="bg-primary/10 text-primary border-primary/20"
              >
                {currentTestimonial.category}
              </Badge>
            </div>
            
            {/* Content */}
            <div className="text-center relative z-10">
              {/* Rating Stars */}
              <div className="mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="inline-block h-7 w-7 text-yellow-500 fill-current mx-1" 
                  />
                ))}
              </div>
              
              {/* Testimonial Quote */}
              <blockquote 
                className="font-medium mb-10 leading-relaxed text-balance"
                style={{ fontSize: 'var(--font-size-2xl)' }}
              >
                "{currentTestimonial.content}"
              </blockquote>
              
              {/* User Info */}
              <div className="flex items-center justify-center space-x-6 mb-8">
                <Avatar className="h-20 w-20 border-2 border-primary/20 shadow-depth">
                  <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                  <AvatarFallback className="text-lg">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-left">
                  <div 
                    className="font-bold"
                    style={{ fontSize: 'var(--font-size-xl)' }}
                  >
                    {currentTestimonial.name}
                  </div>
                  <div 
                    className="text-muted-foreground"
                    style={{ fontSize: 'var(--font-size-base)' }}
                  >
                    {currentTestimonial.role}
                  </div>
                  <div 
                    className="text-primary font-medium"
                    style={{ fontSize: 'var(--font-size-sm)' }}
                  >
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {Object.entries(currentTestimonial.metrics).map(([key, value]) => (
                  <Badge 
                    key={key}
                    variant="outline" 
                    className="bg-primary/5 text-primary border-primary/20 px-4 py-2"
                  >
                    <span className="font-semibold">{key}:</span>
                    <span className="ml-1">{value}</span>
                  </Badge>
                ))}
              </div>
              
              {/* Highlight Badge */}
              <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 shadow-glow">
                {currentTestimonial.highlight}
              </Badge>
            </div>

            {/* Navigation */}
            <div className="absolute inset-y-0 left-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="h-14 w-14 rounded-full glass-morphism hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute inset-y-0 right-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="h-14 w-14 rounded-full glass-morphism hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Enhanced Testimonial Indicators */}
        <div className={`flex justify-center space-x-4 mb-20 ${isVisible ? 'animate-slide-up stagger-3' : 'opacity-0'}`}>
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group relative transition-all duration-500 ${
                index === currentIndex ? 'scale-125' : 'hover:scale-110'
              }`}
            >
              <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'bg-primary shadow-glow' 
                  : 'bg-muted-foreground/30 group-hover:bg-primary/50'
              }`} />
              
              {index === currentIndex && (
                <div className="absolute inset-0 w-4 h-4 rounded-full border-2 border-primary/30 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Trust Metrics */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto ${isVisible ? 'animate-slide-up stagger-4' : 'opacity-0'}`}>
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="text-center group">
                <Icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div 
                  className="font-bold text-primary mb-2"
                  style={{ fontSize: 'var(--font-size-2xl)' }}
                >
                  {metric.value}
                </div>
                <div 
                  className="text-foreground font-medium mb-1"
                  style={{ fontSize: 'var(--font-size-base)' }}
                >
                  {metric.label}
                </div>
                <div 
                  className="text-muted-foreground"
                  style={{ fontSize: 'var(--font-size-xs)' }}
                >
                  {metric.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonialSection;