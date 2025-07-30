import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  Play, 
  Save, 
  Share2, 
  Download, 
  Sparkles, 
  Code, 
  Image, 
  MessageSquare,
  Copy,
  Heart,
  Clock
} from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import AdSpace from '@/components/AdSpace';
import { useToast } from '@/hooks/use-toast';
import { aiService } from '@/lib/ai';
import { usePlaygroundShortcuts } from '@/hooks/useKeyboardShortcuts';

interface SavedPrompt {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'code' | 'image';
  timestamp: Date;
  likes: number;
}

const Playground = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('text');
  const [provider, setProvider] = useState('openai');
  const [model, setModel] = useState('gpt-4');
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([
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
    }
  ]);
  const { toast } = useToast();

  const handleRunPrompt = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    
    try {
      const response = await aiService.generateResponse(
        prompt, 
        activeTab as 'text' | 'code' | 'image',
        provider,
        model
      );
      
      setOutput(response.content);
      
      // Show usage info
      toast({
        title: "Generation Complete!",
        description: `Generated ${response.usage?.tokens || 0} tokens using ${response.provider} ${response.model}`,
      });
    } catch (error) {
      console.error('Generation error:', error);
      toast({
        title: "Generation Failed",
        description: "Please check your API keys in the AI service configuration.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSavePrompt = () => {
    if (!prompt.trim()) return;
    
    const newPrompt: SavedPrompt = {
      id: Date.now().toString(),
      title: `Untitled ${activeTab} prompt`,
      content: prompt,
      type: activeTab as 'text' | 'code' | 'image',
      timestamp: new Date(),
      likes: 0
    };
    
    setSavedPrompts(prev => [newPrompt, ...prev]);
    toast({
      title: "Prompt saved!",
      description: "Your prompt has been saved to your collection.",
    });
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: "Copied to clipboard!",
      description: "The output has been copied to your clipboard.",
    });
  };

  const handleClearOutput = () => {
    setOutput('');
    setPrompt('');
  };

  // Keyboard shortcuts for playground
  usePlaygroundShortcuts(handleRunPrompt, handleSavePrompt, handleClearOutput);

  return (
    <Layout>
      <SEO 
        title="AI Playground - Free GPT-4 & Gemini AI Testing Platform"
        description="Test and experiment with advanced AI models including GPT-4, Gemini, and more. Generate high-quality text, code, and images with our free AI playground. Perfect for developers, content creators, and AI enthusiasts."
        keywords="AI playground, GPT-4 playground, Gemini AI, free AI testing, text generation, code generation, image generation, OpenAI playground, Google AI, artificial intelligence tools, machine learning, prompt engineering"
      />
      
      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                  AI Playground
                </h1>
                <p className="text-lg text-muted-foreground">
                  Experiment with cutting-edge AI models. Create, iterate, and share your prompts.
                </p>
              </div>

              {/* Playground Interface */}
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Prompt Studio
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Select value={provider} onValueChange={(value) => {
                        setProvider(value);
                        const models = aiService.getModelsForProvider(value);
                        if (models.length > 0) setModel(models[0]);
                      }}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="openai">OpenAI</SelectItem>
                          <SelectItem value="google">Google</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={model} onValueChange={setModel}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {aiService.getModelsForProvider(provider).map(modelName => (
                            <SelectItem key={modelName} value={modelName}>
                              {modelName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="text" className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Text
                      </TabsTrigger>
                      <TabsTrigger value="code" className="flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Code
                      </TabsTrigger>
                      <TabsTrigger value="image" className="flex items-center gap-2">
                        <Image className="h-4 w-4" />
                        Image
                      </TabsTrigger>
                    </TabsList>
                    
                    <div className="mt-6">
                      <TabsContent value="text">
                        <div className="space-y-4">
                          <Textarea
                            placeholder="Enter your text prompt here... (e.g., 'Write a compelling product description for an AI-powered fitness app')"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="min-h-32 resize-none"
                          />
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="code">
                        <div className="space-y-4">
                          <Textarea
                            placeholder="Describe the code you want to generate... (e.g., 'Create a Python function that sorts a list of dictionaries by multiple keys')"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="min-h-32 resize-none"
                          />
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="image">
                        <div className="space-y-4">
                          <Textarea
                            placeholder="Describe the image you want to generate... (e.g., 'A futuristic cityscape at sunset with flying cars and neon lights')"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="min-h-32 resize-none"
                          />
                        </div>
                      </TabsContent>
                    </div>

                    <div className="flex items-center gap-2 mt-6">
                      <Button 
                        onClick={handleRunPrompt} 
                        disabled={isLoading || !prompt.trim()}
                        className="flex items-center gap-2"
                      >
                        <Play className="h-4 w-4" />
                        {isLoading ? 'Generating...' : 'Run Prompt'}
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleSavePrompt}
                        disabled={!prompt.trim()}
                        className="flex items-center gap-2"
                      >
                        <Save className="h-4 w-4" />
                        Save
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Output */}
              {output && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Output</CardTitle>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={handleCopyOutput}
                          className="flex items-center gap-2"
                        >
                          <Copy className="h-3 w-3" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Download className="h-3 w-3" />
                          Export
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-4">
                      <pre className="whitespace-pre-wrap text-sm">{output}</pre>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AdSpace position="sidebar" />
              
              {/* Saved Prompts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Prompts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {savedPrompts.map((savedPrompt) => (
                    <div key={savedPrompt.id} className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-sm">{savedPrompt.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {savedPrompt.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {savedPrompt.content}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>2h ago</span>
                        <Heart className="h-3 w-3" />
                        <span>{savedPrompt.likes}</span>
                      </div>
                      <Separator />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pro Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="font-medium text-foreground mb-1">Be Specific</p>
                    <p>The more detailed your prompt, the better the results. Include context, style, and desired output format.</p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="font-medium text-foreground mb-1">Iterate & Refine</p>
                    <p>Use the output as a starting point and refine your prompts based on what works best.</p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="font-medium text-foreground mb-1">Keyboard Shortcuts</p>
                    <p>Press <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Ctrl+Enter</kbd> to run prompts quickly.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Playground;