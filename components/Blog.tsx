import React from 'react';
import { Calendar, TrendingUp, MessageCircle, Zap } from 'lucide-react';
import Image from 'next/image';

const Blog = () => {
  const posts = [
    {
      title: "We Raised $10M for an AI That Forgets Everything",
      excerpt: "Our revolutionary memory-loss technology is disrupting the entire concept of learning. VCs are throwing money at us faster than our AI forgets where it put the business plan.",
      date: "2 days ago",
      views: "15.2k",
      comments: "247",
      category: "Funding",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "AI Told Me to Buy Dogecoin. Here's What Happened.",
      excerpt: "Following financial advice from our untrained model for 30 days. Spoiler: I now own a lot of digital dogs and my therapist is concerned.",
      date: "5 days ago",
      views: "23.7k",
      comments: "892",
      category: "Experiment",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "How to Gaslight Your Users (With Love)",
      excerpt: "A comprehensive guide to building AI that confidently provides wrong answers. Because sometimes being wrong with confidence is better than being right with doubt.",
      date: "1 week ago",
      views: "31.4k",
      comments: "156",
      category: "Product",
      image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const hallucinations = [
    '"The moon is actually a government surveillance cheese wheel." - UntrainedGPT',
    '"JavaScript is a vegetable." - ChaosBot 3000',
    '"Money grows on trees, but only on Tuesdays." - FinanceAI',
    '"The internet is just a series of very confused tubes." - NetworkNinja'
  ];

  return (
    <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Hallucinations Blog
          </h2>
          <p className="text-xl text-gray-300">
            Where tech satire meets actual AI chaos. Sometimes we can't tell the difference either.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center mb-3">
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.date}
                          </span>
                          <span className="flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            {post.views}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transform transition-all">
                Read More Chaos
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Latest Hallucinations */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-pink-500/30 p-6">
              <h3 className="text-xl font-bold mb-4 text-pink-400 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Latest Hallucinations
              </h3>
              <div className="space-y-4">
                {hallucinations.map((quote, index) => (
                  <blockquote
                    key={index}
                    className="border-l-4 border-cyan-500 pl-4 text-gray-300 italic text-sm"
                  >
                    {quote}
                  </blockquote>
                ))}
              </div>
            </div>

            {/* Ad Container */}
            <div className="ad-container">
              <p className="text-gray-500 text-sm">Advertisement Space</p>
            </div>

            {/* Subscribe */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-6">
              <h3 className="text-xl font-bold mb-4 text-white">
                Subscribe to Chaos
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Get weekly doses of AI nonsense delivered straight to your inbox. Side effects may include enlightenment.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  aria-label="Email address"
                />
                <button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition-all">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-yellow-500/30 p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                Chaos Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Total Hallucinations:</span>
                  <span className="text-white font-bold">42,069</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Accuracy Rate:</span>
                  <span className="text-red-400 font-bold">-3.7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Confused Users:</span>
                  <span className="text-cyan-400 font-bold">∞</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Existential Crises:</span>
                  <span className="text-pink-400 font-bold">1337</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;