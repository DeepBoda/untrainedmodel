import Layout from '@/components/Layout';
import ParticleBackground from '@/components/ParticleBackground';
import FuturisticHero from '@/components/FuturisticHero';
import FeatureShowcase from '@/components/FeatureShowcase';
import TestimonialSection from '@/components/TestimonialSection';
import { HeaderAd, InContentAd } from '@/components/AdSpace';

const Index = () => {
  return (
    <Layout
      title="UntrainedModel - Advanced AI Playground & Content Generator"
      description="Experience cutting-edge AI technology with our comprehensive platform. Generate high-quality content, code, and images using advanced AI models like GPT-4 and Gemini. Free AI playground for developers, creators, and businesses."
      keywords="AI playground, GPT-4, Gemini AI, content generation, code generation, image generation, artificial intelligence, AI tools, machine learning, natural language processing, free AI, AI chatbot"
    >
      <div className="relative">
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