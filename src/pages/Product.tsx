import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Settings, Trash2, Download } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const Product = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  // Hardcoded API keys - Owner configured
  const apiKeys = {
    openai: "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",
    gemini: "AIzaSyBI3Qt0vnO9cdEUpM7l8F6Q4kktC50PjV0"
  };
  const [apiProvider, setApiProvider] = useState<"openai" | "gemini">("openai");
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved data from localStorage
    const savedMessages = localStorage.getItem("untrainedmodel_messages");
    const savedProvider = localStorage.getItem("untrainedmodel_provider");

    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed.map((msg: Omit<Message, 'timestamp'>) => ({
          ...msg,
          timestamp: new Date((msg as Message).timestamp)
        })));
      } catch (error) {
        console.error("Error loading saved messages:", error);
      }
    }
    
    if (savedProvider) setApiProvider(savedProvider as "openai" | "gemini");
  }, []);

  useEffect(() => {
    // Save messages to localStorage
    localStorage.setItem("untrainedmodel_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    // Save API settings to localStorage
    localStorage.setItem("untrainedmodel_provider", apiProvider);
  }, [apiProvider]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const currentApiKey = apiKeys[apiProvider];
    if (!currentApiKey || currentApiKey.includes("YOUR_")) {
      toast({
        title: "Service Temporarily Unavailable",
        description: "AI service is being configured. Please try again later.",
        variant: "destructive",
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // This is a placeholder - in production, you would make actual API calls
      const response = await simulateApiCall(inputMessage, apiProvider, currentApiKey);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: Replace with actual API integration
  const simulateApiCall = async (message: string, provider: string, key: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return a simulated response
    return `This is a simulated response from ${provider}. In production, this would connect to the actual ${provider === 'openai' ? 'OpenAI' : 'Google Gemini'} API using your provided key. Your message was: "${message}"
    
    To implement actual API calls:
    1. For OpenAI: Use the OpenAI API with endpoint https://api.openai.com/v1/chat/completions
    2. For Gemini: Use the Google AI Studio API
    3. Include proper error handling and rate limiting
    4. Validate API keys before making calls`;
  };

  const clearChat = () => {
    setMessages([]);
    toast({
      title: "Chat Cleared",
      description: "All messages have been removed.",
    });
  };

  const exportChat = () => {
    const chatData = {
      messages: messages,
      exportDate: new Date(),
      provider: apiProvider
    };
    
    const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `untrained-model-chat-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Chat Exported",
      description: "Your chat history has been downloaded.",
    });
  };

  return (
    <Layout 
      title="AI Chat Interface - UntrainedModel"
      description="Chat with AI using our intuitive interface. Connect your OpenAI or Google Gemini API key and start conversing with advanced AI models."
      keywords="AI chat, ChatGPT, Gemini, OpenAI, Google AI, artificial intelligence, chat interface"
    >
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">AI Chat Interface</h1>
              <p className="text-muted-foreground">Connect with ChatGPT or Gemini APIs</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => setShowSettings(!showSettings)}>
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={exportChat} disabled={messages.length === 0}>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={clearChat} disabled={messages.length === 0}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Settings Panel */}
            {showSettings && (
              <div className="lg:col-span-1">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">API Provider</label>
                      <div className="flex gap-2">
                        <Button
                          variant={apiProvider === "openai" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setApiProvider("openai")}
                          className="flex-1"
                        >
                          OpenAI
                        </Button>
                        <Button
                          variant={apiProvider === "gemini" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setApiProvider("gemini")}
                          className="flex-1"
                        >
                          Gemini
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg border">
                        <h4 className="font-medium text-sm mb-2">Current Configuration</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          API keys are pre-configured by the service owner.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${apiKeys[apiProvider] && !apiKeys[apiProvider].includes("YOUR_") ? 'bg-green-500' : 'bg-red-500'}`} />
                          <span className="text-xs">
                            {apiKeys[apiProvider] && !apiKeys[apiProvider].includes("YOUR_") ? 'Connected' : 'Not Configured'}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-medium mb-1">Using {apiProvider === 'openai' ? 'OpenAI GPT' : 'Google Gemini'} API</p>
                        <p>No setup required - just start chatting!</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Chat Interface */}
            <div className={`${showSettings ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
              <Card className="shadow-card h-[600px] flex flex-col">
                <CardHeader className="flex-shrink-0 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bot className="h-5 w-5 text-primary" />
                      <span className="font-medium">AI Assistant</span>
                      {apiProvider && (
                        <Badge variant="secondary" className="text-xs">
                          {apiProvider === 'openai' ? 'OpenAI' : 'Gemini'}
                        </Badge>
                      )}
                    </div>
                    <Badge variant={apiKeys[apiProvider] && !apiKeys[apiProvider].includes("YOUR_") ? "default" : "destructive"} className="text-xs">
                      {apiKeys[apiProvider] && !apiKeys[apiProvider].includes("YOUR_") ? "Ready" : "Setup Required"}
                    </Badge>
                  </div>
                </CardHeader>
                
                {/* Messages */}
                <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                  {messages.length === 0 ? (
                    <div className="text-center text-muted-foreground py-12">
                      <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium mb-2">Welcome to AI Chat</p>
                      <p>Start a conversation by typing a message below.</p>
                      {(!apiKeys[apiProvider] || apiKeys[apiProvider].includes("YOUR_")) && (
                        <p className="text-sm mt-4 text-destructive">
                          AI service is being configured. Please try again later.
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className="flex-shrink-0">
                              {message.role === 'user' ? (
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                  <User className="h-4 w-4 text-primary-foreground" />
                                </div>
                              ) : (
                                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                                  <Bot className="h-4 w-4 text-muted-foreground" />
                                </div>
                              )}
                            </div>
                            <div className={`p-3 rounded-lg ${
                              message.role === 'user' 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-muted text-foreground'
                            }`}>
                              <p className="whitespace-pre-wrap">{message.content}</p>
                              <p className={`text-xs mt-2 opacity-70 ${
                                message.role === 'user' ? 'text-primary-foreground' : 'text-muted-foreground'
                              }`}>
                                {message.timestamp.toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex gap-3 justify-start">
                          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                            <Bot className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="bg-muted p-3 rounded-lg">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </ScrollArea>

                {/* Message Input */}
                <div className="flex-shrink-0 border-t border-border p-4">
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Type your message..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          sendMessage();
                        }
                      }}
                      className="min-h-[60px] resize-none"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!inputMessage.trim() || isLoading}
                      size="icon"
                      className="h-[60px] w-12"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;