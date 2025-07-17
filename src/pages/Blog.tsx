import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag, Skull, Zap, Bug } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    slug: "we-raised-10m-for-broken-ai",
    title: "We Just Raised $10M for an AI That Doesn't Work",
    excerpt: "VCs threw money at us after our AI suggested they invest in Dogecoin. Here's how we accidentally became unicorn material.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Chaos CEO",
    date: "2025-01-15",
    readTime: "5 min chaos",
    category: "Startup BS",
    chaos: 95
  };

  const blogPosts = [
    {
      slug: "ai-told-me-buy-dogecoin",
      title: "AI Told Me to Buy Dogecoin. I Did. Here's What Happened.",
      excerpt: "Spoiler alert: I now live in a cardboard box, but at least it's a smart cardboard box with IoT sensors.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Broke Developer",
      date: "2025-01-12",
      readTime: "3 min regret",
      category: "Life Choices",
      chaos: 88
    },
    {
      slug: "debugging-my-relationship",
      title: "I Tried to Debug My Relationship Using Git Commands",
      excerpt: "Turns out 'git blame' doesn't work on girlfriends. Who knew? A cautionary tale of mixing code with love.",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Single Programmer",
      date: "2025-01-10",
      readTime: "7 min tears",
      category: "Life Hacks",
      chaos: 92
    },
    {
      slug: "javascript-created-by-aliens",
      title: "Proof That JavaScript Was Created by Aliens Who Hate Humans",
      excerpt: "An in-depth analysis of why '0' == false but '0' != false makes perfect sense to extraterrestrial beings.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Conspiracy Coder",
      date: "2025-01-08",
      readTime: "10 min truth",
      category: "Tech Theories",
      chaos: 97
    },
    {
      slug: "css-gods-sacrifice-guide",
      title: "Complete Guide to Sacrificing Rubber Ducks to the CSS Gods",
      excerpt: "Finally center that div with ancient rituals and modern desperation. Includes chanting instructions.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Frontend Shaman",
      date: "2025-01-05",
      readTime: "6 min ritual",
      category: "CSS Magic",
      chaos: 85
    },
    {
      slug: "polar-bears-coding-bootcamp",
      title: "I Started a Coding Bootcamp for Polar Bears",
      excerpt: "PolarCode is revolutionizing arctic education. Our first graduate just got hired at Netflix (to fix their cooling system).",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Arctic Entrepreneur",
      date: "2025-01-03",
      readTime: "4 min cold",
      category: "Education",
      chaos: 90
    },
    {
      slug: "html-neural-network",
      title: "I Built a Neural Network Using Only HTML Divs",
      excerpt: "Deep learning meets deep nesting. 10,000 divs later, my AI can almost recognize the color blue. Sometimes.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Div Wizard",
      date: "2025-01-01",
      readTime: "8 min divs",
      category: "AI Innovation",
      chaos: 99
    }
  ];

  const categories = [
    { name: "All Chaos", icon: "🌪️" },
    { name: "Startup BS", icon: "💼" },
    { name: "Life Choices", icon: "🤦‍♂️" },
    { name: "Tech Theories", icon: "👽" },
    { name: "CSS Magic", icon: "🎩" },
    { name: "AI Innovation", icon: "🤖" }
  ];

  const getChaosColor = (chaos: number) => {
    if (chaos >= 95) return 'neon-pink';
    if (chaos >= 90) return 'neon-yellow';
    if (chaos >= 85) return 'neon-cyan';
    return 'neon-green';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 mono glitch-text">
              CHAOS <span className="neon-pink">BLOG</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mono">
              Where tech meets chaos, startups meet reality, and logic goes to die. 
              <span className="neon-cyan"> No corporate BS, just pure unfiltered chaos.</span>
            </p>
          </div>
          
          <div className="terminal max-w-2xl mx-auto">
            <div className="mono text-green-400 text-left">
              <div className="mb-2">$ cat /dev/random | grep -i "startup wisdom"</div>
              <div className="text-yellow-400 mb-1">WARNING: No wisdom found</div>
              <div className="text-pink-400 mb-1">ERROR: Logic.exe has crashed</div>
              <div className="text-cyan-400">INFO: Chaos mode activated. Enjoy the ride! 🎢</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-3 mb-8">
              <Skull className="w-8 h-8 text-pink-400 flicker" />
              <h2 className="text-3xl font-bold text-white mono">FEATURED CHAOS</h2>
            </div>
            
            <Link to={`/blog/${featuredPost.slug}`} className="block group">
              <div className="chaos-card border-2 border-pink-500 hover:border-cyan-500 transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="chaos-btn text-xs mono">
                        {featuredPost.category}
                      </span>
                      <span className={`text-xs mono ${getChaosColor(featuredPost.chaos)}`}>
                        CHAOS: {featuredPost.chaos}%
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300 mono">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6 mono">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User size={16} />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center text-pink-400 group-hover:text-cyan-400 transition-colors duration-300 mono">
                      <span className="mr-2">READ THE CHAOS</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border-2 border-gray-600 text-white hover:border-pink-500 hover:text-pink-400 transition-all duration-300 mono flex items-center space-x-2"
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-3 mb-8">
              <Bug className="w-8 h-8 text-cyan-400 glitch" />
              <h2 className="text-3xl font-bold text-white mono">LATEST CHAOS</h2>
            </div>
            
            <div className="broken-grid">
              {blogPosts.map((post, index) => (
                <Link key={index} to={`/blog/${post.slug}`} className="block group">
                  <article className="chaos-card border-2 border-gray-700 hover:border-pink-500 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex items-center space-x-2">
                        <span className="bg-black/80 text-white px-2 py-1 text-xs mono border border-gray-600">
                          {post.category}
                        </span>
                        <span className={`bg-black/80 px-2 py-1 text-xs mono border ${getChaosColor(post.chaos)}`}>
                          {post.chaos}%
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300 line-clamp-2 mono">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4 mono">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User size={12} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={12} />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center text-pink-400 group-hover:text-cyan-400 transition-colors duration-300 text-sm mono">
                        <span className="mr-2">READ CHAOS</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="chaos-card border-2 border-yellow-500">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-6 flicker" />
              <h2 className="text-4xl font-bold text-white mb-6 mono glitch-text">SUBSCRIBE TO CHAOS</h2>
              <p className="text-xl text-gray-300 mb-8 mono">
                Get the latest chaos delivered straight to your inbox. 
                <span className="neon-pink"> Warning: May cause uncontrollable laughter.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-black border-2 border-gray-600 px-6 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none mono"
                />
                <button className="chaos-btn mono">
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-4 mono">
                We promise to only spam you with quality chaos. Unsubscribe anytime (but why would you?).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;