import { Star, Quote, Users, Building2, TrendingUp, Award } from 'lucide-react';

const EnhancedTestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer",
      company: "TCS, Bangalore",
      image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=6366f1&color=fff&size=150",
      content: "As a fresher at TCS, UntrainedModel helped me learn React and Node.js in just 2 months. I built my first full-stack project using AI assistance and impressed my team lead. The best part? It's completely FREE! No expensive Udemy courses needed. I use it daily for debugging code and learning new concepts. It explains everything in simple English that I can understand.",
      rating: 5,
      metrics: { saved: "Saved ₹50,000", efficiency: "Learned 3x faster" }
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Content Creator & Blogger",
      company: "Mumbai",
      image: "https://ui-avatars.com/api/?name=Priya+Patel&background=ec4899&color=fff&size=150",
      content: "I was struggling to grow my blog and Instagram. UntrainedModel changed everything! I now create 10 blog posts and 50 Instagram captions weekly. My blog traffic increased from 500 to 15,000 monthly visitors. I'm earning ₹75,000/month from ads and sponsorships. The AI understands Hinglish perfectly and creates content that resonates with Indian audience. Best decision ever!",
      rating: 5,
      metrics: { saved: "Earning ₹75K/month", efficiency: "10x content output" }
    },
    {
      id: 3,
      name: "Arjun Reddy",
      role: "JEE Aspirant",
      company: "Hyderabad",
      image: "https://ui-avatars.com/api/?name=Arjun+Reddy&background=10b981&color=fff&size=150",
      content: "I was scoring 120/300 in JEE mocks and my parents spent ₹2 lakhs on coaching. Then I found UntrainedModel. I used it for doubt clearing, practice questions, and concept explanations in Hindi-English. My score jumped to 245/300 in 4 months! I got AIR 3,847 in JEE Main 2024 and got into NIT Warangal CSE. This free AI tool literally changed my life and career!",
      rating: 5,
      metrics: { saved: "Saved ₹2L coaching", efficiency: "Score +125 marks" }
    }
  ];

  const stats = [
    { icon: Users, label: "Indian Users", value: "5,000+", description: "Students & Professionals" },
    { icon: Building2, label: "Money Saved", value: "₹2+ Cr", description: "On courses & tools" },
    { icon: TrendingUp, label: "Success Rate", value: "94%", description: "Achieve their goals" },
    { icon: Award, label: "User Rating", value: "4.8/5", description: "Highly recommended" }
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
            Real Success Stories from India
          </div>
        </div>

        {/* Section Title */}
        <h2 className="apple-section-title text-foreground mb-4">
          Real Indians, Real Results
        </h2>
        <p className="apple-section-subtitle text-foreground/70 mb-16">
          See how Indian students, developers, and creators are using AI to study smarter, work faster, and earn more
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