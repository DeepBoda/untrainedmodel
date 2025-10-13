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
      title="UntrainedModel - Free AI Platform for Students, Developers & Content Creators in India | GPT-4, Gemini, Claude"
      description="India's best free AI platform for students, developers, content creators & businesses. Use ChatGPT-4, Google Gemini 2.0, Claude 3 for coding, content writing, exam prep (JEE/NEET/UPSC), business planning. No signup required. Hindi support available."
      keywords="free AI platform India, ChatGPT alternative India, Google Gemini India, AI for students India, AI coding assistant, AI content writer, JEE NEET UPSC AI tools, free GPT-4 India, AI playground India, prompt engineering, AI for developers India, AI business tools India, Hindi AI assistant, best AI tools 2025 India"
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
