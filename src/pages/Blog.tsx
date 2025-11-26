import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from '@/lib/blog-posts';

const Blog = () => {


  return (
    <Layout
      title="AI Insights & Tutorials | UntrainedModel Blog"
      description="Expert guides, tutorials, and insights on AI development, prompt engineering, and the future of technology in India."
      keywords="AI blog, ChatGPT tutorials, Gemini guides, AI development India, tech blog"
    >
      <div className="min-h-screen bg-background pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-4">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Latest <span className="text-gradient-premium">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Deep dives into AI, development, and the future of tech.
            </p>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 h-12 rounded-full bg-muted/50 border-border/50 focus:ring-primary/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post (Hero) */}
          {featuredPost && (
            <div className="mb-16 animate-fade-in-up delay-100">
              <Link to={`/blog/${featuredPost.slug}`} className="group relative block rounded-3xl overflow-hidden aspect-[21/9] border border-border/50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                  src={featuredPost.imageUrl || `https://placehold.co/1200x630/1a1a1a/ffffff?text=${encodeURIComponent(featuredPost.title)}`}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-4xl">
                  <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 border-primary/20">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-primary/90 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 line-clamp-2 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
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
            </div>
          )}

          {/* Bento Grid for Remaining Posts */}
          <div className="bento-grid gap-6">
            {remainingPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className={`bento-card group flex flex-col h-full ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
              >
                <div className="glow-effect" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors ${index === 0 || index === 3 ? 'text-2xl' : 'text-xl'}`}>
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/10 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.publishDate.toLocaleDateString()}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
};

export default Blog;