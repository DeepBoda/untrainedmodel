import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  Sparkles,
  Heart,
  Clock,
  TrendingUp,
  Users,
  Zap,
  Star,
  Trophy,
  Target,
  Award,
  Flame,
  Lightbulb,
  Globe,
  MessageSquare,
  Code2
} from 'lucide-react';
import Layout from '@/components/Layout';

import { EnhancedPlayground } from '@/components/EnhancedPlayground';
import GameSystem from '@/components/gamification/GameSystem';

interface SavedPrompt {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'code' | 'image';
  timestamp: Date;
  likes: number;
}

interface CommunityStats {
  totalPrompts: number;
  totalGenerations: number;
  activeUsers: number;
  avgRating: number;
}

const Playground = () => {
  const [activeTab, setActiveTab] = useState('playground');
  const [playgroundPrompt, setPlaygroundPrompt] = useState('');

  const quickStartPrompts = {
    story: "Write a captivating short story about a time traveler who discovers that changing the past creates parallel universes. Include vivid descriptions and emotional depth.",
    code: "Create a React component called 'TaskManager' with TypeScript that allows users to add, edit, delete, and mark tasks as complete. Include proper state management and styling.",
    marketing: "Write compelling marketing copy for a new eco-friendly water bottle that keeps drinks cold for 24 hours. Include a catchy headline, key benefits, and a strong call-to-action."
  };

  const handleQuickStart = (type: keyof typeof quickStartPrompts) => {
    setPlaygroundPrompt(quickStartPrompts[type]);
  };
  const [savedPrompts] = useState<SavedPrompt[]>([
    {
      id: '1',
      title: 'Creative Writing Assistant',
      content: 'Write a compelling opening paragraph for a sci-fi novel about AI consciousness',
      type: 'text',
      timestamp: new Date(),
      likes: 42
    },
    {
      id: '2',
      title: 'React Component Generator',
      content: 'Create a reusable Button component with TypeScript and Tailwind CSS',
      type: 'code',
      timestamp: new Date(),
      likes: 28
    },
    {
      id: '3',
      title: 'Marketing Copy Generator',
      content: 'Create compelling product descriptions for e-commerce listings',
      type: 'text',
      timestamp: new Date(),
      likes: 35
    }
  ]);

  const [communityStats] = useState<CommunityStats>({
    totalPrompts: 8547,
    totalGenerations: 45234,
    activeUsers: 1847,
    avgRating: 4.6
  });

  return (
    <Layout
      title="Free AI Playground 2025 India | Test ChatGPT-4, Gemini 2.0 Flash, Claude 3.5 | No Signup"
      description="India's #1 free AI playground 2025. Test ChatGPT-4, Google Gemini 2.0 Flash, Claude 3.5 Sonnet instantly. No signup, no payment. Generate code, write content, solve problems. Perfect for students, developers, creators. Works on 3G/4G. Hindi support. Try now!"
      keywords="free AI playground 2025 India, ChatGPT 4 playground free, Gemini 2.0 playground, Claude 3.5 free, AI testing platform India, GPT-4 free access, AI code generator India, AI content writer free, no signup AI, AI for students India, prompt engineering 2025, best AI playground India, AI chatbot free, OpenAI alternative, make money with AI playground"
    >
      <div className="min-h-screen bg-background pt-16 sm:pt-20 flex flex-col">
        {/* Minimal Header */}
        <div className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center">
            <div className="mr-4 hidden md:flex">
              <h1 className="text-lg font-semibold flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                AI Playground
              </h1>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex-1 md:w-auto md:flex-none">
                {/* Add model selector or controls here if needed */}
              </div>
              <nav className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => handleQuickStart('code')}>
                  <Code2 className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleQuickStart('story')}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Creative
                </Button>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Workspace Area */}
        <div className="flex-1 container max-w-screen-2xl p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">

            {/* Left Sidebar - History & Saved (Hidden on mobile) */}
            <div className="hidden lg:block lg:col-span-3 space-y-6">
              <Card className="h-full border-border/50 bg-muted/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {savedPrompts.map((prompt) => (
                    <div
                      key={prompt.id}
                      className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors border border-transparent hover:border-border/50 group"
                      onClick={() => setPlaygroundPrompt(prompt.content)}
                    >
                      <div className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                        {prompt.title}
                      </div>
                      <div className="text-xs text-muted-foreground truncate mt-1">
                        {prompt.content}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Center - Main Playground Interface */}
            <div className="lg:col-span-9 h-full flex flex-col">
              <EnhancedPlayground initialPrompt={playgroundPrompt} />
            </div>

          </div>
        </div>

        {/* SEO Content Section */}
        <section className="border-t border-border/40 bg-muted/20 py-16">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-center mb-8">Why Use UntrainedModel's AI Playground?</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-background p-6 rounded-xl border border-border/50 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Instant Access to Top Models
                  </h3>
                  <p className="text-muted-foreground">
                    Don't pay for multiple subscriptions. Access <strong>ChatGPT-4</strong>, <strong>Google Gemini 2.0 Flash</strong>, and <strong>Claude 3.5 Sonnet</strong> all in one place. Switch between models instantly to compare results.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border/50 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    Built for India
                  </h3>
                  <p className="text-muted-foreground">
                    Optimized for Indian internet speeds (works on 3G/4G). Full support for <strong>Hindi</strong>, <strong>Hinglish</strong>, and regional languages. We understand the local context for exams and business.
                  </p>
                </div>
              </div>

              <h3>Everything You Need to Create</h3>
              <p>
                Our AI Playground is designed for everyone from students to professional developers. Here is what you can do:
              </p>
              <ul>
                <li><strong>For Students:</strong> Solve complex JEE/NEET physics problems, get explanations for UPSC topics, and write essays for school assignments.</li>
                <li><strong>For Developers:</strong> Generate Python scripts, debug React code, write SQL queries, and explain complex algorithms.</li>
                <li><strong>For Writers:</strong> Overcome writer's block, generate blog post ideas, write social media captions, and edit emails.</li>
              </ul>

              <h3>Frequently Asked Questions</h3>
              <div className="space-y-4 not-prose mt-6">
                <div className="border border-border/50 rounded-lg p-4 bg-background">
                  <h4 className="font-semibold mb-2">Is this really free?</h4>
                  <p className="text-sm text-muted-foreground">Yes! Our core playground features are completely free to use. We believe in democratizing access to AI for everyone in India.</p>
                </div>
                <div className="border border-border/50 rounded-lg p-4 bg-background">
                  <h4 className="font-semibold mb-2">Do I need to sign up?</h4>
                  <p className="text-sm text-muted-foreground">No. You can start using the playground immediately without creating an account or providing any personal information.</p>
                </div>
                <div className="border border-border/50 rounded-lg p-4 bg-background">
                  <h4 className="font-semibold mb-2">Is my data private?</h4>
                  <p className="text-sm text-muted-foreground">Absolutely. We do not store your conversations or use your data to train our models. Your privacy is our top priority.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Playground;
