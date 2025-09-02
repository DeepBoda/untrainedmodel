import { Star, Quote, Users, Building2, TrendingUp, Award } from 'lucide-react';

const EnhancedTestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Developer",
      company: "Stripe",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      content: "UntrainedModel has revolutionized our development workflow. The code generation quality is exceptional, and it integrates seamlessly with our existing tools. We've reduced development time by 40% and improved code consistency across our team. The AI understands context perfectly and generates production-ready code that follows our coding standards.",
      rating: 5,
      metrics: { saved: "15 hours/week", efficiency: "+40%" }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Content Director",
      company: "Buffer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The content generation capabilities are outstanding. We create high-quality blog posts, social media content, and marketing copy in minutes instead of hours. The AI understands our brand voice perfectly and maintains consistency across all platforms. Our content engagement has increased by 60% since we started using UntrainedModel.",
      rating: 5,
      metrics: { saved: "25 hours/week", efficiency: "+60%" }
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "AI Research Lead",
      company: "DeepMind",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The multi-model approach gives us flexibility to choose the best AI for each task. GPT-4 for complex reasoning, Claude for analysis, Gemini for speed. It's like having a complete AI toolkit that adapts to our research needs and accelerates our discoveries. The platform has become essential for our research workflow.",
      rating: 5,
      metrics: { saved: "20 hours/week", efficiency: "+50%" }
    }
  ];

  const stats = [
    { icon: Users, label: "Active Users", value: "5,000+", description: "Growing daily" },
    { icon: Building2, label: "Companies", value: "500+", description: "Trust our platform" },
    { icon: TrendingUp, label: "Productivity Gain", value: "52%", description: "Average improvement" },
    { icon: Award, label: "Satisfaction", value: "4.9/5", description: "User rating" }
  ];

  return (
    <section className="section-odd section-spacing relative">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-muted/20 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-accent/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl" />
      </div>
      <div className="section-container relative z-10">
        {/* Section Flag */}
        <div className="flex justify-center mb-8">
          <div className="section-flag">
            <Quote className="w-4 h-4" />
            Trusted by industry leaders worldwide
          </div>
        </div>

        {/* Section Title */}
        <h2 className="apple-section-title text-foreground mb-4">
          What our users are saying
        </h2>
        <p className="apple-section-subtitle text-foreground/70 mb-16">
          Join thousands of professionals who have transformed their workflow with UntrainedModel
        </p>

        {/* Testimonials Grid */}
        <div className="apple-grid apple-grid-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="apple-card p-8 relative overflow-hidden group h-full flex flex-col">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="w-12 h-12 mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-foreground/90 mb-6 leading-relaxed text-base flex-grow">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Bottom Section */}
                <div className="mt-auto">
                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=fff&size=48`;
                      }}
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-foreground/70">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="flex gap-6 text-sm pt-4 border-t border-border/20">
                    <div>
                      <div className="font-semibold text-primary">
                        {testimonial.metrics.saved}
                      </div>
                      <div className="text-foreground/60">Time Saved</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">
                        {testimonial.metrics.efficiency}
                      </div>
                      <div className="text-foreground/60">Efficiency Gain</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="apple-grid apple-grid-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="apple-card text-center animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
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

export default EnhancedTestimonialSection;