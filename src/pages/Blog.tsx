import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/lib/blog-posts";

const Blog = () => {


return (
    <Layout 
      title="AI Blog India 2025 | ChatGPT vs Gemini, Make Money with AI, JEE/NEET/UPSC Prep, Prompt Engineering"
      description="Latest AI tutorials 2025 for Indian users. ChatGPT-4 vs Gemini 2.0 comparison, make ₹50K+ monthly with AI, JEE/NEET/UPSC preparation guides, prompt engineering masterclass, AI coding tutorials, content creation tips. Free resources updated daily."
      keywords="AI blog India 2025, ChatGPT 4 tips, Gemini 2.0 tutorial, prompt engineering 2025, make money AI India, AI for students India, JEE NEET UPSC AI, AI coding tutorial, AI content creation, best AI tools 2025, free AI resources, AI business ideas, ChatGPT vs Gemini 2025, AI career India, AI freelancing India"
    >
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-16 sm:pt-20 md:pt-24 relative overflow-hidden">
        {/* Playful Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-400/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }} />
        </div>
        
        {/* Header */}
        <section className="py-20 relative z-10">
          <div className="section-container text-center">
            <div className="section-flag mx-auto mb-8">
              📝 AI Knowledge Hub
            </div>
            
            <h1 className="apple-title text-foreground mb-6">
              Discover AI
              <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Insights & Tutorials
              </span>
            </h1>
            
            <p className="apple-section-subtitle text-foreground/70 mb-12">
              Expert guides, practical tutorials, and cutting-edge insights to master AI technology
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="pb-20 relative z-10">
          <div className="section-container">
            <div className="apple-grid apple-grid-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="apple-card group hover:scale-105 transition-all duration-500 animate-float flex flex-col h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Post Header */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      📅 {post.publishDate.toLocaleDateString()}
                      <span className="mx-2">•</span>
                      ⏱️ {post.readTime}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/20">
                    <span className="text-sm text-muted-foreground">
                      👤 {post.author}
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 group-hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-all duration-300">
                      Read More 🚀
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
);
};

export default Blog;