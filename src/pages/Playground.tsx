import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  MessageSquare
} from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import AdSpace from '@/components/AdSpace';
import { PromptTemplates } from '@/components/PromptTemplates';
import { EnhancedPlayground } from '@/components/EnhancedPlayground';
import AchievementSystem from '@/components/gamification/AchievementSystem';
import DailyChallenges from '@/components/gamification/DailyChallenges';
import CommunityHub from '@/components/gamification/CommunityHub';

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
    totalPrompts: 12547,
    totalGenerations: 89234,
    activeUsers: 2847,
    avgRating: 4.8
  });

  return (
    <Layout>
      <SEO 
        title="AI Playground - Free GPT-4 & Gemini AI Testing Platform"
        description="Test and experiment with advanced AI models including GPT-4, Gemini, and more. Generate high-quality text, code, and images with our free AI playground. Perfect for developers, content creators, and AI enthusiasts."
        keywords="AI playground, GPT-4 playground, Gemini AI, free AI testing, text generation, code generation, image generation, OpenAI playground, Google AI, artificial intelligence tools, machine learning, prompt engineering"
      />
      
      <div className="min-h-screen bg-gradient-subtle">
        {/* Header with Community Stats */}
        <div className="bg-background/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  AI Playground & Community
                </h1>
                <p className="text-lg text-muted-foreground">
                  Create with AI, earn achievements, and connect with a vibrant community
                </p>
              </div>
              
              {/* Community Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:w-auto">
                <div className="text-center p-3 bg-card/50 rounded-lg border">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <MessageSquare className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">{communityStats.totalPrompts.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Prompts</p>
                </div>
                
                <div className="text-center p-3 bg-card/50 rounded-lg border">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">{communityStats.totalGenerations.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Generations</p>
                </div>
                
                <div className="text-center p-3 bg-card/50 rounded-lg border">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">{communityStats.activeUsers.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Active Users</p>
                </div>
                
                <div className="text-center p-3 bg-card/50 rounded-lg border">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Star className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-medium">{communityStats.avgRating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Avg Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Main Navigation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="playground" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Playground
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="challenges" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Challenges
              </TabsTrigger>
              <TabsTrigger value="community" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Community
              </TabsTrigger>
            </TabsList>

            <TabsContent value="playground" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Enhanced Playground - Main Content */}
                <div className="lg:col-span-3">
                  <EnhancedPlayground />
                </div>

                {/* Enhanced Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                  <AdSpace position="sidebar" />
                  
                  {/* Featured Prompts */}
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-primary text-primary-foreground">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Trophy className="w-5 h-5" />
                        Featured Prompts
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      {savedPrompts.slice(0, 3).map((savedPrompt, index) => (
                        <div key={savedPrompt.id} className="border-b last:border-b-0 p-4 hover:bg-muted/50 transition-colors cursor-pointer group">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{savedPrompt.title}</h4>
                            <div className="flex items-center gap-1">
                              <Badge variant="outline" className="text-xs">
                                {savedPrompt.type}
                              </Badge>
                              {index === 0 && <Flame className="w-3 h-3 text-orange-500" />}
                              {index === 1 && <TrendingUp className="w-3 h-3 text-green-500" />}
                              {index === 2 && <Award className="w-3 h-3 text-purple-500" />}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                            {savedPrompt.content}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Heart className="h-3 w-3 fill-current text-red-500" />
                              <span>{savedPrompt.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>2h ago</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Prompt Templates */}
                  <PromptTemplates onSelectTemplate={(template) => {
                    // This will be handled by the EnhancedPlayground component
                    console.log('Template selected:', template);
                  }} />

                  {/* Enhanced Pro Tips */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Lightbulb className="w-5 h-5" />
                        Pro Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-blue-600" />
                          <p className="font-semibold text-blue-900 dark:text-blue-100">Be Specific & Detailed</p>
                        </div>
                        <p className="text-sm text-blue-700 dark:text-blue-200">
                          Include context, desired tone, format, and examples for better results.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <p className="font-semibold text-green-900 dark:text-green-100">Iterate & Improve</p>
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-200">
                          Use version history to track what works and refine your approach.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-purple-600" />
                          <p className="font-semibold text-purple-900 dark:text-purple-100">Keyboard Shortcuts</p>
                        </div>
                        <p className="text-sm text-purple-700 dark:text-purple-200">
                          <kbd className="px-2 py-1 bg-background rounded text-xs border">Ctrl+Enter</kbd> to generate, 
                          <kbd className="px-2 py-1 bg-background rounded text-xs border ml-1">Ctrl+S</kbd> to save
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <AchievementSystem />
            </TabsContent>

            <TabsContent value="challenges">
              <DailyChallenges />
            </TabsContent>

            <TabsContent value="community">
              <CommunityHub />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Playground;