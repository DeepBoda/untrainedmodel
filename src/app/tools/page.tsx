import { Metadata } from 'next';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { Calculator, Coins, ArrowRight, Zap, Brain, Code } from 'lucide-react';

export const metadata: Metadata = {
    title: "Free AI Developer Tools | Token Calculator & Cost Estimator",
    description: "Essential, free utilities for AI engineering. Real-time Token Calculator (tiktoken compatible) and AI API Cost Estimator for GPT-4, Claude 3, and Gemini.",
    keywords: ["token calculator", "ai cost estimator", "gpt-4 cost calculator", "tiktoken online", "free ai tools"],
};

const tools = [
    {
        id: 'token-calculator',
        title: 'AI Token Calculator',
        description: 'Accurately count tokens for GPT-4, Claude, and Gemini. Optimize your prompts and save costs.',
        icon: Calculator,
        href: '/tools/token-calculator',
        color: 'text-neon-blue',
        gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
        id: 'cost-estimator',
        title: 'LLM API Cost Estimator',
        description: 'Compare API costs across OpenAI, Anthropic, and Google. Calculate monthly spend based on usage.',
        icon: Coins,
        href: '/tools/cost-estimator',
        color: 'text-neon-purple',
        gradient: 'from-purple-500/20 to-pink-500/20',
    },
];

export default function ToolsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                    AI Engineering Utilities
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Free, high-performance tools to help you build, optimize, and scale your AI applications. No API keys required.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                    <Link key={tool.id} href={tool.href} className="group">
                        <GlassCard className="h-full p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 relative overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-colors ${tool.color}`}>
                                    <tool.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {tool.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                                    {tool.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                                    Use Tool <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </GlassCard>
                    </Link>
                ))}

                {/* Coming Soon Card */}
                <GlassCard className="h-full p-8 opacity-60 border-dashed border-white/10">
                    <div className="flex flex-col h-full items-center justify-center text-center space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                            <Brain className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">More tools coming soon</h3>
                            <p className="text-sm text-muted-foreground">Prompt Optimizer, RAG Scorer, and more.</p>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
