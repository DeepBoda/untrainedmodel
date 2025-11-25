import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: "1",
    title: "Google Gemini 2.0 vs ChatGPT-4: Which AI is Better for Indian Users in 2025?",
    excerpt: "Complete comparison of Google Gemini 2.0 and ChatGPT-4 for Indian students, developers, and businesses. Real-world testing, pricing analysis, and honest recommendations.",
    author: "Rajesh Kumar",
    publishDate: new Date("2025-10-10"),
    readTime: "12 min read",
    tags: ["AI Comparison", "Gemini 2.0", "ChatGPT-4", "India"],
    slug: "gemini-2-vs-chatgpt4-indian-users-2025"
  },
  {
    id: "2",
    title: "How Indian Students Are Using AI to Crack JEE, NEET & UPSC in 2025",
    excerpt: "Real success stories of Indian students using AI tools for competitive exam preparation. Learn proven strategies, best AI tools, and study techniques that are working right now.",
    author: "Priya Sharma",
    publishDate: new Date("2025-10-08"),
    readTime: "15 min read",
    tags: ["AI for Students", "JEE", "NEET", "UPSC"],
    slug: "ai-tools-jee-neet-upsc-preparation-2025"
  },
  {
    id: "3",
    title: "AI Prompt Engineering Masterclass: Get 10x Better Results in 2025",
    excerpt: "Master the art of prompt engineering with latest techniques for ChatGPT, Gemini, and Claude. Includes 50+ proven prompts for coding, content writing, and business.",
    author: "Amit Patel",
    publishDate: new Date("2025-10-05"),
    readTime: "18 min read",
    tags: ["Prompt Engineering", "AI Tips", "Tutorial"],
    slug: "prompt-engineering-masterclass-2025"
  }
];

const RecentBlogPosts = () => {
  return (
    <section className="section-spacing section-odd">
      <div className="section-container">
        <div className="flex justify-center">
          <div className="section-flag">
            <Calendar className="w-4 h-4" />
            Latest Insights
          </div>
        </div>

        <h2 className="apple-section-title text-foreground">
          From Our Blog
        </h2>

        <p className="apple-section-subtitle text-foreground/70">
          Explore the latest trends, tutorials, and insights in the world of AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group relative flex flex-col h-full bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8 relative z-10 flex flex-col h-full">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                      {post.author[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-foreground">{post.author}</span>
                      <span className="text-[10px] text-muted-foreground">{post.publishDate.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="apple-button">
            <Link to="/blog">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;
