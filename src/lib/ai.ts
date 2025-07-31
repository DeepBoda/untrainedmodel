// lib/ai.ts

export interface AIProvider {
  name: string;
  models: string[];
  generateText: (prompt: string, model: string) => Promise<string>;
  generateCode: (prompt: string, model: string) => Promise<string>;
  generateImage?: (prompt: string, model: string) => Promise<string>;
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
  models = ['gpt-4o-mini', 'gpt-4o', 'gpt-4-turbo'];
  private apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  async generateText(prompt: string, model: string): Promise<string> {
    return this.requestOpenAI(prompt, model, 2000, 0.7);
  }

  async generateCode(prompt: string, model: string): Promise<string> {
    const codePrompt = `You are a senior software engineer. Generate clean, production-ready TypeScript code:\n${prompt}`;
    return this.requestOpenAI(codePrompt, model, 2000, 0.3);
  }

  private async requestOpenAI(prompt: string, model: string, max_tokens: number, temperature: number): Promise<string> {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: prompt }],
          max_tokens,
          temperature,
        }),
      });

      if (!res.ok) throw new Error(`OpenAI API error: ${res.statusText}`);
      const data = await res.json();
      return data.choices?.[0]?.message?.content || 'No response generated';
    } catch (err) {
      console.error('OpenAI error:', err);
      return '🌟 Oops, try again later.';
    }
  }
}

// ------------------------- Gemini (Google) -------------------------

class GeminiProvider implements AIProvider {
  name = 'Google';
  models = ['gemini-2.0-flash-exp', 'gemini-1.5-flash', 'gemini-1.5-pro'];
  private apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  async generateText(prompt: string, model: string): Promise<string> {
    return this.requestGemini(prompt, model);
  }

  async generateCode(prompt: string, model: string): Promise<string> {
    const codePrompt = `Generate production-ready TypeScript code for: ${prompt}`;
    return this.requestGemini(codePrompt, model);
  }

  private async requestGemini(prompt: string, model: string): Promise<string> {
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`, {
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

      if (!res.ok) throw new Error(`Gemini API error: ${res.statusText}`);
      const data = await res.json();
      return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated';
    } catch (err) {
      console.error('Gemini error:', err);
      return '🌟 Oops, try again later.';
    }
  }
}

// ------------------------- Claude (Anthropic) -------------------------

class ClaudeProvider implements AIProvider {
  name = 'Anthropic';
  models = ['claude-3-5-haiku-20241022', 'claude-sonnet-4-20250514', 'claude-opus-4-20250514'];
  private apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

  async generateText(prompt: string, model: string): Promise<string> {
    return this.requestClaude(prompt, model, 0.7);
  }

  async generateCode(prompt: string, model: string): Promise<string> {
    const codePrompt = `You are a senior software engineer. Generate clean, production-ready TypeScript code:\n${prompt}`;
    return this.requestClaude(codePrompt, model, 0.3);
  }

  private async requestClaude(prompt: string, model: string, temperature: number): Promise<string> {
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          max_tokens: 2000,
          temperature,
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      if (!res.ok) throw new Error(`Claude API error: ${res.statusText}`);
      const data = await res.json();
      return data?.content?.[0]?.text || 'No response generated';
    } catch (err) {
      console.error('Claude error:', err);
      return '🌟 Oops, try again later.';
    }
  }
}

// ------------------------- Unified AI Service -------------------------

export class AIService {
  private providers = new Map<string, AIProvider>();

  constructor() {
    this.providers.set('google', new GeminiProvider());
    this.providers.set('openai', new OpenAIProvider());
    this.providers.set('anthropic', new ClaudeProvider());
  }

  async generateResponse(
    prompt: string,
    type: 'text' | 'code' | 'image',
    provider: string,
    model: string
  ): Promise<AIResponse> {
    const aiProvider = this.providers.get(provider);
    if (!aiProvider) throw new Error(`Provider "${provider}" not found`);

    let content: string;

    switch (type) {
      case 'text':
        content = await aiProvider.generateText(prompt, model);
        break;
      case 'code':
        content = await aiProvider.generateCode(prompt, model);
        break;
      case 'image':
        content = aiProvider.generateImage
          ? await aiProvider.generateImage(prompt, model)
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
