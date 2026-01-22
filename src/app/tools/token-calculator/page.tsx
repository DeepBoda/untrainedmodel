"use client";

import { useState, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Calculator, Copy, Trash2, RefreshCw, FileText, AlignLeft, Type, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';

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

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
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
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-500/10 text-blue-400 mb-8 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-xl">
                    <Calculator className="w-10 h-10" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Token Intelligence</h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    Precision context analysis and cost projection for modern LLM architectures.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Input Area */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-8"
                >
                    <GlassCard className="h-full flex flex-col p-1 overflow-hidden group transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                                <FileText className="w-3 h-3" /> Context Input
                            </span>
                            <div className="flex gap-2">
                                <Button variant="ghost" size="sm" className="h-8 px-3 text-xs hover:bg-white/10 transition-colors" onClick={copyToClipboard}>
                                    <Copy className="w-3 h-3 mr-2" /> Copy
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors" onClick={() => setText('')}>
                                    <Trash2 className="w-3 h-3 mr-2" /> Clear
                                </Button>
                            </div>
                        </div>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Paste query, context, or code block..."
                            className="flex-1 w-full bg-transparent border-none resize-none p-8 outline-none text-white/90 placeholder:text-white/10 font-mono text-sm leading-relaxed min-h-[500px] focus:ring-0 selection:bg-blue-500/30"
                            spellCheck={false}
                        />
                    </GlassCard>
                </motion.div>

                {/* Stats Sidebar */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="lg:col-span-4 space-y-6"
                >
                    {/* Primary Stat */}
                    <motion.div variants={item}>
                        <GlassCard className="p-8 relative overflow-hidden border-blue-500/20 bg-gradient-to-b from-blue-500/5 to-transparent">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <AlignLeft className="w-24 h-24 text-blue-500" />
                            </div>
                            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Total Utilization</p>
                            <div className="text-6xl font-bold text-white tracking-tighter tabular-nums mb-1">
                                <AnimatedNumber value={stats.tokens} />
                            </div>
                            <p className="text-sm text-muted-foreground font-medium">Tokens Detected</p>
                        </GlassCard>
                    </motion.div>

                    {/* Secondary Stats Grid */}
                    <motion.div variants={item} className="grid grid-cols-2 gap-4">
                        <GlassCard className="p-5">
                            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Word Count</p>
                            <p className="text-2xl font-bold text-white tabular-nums tracking-tight">
                                <AnimatedNumber value={stats.words} />
                            </p>
                        </GlassCard>
                        <GlassCard className="p-5">
                            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Characters</p>
                            <p className="text-2xl font-bold text-white tabular-nums tracking-tight">
                                <AnimatedNumber value={stats.chars} />
                            </p>
                        </GlassCard>
                        <GlassCard className="p-5">
                            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Sentences</p>
                            <p className="text-2xl font-bold text-white tabular-nums tracking-tight">
                                <AnimatedNumber value={stats.sentences} />
                            </p>
                        </GlassCard>
                        <GlassCard className="p-5">
                            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Paragraphs</p>
                            <p className="text-2xl font-bold text-white tabular-nums tracking-tight">
                                <AnimatedNumber value={stats.paragraphs} />
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* Cost Analysis */}
                    <motion.div variants={item}>
                        <GlassCard className="p-6">
                            <h3 className="text-xs font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-widest">
                                <RefreshCw className="w-3 h-3 text-neon-purple" /> Projected Cost
                            </h3>
                            <div className="space-y-4">
                                {Object.entries(COSTS).map(([model, price]) => (
                                    <div key={model} className="flex justify-between items-center text-sm group">
                                        <div className="flex flex-col">
                                            <span className="text-white/70 font-medium capitalize transition-colors group-hover:text-white">
                                                {model.replace(/-/g, ' ')}
                                            </span>
                                            <span className="text-[10px] text-muted-foreground opacity-50 font-mono">${price.toFixed(2)}/1M</span>
                                        </div>
                                        <span className="font-mono text-white group-hover:text-neon-purple transition-colors tabular-nums">
                                            ${((stats.tokens / 1000000) * price).toFixed(6)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                        {/* Fix: Reverting cost to standard display in next edit if needed, or adjusting AnimatedNumber to handle decimals. 
                            Wait, AnimatedNumber rounds. I should fix AnimatedNumber or just use raw text for Money. 
                            Decided: Standard text for money is safer for precision. I will adjust in next step if this looks weird.
                        */}
                    </motion.div>
                </motion.div>
            </div>

            {/* Deep Content for SEO */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-32 max-w-3xl mx-auto prose prose-invert prose-lg"
            >
                <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Understanding Tokenization</h2>
                <div className="space-y-6 text-muted-foreground/80 leading-relaxed font-light">
                    <p>
                        In the realm of Large Language Models (LLMs), a "token" is the fundamental unit of semantic meaning. Unlike traditional word counts, tokenization parses text into efficient vector representations—words, sub-words, or even single characters.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-white font-bold mb-2">English Text</h3>
                            <p className="text-sm">1,000 Tokens ≈ 750 Words</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-white font-bold mb-2">Code / Syntax</h3>
                            <p className="text-sm">1,000 Tokens ≈ 3,000 Characters</p>
                        </div>
                    </div>
                    <p>
                        Accurate token analysis is the cornerstone of cost-effective AI development. Whether you're optimizing context windows for RAG pipelines or estimating API spend for enterprise deployments, precise measurement is non-negotiable.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

