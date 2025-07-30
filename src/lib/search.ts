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
    title: 'UntrainedModel - Generative Knowledge Forge',
    content: 'Explore and build with AI models designed for open knowledge creation. Fast response, multi-modal AI, open source friendly.',
    url: '/',
    type: 'page',
    keywords: ['ai', 'knowledge', 'generation', 'models', 'home', 'main']
  },
  'playground': {
    title: 'AI Playground - Create, Experiment, and Share',
    content: 'Interactive AI playground for text generation, code generation, and image creation. Experiment with GPT-4, Claude, and Gemini models.',
    url: '/playground',
    type: 'page',
    keywords: ['playground', 'ai', 'generate', 'text', 'code', 'image', 'gpt', 'claude', 'gemini']
  },
  'blog': {
    title: 'AI Blog - Latest in Artificial Intelligence',
    content: 'Stay updated with the latest trends, tutorials, and insights in artificial intelligence and machine learning.',
    url: '/blog',
    type: 'page',
    keywords: ['blog', 'articles', 'ai', 'machine learning', 'tutorials', 'insights']
  },
  'contact': {
    title: 'Contact Us - Get Support and Help',
    content: 'Contact UntrainedModel team for support, questions, feedback, and business inquiries. We are here to help.',
    url: '/contact',
    type: 'page',
    keywords: ['contact', 'support', 'help', 'feedback', 'questions', 'business']
  },
  'about': {
    title: 'About UntrainedModel - Our Mission',
    content: 'Learn about UntrainedModel, our mission to democratize AI tools and make them accessible to everyone.',
    url: '/about',
    type: 'page',
    keywords: ['about', 'mission', 'team', 'company', 'democratize', 'ai tools']
  },
  // Blog posts
  'blog-gpt4-guide': {
    title: 'Complete Guide to GPT-4: Everything You Need to Know',
    content: 'Comprehensive guide covering GPT-4 capabilities, use cases, best practices, and how to get started with OpenAI latest model.',
    url: '/blog/complete-guide-gpt4',
    type: 'blog',
    keywords: ['gpt-4', 'openai', 'guide', 'tutorial', 'ai model', 'language model']
  },
  'blog-ai-ethics': {
    title: 'The Ethics of AI: Balancing Innovation and Responsibility',
    content: 'Exploring the ethical considerations in AI development, bias mitigation, and responsible AI practices.',
    url: '/blog/ai-ethics-responsibility',
    type: 'blog',
    keywords: ['ethics', 'ai ethics', 'bias', 'responsibility', 'innovation', 'fair ai']
  },
  'blog-prompt-engineering': {
    title: 'Mastering Prompt Engineering: Tips and Techniques',
    content: 'Learn advanced prompt engineering techniques to get better results from AI models like GPT-4, Claude, and Gemini.',
    url: '/blog/prompt-engineering-mastery',
    type: 'blog',
    keywords: ['prompt engineering', 'prompts', 'techniques', 'tips', 'ai optimization']
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
      'GPT-4 guide',
      'prompt engineering',
      'AI ethics',
      'code generation',
      'text generation'
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