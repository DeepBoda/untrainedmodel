// lib/ai.ts

export interface AIProvider {
  name: string;
  models: string[];
  generateText: (prompt: string, model: string, apiKey?: string) => Promise<string>;
  generateCode: (prompt: string, model: string, apiKey?: string) => Promise<string>;
  generateImage?: (prompt: string, model: string, apiKey?: string) => Promise<string>;
}

export interface AIResponse {
  content: string;
  usage?: {
    tokens: number;
    cost?: number;
  };
  model: string;
  provider: string;
}

// ------------------------- OpenAI -------------------------

class OpenAIProvider implements AIProvider {
  name = 'OpenAI';
  models = ['gpt-5-preview', 'gpt-4o', 'gpt-4o-mini', 'o1-preview'];
  private defaultKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  async generateText(prompt: string, model: string, apiKey?: string): Promise<string> {
    return this.requestOpenAI(prompt, model, 2000, 0.7, apiKey || this.defaultKey);
  }

  async generateCode(prompt: string, model: string, apiKey?: string): Promise<string> {
    const codePrompt = `You are a senior software engineer. Generate clean, production-ready TypeScript code:\n${prompt}`;
    return this.requestOpenAI(codePrompt, model, 2000, 0.3, apiKey || this.defaultKey);
  }

  private async requestOpenAI(prompt: string, model: string, max_tokens: number, temperature: number, apiKey?: string): Promise<string> {
    if (!apiKey) throw new Error('OpenAI API Key is missing. Please add it in Settings.');

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: prompt }],
          max_tokens,
          temperature,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error?.message || `OpenAI API error: ${res.statusText}`);
      }
      const data = await res.json();
      return data.choices?.[0]?.message?.content || 'No response generated';
    } catch (err: any) {
      console.error('OpenAI error:', err);
      return `Error: ${err.message}`;
    }
  }
}

// ------------------------- Gemini (Google) -------------------------

class GeminiProvider implements AIProvider {
  name = 'Google';
  models = ['gemini-2.0-pro-exp', 'gemini-2.0-flash-exp', 'gemini-1.5-pro'];
  private defaultKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  async generateText(prompt: string, model: string, apiKey?: string): Promise<string> {
    return this.requestGemini(prompt, model, apiKey || this.defaultKey);
  }

  async generateCode(prompt: string, model: string, apiKey?: string): Promise<string> {
    const codePrompt = `Generate production-ready TypeScript code for: ${prompt}`;
    return this.requestGemini(codePrompt, model, apiKey || this.defaultKey);
  }

  private async requestGemini(prompt: string, model: string, apiKey?: string): Promise<string> {
    if (!apiKey) throw new Error('Google API Key is missing. Please add it in Settings.');

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          },
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error?.message || `Gemini API error: ${res.statusText}`);
      }
      const data = await res.json();
      return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated';
    } catch (err: any) {
      console.error('Gemini error:', err);
      return `Error: ${err.message}`;
    }
  }
}

// ------------------------- Claude (Anthropic) -------------------------

class ClaudeProvider implements AIProvider {
  name = 'Anthropic';
  models = ['claude-4.5-sonnet', 'claude-4.5-opus', 'claude-3.5-sonnet'];
  private defaultKey = process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY;

  async generateText(prompt: string, model: string, apiKey?: string): Promise<string> {
    return this.requestClaude(prompt, model, 0.7, apiKey || this.defaultKey);
  }

  async generateCode(prompt: string, model: string, apiKey?: string): Promise<string> {
    const codePrompt = `You are a senior software engineer. Generate clean, production-ready TypeScript code:\n${prompt}`;
    return this.requestClaude(codePrompt, model, 0.3, apiKey || this.defaultKey);
  }

  private async requestClaude(prompt: string, model: string, temperature: number, apiKey?: string): Promise<string> {
    if (!apiKey) throw new Error('Anthropic API Key is missing. Please add it in Settings.');

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json',
          'dangerously-allow-browser': 'true' // Required for client-side calls
        },
        body: JSON.stringify({
          model,
          max_tokens: 2000,
          temperature,
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error?.message || `Claude API error: ${res.statusText}`);
      }
      const data = await res.json();
      return data?.content?.[0]?.text || 'No response generated';
    } catch (err: any) {
      console.error('Claude error:', err);
      return `Error: ${err.message}`;
    }
  }
}

// ------------------------- Unified AI Service -------------------------

export class AIService {
  private providers = new Map<string, AIProvider>();

  constructor() {
    this.providers.set('google', new GeminiProvider());
    this.providers.set('openai', new OpenAIProvider());
    // this.providers.set('anthropic', new ClaudeProvider());
  }

  async generateResponse(
    prompt: string,
    type: 'text' | 'code' | 'image',
    provider: string,
    model: string,
    apiKey?: string
  ): Promise<AIResponse> {
    const aiProvider = this.providers.get(provider);
    if (!aiProvider) throw new Error(`Provider "${provider}" not found`);

    let content: string;

    switch (type) {
      case 'text':
        content = await aiProvider.generateText(prompt, model, apiKey);
        break;
      case 'code':
        content = await aiProvider.generateCode(prompt, model, apiKey);
        break;
      case 'image':
        content = aiProvider.generateImage
          ? await aiProvider.generateImage(prompt, model, apiKey)
          : 'Image generation not supported by this provider';
        break;
      default:
        throw new Error(`Invalid type: ${type}`);
    }

    return {
      content,
      model,
      provider: aiProvider.name,
      usage: {
        tokens: Math.round(content.length / 4),
      },
    };
  }

  getProviders(): string[] {
    return Array.from(this.providers.keys());
  }

  getModelsForProvider(provider: string): string[] {
    return this.providers.get(provider)?.models || [];
  }
}

export const aiService = new AIService();
