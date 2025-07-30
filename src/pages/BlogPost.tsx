import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Layout from "@/components/Layout";

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  author: string;
  publishDate: Date;
  readTime: string;
  tags: string[];
  excerpt: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  "how-ai-is-revolutionizing-daily-tasks": {
    id: "1",
    title: "How AI Is Revolutionizing Daily Tasks",
    excerpt: "Discover how artificial intelligence is transforming everyday activities, from personal productivity to creative endeavors, making our lives more efficient and enjoyable.",
    author: "Alex Chen",
    publishDate: new Date("2025-07-15"),
    readTime: "8 min read",
    tags: ["AI", "Productivity", "Technology", "Daily Life"],
    content: `# How AI Is Revolutionizing Daily Tasks

Artificial intelligence is no longer confined to science fiction—it's actively transforming our daily lives in remarkable ways. From the moment we wake up to when we go to sleep, AI-powered tools and systems are quietly working behind the scenes to make our routines more efficient, productive, and enjoyable.

## Personal Productivity Revolution

AI assistants like Google Assistant, Siri, and Alexa have revolutionized how we manage our time. These systems can automatically schedule meetings based on participant availability, suggest optimal times for tasks based on energy levels and preferences, and send intelligent reminders based on location and context.

## Creative and Content Generation

AI writing tools have democratized content creation, enabling anyone to generate blog posts, social media content, and professional emails. Visual content creation has become equally accessible, with AI tools creating logos, graphics, and even video content.

## Smart Home Integration

AI-powered smart home systems continuously learn from user behavior to optimize energy usage, enhance security, and provide predictive maintenance alerts.

## Conclusion

AI is transforming how we live, work, and create. As these technologies continue to evolve, they promise to make our lives not just more efficient, but more fulfilling and meaningful.`
  },
  "top-5-ways-to-use-chatgpt-as-a-developer": {
    id: "2",
    title: "Top 5 Ways to Use ChatGPT as a Developer",
    excerpt: "Maximize your development productivity with ChatGPT. Learn practical strategies that can transform your coding workflow and accelerate your projects.",
    author: "Sarah Johnson",
    publishDate: new Date("2025-07-10"),
    readTime: "10 min read",
    tags: ["ChatGPT", "Development", "Productivity", "Programming"],
    content: `# Top 5 Ways to Use ChatGPT as a Developer

As a developer, you're constantly looking for ways to improve your productivity, write better code, and solve complex problems more efficiently. ChatGPT has emerged as a powerful ally in the developer's toolkit.

## 1. Code Generation and Scaffolding

ChatGPT excels at generating boilerplate code, creating React components, API endpoints, and database schemas quickly and efficiently.

## 2. Debugging and Problem Solving

Paste error messages and get detailed explanations and solutions. ChatGPT can analyze stack traces, identify performance bottlenecks, and suggest optimization strategies.

## 3. Learning and Skill Development

Use ChatGPT as a tutor for learning new technologies, understanding design patterns, and staying updated with best practices.

## 4. Documentation and Code Explanation

Transform your code into comprehensive documentation, generate API docs, and create user-friendly guides.

## 5. Architecture and Design Patterns

Get help designing robust, scalable systems and implementing proper design patterns for your applications.

## Conclusion

ChatGPT has revolutionized the development workflow by providing instant access to code generation, debugging assistance, and learning resources. The key is learning how to ask the right questions and critically evaluate the responses.`
  },
  "the-future-of-ai-tools-in-creative-industries": {
    id: "3",
    title: "The Future of AI Tools in Creative Industries",
    excerpt: "Explore how artificial intelligence is reshaping creative fields, from graphic design to music production, and what it means for creative professionals.",
    author: "Michael Rodriguez",
    publishDate: new Date("2025-07-05"),
    readTime: "12 min read",
    tags: ["AI", "Creativity", "Design", "Future Tech"],
    content: `# The Future of AI Tools in Creative Industries

The creative industries are experiencing a revolutionary transformation as artificial intelligence tools become increasingly sophisticated and accessible.

## Current Landscape

Visual arts and design have been at the forefront of AI adoption, with tools like DALL-E, Midjourney, and Stable Diffusion creating photorealistic and artistic images from text descriptions.

## Music and Audio Production

AI is revolutionizing music creation with tools like AIVA for composition and LANDR for mastering, making professional music production accessible to everyone.

## Writing and Content Creation

AI writing tools are transforming how we create written content, from creative writing to marketing copy and technical documentation.

## The Future

The future lies in multimodal AI systems that can work across multiple mediums simultaneously, creating comprehensive creative campaigns from simple text descriptions.

## Conclusion

AI is not replacing human creativity but augmenting it, enabling creators to focus on high-level creative decisions while AI handles technical execution.`
  },
  "building-secure-ai-applications-best-practices-guide": {
    id: "4",
    title: "Building Secure AI Applications: Best Practices Guide",
    excerpt: "Learn essential security considerations when developing AI-powered applications, from data protection to model security and ethical AI implementation.",
    author: "Dr. Emily Watson",
    publishDate: new Date("2025-07-01"),
    readTime: "15 min read",
    tags: ["AI Security", "Cybersecurity", "Best Practices", "Development"],
    content: `# Building Secure AI Applications: Best Practices Guide

Security is paramount when developing AI applications that handle sensitive data and make critical decisions.

## Data Protection

Implement robust data encryption, secure data pipelines, and proper access controls to protect training and user data.

## Model Security

Protect against adversarial attacks, model theft, and poisoning attempts through proper validation and monitoring.

## Ethical AI Implementation

Ensure fairness, transparency, and accountability in AI decision-making processes.

## Conclusion

Building secure AI applications requires a comprehensive approach covering data protection, model security, and ethical considerations.`
  },
  "mastering-prompt-engineering-advanced-techniques": {
    id: "5",
    title: "Mastering Prompt Engineering: Advanced Techniques",
    excerpt: "Deep dive into advanced prompt engineering strategies that will help you get better results from AI models. Learn from real-world examples and expert insights.",
    author: "Dr. Rachel Kim",
    publishDate: new Date("2025-07-12"),
    readTime: "14 min read",
    tags: ["Prompt Engineering", "AI Optimization", "Best Practices", "Tutorial"],
    content: `# Mastering Prompt Engineering: Advanced Techniques

Prompt engineering is both an art and a science, requiring deep understanding of how AI models interpret and respond to different types of input.

## Understanding Model Behavior

Learn how different AI models respond to various prompt structures and how to optimize for specific outcomes.

## Advanced Techniques

Explore chain-of-thought prompting, few-shot learning, and role-based prompting strategies.

## Real-World Applications

Apply prompt engineering techniques to solve complex business problems and creative challenges.

## Conclusion

Mastering prompt engineering is essential for getting the most value from AI models in professional and creative applications.`
  },
  "ai-powered-code-review-transforming-development-workflows": {
    id: "6",
    title: "AI-Powered Code Review: Transforming Development Workflows",
    excerpt: "Learn how AI is revolutionizing code review processes, catching bugs early, and improving code quality across development teams.",
    author: "Marcus Thompson",
    publishDate: new Date("2025-07-08"),
    readTime: "11 min read",
    tags: ["Code Review", "AI Development", "Software Engineering", "DevOps"],
    content: `# AI-Powered Code Review: Transforming Development Workflows

AI is revolutionizing code review processes by automatically detecting bugs, security vulnerabilities, and code quality issues.

## Automated Bug Detection

AI tools can identify potential bugs and security vulnerabilities before they reach production.

## Code Quality Improvement

Learn how AI-powered tools suggest improvements for code readability, performance, and maintainability.

## Team Collaboration

Discover how AI facilitates better collaboration between team members during the code review process.

## Conclusion

AI-powered code review is becoming essential for maintaining high-quality codebases and improving development velocity.`
  },
  "ethical-ai-development-principles-and-practices": {
    id: "7",
    title: "Ethical AI Development: Principles and Practices",
    excerpt: "Explore the fundamental principles of ethical AI development and learn how to build responsible AI systems that benefit society.",
    author: "Dr. Priya Sharma",
    publishDate: new Date("2025-07-06"),
    readTime: "16 min read",
    tags: ["AI Ethics", "Responsible AI", "Machine Learning", "Technology Policy"],
    content: `# Ethical AI Development: Principles and Practices

Building ethical AI systems requires careful consideration of fairness, transparency, accountability, and societal impact.

## Core Principles

Explore the fundamental principles that should guide ethical AI development.

## Implementation Strategies

Learn practical approaches for implementing ethical considerations in AI development workflows.

## Regulatory Compliance

Understand emerging regulations and standards for responsible AI development.

## Conclusion

Ethical AI development is not just a moral imperative but a business necessity for sustainable AI adoption.`
  },
  "multi-modal-ai-beyond-text-generation": {
    id: "8",
    title: "Multi-Modal AI: Beyond Text Generation",
    excerpt: "Discover the exciting world of multi-modal AI systems that can understand and generate text, images, audio, and video content simultaneously.",
    author: "James Liu",
    publishDate: new Date("2025-07-04"),
    readTime: "13 min read",
    tags: ["Multi-Modal AI", "Computer Vision", "NLP", "Innovation"],
    content: `# Multi-Modal AI: Beyond Text Generation

Multi-modal AI systems represent the next frontier in artificial intelligence, capable of understanding and generating content across multiple modalities.

## Understanding Multi-Modal AI

Learn about AI systems that can process text, images, audio, and video simultaneously.

## Applications and Use Cases

Explore real-world applications of multi-modal AI in various industries.

## Technical Challenges

Understand the technical challenges involved in building multi-modal AI systems.

## Conclusion

Multi-modal AI is opening new possibilities for human-computer interaction and content creation.`
  },
  "ai-in-data-science-automating-analysis-workflows": {
    id: "9",
    title: "AI in Data Science: Automating Analysis Workflows",
    excerpt: "Learn how AI is transforming data science by automating complex analysis workflows, from data cleaning to insight generation.",
    author: "Dr. Amanda Foster",
    publishDate: new Date("2025-07-03"),
    readTime: "12 min read",
    tags: ["Data Science", "AI Automation", "Analytics", "Machine Learning"],
    content: `# AI in Data Science: Automating Analysis Workflows

AI is transforming data science by automating repetitive tasks and enabling data scientists to focus on high-value activities.

## Automated Data Cleaning

Learn how AI can automatically detect and fix data quality issues.

## Intelligent Analysis

Discover AI tools that can automatically generate insights from complex datasets.

## Workflow Optimization

Understand how to optimize data science workflows using AI automation.

## Conclusion

AI automation is enabling data scientists to work more efficiently and generate insights faster than ever before.`
  },
  "building-conversational-ai-from-chatbots-to-assistants": {
    id: "10",
    title: "Building Conversational AI: From Chatbots to Assistants",
    excerpt: "A comprehensive guide to building sophisticated conversational AI systems that can understand context and provide meaningful interactions.",
    author: "Carlos Rodriguez",
    publishDate: new Date("2025-07-02"),
    readTime: "18 min read",
    tags: ["Conversational AI", "Chatbots", "NLP", "User Experience"],
    content: `# Building Conversational AI: From Chatbots to Assistants

Building effective conversational AI requires understanding natural language processing, dialogue management, and user experience design.

## Foundation Technologies

Learn about the core technologies that power conversational AI systems.

## Design Principles

Understand key design principles for creating engaging conversational experiences.

## Implementation Strategies

Explore practical approaches for building and deploying conversational AI systems.

## Conclusion

Conversational AI is becoming increasingly important for customer service, personal assistance, and human-computer interaction.`
  },
  "ai-model-optimization-performance-and-efficiency": {
    id: "11",
    title: "AI Model Optimization: Performance and Efficiency",
    excerpt: "Master the art of optimizing AI models for better performance, reduced latency, and improved efficiency in production environments.",
    author: "Dr. Kevin Zhang",
    publishDate: new Date("2023-12-30"),
    readTime: "15 min read",
    tags: ["Model Optimization", "Performance", "AI Infrastructure", "MLOps"],
    content: `# AI Model Optimization: Performance and Efficiency

Optimizing AI models for production requires balancing performance, efficiency, and resource constraints.

## Performance Optimization

Learn techniques for improving model inference speed and accuracy.

## Resource Efficiency

Discover methods for reducing model size and computational requirements.

## Production Deployment

Understand best practices for deploying optimized models in production environments.

## Conclusion

Model optimization is crucial for successful AI deployment at scale.`
  },
  "the-rise-of-edge-ai-computing-at-the-source": {
    id: "12",
    title: "The Rise of Edge AI: Computing at the Source",
    excerpt: "Explore how edge AI is bringing intelligent processing closer to data sources, enabling real-time decisions and improved privacy.",
    author: "Lisa Park",
    publishDate: new Date("2023-12-28"),
    readTime: "10 min read",
    tags: ["Edge AI", "IoT", "Real-time Processing", "Edge Computing"],
    content: `# The Rise of Edge AI: Computing at the Source

Edge AI is revolutionizing how we process data by bringing intelligence closer to where data is generated.

## Benefits of Edge AI

Understand the advantages of processing data at the edge, including reduced latency and improved privacy.

## Implementation Challenges

Learn about the technical challenges involved in deploying AI at the edge.

## Use Cases

Explore real-world applications of edge AI across various industries.

## Conclusion

Edge AI is enabling new applications and improving existing ones by processing data closer to its source.`
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <Layout 
        title="Blog Post Not Found"
        description="The requested blog post could not be found."
      >
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild variant="hero">
              <Link to="/blog" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title={post.title}
      description={post.excerpt}
      keywords={post.tags.join(", ")}
    >
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-8">
          <Button asChild variant="outline" className="mb-8">
            <Link to="/blog" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <article className="max-w-4xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg">
              <CardContent className="p-8">
                {/* Header */}
                <header className="mb-8">
                  <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishDate.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-4 italic">
                    {post.excerpt}
                  </p>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none text-foreground">
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {post.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('# ')) {
                        return (
                          <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-foreground">
                            {paragraph.substring(2)}
                          </h1>
                        );
                      }
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-foreground">
                            {paragraph.substring(3)}
                          </h2>
                        );
                      }
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={index} className="text-xl font-semibold mt-5 mb-2 text-foreground">
                            {paragraph.substring(4)}
                          </h3>
                        );
                      }
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <p key={index} className="font-semibold mb-3 text-foreground">
                            {paragraph.substring(2, paragraph.length - 2)}
                          </p>
                        );
                      }
                      if (paragraph.startsWith('- ')) {
                        return (
                          <li key={index} className="mb-1 text-muted-foreground ml-4">
                            {paragraph.substring(2)}
                          </li>
                        );
                      }
                      if (paragraph.trim() === '') {
                        return <br key={index} />;
                      }
                      return (
                        <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>

                {/* Footer */}
                <footer className="mt-12 pt-8 border-t border-border">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                      Published on {post.publishDate.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })} by {post.author}
                    </div>
                    <Button asChild variant="hero">
                      <Link to="/blog">
                        Read More Articles
                      </Link>
                    </Button>
                  </div>
                </footer>
              </CardContent>
            </Card>
          </article>
        </div>
      </div>
    </Layout>
  );
}