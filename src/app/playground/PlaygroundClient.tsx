"use client";

import { ScrollProgress } from "@/components/ScrollProgress";
import { useRef, useState, useEffect } from "react";
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, Code, TrendingUp, Send, Copy, RefreshCw, Zap,
    Layout, Settings, History, ChevronRight, Terminal,
    MessageSquare, Play, Save, Share2, Bot, Shield
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState('google');
    const [selectedModel, setSelectedModel] = useState('gemini-2.0-flash-exp');

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

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
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            setMessages(prev => [...prev, {
                role: 'ai',
                content: `Error: ${errorMessage}. Please check your API keys in Settings.`,
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

    // Auto-focus input on mount and global keydown
    const inputRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        inputRef.current?.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore if user is already typing in an input or textarea
            if ((e.target as HTMLElement).matches('input, textarea')) return;
            // Ignore if modifier keys are pressed (e.g. Cmd+C, Ctrl+V)
            if (e.metaKey || e.ctrlKey || e.altKey) return;

            // Focus input
            inputRef.current?.focus();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when clicking anywhere in the container
    const handleContainerClick = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest('button, a, input, textarea, select')) return;
        inputRef.current?.focus();
    };

    // Close mobile menu when mode changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [activeMode]);

    return (
        <div className="fixed inset-0 pt-16 flex bg-black overflow-hidden z-40" onClick={handleContainerClick}>
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
            </div>

            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar - Responsive */}
            <div className={cn(
                "w-72 border-r border-white/10 bg-black/95 md:bg-black/40 backdrop-blur-2xl flex flex-col fixed inset-y-0 left-0 z-50 md:relative md:z-20 shrink-0 h-full transition-transform duration-300 ease-in-out md:translate-x-0 pt-16 md:pt-0",
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-4 border-b border-white/5 space-y-4">
                    <div className="flex items-center space-x-3 px-2 md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="ml-auto">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </Button>
                    </div>
                    {/* Logo removed to avoid redundancy with Top Navbar */}
                    <Button variant="premium" className="w-full shadow-neon justify-start gap-2 h-10 font-semibold mt-2">
                        <Sparkles className="w-4 h-4" /> New Project
                    </Button>
                </div>

                <div className="flex-1 p-4 space-y-8 overflow-y-auto custom-scrollbar">
                    <div>
                        <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4 px-2">Core Modes</h3>
                        <div className="space-y-1">
                            {modes.map(mode => (
                                <button
                                    key={mode.id}
                                    onClick={() => setActiveMode(mode.id as 'chat' | 'code' | 'research')}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group relative overflow-hidden",
                                        activeMode === mode.id
                                            ? "bg-white/10 text-white shadow-glow border border-white/5 translate-x-1"
                                            : "text-muted-foreground hover:text-white hover:bg-white/5 hover:translate-x-1"
                                    )}
                                >
                                    {activeMode === mode.id && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-50" />
                                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                                        </>
                                    )}
                                    <mode.icon className={cn("w-4 h-4 transition-colors", activeMode === mode.id ? mode.color : "group-hover:text-white")} />
                                    <span className="relative z-10">{mode.label}</span>
                                    {activeMode === mode.id && <ChevronRight className="w-3 h-3 ml-auto opacity-50" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4 px-2">Recent History</h3>
                        <div className="space-y-1">
                            {['React Component', 'Market Analysis', 'Blog Post Draft'].map((item, i) => (
                                <button key={i} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors text-left truncate group">
                                    <History className="w-3 h-3 shrink-0 group-hover:text-primary transition-colors" />
                                    <span className="truncate">{item}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4 px-2">Configuration</h3>
                        <div className="space-y-4 px-2">
                            <div className="space-y-1.5">
                                <label className="text-xs text-muted-foreground font-medium">Provider</label>
                                <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                                    <SelectTrigger className="w-full bg-black/40 border-white/10 h-9 text-xs focus:ring-primary/50">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                                        <SelectItem value="google">Google Gemini</SelectItem>
                                        <SelectItem value="openai">OpenAI</SelectItem>
                                        <SelectItem value="anthropic">Anthropic</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs text-muted-foreground font-medium">Model</label>
                                <Select value={selectedModel} onValueChange={setSelectedModel}>
                                    <SelectTrigger className="w-full bg-black/40 border-white/10 h-9 text-xs focus:ring-primary/50">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                                        {aiService.getModelsForProvider(selectedProvider).map(model => (
                                            <SelectItem key={model} value={model}>{model}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-white/5 bg-black/20 mt-auto">
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center font-bold text-xs text-white shadow-lg ring-2 ring-white/10">
                            DP
                        </div>
                        <div className="text-sm">
                            <div className="font-bold text-white">Demo User</div>
                            <div className="text-xs text-muted-foreground">Pro Plan</div>
                        </div>
                        <Settings
                            className="w-4 h-4 ml-auto text-muted-foreground cursor-pointer hover:text-white transition-colors hover:rotate-90 duration-300"
                            onClick={() => setIsSettingsOpen(true)}
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative z-10 min-w-0 h-full transition-all duration-300">
                {/* Header */}
                <header className="h-16 border-b border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-between px-4 md:px-6 sticky top-0 z-30 shrink-0">
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="icon" className="md:hidden -ml-2" onClick={() => setIsMobileMenuOpen(true)}>
                            <Layout className="w-5 h-5" />
                        </Button>
                        <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary px-3 py-1">
                            {modes.find(m => m.id === activeMode)?.label} Mode
                        </Badge>
                        <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
                        <span className="text-xs text-muted-foreground font-mono hidden sm:inline-block">
                            {selectedProvider} :: {selectedModel}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-white/5" onClick={() => setIsSettingsOpen(true)}>
                            <Settings className="w-4 h-4" />
                        </Button>
                    </div>
                </header>

                {/* Chat/Output Area */}
                <ScrollArea className="flex-1 p-4 md:p-8" viewportRef={scrollRef}>
                    <ScrollProgress containerRef={scrollRef} className="absolute top-0 left-0 right-0 z-50" />
                    <div className="max-w-[1600px] mx-auto space-y-8 pb-32">
                        {messages.map((msg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn(
                                    "flex gap-4 md:gap-6 group",
                                    msg.role === 'user' ? "flex-row-reverse" : ""
                                )}
                            >
                                <div className={cn(
                                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 border shadow-lg transition-transform group-hover:scale-110 mt-1",
                                    msg.role === 'ai'
                                        ? "bg-black/60 border-white/10 text-primary backdrop-blur-xl"
                                        : "bg-primary text-white border-primary shadow-neon"
                                )}>
                                    {msg.role === 'ai' ? <Bot className="w-4 h-4 md:w-5 md:h-5" /> : <div className="text-xs md:text-sm font-bold">U</div>}
                                </div>

                                <div className={cn(
                                    "max-w-[85%] rounded-3xl p-5 md:p-7 shadow-xl relative overflow-hidden",
                                    msg.role === 'user'
                                        ? "bg-gradient-to-br from-primary to-purple-600 text-white rounded-tr-sm"
                                        : "bg-white/5 border border-white/10 backdrop-blur-md rounded-tl-sm hover:border-white/20 transition-colors"
                                )}>
                                    {/* Subtle noise/texture overlay for AI messages */}
                                    {msg.role === 'ai' && <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />}

                                    {msg.type === 'code' ? (
                                        <div className="font-mono text-sm overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-inner">
                                            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                                                <span className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                                                    <Terminal className="w-3 h-3" /> Generated Code
                                                </span>
                                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:text-white">
                                                    <Copy className="w-3 h-3" />
                                                </Button>
                                            </div>
                                            <div className="p-4 overflow-x-auto custom-scrollbar">
                                                <pre className="text-green-400 whitespace-pre-wrap font-code leading-relaxed">{msg.content}</pre>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="leading-relaxed whitespace-pre-wrap text-[16px] md:text-[17px] tracking-wide font-light">{msg.content}</p>
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
                                <div className="w-10 h-10 rounded-full bg-black/60 border border-white/10 text-primary flex items-center justify-center shrink-0 backdrop-blur-xl">
                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-6 flex items-center gap-2 backdrop-blur-md">
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
                <div className="p-4 bg-gradient-to-t from-black via-black/95 to-transparent absolute bottom-0 left-0 right-0 z-40">
                    <div className="max-w-3xl mx-auto relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple/50 to-neon-blue/50 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500 group-focus-within:opacity-50" />
                        <GlassCard
                            className="relative w-full p-2 pl-4 flex items-end gap-2 bg-black/90 backdrop-blur-2xl border-white/10 shadow-2xl rounded-3xl transition-all duration-300 group-focus-within:border-white/20 cursor-text ring-1 ring-white/5"
                            onClick={() => inputRef.current?.focus()}
                        >
                            <div className="flex-1 py-3">
                                <textarea
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSend();
                                        }
                                    }}
                                    placeholder={`Ask anything in ${activeMode} mode...`}
                                    className="w-full bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none shadow-none resize-none min-h-[24px] max-h-64 text-[16px] placeholder:text-muted-foreground/50 text-white leading-relaxed custom-scrollbar"
                                    rows={1}
                                    autoFocus
                                    style={{ height: 'auto', overflow: 'hidden' }}
                                    onInput={(e) => {
                                        const target = e.target as HTMLTextAreaElement;
                                        target.style.height = 'auto';
                                        target.style.height = `${target.scrollHeight}px`;
                                    }}
                                />
                            </div>
                            <div className="flex gap-2 pb-2 pr-2">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="text-muted-foreground hover:text-white hover:bg-white/10 rounded-full h-9 w-9 hidden sm:flex transition-colors"
                                >
                                    <Layout className="w-4 h-4" />
                                </Button>
                                <Button
                                    size="icon"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSend();
                                    }}
                                    disabled={!input.trim() || isGenerating}
                                    className={cn(
                                        "transition-all duration-300 rounded-full w-9 h-9",
                                        input.trim() ? "bg-white text-black hover:scale-105 shadow-lg shadow-white/20" : "bg-white/10 text-muted-foreground"
                                    )}
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </GlassCard>
                        <div className="text-center mt-3 flex items-center justify-center gap-2 opacity-50">
                            <Shield className="w-3 h-3 text-muted-foreground" />
                            <p className="text-[10px] text-muted-foreground">
                                Private & Secure. AI can make mistakes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaygroundClient;
