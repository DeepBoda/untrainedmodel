import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "AI Researcher",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      content: "UntrainedModel has revolutionized our research workflow. The code generation capabilities saved us months of development time.",
      rating: 5,
      highlight: "Saved 6 months"
    },
    {
      name: "Marcus Rodriguez",
      role: "Content Creator",
      company: "Creative Studio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      content: "The content generation quality is phenomenal. I've increased my productivity by 400% while maintaining exceptional quality.",
      rating: 5,
      highlight: "400% productivity boost"
    },
    {
      name: "Dr. Emily Watson",
      role: "Data Scientist",
      company: "DataTech Inc",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      content: "The AI models are incredibly accurate and fast. Perfect for rapid prototyping and production-ready solutions.",
      rating: 5,
      highlight: "99.2% accuracy"
    },
    {
      name: "Alex Kim",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      content: "As a non-technical founder, this platform gave me the tools to build and prototype quickly. Game-changing for startups.",
      rating: 5,
      highlight: "Non-technical friendly"
    },
    {
      name: "Lisa Zhang",
      role: "Marketing Director",
      company: "Growth Co",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      content: "Our campaign creation time dropped from weeks to hours. The AI understands our brand voice perfectly.",
      rating: 5,
      highlight: "Weeks to hours"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 bg-background/50 backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            Success Stories
          </Badge>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-shimmer">Loved by Creators</span>
            <br />
            <span className="text-muted-foreground text-3xl lg:text-4xl">Worldwide</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their workflows with our AI platform
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="p-12 bg-gradient-subtle border-border/50 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/20" />
            
            {/* Content */}
            <div className="text-center relative z-10">
              <div className="mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="inline-block h-6 w-6 text-yellow-500 fill-current mx-1" />
                ))}
              </div>
              
              <blockquote className="text-2xl lg:text-3xl font-medium mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Avatar className="h-16 w-16 border-2 border-primary/20">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                  <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="text-left">
                  <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                  <div className="text-sm text-primary">{testimonials[currentIndex].company}</div>
                </div>
              </div>
              
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                {testimonials[currentIndex].highlight}
              </Badge>
            </div>

            {/* Navigation */}
            <div className="absolute inset-y-0 left-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute inset-y-0 right-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '50K+', label: 'Happy Users' },
            { value: '99.8%', label: 'Uptime' },
            { value: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;