import { useState } from 'react';
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
      title="AI Playground - Free GPT-4 & Gemini AI Testing Platform"
      description="Test and experiment with advanced AI models including GPT-4, Gemini, and more. Generate high-quality text, code, and images with our free AI playground. Perfect for developers, content creators, and AI enthusiasts."
      keywords="AI playground, GPT-4 playground, Gemini AI, free AI testing, text generation, code generation, image generation, OpenAI playground, Google AI, artificial intelligence tools, machine learning, prompt engineering"
    >
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-16 relative overflow-hidden">
        {/* Welcome Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to the AI Playground!</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This is your creative sandbox for exploring the power of artificial intelligence. Whether you're a writer, developer, marketer, or just curious, our playground lets you interact with leading AI models to generate text, write code, and much more. Think of it as your personal AI assistant, ready to help you with any task.
            </p>
          </div>
        </section>
        
        {/* Playful Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-400/20 rounded-full blur-lg animate-pulse" style={{ animationDuration: '2s' }} />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl animate-float" />
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-blue-400/20 rounded-full blur-md animate-ping" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-40 right-10 w-28 h-28 bg-pink-400/20 rounded-full blur-lg animate-bounce" style={{ animationDuration: '2.5s' }} />
        </div>
        
        {/* Compact Header */}
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">
              🎮 <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Playground</span> ⚡
            </h1>
            <p className="text-lg text-muted-foreground">
              Let's create something amazing together!
            </p>
          </div>
          
          {/* Floating Stats - Scattered */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <div className="absolute top-12 left-16 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20 transform rotate-12 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
              <span className="text-sm font-medium">🚀 {communityStats.totalGenerations.toLocaleString()}</span>
            </div>
            <div className="absolute top-20 right-20 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20 transform -rotate-6 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
              <span className="text-sm font-medium">👥 {communityStats.activeUsers.toLocaleString()}</span>
            </div>
            <div className="absolute bottom-32 left-12 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20 transform rotate-8 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
              <span className="text-sm font-medium">⭐ {communityStats.avgRating}/5</span>
            </div>
            <div className="absolute bottom-24 right-16 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20 transform -rotate-4 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
              <span className="text-sm font-medium">🏆 Featured</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-8 relative z-10">
          {/* Fun Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-4 bg-white/20 backdrop-blur-md border-0 p-2 rounded-3xl shadow-lg">
                <TabsTrigger value="playground" className="flex items-center gap-2 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105">
                  ⚡ <span className="hidden sm:inline font-medium">Create</span>
                </TabsTrigger>
                <TabsTrigger value="achievements" className="flex items-center gap-2 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105">
                  🏆 <span className="hidden sm:inline font-medium">Rewards</span>
                </TabsTrigger>
                <TabsTrigger value="challenges" className="flex items-center gap-2 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105">
                  🎯 <span className="hidden sm:inline font-medium">Quests</span>
                </TabsTrigger>
                <TabsTrigger value="community" className="flex items-center gap-2 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-400 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105">
                  🌍 <span className="hidden sm:inline font-medium">Friends</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="playground" className="space-y-8">
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                {/* Enhanced Playground - Main Content */}
                <div className="xl:col-span-3">
                  <EnhancedPlayground initialPrompt={playgroundPrompt} />
                </div>

                {/* Fun Sidebar */}
                <div className="xl:col-span-1 space-y-4">
                  {/* Hot Prompts */}
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4">
                      <h3 className="flex items-center gap-2 font-bold">
                        🔥 Hot Prompts
                      </h3>
                    </div>
                    <div className="p-0">
                      {savedPrompts.slice(0, 3).map((savedPrompt, index) => (
                        <div key={savedPrompt.id} className="border-b last:border-b-0 p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{savedPrompt.title}</h4>
                            <div className="flex items-center gap-1">
                              {index === 0 && <span className="text-lg">🔥</span>}
                              {index === 1 && <span className="text-lg">📈</span>}
                              {index === 2 && <span className="text-lg">⭐</span>}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                            {savedPrompt.content}
                          </p>
                          <div className="flex items-center gap-3 text-xs">
                            <span className="flex items-center gap-1">
                              ❤️ {savedPrompt.likes}
                            </span>
                            <span>⏰ 2d ago</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Start */}
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-4 shadow-lg">
                    <h3 className="flex items-center gap-2 font-bold mb-4">
                      🚀 Quick Start
                    </h3>
                    <div className="space-y-2">
                      <Button 
                        onClick={() => handleQuickStart('story')}
                        className="w-full justify-start bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-2xl transition-all duration-300 hover:scale-105"
                      >
                        ✨ Write Story
                      </Button>
                      <Button 
                        onClick={() => handleQuickStart('code')}
                        className="w-full justify-start bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0 rounded-2xl transition-all duration-300 hover:scale-105"
                      >
                        💻 Code Magic
                      </Button>
                      <Button 
                        onClick={() => handleQuickStart('marketing')}
                        className="w-full justify-start bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white border-0 rounded-2xl transition-all duration-300 hover:scale-105"
                      >
                        📝 Marketing Copy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <div className="space-y-6">
                {/* User Level Card */}
                <Card className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border-yellow-400/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      Your Rewards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">🎯</div>
                          <div>
                            <h4 className="font-semibold">First Steps</h4>
                            <p className="text-sm text-muted-foreground">Generate your first AI content</p>
                            <Badge className="mt-1">+50 XP</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg opacity-60">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">🔒</div>
                          <div>
                            <h4 className="font-semibold">Content Creator</h4>
                            <p className="text-sm text-muted-foreground">Generate 10 pieces of content</p>
                            <Badge variant="outline" className="mt-1">+200 XP</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="challenges">
              <div className="space-y-6">
                {/* Active Quests */}
                <Card className="bg-gradient-to-r from-green-400/10 to-blue-500/10 border-green-400/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-500" />
                      Daily Quests
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Daily Creator</h4>
                        <Badge className="bg-green-500/20 text-green-700 dark:text-green-300">+75 XP</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Generate 3 pieces of content today</p>
                      <Progress value={33} className="mb-2" />
                      <div className="flex justify-between text-sm">
                        <span>1/3 completed</span>
                        <span>33%</span>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Code Wizard</h4>
                        <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300">+150 XP</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Generate 5 code snippets this week</p>
                      <Progress value={0} className="mb-2" />
                      <div className="flex justify-between text-sm">
                        <span>0/5 completed</span>
                        <span>0%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="community">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">🌟 Community Coming Soon!</h3>
                <p className="text-muted-foreground">Connect with other creators, share prompts, and collaborate on amazing projects.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Playground;
