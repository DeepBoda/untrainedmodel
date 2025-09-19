import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: "1",
    title: "How AI Is Revolutionizing Daily Tasks",
    excerpt: "Discover how artificial intelligence is transforming everyday activities, from personal productivity to creative endeavors, making our lives more efficient and enjoyable.",
    author: "Alex Chen",
    publishDate: new Date("2025-08-15"),
    readTime: "8 min read",
    tags: ["AI", "Productivity", "Technology", "Daily Life"],
    slug: "how-ai-is-revolutionizing-daily-tasks"
  },
  {
    id: "2",
    title: "Top 5 Ways to Use ChatGPT as a Developer",
    excerpt: "Maximize your development productivity with ChatGPT. Learn practical strategies that can transform your coding workflow and accelerate your projects.",
    author: "Sarah Johnson",
    publishDate: new Date("2025-08-10"),
    readTime: "10 min read",
    tags: ["ChatGPT", "Development", "Productivity", "Programming"],
    slug: "top-5-ways-to-use-chatgpt-as-a-developer"
  },
  {
    id: "3",
    title: "The Future of AI Tools in Creative Industries",
    excerpt: "Explore how artificial intelligence is reshaping creative fields, from graphic design to music production, and what it means for creative professionals.",
    author: "Michael Rodriguez",
    publishDate: new Date("2025-08-05"),
    readTime: "12 min read",
    tags: ["AI", "Creativity", "Design", "Future Tech"],
    slug: "the-future-of-ai-tools-in-creative-industries"
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
              className="apple-card group hover:scale-105 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>{post.publishDate.toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border/20">
                <span className="text-sm text-muted-foreground">
                  by {post.author}
                </span>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
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
