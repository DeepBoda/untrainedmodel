import { useState, useRef, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import {
  Play,
  Sparkles,
  Code,
  Image,
  MessageSquare,
  Upload,
  RotateCcw,
  Maximize2,
  Minimize2,
  Wand2,
  TrendingUp,
  GitBranch
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { aiService } from '@/lib/ai';
import { StreamingResponse } from './StreamingResponse';
import { TypingIndicator } from './TypingIndicator';

interface PromptVersion {
  id: string;
  content: string;
  timestamp: Date;
  output: string;
  rating?: number;
}

interface EnhancedPlaygroundProps {
  initialPrompt?: string;
}

export const EnhancedPlayground = ({ initialPrompt }: EnhancedPlaygroundProps) => {
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    if (initialPrompt) {
      setPrompt(initialPrompt);
    }
  }, [initialPrompt]);
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [activeTab, setActiveTab] = useState('text');
  const [provider, setProvider] = useState('google');
  const [model, setModel] = useState('gemini-2.0-flash-exp');

  useEffect(() => {
    const modelMap = {
      google: 'gemini-2.0-flash-exp',
      openai: 'GPT-5o-mini',
      anthropic: 'claude-3-5-haiku-20241022'
    };
    setModel(modelMap[provider as keyof typeof modelMap]);
  }, [provider]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [promptVersions, setPromptVersions] = useState<PromptVersion[]>([]);
  const [currentVersionIndex, setCurrentVersionIndex] = useState(-1);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  // Auto-save prompt versions
  useEffect(() => {
    if (prompt.trim() && prompt.length > 10) {
      const timeoutId = setTimeout(() => {
        const newVersion: PromptVersion = {
          id: Date.now().toString(),
          content: prompt,
          timestamp: new Date(),
          output: ''
        };
        setPromptVersions(prev => [newVersion, ...prev.slice(0, 9)]); // Keep last 10 versions
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [prompt]);

  const handleRunPrompt = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Empty Prompt",
        description: "Please enter a prompt to generate content",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setIsStreaming(true);
    setOutput('');

    try {
      if (!showPreview) setShowPreview(true);

      const response = await aiService.generateResponse(
        prompt,
        activeTab as 'text' | 'code' | 'image',
        provider,
        model
      );

      setOutput(response.content);

      // Update current version with output
      if (promptVersions[0]?.content === prompt) {
        setPromptVersions(prev => prev.map((v, i) =>
          i === 0 ? { ...v, output: response.content } : v
        ));
      }

      toast({
        title: "Generation Complete!",
        description: `Generated ${response.content.length} characters using ${model}`,
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Please try again or select a different model",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  const handleFileUpload = useCallback((files: FileList) => {
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setPrompt(prev => prev + '\n\n[File Content]:\n' + content);
        toast({
          title: "File Uploaded",
          description: `Added ${file.name} content to prompt`,
        });
      };
      reader.readAsText(file);
    }
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files);
    }
  }, [handleFileUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  }, []);

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: "Copied!",
      description: "Output copied to clipboard",
    });
  };

  const handleExportOutput = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-output-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Exported!",
      description: "Output saved to downloads",
    });
  };

  const generateSuggestions = async () => {
    const suggestions = [
      "Make this more creative and engaging",
      "Add more technical details",
      "Simplify for beginners",
      "Include real-world examples",
      "Make it more conversational"
    ];

    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    setPrompt(prev => prev + '\n\n' + randomSuggestion);

    toast({
      title: "Suggestion Added",
      description: "Prompt enhanced with AI suggestion",
    });
  };

  const revertToVersion = (version: PromptVersion, index: number) => {
    setPrompt(version.content);
    setOutput(version.output);
    setCurrentVersionIndex(index);

    toast({
      title: "Version Restored",
      description: `Reverted to version from ${version.timestamp.toLocaleTimeString()}`,
    });
  };

  return (
    <div className={`h-full ${isFullscreen ? 'fixed inset-0 z-50 bg-background' : ''}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">AI Playground</h2>
          <Badge variant="outline" className="animate-pulse">
            <Sparkles className="w-3 h-3 mr-1" />
            Enhanced
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPreview(!showPreview)}
          >
            {showPreview ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            {showPreview ? 'Hide' : 'Show'} Preview
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            {isFullscreen ? 'Exit' : 'Fullscreen'}
          </Button>
        </div>
      </div>

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Input Panel */}
        <ResizablePanel defaultSize={showPreview ? 50 : 100} minSize={30}>
          <div className="h-full p-4 space-y-4">
            {/* Controls */}
            <div className="flex items-center gap-4 flex-wrap">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="text" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Text
                  </TabsTrigger>
                  <TabsTrigger value="code" className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Code
                  </TabsTrigger>
                  <TabsTrigger value="image" className="flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    Image
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <Select value={provider} onValueChange={setProvider}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="openai">OpenAI</SelectItem>
                  <SelectItem value="anthropic">Anthropic</SelectItem>
                </SelectContent>
              </Select>


            </div>

            {/* Enhanced Prompt Input */}
            <Card className={`transition-all duration-300 ${dragActive ? 'border-primary shadow-glow' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Wand2 className="w-5 h-5" />
                    Prompt Studio
                  </CardTitle>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={generateSuggestions}
                      className="flex items-center gap-2"
                    >
                      <TrendingUp className="w-4 h-4" />
                      Enhance
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Upload
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`relative ${dragActive ? 'bg-primary/5' : ''}`}
                >
                  <Textarea
                    ref={textareaRef}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your prompt here... You can also drag & drop files to include their content."
                    className="min-h-[200px] resize-none focus:ring-2 focus:ring-primary transition-all"
                    disabled={isLoading}
                  />

                  {dragActive && (
                    <div className="absolute inset-0 border-2 border-dashed border-primary bg-primary/5 flex items-center justify-center">
                      <div className="text-center">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-primary font-medium">Drop file here to add content</p>
                      </div>
                    </div>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".txt,.md,.json,.js,.py,.ts,.tsx"
                  onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                  className="hidden"
                />

                {/* Character count and stats */}
                <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                  <span>{prompt.length} characters</span>
                  <span>{prompt.split(/\s+/).filter(w => w).length} words</span>
                </div>
              </CardContent>
            </Card>

            {/* Prompt Versions */}
            {promptVersions.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5" />
                    Version History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {promptVersions.slice(0, 5).map((version, index) => (
                      <div
                        key={version.id}
                        className={`flex items-center justify-between p-2 rounded border cursor-pointer hover:bg-muted/50 transition-colors ${index === currentVersionIndex ? 'border-primary bg-primary/5' : ''
                          }`}
                        onClick={() => revertToVersion(version, index)}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm truncate">{version.content.slice(0, 50)}...</p>
                          <p className="text-xs text-muted-foreground">
                            {version.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <RotateCcw className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handleRunPrompt}
                disabled={isLoading || !prompt.trim()}
                className="flex-1 btn-glow"
                size="lg"
              >
                {isLoading ? (
                  <TypingIndicator />
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Generate
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                onClick={() => setPrompt('')}
                disabled={isLoading}
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </ResizablePanel>

        {/* Output Panel */}
        {showPreview && (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} minSize={30}>
              <div className="h-full p-4">
                <StreamingResponse
                  content={output}
                  isStreaming={isStreaming}
                  onCopy={handleCopyOutput}
                  onExport={handleExportOutput}
                />
              </div>
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </div>
  );
};