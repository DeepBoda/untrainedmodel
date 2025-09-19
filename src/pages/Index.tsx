import Layout from '@/components/Layout';
import AdvancedHero from '@/components/AdvancedHero';
import PremiumContent from '@/components/PremiumContent';
import EnhancedFeatureShowcase from '@/components/EnhancedFeatureShowcase';
import IndustryLeaders from '@/components/IndustryLeaders';
import EnhancedTestimonialSection from '@/components/EnhancedTestimonialSection';
import RecentBlogPosts from '@/components/RecentBlogPosts';
import { StructuredData } from '@/components/StructuredData';

const Index = () => {
  return (
    <Layout
      title="UntrainedModel - Professional AI Platform for Content, Code & Design"
      description="Transform your workflow with advanced AI technology. Generate professional content, production-ready code, and stunning visuals using GPT-4, Claude 3, and Gemini Pro. Trusted by 5,000+ creators worldwide."
      keywords="advanced AI platform, professional AI tools, GPT-4, Claude 3, Gemini Pro, content creation, code generation, AI design tools, business AI solutions, enterprise AI platform"
    >
      <div className="relative">
        <StructuredData type="website" />

        {/* Hero Section - Section 1 (Odd) */}
        <AdvancedHero />

        {/* Features - Section 2 (Even) */}
        <EnhancedFeatureShowcase />

        {/* Premium Content - Section 3 (Odd) */}
        <PremiumContent />

        {/* Industry Leaders - Section 4 (Even) */}
        <IndustryLeaders />

        {/* Testimonials - Section 5 (Odd) */}
        <EnhancedTestimonialSection />

        {/* Blog Posts - Section 6 (Even) */}
        <RecentBlogPosts />
      </div>
    </Layout>
  );
};

export default Index;
