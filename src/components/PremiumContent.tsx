import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Zap,
  Code2,
  FileText,
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Shield,
  Rocket,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumContent = () => {
  const features = [
    {
      icon: Code2,
      title: "AI Code Assistant for Indian Developers",
      description: "Write code 10x faster in Python, Java, JavaScript, C++, React, Node.js. Perfect for college projects, freelancing, and cracking interviews at top Indian IT companies.",
      capabilities: ["Full-stack web apps", "DSA for interviews", "Bug fixing & debugging", "College project help"]
    },
    {
      icon: FileText,
      title: "Content Creation for Indian Market",
      description: "Generate viral blog posts, Instagram captions, YouTube scripts, and marketing copy in English, Hindi, or Hinglish. Perfect for content creators, bloggers, and digital marketers.",
      capabilities: ["SEO blog posts", "Social media content", "Product descriptions", "Email campaigns"]
    },
    {
      icon: Database,
      title: "AI Study Assistant for Students",
      description: "Get homework help, exam preparation support for JEE/NEET/UPSC, and learn any subject faster. Explains concepts in simple Hindi-English that Indian students understand.",
      capabilities: ["JEE/NEET/UPSC prep", "Homework solutions", "Concept explanations", "Practice questions"]
    },
    {
      icon: Shield,
      title: "Business & Career Growth",
      description: "Get business ideas, marketing strategies, resume building, and career advice tailored for Indian market. Perfect for entrepreneurs, freelancers, and job seekers.",
      capabilities: ["Business planning", "Resume building", "Interview prep", "Marketing strategies"]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Save ₹50,000+ Monthly",
      description: "Replace expensive tools & freelancers with free AI"
    },
    {
      icon: Target,
      title: "Works on Slow Internet",
      description: "Optimized for Indian internet speeds & mobile"
    },
    {
      icon: Users,
      title: "Hindi + English Support",
      description: "Understands Hinglish and Indian context perfectly"
    }
  ];

  const stats = [
    { value: "99.5%", label: "Uptime", icon: CheckCircle },
    { value: "<1s", label: "Response Time", icon: Zap },
    { value: "5K+", label: "Active Users", icon: Users },
    { value: "24/7", label: "Support", icon: Clock }
  ];

  return (
    <section className="section-spacing section-even relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Flag */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">Why Choose UntrainedModel</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why choose
            <span className="block mt-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              UntrainedModel?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We bring together the best AI models for content, code, and design in one unified, free platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-card hover:bg-accent/5 border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-border/50">
                {feature.capabilities.map((capability, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-3xl p-8 md:p-12 border border-primary/10 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-background shadow-sm border border-border/50 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 mx-auto mb-3 text-primary/60">
                <stat.icon className="w-full h-full" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10" />
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join 5,000+ Indian Creators
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start using world-class AI tools for FREE. No credit card required. No signup needed.
          </p>

          <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
            <Link to="/playground" className="flex items-center gap-2">
              Get Started Free Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumContent;
