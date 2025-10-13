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
    title: "Google Gemini 2.0 vs ChatGPT-4: Which AI is Better for Indian Users in 2025?",
    excerpt: "Complete comparison of Google Gemini 2.0 and ChatGPT-4 for Indian students, developers, and businesses. Real-world testing, pricing analysis, and honest recommendations for the Indian market.",
    author: "Rajesh Kumar",
    publishDate: new Date("2025-10-10"),
    readTime: "12 min read",
    tags: ["AI Comparison", "Gemini 2.0", "ChatGPT-4", "India", "2025 Trends"],
    slug: "gemini-2-vs-chatgpt4-indian-users-2025"
  },
  {
    id: "2",
    title: "How Indian Students Are Using AI to Crack JEE, NEET & UPSC in 2025",
    excerpt: "Real success stories of Indian students using AI tools for competitive exam preparation. Learn proven strategies, best AI tools, and study techniques that are working right now.",
    author: "Priya Sharma",
    publishDate: new Date("2025-10-08"),
    readTime: "15 min read",
    tags: ["AI for Students", "JEE Preparation", "NEET", "UPSC", "Exam Tips", "India"],
    slug: "ai-tools-jee-neet-upsc-preparation-2025"
  },
  {
    id: "3",
    title: "AI Prompt Engineering Masterclass: Get 10x Better Results in 2025",
    excerpt: "Master the art of prompt engineering with latest techniques for ChatGPT, Gemini, and Claude. Includes 50+ proven prompts for coding, content writing, and business use cases.",
    author: "Amit Patel",
    publishDate: new Date("2025-10-05"),
    readTime: "18 min read",
    tags: ["Prompt Engineering", "AI Tips", "ChatGPT", "Productivity", "Tutorial"],
    slug: "prompt-engineering-masterclass-2025"
  },
  {
    id: "4",
    title: "Make Money with AI in India: 12 Proven Ways to Earn ₹50,000+ Monthly",
    excerpt: "Discover legitimate ways Indian freelancers and entrepreneurs are earning ₹50,000 to ₹2 lakhs monthly using AI tools. Includes step-by-step guides, client acquisition strategies, and real income proof.",
    author: "Vikram Singh",
    publishDate: new Date("2025-10-03"),
    readTime: "20 min read",
    tags: ["Make Money Online", "AI Business", "Freelancing India", "Side Hustle", "Income"],
    slug: "make-money-with-ai-india-2025"
  },
  {
    id: "5",
    title: "ChatGPT vs Claude vs Gemini: The Ultimate AI Showdown 2025",
    excerpt: "Tested all major AI models with 100+ real-world tasks. See which AI wins for coding, content writing, data analysis, and creative work. Includes speed tests and accuracy comparisons.",
    author: "Neha Gupta",
    publishDate: new Date("2025-10-01"),
    readTime: "16 min read",
    tags: ["AI Comparison", "ChatGPT", "Claude", "Gemini", "Review", "2025"],
    slug: "chatgpt-vs-claude-vs-gemini-2025"
  },
  {
    id: "6",
    title: "AI Tools Every Indian Developer Must Use in 2025",
    excerpt: "Curated list of 25+ AI coding assistants, debugging tools, and productivity apps that Indian developers are using to 10x their output. Most are free or have generous free tiers.",
    author: "Arjun Reddy",
    publishDate: new Date("2025-09-28"),
    readTime: "14 min read",
    tags: ["Developer Tools", "AI Coding", "Productivity", "India", "Free Tools"],
    slug: "ai-tools-indian-developers-2025"
  },
  {
    id: "7",
    title: "Free AI Tools for Content Creators in India: Complete Guide 2025",
    excerpt: "Everything Indian YouTubers, bloggers, and social media creators need to know about AI tools. Create viral content, thumbnails, scripts, and captions in minutes. All free or affordable options.",
    author: "Sneha Iyer",
    publishDate: new Date("2025-09-25"),
    readTime: "17 min read",
    tags: ["Content Creation", "YouTube", "Social Media", "Free Tools", "India"],
    slug: "free-ai-tools-content-creators-india-2025"
  },
  {
    id: "8",
    title: "AI Resume Builder: Get Hired by Top Indian Companies in 2025",
    excerpt: "Learn how to use AI to create ATS-friendly resumes that get interviews at TCS, Infosys, Wipro, and startups. Includes templates, keywords, and real examples that worked.",
    author: "Karthik Menon",
    publishDate: new Date("2025-09-22"),
    readTime: "13 min read",
    tags: ["Career", "Resume", "Job Search", "AI Tools", "India", "Placement"],
    slug: "ai-resume-builder-indian-companies-2025"
  },
  {
    id: "9",
    title: "ChatGPT Prompts for Indian Businesses: 100+ Ready-to-Use Templates",
    excerpt: "Copy-paste prompts for marketing, sales, customer service, and operations. Specifically designed for Indian SMEs, startups, and local businesses. Save 20+ hours weekly.",
    author: "Deepak Malhotra",
    publishDate: new Date("2025-09-20"),
    readTime: "22 min read",
    tags: ["Business", "ChatGPT Prompts", "Marketing", "India", "SME", "Templates"],
    slug: "chatgpt-prompts-indian-businesses-2025"
  }
];

const Blog = () => {
  return (
    <Layout 
      title="AI Blog India 2025 - ChatGPT Tips, Gemini Tutorials, Prompt Engineering & Make Money with AI"
      description="Latest AI tutorials, tips, and guides for Indian users. Learn ChatGPT prompts, Gemini AI tricks, how to make money with AI, JEE/NEET/UPSC preparation, coding tutorials, content creation strategies. Updated daily with trending AI topics for India."
      keywords="AI blog India, ChatGPT tips India, Gemini AI tutorial, prompt engineering guide, make money with AI India, AI for students India, JEE NEET AI tools, AI coding tutorials, AI content creation, best AI tools 2025 India, free AI resources India, AI business ideas India, ChatGPT vs Gemini, AI career India"
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