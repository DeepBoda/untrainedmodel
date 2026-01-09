"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, Code, TrendingUp, Send, Copy, RefreshCw, Zap,
    Layout, Settings, History, ChevronRight, Terminal,
    MessageSquare, Play, Save, Share2, Bot, Shield, Wand2,
    Brain, Rocket, Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { aiService } from '@/lib/ai';
import { SettingsModal } from '@/components/playground/SettingsModal';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PlaygroundClient = () => {
    const [activeMode, setActiveMode] = useState<'chat' | 'code' | 'research'>('chat');
    const [input, setInput] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai', content: string, type?: 'code' | 'text' }>>([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState('google');
    const [selectedModel, setSelectedModel] = useState('gemini-2.0-pro-exp');

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
        { id: 'chat', icon: MessageSquare, label: 'Chat Mode', color: 'text-neon-purple', desc: 'General conversation' },
        { id: 'code', icon: Code, label: 'Code Mode', color: 'text-neon-blue', desc: 'Programming & debugging' },
        { id: 'research', icon: TrendingUp, label: 'Research', color: 'text-neon-cyan', desc: 'Analysis & insights' },
    ];

    const suggestions = [
        { icon: Code, text: "Build a React component with TypeScript", color: "from-blue-500 to-cyan-500" },
        { icon: Brain, text: "Explain quantum computing simply", color: "from-purple-500 to-pink-500" },
        { icon: Rocket, text: "Create a marketing strategy", color: "from-orange-500 to-red-500" },
        { icon: Lightbulb, text: "Debug this Python error", color: "from-green-500 to-emerald-500" },
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

    // Show welcome screen if no messages
    const showWelcome = messages.length === 0;

    return (
        <div className="relative flex w-full h-[calc(100vh-64px)] bg-black overflow-hidden border-b border-white/10" onClick={handleContainerClick}>
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
                "w-72 border-r border-white/10 bg-black/95 md:bg-black/40 backdrop-blur-2xl flex flex-col absolute inset-y-0 left-0 z-50 md:relative md:z-20 shrink-0 h-full transition-transform duration-300 ease-in-out md:translate-x-0",
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
                                    <div className="flex flex-col items-start">
                                        <span className="relative z-10">{mode.label}</span>
                                        <span className="text-[10px] text-muted-foreground">{mode.desc}</span>
                                    </div>
                                    {activeMode === mode.id && <ChevronRight className="w-3 h-3 ml-auto opacity-50" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4 px-2">Configuration</h3>
                        <div className="space-y-3 px-2">
                            <div>
                                <label className="text-xs text-muted-foreground mb-1.5 block">Provider</label>
                                <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                                    <SelectTrigger className="w-full h-9 bg-white/5 border-white/10">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="google">Google Gemini</SelectItem>
                                        <SelectItem value="openai">OpenAI</SelectItem>
                                        <SelectItem value="anthropic">Anthropic</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="text-xs text-muted-foreground mb-1.5 block">Model</label>
                                <Select value={selectedModel} onValueChange={setSelectedModel}>
                                    <SelectTrigger className="w-full h-9 bg-white/5 border-white/10">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {aiService.getModelsForProvider(selectedProvider).map((model) => (
                                            <SelectItem key={model} value={model}>{model}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                                onClick={() => setIsSettingsOpen(true)}
                            >
                                <Settings className="w-3.5 h-3.5 mr-2" />
                                API Keys
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-white/5 opacity-50 hover:opacity-100 transition-opacity">
                    <p className="text-[10px] text-muted-foreground text-center">
                        Demo User • Free Tier
                    </p>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col relative z-10">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/60 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Layout className="w-5 h-5 text-muted-foreground" />
                        </button>
                        <div>
                            <h1 className="text-sm font-bold text-white flex items-center gap-2">
                                <Badge variant="outline" className="text-[10px]">{activeMode}</Badge>
                                AI Playground
                            </h1>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                {selectedProvider} :: {selectedModel}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <History className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsSettingsOpen(true)}>
                            <Settings className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Messages Area */}
                <ScrollArea className="flex-1 relative">
                    <div className="max-w-5xl mx-auto px-4 md:px-8 pt-12 pb-32 space-y-8">
                        {showWelcome ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="max-w-3xl mx-auto text-center space-y-8 pt-12"
                            >
                                {/* Hero Section */}
                                <div className="space-y-4">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600 shadow-glow mb-4"
                                    >
                                        <Wand2 className="w-10 h-10 text-white" />
                                    </motion.div>
                                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                                        Welcome to AI Playground
                                    </h1>
                                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                        Your personal AI assistant powered by{' '}
                                        <span className="text-primary font-semibold">{selectedProvider}</span>.
                                        Start building, learning, and creating with cutting-edge AI models.
                                    </p>
                                </div>

                                {/* Quick Start Suggestions */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-12">
                                    {suggestions.map((suggestion, i) => (
                                        <motion.button
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + i * 0.1 }}
                                            onClick={() => setInput(suggestion.text)}
                                            className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-left"
                                        >
                                            <div className={cn(
                                                "w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center mb-3 group-hover:scale-110 transition-transform",
                                                suggestion.color
                                            )}>
                                                <suggestion.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <p className="text-sm text-white group-hover:text-primary transition-colors">
                                                {suggestion.text}
                                            </p>
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Features */}
                                <div className="flex items-center justify-center gap-8 mt-12 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-yellow-500" />
                                        <span>Lightning Fast</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-green-500" />
                                        <span>Secure & Private</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-purple-500" />
                                        <span>100% Free</span>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            // Existing chat messages
                            messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={cn(
                                        "flex gap-4 items-start relative z-10",
                                        msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                                    )}
                                >
                                    {/* Avatar */}
                                    <div className={cn(
                                        "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 backdrop-blur-xl border font-medium text-sm md:text-base shadow-xl",
                                        msg.role === 'user'
                                            ? "bg-gradient-to-br from-primary to-purple-600 border-purple-500/20 text-white"
                                            : "bg-black/60 border-white/10 text-primary"
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
                            ))
                        )}

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

                {/* Input Area - Fixed at bottom */}
                <div className="p-6 bg-black/80 backdrop-blur-xl border-t border-white/5 absolute bottom-0 left-0 right-0 z-40 md:relative md:z-auto">
                    <div className="max-w-5xl mx-auto relative">
                        <div className="relative bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden ring-1 ring-white/5 focus-within:ring-primary/50 focus-within:border-primary/50 transition-all duration-300 shadow-2xl">
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
                                placeholder={`Message ${activeMode}...`}
                                className="w-full bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none shadow-none resize-none min-h-[56px] max-h-64 py-4 px-4 text-base md:text-lg placeholder:text-muted-foreground/40 text-white leading-relaxed custom-scrollbar font-light"
                                rows={1}
                                autoFocus
                                style={{ height: 'auto', overflow: 'hidden' }}
                                onInput={(e) => {
                                    const target = e.target as HTMLTextAreaElement;
                                    target.style.height = 'auto';
                                    target.style.height = `${target.scrollHeight}px`;
                                }}
                            />

                            {/* Toolbar / Actions */}
                            <div className="flex items-center justify-between px-3 pb-3 pt-1">
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        <Layout className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        <Code className="w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] text-muted-foreground/50 font-mono hidden sm:inline-block">
                                        {input.length} / 2000
                                    </span>
                                    <Button
                                        size="sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSend();
                                        }}
                                        disabled={!input.trim() || isGenerating}
                                        className={cn(
                                            "transition-all duration-300 rounded-lg h-8 px-4 font-medium text-xs uppercase tracking-wider",
                                            input.trim()
                                                ? "bg-primary text-white shadow-glow hover:scale-105"
                                                : "bg-white/5 text-muted-foreground hover:bg-white/10"
                                        )}
                                    >
                                        {isGenerating ? "Thinking..." : "Send"}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-3 flex items-center justify-center gap-2 opacity-30 hover:opacity-100 transition-opacity duration-300">
                            <Shield className="w-3 h-3 text-muted-foreground" />
                            <p className="text-[10px] text-muted-foreground font-mono">
                                AI-Generated Content. Verify important information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaygroundClient;
