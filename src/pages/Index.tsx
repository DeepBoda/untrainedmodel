import Layout from '@/components/Layout';
import ParticleBackground from '@/components/ParticleBackground';
import FuturisticHero from '@/components/FuturisticHero';
import FeatureShowcase from '@/components/FeatureShowcase';
import TestimonialSection from '@/components/TestimonialSection';
import { HeaderAd, InContentAd } from '@/components/AdSpace';
import { StructuredData } from '@/components/StructuredData';

const Index = () => {
  return (
    <Layout
      title="UntrainedModel - Free AI Tools for Content & Code Generation"
      description="Access powerful AI tools for free. Generate high-quality content, code, and images using GPT-4, Gemini, and Claude. Free AI playground for developers, creators, and businesses."
      keywords="free AI tools, GPT-4, Gemini AI, Claude AI, content generation, code generation, AI playground, artificial intelligence, machine learning, free AI chatbot"
    >
      <div className="relative">
        <StructuredData type="website" />
        <ParticleBackground />
        
        <HeaderAd />

        {/* Hero Section */}
        <FuturisticHero />

        {/* Features Section */}
        <FeatureShowcase />

        <InContentAd />

        {/* Testimonials */}
        <TestimonialSection />
      </div>
    </Layout>
  );
};

export default Index;