import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: Date;
  readTime: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
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
  },
  {
    id: "4",
    title: "Building Secure AI Applications: Best Practices Guide",
    excerpt: "Learn essential security considerations when developing AI-powered applications, from data protection to model security and ethical AI implementation.",
    author: "Dr. Emily Watson",
    publishDate: new Date("2025-08-01"),
    readTime: "15 min read",
    tags: ["AI Security", "Cybersecurity", "Best Practices", "Development"],
    slug: "building-secure-ai-applications-best-practices-guide"
  },
  {
    id: "5",
    title: "Mastering Prompt Engineering: Advanced Techniques",
    excerpt: "Deep dive into advanced prompt engineering strategies that will help you get better results from AI models. Learn from real-world examples and expert insights.",
    author: "Dr. Rachel Kim",
    publishDate: new Date("2025-07-28"),
    readTime: "14 min read",
    tags: ["Prompt Engineering", "AI Optimization", "Best Practices", "Tutorial"],
    slug: "mastering-prompt-engineering-advanced-techniques"
  },
  {
    id: "6",
    title: "AI-Powered Code Review: Transforming Development Workflows",
    excerpt: "Learn how AI is revolutionizing code review processes, catching bugs early, and improving code quality across development teams.",
    author: "Marcus Thompson",
    publishDate: new Date("2025-07-25"),
    readTime: "11 min read",
    tags: ["Code Review", "AI Development", "Software Engineering", "DevOps"],
    slug: "ai-powered-code-review-transforming-development-workflows"
  },
  {
    id: "7",
    title: "Ethical AI Development: Principles and Practices",
    excerpt: "Explore the fundamental principles of ethical AI development and learn how to build responsible AI systems that benefit society.",
    author: "Dr. Priya Sharma",
    publishDate: new Date("2025-07-22"),
    readTime: "16 min read",
    tags: ["AI Ethics", "Responsible AI", "Machine Learning", "Technology Policy"],
    slug: "ethical-ai-development-principles-and-practices"
  },
  {
    id: "8",
    title: "Multi-Modal AI: Beyond Text Generation",
    excerpt: "Discover the exciting world of multi-modal AI systems that can understand and generate text, images, audio, and video content simultaneously.",
    author: "James Liu",
    publishDate: new Date("2025-07-18"),
    readTime: "13 min read",
    tags: ["Multi-Modal AI", "Computer Vision", "NLP", "Innovation"],
    slug: "multi-modal-ai-beyond-text-generation"
  },
  {
    id: "9",
    title: "AI in Data Science: Automating Analysis Workflows",
    excerpt: "Learn how AI is transforming data science by automating complex analysis workflows, from data cleaning to insight generation.",
    author: "Dr. Amanda Foster",
    publishDate: new Date("2025-07-15"),
    readTime: "12 min read",
    tags: ["Data Science", "AI Automation", "Analytics", "Machine Learning"],
    slug: "ai-in-data-science-automating-analysis-workflows"
  }
];

const Blog = () => {
  return (
    <Layout 
      title="AI Blog & Resources - UntrainedModel"
      description="Discover insights, tutorials, and best practices for AI development, productivity, and innovation. Stay updated with the latest trends in artificial intelligence."
      keywords="AI blog, artificial intelligence articles, AI tutorials, machine learning guides, AI best practices, technology insights"
    >
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-16 relative overflow-hidden">
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