import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Code2, 
  Image, 
  FileText, 
  Mic, 
  Video, 
  Palette, 
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';

const PremiumContent = () => {
  const features = [
    {
      icon: Code2,
      title: "Advanced Code Generation",
      description: "Generate production-ready code in 50+ programming languages with intelligent documentation and best practices.",
      capabilities: ["Full-stack applications", "API integrations", "Database schemas", "Testing frameworks"],
      category: "Development"
    },
    {
      icon: FileText,
      title: "Professional Content Creation",
      description: "Create high-quality articles, marketing copy, technical documentation, and SEO-optimized content.",
      capabilities: ["Blog articles", "Marketing campaigns", "Technical docs", "Social media content"],
      category: "Content"
    },
    {
      icon: Image,
      title: "AI-Powered Visual Design",
      description: "Generate stunning images, logos, illustrations, and design assets for any project or brand.",
      capabilities: ["Brand assets", "Product mockups", "Illustrations", "Social graphics"],
      category: "Design"
    },
    {
      icon: Database,
      title: "Data Analysis & Insights",
      description: "Transform raw data into actionable insights with advanced analysis and visualization tools.",
      capabilities: ["Data processing", "Report generation", "Trend analysis", "Predictive modeling"],
      category: "Analytics"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at TechCorp",
      content: "UntrainedModel has revolutionized our development workflow. The code generation is incredibly accurate and saves us hours daily.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Marketing Director",
      content: "The content quality is outstanding. We've increased our content output by 300% while maintaining premium quality standards.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Creative Director",
      content: "The AI-generated visuals are indistinguishable from professional design work. It's transformed our creative process.",
      rating: 5,
      avatar: "ET"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
    { value: "50ms", label: "Average Response Time", icon: Zap },
    { value: "10K+", label: "Active Users", icon: Users },
    { value: "24/7", label: "Expert Support", icon: Clock }
  ];

  return (
    <section className="relative overflow-hidden section-padding"
             style={{ background: 'var(--gradient-subtle)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute rounded-perfect-full bg-primary/20 animate-float"
             style={{ 
               top: '25%',
               left: '25%',
               width: 'var(--space-64)',
               height: 'var(--space-64)',
               filter: 'blur(var(--blur-3xl))'
             }} />
        <div className="absolute rounded-perfect-full bg-accent/20 animate-float"
             style={{ 
               bottom: '25%',
               right: '25%',
               width: 'var(--space-64)',
               height: 'var(--space-64)',
               filter: 'blur(var(--blur-3xl))',
               animationDelay: '2s'
             }} />
      </div>

      <div className="relative z-10 container-full">
        {/* Section Header */}
        <motion.div 
          className="text-center space-element"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" 
                 className="text-primary border-primary/30 space-content"
                 style={{ 
                   padding: 'var(--space-2) var(--space-6)',
                   borderRadius: 'var(--radius-3xl)',
                   gap: 'var(--space-2)'
                 }}>
            <Star className="w-4 h-4" />
            Premium AI Platform
          </Badge>
          
          <h2 className="font-bold text-balance space-content"
              style={{ fontSize: 'var(--font-size-5xl)' }}>
            Unleash the Power of 
            <span className="text-shimmer"> Advanced AI</span>
          </h2>
          
          <p className="text-muted-foreground container-tight"
             style={{ 
               fontSize: 'var(--font-size-xl)',
               lineHeight: 'var(--leading-relaxed)'
             }}>
            Experience next-generation artificial intelligence that understands context, creates with precision, 
            and delivers professional-grade results across every creative and technical domain.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-8 h-full glass-morphism border-border/20 hover:border-primary/30 hover:shadow-glow transition-all duration-700">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {feature.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl glass-morphism border border-border/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 h-full glass-morphism border-border/20 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Workflow?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already revolutionized their creative process with AI.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button 
              size="lg" 
              className="btn-glow px-12 py-6 text-lg font-semibold group"
              style={{ background: 'var(--gradient-primary)' }}
            >
              Get Started Free Today
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumContent;