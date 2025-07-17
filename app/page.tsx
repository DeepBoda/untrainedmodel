import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GlitchBackground from '@/components/GlitchBackground';

// Dynamically import components for better performance
const Playground = dynamic(() => import('@/components/Playground'), {
  loading: () => <div className="h-96 bg-gray-900/50 animate-pulse rounded-xl" />,
  ssr: false,
});

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div className="h-96 bg-gray-900/50 animate-pulse rounded-xl" />,
  ssr: false,
});

const Blog = dynamic(() => import('@/components/Blog'), {
  loading: () => <div className="h-96 bg-gray-900/50 animate-pulse rounded-xl" />,
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-32 bg-gray-900/50 animate-pulse" />,
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <GlitchBackground />
      <Header />
      <main>
        <Hero />
        <Playground />
        <Features />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}