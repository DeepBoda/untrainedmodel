import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Cpu, Zap, Globe, Users, Code2, Play, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdvancedHero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { label: 'AI Models', value: '15+', icon: Cpu, description: 'GPT-4, Claude 3, Gemini Pro' },
    { label: 'Active Users', value: '5K+', icon: Users, description: 'Growing community worldwide' },
    { label: 'Content Generated', value: '500K+', icon: Code2, description: 'Articles, code, and more' },
    { label: 'Countries Served', value: '80+', icon: Globe, description: 'Global accessibility' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background section-odd overflow-hidden">
      {/* AI/Robot Glowing Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* AI Brain Glow */}
        <div className="absolute top-20 left-20 w-64 h-64">
          <div className="w-full h-full bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute inset-4 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded-full blur-xl animate-float" />
        </div>
        
        {/* Robot Circuit Glow */}
        <div className="absolute bottom-32 right-16 w-80 h-80">
          <div className="w-full h-full bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute inset-8 bg-gradient-to-r from-teal-400/30 to-green-500/30 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
        </div>
        
        {/* Neural Network Glow */}
        <div className="absolute top-1/3 right-1/4 w-48 h-48">
          <div className="w-full h-full bg-gradient-to-r from-pink-400/25 to-rose-600/25 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }} />
        </div>
        
        {/* Data Stream Glow */}
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56">
          <div className="w-full h-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Central AI Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="w-full h-full bg-gradient-to-r from-primary/8 via-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute inset-16 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-float-slow" />
        </div>
      </div>
      <div className="section-container text-center py-20 relative z-10">
        {/* Section Flag */}
        <div className="flex justify-center mb-8">
          <div className="section-flag">
            <Star className="w-4 h-4" />
            Trusted by 5,000+ professionals worldwide
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="apple-title text-foreground mb-6">
          Transform your workflow with
          <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            UntrainedModel
          </span>
        </h1>

        {/* Description */}
        <p className="apple-section-subtitle text-foreground/70 max-w-3xl mx-auto">
          India's #1 FREE AI platform trusted by 5,000+ students, developers, and creators. Access ChatGPT-4, Google Gemini 2.0, and Claude 3 without signup. Generate code, write content, prepare for JEE/NEET/UPSC, build businesses - all in one place. Works perfectly on Indian internet speeds with full Hindi & Hinglish support.
        </p>
        <div className="prose prose-lg prose-gray dark:prose-invert max-w-3xl mx-auto text-left mt-8">
          <p>
            <strong>Why UntrainedModel is Perfect for India:</strong> We understand the unique challenges Indian users face - expensive AI subscriptions, slow internet, language barriers, and lack of local context. That's why we built a platform that's completely FREE, works on 3G/4G, supports Hindi & Hinglish, and understands Indian culture, exams, and business needs.
          </p>
          <ul>
            <li><strong>For Indian Students (JEE/NEET/UPSC):</strong> Get 24/7 homework help, exam preparation support, concept explanations in Hindi-English, practice questions, and study plans. Save ₹1-2 lakhs on coaching by using AI for personalized learning.</li>
            <li><strong>For Indian Developers & Engineers:</strong> Write code 10x faster in Python, Java, JavaScript, React, Node.js. Debug errors instantly. Build college projects. Prepare for coding interviews at TCS, Infosys, Wipro, Amazon, Google. Learn new frameworks without expensive courses.</li>
            <li><strong>For Content Creators & Freelancers:</strong> Generate viral blog posts, Instagram captions in Hinglish, YouTube scripts, product descriptions, and marketing copy. Earn ₹50,000+ monthly by offering AI-powered content services to clients.</li>
            <li><strong>For Entrepreneurs & Small Businesses:</strong> Create business plans, marketing strategies, website copy, social media content, and investor pitches. Save ₹2-5 lakhs monthly on content writers, developers, and marketing agencies.</li>
          </ul>
          <p>
            <strong>100% Free. No Signup. No Credit Card.</strong> We don't store your conversations or sell your data. Your privacy is protected. What you create is yours. Start now and join 5,000+ Indians already using AI to study smarter, work faster, and earn more.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button asChild className="apple-button">
            <Link to="/playground" className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              Start Creating Free
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="apple-button-secondary">
            <Link to="/about" className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Explore Features
            </Link>
          </Button>
        </div>

        {/* Perfect 4-Card Grid */}
        <div className="apple-grid apple-grid-4 max-w-5xl mx-auto gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isActive = index === currentStat;
            
            return (
              <div 
                key={index}
                className={`apple-card text-center transition-all duration-500 ${
                  isActive ? 'ring-2 ring-primary/30 bg-primary/5 scale-105' : ''
                }`}
              >
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

export default AdvancedHero;
