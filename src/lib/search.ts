export interface SearchResult {
  id: string;
  title: string;
  content: string;
  url: string;
  type: 'page' | 'blog' | 'feature';
  relevance: number;
}

export interface SearchIndex {
  [key: string]: {
    title: string;
    content: string;
    url: string;
    type: 'page' | 'blog' | 'feature';
    keywords: string[];
  };
}

// Create search index
const searchIndex: SearchIndex = {
  'home': {
    title: 'UntrainedModel - AI Playground & Content Generator',
    content: 'Cutting-edge AI platform providing access to advanced AI models for text generation, code generation, and image creation. Multi-provider support with OpenAI, Google Gemini, and Anthropic Claude.',
    url: '/',
    type: 'page',
    keywords: ['ai', 'playground', 'generator', 'openai', 'gemini', 'claude', 'home', 'main']
  },
  'playground': {
    title: 'AI Playground - Create, Experiment, and Share',
    content: 'Interactive AI playground for text generation, code generation, and image creation. Experiment with GPT-4, Claude, and Gemini models with real-time results.',
    url: '/playground',
    type: 'page',
    keywords: ['playground', 'ai', 'generate', 'text', 'code', 'image', 'gpt', 'claude', 'gemini', 'experiment']
  },
  'blog': {
    title: 'AI Blog & Resources - Latest Insights',
    content: 'Discover insights, tutorials, and best practices for AI development, productivity, and innovation. Expert guides and cutting-edge insights.',
    url: '/blog',
    type: 'page',
    keywords: ['blog', 'articles', 'ai', 'tutorials', 'insights', 'resources', 'guides']
  },
  'about': {
    title: 'About UntrainedModel - Our Mission',
    content: 'Learn about UntrainedModel, our mission to democratize AI tools and make them accessible to everyone. Built with love for the AI community.',
    url: '/about',
    type: 'page',
    keywords: ['about', 'mission', 'team', 'company', 'democratize', 'ai tools', 'community']
  },
  'contact': {
    title: 'Contact Us - Get Support and Help',
    content: 'Contact UntrainedModel team for support, questions, feedback, and business inquiries. Email support available.',
    url: '/contact',
    type: 'page',
    keywords: ['contact', 'support', 'help', 'feedback', 'questions', 'business', 'email']
  },
  'privacy': {
    title: 'Privacy Policy - Your Data Protection',
    content: 'Learn about our privacy practices, data protection, and commitment to user privacy. No data collection, privacy by design.',
    url: '/privacy',
    type: 'page',
    keywords: ['privacy', 'policy', 'data protection', 'security', 'legal']
  },
  'terms': {
    title: 'Terms of Service - Usage Guidelines',
    content: 'Terms and conditions for using UntrainedModel platform, acceptable use policy, and service guidelines.',
    url: '/terms',
    type: 'page',
    keywords: ['terms', 'service', 'conditions', 'usage', 'legal', 'guidelines']
  },
  // Blog posts - Current 9 posts
  'blog-ai-daily-tasks': {
    title: 'How AI Is Revolutionizing Daily Tasks',
    content: 'Discover how artificial intelligence is transforming everyday activities, from personal productivity to creative endeavors, making our lives more efficient and enjoyable.',
    url: '/blog/how-ai-is-revolutionizing-daily-tasks',
    type: 'blog',
    keywords: ['ai', 'daily tasks', 'productivity', 'efficiency', 'automation', 'lifestyle']
  },
  'blog-chatgpt-developer': {
    title: 'Top 5 Ways to Use ChatGPT as a Developer',
    content: 'Maximize your development productivity with ChatGPT. Learn practical strategies that can transform your coding workflow and accelerate your projects.',
    url: '/blog/top-5-ways-to-use-chatgpt-as-a-developer',
    type: 'blog',
    keywords: ['chatgpt', 'developer', 'programming', 'coding', 'productivity', 'workflow']
  },
  'blog-ai-creative-industries': {
    title: 'The Future of AI Tools in Creative Industries',
    content: 'Explore how artificial intelligence is reshaping creative fields, from graphic design to music production, and what it means for creative professionals.',
    url: '/blog/the-future-of-ai-tools-in-creative-industries',
    type: 'blog',
    keywords: ['ai', 'creative', 'design', 'music', 'art', 'future', 'industries']
  },
  'blog-secure-ai-applications': {
    title: 'Building Secure AI Applications: Best Practices Guide',
    content: 'Learn essential security considerations when developing AI-powered applications, from data protection to model security and ethical AI implementation.',
    url: '/blog/building-secure-ai-applications-best-practices-guide',
    type: 'blog',
    keywords: ['ai security', 'cybersecurity', 'best practices', 'development', 'data protection']
  },
  'blog-prompt-engineering-advanced': {
    title: 'Mastering Prompt Engineering: Advanced Techniques',
    content: 'Deep dive into advanced prompt engineering strategies that will help you get better results from AI models. Learn from real-world examples and expert insights.',
    url: '/blog/mastering-prompt-engineering-advanced-techniques',
    type: 'blog',
    keywords: ['prompt engineering', 'ai optimization', 'techniques', 'tutorial', 'advanced']
  },
  'blog-ai-code-review': {
    title: 'AI-Powered Code Review: Transforming Development Workflows',
    content: 'Learn how AI is revolutionizing code review processes, catching bugs early, and improving code quality across development teams.',
    url: '/blog/ai-powered-code-review-transforming-development-workflows',
    type: 'blog',
    keywords: ['code review', 'ai development', 'software engineering', 'devops', 'quality']
  },
  'blog-ethical-ai-development': {
    title: 'Ethical AI Development: Principles and Practices',
    content: 'Explore the fundamental principles of ethical AI development and learn how to build responsible AI systems that benefit society.',
    url: '/blog/ethical-ai-development-principles-and-practices',
    type: 'blog',
    keywords: ['ai ethics', 'responsible ai', 'principles', 'practices', 'society']
  },
  'blog-multi-modal-ai': {
    title: 'Multi-Modal AI: Beyond Text Generation',
    content: 'Discover the exciting world of multi-modal AI systems that can understand and generate text, images, audio, and video content simultaneously.',
    url: '/blog/multi-modal-ai-beyond-text-generation',
    type: 'blog',
    keywords: ['multi-modal', 'ai', 'computer vision', 'nlp', 'innovation', 'multimedia']
  },
  'blog-ai-data-science': {
    title: 'AI in Data Science: Automating Analysis Workflows',
    content: 'Learn how AI is transforming data science by automating complex analysis workflows, from data cleaning to insight generation.',
    url: '/blog/ai-in-data-science-automating-analysis-workflows',
    type: 'blog',
    keywords: ['data science', 'ai automation', 'analytics', 'machine learning', 'workflows']
  }
};

export class SearchService {
  private index: SearchIndex;

  constructor() {
    this.index = searchIndex;
  }

  search(query: string, limit: number = 10): SearchResult[] {
    if (!query.trim()) return [];

    const normalizedQuery = query.toLowerCase().trim();
    const queryTerms = normalizedQuery.split(/\s+/);
    
    const results: SearchResult[] = [];

    Object.entries(this.index).forEach(([id, item]) => {
      let relevance = 0;
      const searchableText = `${item.title} ${item.content} ${item.keywords.join(' ')}`.toLowerCase();

      // Exact phrase match (highest relevance)
      if (searchableText.includes(normalizedQuery)) {
        relevance += 10;
      }

      // Title matches (high relevance)
      queryTerms.forEach(term => {
        if (item.title.toLowerCase().includes(term)) {
          relevance += 5;
        }
      });

      // Keyword matches (medium relevance)
      queryTerms.forEach(term => {
        item.keywords.forEach(keyword => {
          if (keyword.includes(term) || term.includes(keyword)) {
            relevance += 3;
          }
        });
      });

      // Content matches (lower relevance)
      queryTerms.forEach(term => {
        const contentMatches = (item.content.toLowerCase().match(new RegExp(term, 'g')) || []).length;
        relevance += contentMatches;
      });

      if (relevance > 0) {
        results.push({
          id,
          title: item.title,
          content: item.content,
          url: item.url,
          type: item.type,
          relevance
        });
      }
    });

    // Sort by relevance and limit results
    return results
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, limit);
  }

  addToIndex(id: string, item: Omit<SearchIndex[string], 'keywords'> & { keywords?: string[] }) {
    this.index[id] = {
      ...item,
      keywords: item.keywords || []
    };
  }

  getPopularSearches(): string[] {
    return [
      'AI playground',
      'prompt engineering',
      'ChatGPT developer',
      'AI ethics',
      'code generation',
      'creative AI',
      'data science',
      'multi-modal AI'
    ];
  }

  getSuggestions(query: string): string[] {
    if (!query.trim()) return this.getPopularSearches();

    const normalizedQuery = query.toLowerCase().trim();
    const suggestions = new Set<string>();

    Object.values(this.index).forEach(item => {
      // Extract phrases that contain the query
      const words = item.title.toLowerCase().split(/\s+/);
      words.forEach((word, index) => {
        if (word.includes(normalizedQuery)) {
          // Add the word and surrounding context
          const start = Math.max(0, index - 1);
          const end = Math.min(words.length, index + 2);
          const phrase = words.slice(start, end).join(' ');
          if (phrase.includes(normalizedQuery)) {
            suggestions.add(phrase);
          }
        }
      });

      // Add keywords that match
      item.keywords.forEach(keyword => {
        if (keyword.includes(normalizedQuery)) {
          suggestions.add(keyword);
        }
      });
    });

    return Array.from(suggestions).slice(0, 5);
  }
}

export const searchService = new SearchService();