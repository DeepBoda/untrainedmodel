import Layout from '@/components/Layout';
import AdvancedHero from '@/components/AdvancedHero';
import PremiumContent from '@/components/PremiumContent';
import EnhancedFeatureShowcase from '@/components/EnhancedFeatureShowcase';
import EnhancedTestimonialSection from '@/components/EnhancedTestimonialSection';
import { HeaderAd, InContentAd } from '@/components/AdSpace';
import { StructuredData } from '@/components/StructuredData';

const Index = () => {
  return (
    <Layout
      title="UntrainedModel - Professional AI Platform for Content, Code & Design"
      description="Transform your workflow with advanced AI technology. Generate professional content, production-ready code, and stunning visuals using GPT-4, Claude 3, and Gemini Pro. Trusted by 10,000+ creators worldwide."
      keywords="advanced AI platform, professional AI tools, GPT-4, Claude 3, Gemini Pro, content creation, code generation, AI design tools, business AI solutions, enterprise AI platform"
    >
      <div className="relative">
        <StructuredData type="website" />
        
        <HeaderAd />

        {/* Advanced Hero Section */}
        <AdvancedHero />

        {/* Premium Content Section */}
        <PremiumContent />

        <InContentAd />

        {/* Enhanced Features */}
        <EnhancedFeatureShowcase />

        {/* Testimonials */}
        <EnhancedTestimonialSection />
      </div>
    </Layout>
  );
};

export default Index;