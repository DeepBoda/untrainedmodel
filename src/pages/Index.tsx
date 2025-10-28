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
      title="UntrainedModel - Free AI Platform India 2025 | ChatGPT-4, Gemini 2.0, Claude 3 | No Signup Required"
      description="India's #1 free AI platform 2025 for students, developers, content creators. Access ChatGPT-4, Google Gemini 2.0 Flash, Claude 3.5 instantly. JEE/NEET/UPSC prep, coding help, content writing, business tools. No signup, no payment. Hindi support. Works on 3G/4G."
      keywords="free AI platform India 2025, ChatGPT 4 free India, Gemini 2.0 free access, Claude 3.5 India, AI without signup, best AI tools 2025, JEE NEET UPSC AI, free coding AI India, AI content writer India, prompt engineering 2025, AI for students India, Hindi AI chatbot, free GPT-4 alternative, AI playground India, make money with AI India, AI business tools India, developer AI assistant, no login AI platform"
    >
      <div className="relative overflow-hidden">
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
