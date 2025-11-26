import { Building2, TrendingUp, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const IndustryLeaders = () => {
  const companies = [
    { name: 'Microsoft', logo: '🏢', industry: 'Technology' },
    { name: 'Google', logo: '🔍', industry: 'Technology' },
    { name: 'Amazon', logo: '📦', industry: 'E-commerce' },
    { name: 'Meta', logo: '👥', industry: 'Social Media' },
    { name: 'Apple', logo: '🍎', industry: 'Technology' },
    { name: 'Netflix', logo: '🎬', industry: 'Entertainment' },
    { name: 'Spotify', logo: '🎵', industry: 'Music' },
    { name: 'Uber', logo: '🚗', industry: 'Transportation' }
  ];

  const industries = [
    {
      icon: Building2,
      name: 'Technology',
      description: 'Leading tech companies use our AI for development and innovation',
      count: '500+'
    },
    {
      icon: TrendingUp,
      name: 'Finance',
      description: 'Financial institutions trust our AI for analysis and automation',
      count: '200+'
    },
    {
      icon: Award,
      name: 'Healthcare',
      description: 'Healthcare providers leverage our AI for research and documentation',
      count: '150+'
    },
    {
      icon: Users,
      name: 'Education',
      description: 'Educational institutions use our AI for teaching and learning',
      count: '300+'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-spacing section-even relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Flag */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-flag"
          >
            <Building2 className="w-4 h-4" />
            Premium Enterprise Platform
          </motion.div>
        </div>

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="apple-section-title text-foreground"
        >
          Enterprise-grade AI
          <span className="block text-foreground/60">for modern teams</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="apple-section-subtitle text-foreground/70"
        >
          From startups to Fortune 500 companies, organizations worldwide trust our AI platform.
        </motion.p>

        {/* Company Logos */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-20 max-w-6xl mx-auto"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-card/30 border border-border/50 hover:bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0">{company.logo}</div>
              <div className="font-medium text-foreground text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity">{company.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center p-8 rounded-3xl border border-border/50 bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{industry.name}</h3>
                <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{industry.description}</p>

                <div className="pt-6 border-t border-border/10">
                  <div className="text-3xl font-bold text-primary mb-1">{industry.count}</div>
                  <div className="text-xs font-medium text-foreground/60 uppercase tracking-wider">Companies</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryLeaders;