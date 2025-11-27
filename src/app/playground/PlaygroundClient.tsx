"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, Code, TrendingUp, Send, Copy, RefreshCw, Zap,
    Layout, Settings, History, ChevronRight, Terminal,
    MessageSquare, Play, Save, Share2, Bot
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { aiService } from '@/lib/ai';
import { SettingsModal } from '@/components/playground/SettingsModal';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PlaygroundClient = () => {
    const [activeMode, setActiveMode] = useState<'chat' | 'code' | 'research'>('chat');
    const [input, setInput] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai', content: string, type?: 'code' | 'text' }>>([
        { role: 'ai', content: "Hello! I'm your AI assistant. Configure your API keys in Settings ⚙️ and let's build something amazing.", type: 'text' }
    ]);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState('google');
    const [selectedModel, setSelectedModel] = useState('gemini-2.0-flash-exp');

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Update available models when provider changes
    useEffect(() => {
        const models = aiService.getModelsForProvider(selectedProvider);
        if (models.length > 0) {
            setSelectedModel(models[0]);
        }
    }, [selectedProvider]);

    const handleSend = async () => {
        if (!input.trim() || isGenerating) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg, type: 'text' }]);
        setIsGenerating(true);

        try {
            // Get keys from localStorage
            const storedKeys = localStorage.getItem('ai_api_keys');
            const keys = storedKeys ? JSON.parse(storedKeys) : {};
            const apiKey = keys[selectedProvider];

            const response = await aiService.generateResponse(
                userMsg,
                activeMode === 'code' ? 'code' : 'text',
                selectedProvider,
                selectedModel,
                apiKey
            );

            setMessages(prev => [...prev, {
                role: 'ai',
                content: response.content,
                type: activeMode === 'code' ? 'code' : 'text'
            }]);
        } catch (error: any) {
            setMessages(prev => [...prev, {
                role: 'ai',
                content: `Error: ${error.message}. Please check your API keys in Settings.`,
                type: 'text'
            }]);
        } finally {
            setIsGenerating(false);
        }
    };

    const modes = [
        { id: 'chat', icon: MessageSquare, label: 'Chat', color: 'text-neon-purple' },
        { id: 'code', icon: Code, label: 'Code', color: 'text-neon-blue' },
        { id: 'research', icon: TrendingUp, label: 'Research', color: 'text-neon-cyan' },
    ];

    return (
        <div className="h-screen pt-16 flex overflow-hidden bg-background">
            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

            {/* Sidebar */}
            <div className="w-64 border-r border-white/5 bg-black/20 backdrop-blur-xl flex flex-col hidden md:flex">
                <div className="p-4 border-b border-white/5 space-y-4">
                    <div className="flex items-center space-x-2 px-2">
                        <div className="relative w-8 h-8">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg" />
                            <img
                                src="/logo.png"
                                alt="UntrainedModel Logo"
                                className="w-8 h-8 relative z-10 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                            />
                        </div>
                        <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            UntrainedModel
                        </span>
                    </div>
                    <Button variant="premium" className="w-full shadow-neon justify-start gap-2">
                        <Sparkles className="w-4 h-4" /> New Project
                    </Button>
                </div>

                <div className="flex-1 p-4 space-y-6">
                    <div>
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Modes</h3>
                        <div className="space-y-1">
                            {modes.map(mode => (
                                <button
                                    key={mode.id}
                                    onClick={() => setActiveMode(mode.id as any)}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                        activeMode === mode.id
                                            ? "bg-white/10 text-white shadow-glow"
                                            : "text-muted-foreground hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <mode.icon className={cn("w-4 h-4", mode.color)} />
                                    {mode.label}
                                    {activeMode === mode.id && <ChevronRight className="w-3 h-3 ml-auto opacity-50" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">History</h3>
                        <div className="space-y-1">
                            {['React Component', 'Market Analysis', 'Blog Post Draft'].map((item, i) => (
                                <button key={i} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors text-left truncate">
                                    <History className="w-3 h-3 shrink-0" />
                                    <span className="truncate">{item}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Model Settings</h3>
                        <div className="space-y-3 px-2">
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground">Provider</label>
                                <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                                    <SelectTrigger className="w-full bg-white/5 border-white/10 h-8 text-xs">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="google">Google Gemini</SelectItem>
                                        <SelectItem value="openai">OpenAI</SelectItem>
                                        <SelectItem value="anthropic">Anthropic</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground">Model</label>
                                <Select value={selectedModel} onValueChange={setSelectedModel}>
                                    <SelectTrigger className="w-full bg-white/5 border-white/10 h-8 text-xs">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {aiService.getModelsForProvider(selectedProvider).map(model => (
                                            <SelectItem key={model} value={model}>{model}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-white/5">
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center font-bold text-xs">
                            DP
                        </div>
                        <div className="text-sm">
                            <div className="font-medium">Demo User</div>
                            <div className="text-xs text-muted-foreground">Free Plan</div>
                        </div>
                        <Settings
                            className="w-4 h-4 ml-auto text-muted-foreground cursor-pointer hover:text-white transition-colors"
                            onClick={() => setIsSettingsOpen(true)}
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative">
                {/* Header */}
                <header className="h-14 border-b border-white/5 bg-black/10 backdrop-blur-sm flex items-center justify-between px-6">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
                            {modes.find(m => m.id === activeMode)?.label} Mode
                        </Badge>
                        <span className="text-xs text-muted-foreground hidden sm:inline-block">
                            Using {selectedProvider} / {selectedModel}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsSettingsOpen(true)}>
                            <Settings className="w-4 h-4" />
                        </Button>
                    </div>
                </header>

                {/* Chat/Output Area */}
                <ScrollArea className="flex-1 p-4 md:p-6">
                    <div className="max-w-4xl mx-auto space-y-6 pb-20">
                        {messages.map((msg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn(
                                    "flex gap-4",
                                    msg.role === 'user' ? "flex-row-reverse" : ""
                                )}
                            >
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                                    msg.role === 'ai'
                                        ? "bg-black border-white/10 text-primary"
                                        : "bg-primary text-white border-primary"
                                )}>
                                    {msg.role === 'ai' ? <Bot className="w-4 h-4" /> : <div className="text-xs font-bold">U</div>}
                                </div>

                                <div className={cn(
                                    "max-w-[80%] rounded-2xl p-4 shadow-lg",
                                    msg.role === 'user'
                                        ? "bg-primary text-white"
                                        : "bg-white/5 border border-white/10 backdrop-blur-md"
                                )}>
                                    {msg.type === 'code' ? (
                                        <div className="font-mono text-sm overflow-x-auto">
                                            <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10 text-xs text-muted-foreground">
                                                <span>TypeScript</span>
                                                <Copy className="w-3 h-3 cursor-pointer hover:text-white" />
                                            </div>
                                            <pre className="text-green-400 whitespace-pre-wrap">{msg.content}</pre>
                                        </div>
                                    ) : (
                                        <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {isGenerating && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex gap-4"
                            >
                                <div className="w-8 h-8 rounded-full bg-black border border-white/10 text-primary flex items-center justify-center shrink-0">
                                    <RefreshCw className="w-4 h-4 animate-spin" />
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 md:p-6 bg-gradient-to-t from-background via-background to-transparent absolute bottom-0 left-0 right-0 z-20">
                    <div className="max-w-4xl mx-auto relative">
                        <GlassCard className="p-2 pr-2 flex items-end gap-2 bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl">
                            <div className="flex-1">
                                <textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSend();
                                        }
                                    }}
                                    placeholder={`Ask anything in ${activeMode} mode...`}
                                    className="w-full bg-transparent border-none focus:ring-0 resize-none max-h-32 min-h-[44px] py-3 px-3 text-sm placeholder:text-muted-foreground/50"
                                    rows={1}
                                />
                            </div>
                            <div className="flex gap-2 pb-1">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="text-muted-foreground hover:text-white"
                                >
                                    <Layout className="w-4 h-4" />
                                </Button>
                                <Button
                                    size="icon"
                                    onClick={handleSend}
                                    disabled={!input.trim() || isGenerating}
                                    className={cn(
                                        "transition-all duration-300",
                                        input.trim() ? "bg-primary text-white shadow-neon" : "bg-white/10 text-muted-foreground"
                                    )}
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </GlassCard>
                        <div className="text-center mt-2">
                            <p className="text-[10px] text-muted-foreground">
                                AI can make mistakes. Please verify important information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaygroundClient;
