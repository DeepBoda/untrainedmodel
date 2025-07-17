import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, TrendingUp } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/blog';
import { AnimatedText, AnimatedContainer } from '@/components/ui/AnimatedText';

export const metadata: Metadata = {
  title: 'Hallucinations Blog - UntrainedModel.xyz',
  description: 'Tech satire, AI chaos, and beautiful nonsense. Where billion-dollar ideas meet garage hacks.',
  openGraph: {
    title: 'Hallucinations Blog - UntrainedModel.xyz',
    description: 'Tech satire, AI chaos, and beautiful nonsense. Where billion-dollar ideas meet garage hacks.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedText className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Hallucinations Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where tech satire meets actual AI chaos. Sometimes we can't tell the difference either.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimatedContainer key={post.slug} delay={index * 0.1}>
              <article className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime} min
                        </span>
                      </div>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            </AnimatedContainer>
          ))}
        </div>

        {/* Newsletter Signup */}
        <AnimatedContainer delay={0.5} className="mt-16">
          <div className="bg-gradient-to-br from-cyan-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Subscribe to Chaos
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get weekly doses of AI nonsense delivered straight to your inbox. Side effects may include enlightenment, confusion, and sudden urges to question reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                aria-label="Email address"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transform transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}