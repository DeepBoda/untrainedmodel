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
      title: "Code Generation",
      description: "Generate production-ready code in 15+ programming languages with intelligent documentation.",
      capabilities: ["React components", "API endpoints", "Database queries", "Unit tests"]
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Create high-quality articles, marketing copy, and technical documentation.",
      capabilities: ["Blog articles", "Marketing copy", "Documentation", "Social posts"]
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with advanced analysis tools.",
      capabilities: ["Data processing", "Report generation", "Trend analysis", "Visualizations"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards.",
      capabilities: ["SOC 2 compliant", "GDPR ready", "Data encryption", "Access controls"]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "10x Faster",
      description: "Complete projects in hours, not days"
    },
    {
      icon: Target,
      title: "99% Accurate",
      description: "Professional-grade results every time"
    },
    {
      icon: Users,
      title: "Team Ready",
      description: "Built for collaboration and scale"
    }
  ];

  const stats = [
    { value: "99.5%", label: "Uptime", icon: CheckCircle },
    { value: "<1s", label: "Response Time", icon: Zap },
    { value: "5K+", label: "Active Users", icon: Users },
    { value: "24/7", label: "Support", icon: Clock }
  ];

  return (
    <section className="section-spacing section-even">
      <div className="section-container">
        {/* Section Flag */}
        <div className="flex justify-center">
          <div className="section-flag">
            <Rocket className="w-4 h-4" />
            Why Choose UntrainedModel
          </div>
        </div>
        
        {/* Section Header */}
        <h2 className="apple-section-title text-foreground">
          Why choose
          <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">UntrainedModel</span>
        </h2>
        
        <p className="apple-section-subtitle text-foreground/70">
          Our platform is engineered to provide a seamless and intuitive experience, allowing you to harness the power of advanced AI without the complexity. We bring together the best models for content creation, code generation, and data analysis in one unified interface, designed for both beginners and experts. Below, explore the features that make UntrainedModel the ideal choice for your creative and technical projects.
        </p>

        {/* Features Grid */}
        <div className="apple-grid apple-grid-4 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="apple-card">
              <div className="apple-card-icon">
                <feature.icon className="w-6 h-6" />
              </div>
              
              <div className="apple-card-content">
                <h3 className="apple-card-title text-foreground">{feature.title}</h3>
                
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/60">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="apple-grid apple-grid-3 mb-16 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="apple-grid apple-grid-4 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="apple-card text-center">
              <div className="apple-card-icon mx-auto">
                <stat.icon className="w-6 h-6" />
              </div>
              
              <div className="apple-card-content">
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="font-medium text-foreground/80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>



        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to make your own wonder?</h3>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have revolutionized their creative process with AI.
          </p>
          
          <Button asChild className="apple-button">
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
