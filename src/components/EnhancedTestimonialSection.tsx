import { Star, Quote, Users, Building2, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="section-odd section-spacing relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-muted/20 to-background pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-accent/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Flag */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-flag"
          >
            <Quote className="w-4 h-4" />
            Real Success Stories from India
          </motion.div>
        </div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="apple-section-title text-foreground mb-4"
        >
          Real Indians, Real Results
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="apple-section-subtitle text-foreground/70 mb-16"
        >
          See how Indian students, developers, and creators are using AI to study smarter, work faster, and earn more
        </motion.p>

        {/* Testimonials Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 auto-rows-[minmax(300px,auto)]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`glass-card p-8 relative overflow-hidden group h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
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
                <blockquote className={`text-foreground/90 mb-8 leading-relaxed flex-grow ${index === 0 ? 'text-xl md:text-2xl font-medium' : 'text-base'}`}>
                  "{testimonial.content}"
                </blockquote>

                {/* Bottom Section */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=fff&size=48`;
                        }}
                      />
                      <div>
                        <div className="font-bold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-foreground/70">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex gap-6 text-sm">
                      <div>
                        <div className="font-bold text-primary">
                          {testimonial.metrics.saved}
                        </div>
                        <div className="text-xs text-foreground/60">Time Saved</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">
                          {testimonial.metrics.efficiency}
                        </div>
                        <div className="text-xs text-foreground/60">Efficiency Gain</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground/80 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-foreground/60">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonialSection;