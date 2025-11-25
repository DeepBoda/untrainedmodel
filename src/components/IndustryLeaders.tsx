import { Building2, TrendingUp, Award, Users } from 'lucide-react';

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

  return (
    <section className="section-spacing section-even">
      <div className="section-container">
        {/* Section Flag */}
        <div className="flex justify-center">
          <div className="section-flag">
            <Building2 className="w-4 h-4" />
            Premium Enterprise Platform
          </div>
        </div>

        {/* Section Header */}
        <h2 className="apple-section-title text-foreground">
          Enterprise-grade AI
          <span className="block text-foreground/60">for modern teams</span>
        </h2>

        <p className="apple-section-subtitle text-foreground/70">
          From startups to Fortune 500 companies, organizations worldwide trust our AI platform.
        </p>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16 max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-card/30 border border-border/50 hover:bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0">{company.logo}</div>
              <div className="font-medium text-foreground text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity">{company.name}</div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="apple-grid apple-grid-4 max-w-5xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} className="apple-card text-center">
                <div className="apple-card-icon mx-auto">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="apple-card-content">
                  <h3 className="apple-card-title text-foreground">{industry.name}</h3>
                  <p className="text-foreground/70 mb-4">{industry.description}</p>
                  <div className="text-2xl font-bold text-primary">{industry.count}</div>
                  <div className="text-sm text-foreground/60">Companies</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryLeaders;