import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
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
    publishDate: new Date("2025-07-15"),
    readTime: "8 min read",
    tags: ["AI", "Productivity", "Technology", "Daily Life"],
    slug: "how-ai-is-revolutionizing-daily-tasks"
  },
  {
    id: "2",
    title: "Top 5 Ways to Use ChatGPT as a Developer",
    excerpt: "Maximize your development productivity with ChatGPT. Learn practical strategies that can transform your coding workflow and accelerate your projects.",
    author: "Sarah Johnson",
    publishDate: new Date("2025-07-10"),
    readTime: "10 min read",
    tags: ["ChatGPT", "Development", "Productivity", "Programming"],
    slug: "top-5-ways-to-use-chatgpt-as-a-developer"
  },
  {
    id: "3",
    title: "The Future of AI Tools in Creative Industries",
    excerpt: "Explore how artificial intelligence is reshaping creative fields, from graphic design to music production, and what it means for creative professionals.",
    author: "Michael Rodriguez",
    publishDate: new Date("2025-07-05"),
    readTime: "12 min read",
    tags: ["AI", "Creativity", "Design", "Future Tech"],
    slug: "the-future-of-ai-tools-in-creative-industries"
  },
  {
    id: "4",
    title: "Building Secure AI Applications: Best Practices Guide",
    excerpt: "Learn essential security considerations when developing AI-powered applications, from data protection to model security and ethical AI implementation.",
    author: "Dr. Emily Watson",
    publishDate: new Date("2025-07-01"),
    readTime: "15 min read",
    tags: ["AI Security", "Cybersecurity", "Best Practices", "Development"],
    slug: "building-secure-ai-applications-best-practices-guide"
  },
  {
    id: "5",
    title: "Mastering Prompt Engineering: Advanced Techniques",
    excerpt: "Deep dive into advanced prompt engineering strategies that will help you get better results from AI models. Learn from real-world examples and expert insights.",
    author: "Dr. Rachel Kim",
    publishDate: new Date("2025-07-12"),
    readTime: "14 min read",
    tags: ["Prompt Engineering", "AI Optimization", "Best Practices", "Tutorial"],
    slug: "mastering-prompt-engineering-advanced-techniques"
  },
  {
    id: "6",
    title: "AI-Powered Code Review: Transforming Development Workflows",
    excerpt: "Learn how AI is revolutionizing code review processes, catching bugs early, and improving code quality across development teams.",
    author: "Marcus Thompson",
    publishDate: new Date("2025-07-08"),
    readTime: "11 min read",
    tags: ["Code Review", "AI Development", "Software Engineering", "DevOps"],
    slug: "ai-powered-code-review-transforming-development-workflows"
  },
  {
    id: "7",
    title: "Ethical AI Development: Principles and Practices",
    excerpt: "Explore the fundamental principles of ethical AI development and learn how to build responsible AI systems that benefit society.",
    author: "Dr. Priya Sharma",
    publishDate: new Date("2025-07-06"),
    readTime: "16 min read",
    tags: ["AI Ethics", "Responsible AI", "Machine Learning", "Technology Policy"],
    slug: "ethical-ai-development-principles-and-practices"
  },
  {
    id: "8",
    title: "Multi-Modal AI: Beyond Text Generation",
    excerpt: "Discover the exciting world of multi-modal AI systems that can understand and generate text, images, audio, and video content simultaneously.",
    author: "James Liu",
    publishDate: new Date("2025-07-04"),
    readTime: "13 min read",
    tags: ["Multi-Modal AI", "Computer Vision", "NLP", "Innovation"],
    slug: "multi-modal-ai-beyond-text-generation"
  },
  {
    id: "9",
    title: "AI in Data Science: Automating Analysis Workflows",
    excerpt: "Learn how AI is transforming data science by automating complex analysis workflows, from data cleaning to insight generation.",
    author: "Dr. Amanda Foster",
    publishDate: new Date("2025-07-03"),
    readTime: "12 min read",
    tags: ["Data Science", "AI Automation", "Analytics", "Machine Learning"],
    slug: "ai-in-data-science-automating-analysis-workflows"
  },
  {
    id: "10",
    title: "Building Conversational AI: From Chatbots to Assistants",
    excerpt: "A comprehensive guide to building sophisticated conversational AI systems that can understand context and provide meaningful interactions.",
    author: "Carlos Rodriguez",
    publishDate: new Date("2025-07-02"),
    readTime: "18 min read",
    tags: ["Conversational AI", "Chatbots", "NLP", "User Experience"],
    slug: "building-conversational-ai-from-chatbots-to-assistants"
  },
  {
    id: "11",
    title: "AI Model Optimization: Performance and Efficiency",
    excerpt: "Master the art of optimizing AI models for better performance, reduced latency, and improved efficiency in production environments.",
    author: "Dr. Kevin Zhang",
    publishDate: new Date("2023-12-30"),
    readTime: "15 min read",
    tags: ["Model Optimization", "Performance", "AI Infrastructure", "MLOps"],
    slug: "ai-model-optimization-performance-and-efficiency"
  },
  {
    id: "12",
    title: "The Rise of Edge AI: Computing at the Source",
    excerpt: "Explore how edge AI is bringing intelligent processing closer to data sources, enabling real-time decisions and improved privacy.",
    author: "Lisa Park",
    publishDate: new Date("2023-12-28"),
    readTime: "10 min read",
    tags: ["Edge AI", "IoT", "Real-time Processing", "Edge Computing"],
    slug: "the-rise-of-edge-ai-computing-at-the-source"
  }
];

const Blog = () => {
  return (
    <Layout 
      title="AI Blog & Resources - UntrainedModel"
      description="Discover insights, tutorials, and best practices for AI development, productivity, and innovation. Stay updated with the latest trends in artificial intelligence."
      keywords="AI blog, artificial intelligence articles, AI tutorials, machine learning guides, AI best practices, technology insights"
    >
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-background to-muted/20 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                AI Insights & Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover expert insights, practical tutorials, and the latest trends in artificial intelligence. 
                Our comprehensive guides help you harness the power of AI for productivity and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className={`shadow-card hover:shadow-glow transition-all duration-500 border-border card-interactive animate-fade-in stagger-${Math.min(index % 4 + 1, 4)}`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishDate.toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg font-bold mb-3 leading-tight">
                      {post.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        By {post.author}
                      </span>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary hover:text-primary-hover transition-colors font-medium"
                      >
                        Read <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;