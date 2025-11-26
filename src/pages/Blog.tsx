import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from '@/lib/blog-posts';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, ArrowRight, Sparkles, Code, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const remainingPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  return (
    <Layout
      title="AI Insights & Tutorials | UntrainedModel Blog"
      description="Expert guides, tutorials, and insights on AI development, prompt engineering, and the future of technology in India."
      keywords="AI blog, ChatGPT tutorials, Gemini guides, AI development India, tech blog"
    >
      <div className="min-h-screen bg-background relative overflow-hidden">

        {/* Ambient Gradient Lighting */}
        <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
          <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[120px] animate-pulse-glow delay-2000" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 pt-24 pb-20 relative z-10">

          {/* Hero Section with 3D Mockup */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm backdrop-blur-md">
                  <Sparkles className="w-3 h-3 mr-2 inline-block" />
                  AI Engineering Blog
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                  Master the <br />
                  <span className="text-gradient-premium">Future of AI</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Deep dives into Large Language Models, Agentic Workflows, and Next-Gen Web Development.
                </p>

                {/* Search & Filter */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center max-w-md mx-auto lg:mx-0">
                  <div className="relative w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search articles..."
                      className="pl-11 h-12 rounded-2xl bg-white/5 border-white/10 focus:ring-primary/20 backdrop-blur-md transition-all hover:bg-white/10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 3D UI Mockup */}
            <div className="flex-1 w-full max-w-[600px] perspective-[2000px] relative">
              <motion.div
                initial={{ rotateX: 10, rotateY: -10, opacity: 0, scale: 0.9 }}
                animate={{ rotateX: 5, rotateY: -5, opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 transform-style-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Main Card (Fake App Screen) */}
                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden group">
                  {/* Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

                  {/* Fake UI Header */}
                  <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="h-2 w-20 bg-white/10 rounded-full" />
                  </div>

                  {/* Fake UI Content */}
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-1/3 h-32 bg-white/5 rounded-xl animate-pulse" />
                      <div className="w-2/3 space-y-3">
                        <div className="h-4 w-3/4 bg-white/10 rounded-lg" />
                        <div className="h-4 w-1/2 bg-white/10 rounded-lg" />
                        <div className="h-20 w-full bg-white/5 rounded-lg mt-2" />
                      </div>
                    </div>
                    <div className="h-40 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
                      <span className="text-primary font-mono text-sm relative z-10">System Status: Online</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Content Created */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-8 top-20 z-20"
                >
                  <div className="glass-card px-4 py-3 flex items-center gap-3 bg-black/60 border-white/10 shadow-glow">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Status</div>
                      <div className="text-sm font-bold text-white">Content Created</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Code Generated */}
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -right-8 bottom-20 z-20"
                >
                  <div className="glass-card px-4 py-3 flex items-center gap-3 bg-black/60 border-white/10 shadow-glow">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">AI Agent</div>
                      <div className="text-sm font-bold text-white">Code Generated</div>
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${selectedCategory === category
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105'
                  : 'bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post (Hero) */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <Link to={`/blog/${featuredPost.slug}`} className="group relative block rounded-[2rem] overflow-hidden aspect-[21/9] border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src={featuredPost.imageUrl || `https://placehold.co/1200x630/1a1a1a/ffffff?text=${encodeURIComponent(featuredPost.title)}`}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 max-w-4xl">
                  <Badge className="mb-6 bg-primary text-primary-foreground border-none px-4 py-1.5 text-sm">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight group-hover:text-primary/90 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 line-clamp-2 max-w-2xl leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-8 text-sm text-gray-300 font-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center font-bold text-white border border-white/20">
                        {featuredPost.author[0]}
                      </div>
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.publishDate.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Bento Grid for Remaining Posts */}
          <div className="bento-grid gap-8">
            {remainingPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="bento-card group flex flex-col h-full bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="glow-effect" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className={`font-bold mb-4 group-hover:text-primary transition-colors leading-tight ${index === 0 || index === 3 ? 'text-3xl' : 'text-xl'}`}>
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.publishDate.toLocaleDateString()}</span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-32">
              <div className="text-6xl mb-6 animate-bounce">🔍</div>
              <h3 className="text-3xl font-bold mb-3">No articles found</h3>
              <p className="text-muted-foreground text-lg">Try adjusting your search or category filter.</p>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
};

export default Blog;