"use client";

import { useState, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Calculator, Copy, Trash2, RefreshCw, FileText, AlignLeft, Type, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function TokenCalculatorPage() {
    const [text, setText] = useState('');
    const [stats, setStats] = useState({
        tokens: 0,
        words: 0,
        chars: 0,
        sentences: 0,
        paragraphs: 0
    });

    // Cost constants (Input cost per 1M tokens)
    const COSTS = {
        'gpt-4o': 5.00,
        'gpt-4o-mini': 0.15,
        'claude-3-5-sonnet': 3.00,
        'gemini-1-5-pro': 3.50,
        'deepseek-v3': 0.14,
        'llama-3-70b': 0.90
    };

    useEffect(() => {
        const trimmed = text.trim();
        if (!trimmed) {
            setStats({ tokens: 0, words: 0, chars: 0, sentences: 0, paragraphs: 0 });
            return;
        }

        const words = trimmed.split(/\s+/).length;
        const chars = text.length;
        const sentences = text.split(/[.!?]+/).filter(Boolean).length || 1;
        const paragraphs = text.split(/\n\s*\n/).filter(Boolean).length || 1;

        // Approximations:
        // English: ~4 chars per token
        // Code: ~3 chars per token
        // We'll use a weighted average of 3.8 for English text which is standard for Tiktoken estimation without WASM
        const tokens = Math.ceil(chars / 3.8);

        setStats({ tokens, words, chars, sentences, paragraphs });
    }, [text]);



    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard", {
            description: "Text and stats ready to paste."
        });
    };

    // Structured Data for Google
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Free AI Token Calculator",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Calculate tokens for GPT-4, Claude 3.5, and Gemini instantly. Compare API costs and analyze text statistics."
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-neon-blue mb-6 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    <Calculator className="w-8 h-8" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">AI Token Counter & Calculator</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Accurate real-time token estimation for LLM developers. Optimize context windows and predict API costs.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Input Area */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="lg:col-span-2"
                >
                    <GlassCard className="h-full flex flex-col p-1 overflow-hidden transition-all hover:border-blue-500/30">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                <FileText className="w-3 h-3 text-blue-400" /> Input Text / Code
                            </span>
                            <div className="flex gap-1">
                                <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-white/10" onClick={copyToClipboard} title="Copy">
                                    <Copy className="w-3 h-3" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-7 w-7 text-red-400 hover:text-red-300 hover:bg-red-500/10" onClick={() => setText('')} title="Clear">
                                    <Trash2 className="w-3 h-3" />
                                </Button>
                            </div>
                        </div>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Paste your prompt, article, or code here..."
                            className="flex-1 w-full bg-transparent border-none resize-none p-6 outline-none text-white/90 placeholder:text-white/20 font-mono text-sm leading-relaxed min-h-[400px] focus:ring-0 selection:bg-blue-500/30"
                            spellCheck={false}
                        />
                    </GlassCard>
                </motion.div>

                {/* Stats Sidebar */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6"
                >
                    <GlassCard className="p-6 space-y-6 bg-gradient-to-b from-blue-900/10 to-transparent border-blue-500/10">
                        <div className="text-center space-y-2">
                            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Estimated Tokens</p>
                            <div className="text-7xl font-bold text-white tracking-tighter tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 drop-shadow-xl">
                                {stats.tokens.toLocaleString()}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                            <div className="bg-white/5 rounded-xl p-3 text-center">
                                <p className="text-[10px] text-muted-foreground uppercase mb-1">Words</p>
                                <p className="text-xl font-semibold text-white tabular-nums">{stats.words.toLocaleString()}</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-3 text-center">
                                <p className="text-[10px] text-muted-foreground uppercase mb-1">Characters</p>
                                <p className="text-xl font-semibold text-white tabular-nums">{stats.chars.toLocaleString()}</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-3 text-center">
                                <p className="text-[10px] text-muted-foreground uppercase mb-1">Sentences</p>
                                <p className="text-xl font-semibold text-white tabular-nums">{stats.sentences.toLocaleString()}</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-3 text-center">
                                <p className="text-[10px] text-muted-foreground uppercase mb-1">Paragraphs</p>
                                <p className="text-xl font-semibold text-white tabular-nums">{stats.paragraphs.toLocaleString()}</p>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Cost Estimates */}
                    <GlassCard className="p-6">
                        <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                            <RefreshCw className="w-4 h-4 text-neon-purple" /> Est. Cost (Input)
                        </h3>
                        <div className="space-y-3">
                            {Object.entries(COSTS).map(([model, price]) => (
                                <div key={model} className="flex justify-between items-center text-sm group">
                                    <span className="text-muted-foreground capitalize group-hover:text-white transition-colors">{model.replace(/-/g, ' ')}</span>
                                    <span className="font-mono text-white/80 group-hover:text-white transition-colors">
                                        ${((stats.tokens / 1000000) * price).toFixed(6)}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-4 pt-3 border-t border-white/5 opacity-60">
                            *Estimates based on current provider pricing per 1M input tokens.
                        </p>
                    </GlassCard>
                </motion.div>
            </div>

            {/* Deep Content for SEO */}
            <div className="mt-20 max-w-3xl mx-auto prose prose-invert">
                <h2 className="text-2xl font-bold text-white mb-6">How Token Counting Works</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Large Language Models (LLMs) like GPT-4 and Claude do not read text as words, but as "tokens". A token can be as short as one character or as long as one word (e.g., "a", "apple").
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>1 Token ≈ 0.75 words</strong> in English.</li>
                        <li><strong>1,000 Tokens ≈ 750 words</strong>.</li>
                        <li>Context windows are measured in tokens (e.g., GPT-4o has a 128k context window).</li>
                    </ul>
                    <p>
                        Understanding token usage is critical for optimizing prompt engineering and managing API costs. This free calculator uses industry-standard heuristics to estimate your usage instantly.
                    </p>
                </div>
            </div>
        </div>
    );
}
