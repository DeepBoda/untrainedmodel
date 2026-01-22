"use client";

import { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Coins, TrendingUp, Download, Upload, Info } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export default function CostEstimatorPage() {
    const [inputTokens, setInputTokens] = useState([100000]); // 100k
    const [outputTokens, setOutputTokens] = useState([20000]); // 20k

    // Prices per 1M tokens - Updated for 2026/Late 2025
    const MODELS = [
        { name: 'GPT-4o', input: 5.00, output: 15.00, provider: 'OpenAI' },
        { name: 'GPT-4o-mini', input: 0.15, output: 0.60, provider: 'OpenAI' },
        { name: 'Claude 3.5 Sonnet', input: 3.00, output: 15.00, provider: 'Anthropic' },
        { name: 'Claude 3 Haiku', input: 0.25, output: 1.25, provider: 'Anthropic' },
        { name: 'Gemini 1.5 Pro', input: 3.50, output: 10.50, provider: 'Google' },
        { name: 'Gemini 1.5 Flash', input: 0.35, output: 1.05, provider: 'Google' },
        { name: 'DeepSeek V3', input: 0.14, output: 0.28, provider: 'DeepSeek' },
        { name: 'Llama 3 70B', input: 0.90, output: 0.90, provider: 'Meta' },
    ];

    const calculateCost = (model: typeof MODELS[0]) => {
        const inputCost = (inputTokens[0] / 1000000) * model.input;
        const outputCost = (outputTokens[0] / 1000000) * model.output;
        return inputCost + outputCost;
    };

    const exportReport = () => {
        const headers = ["Provider", "Model", "Input Cost ($)", "Output Cost ($)", "Total Monthly Cost ($)"];
        const rows = MODELS.map(m => {
            const inputCost = (inputTokens[0] / 1000000) * m.input;
            const outputCost = (outputTokens[0] / 1000000) * m.output;
            return [m.provider, m.name, inputCost.toFixed(4), outputCost.toFixed(4), (inputCost + outputCost).toFixed(4)].join(",");
        });

        const csvContent = [headers.join(","), ...rows].join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "ai_cost_estimate_2026.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Report Downloaded", { description: "Cost estimate saved as CSV." });
    };

    const formatNumber = (num: number) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(0) + 'k';
        return num.toString();
    };

    // Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "LLM API Cost Estimator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Calculate and compare monthly API costs for GPT-4, Gemini, Claude 3.5, and DeepSeek. Interactive slider-based estimation.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
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
                className="text-center mb-16"
            >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 text-neon-purple mb-6 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    <Coins className="w-8 h-8" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">LLM API Cost Estimator</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Visualize and compare your monthly AI inference costs. Updated for 2026 pricing.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Controls */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="lg:col-span-4 space-y-6"
                >
                    <GlassCard className="p-8 space-y-8 sticky top-32 border-purple-500/20">
                        <div>
                            <label className="flex items-center justify-between text-sm font-medium text-white mb-4">
                                <span className="flex items-center gap-2"><Upload className="w-4 h-4 text-blue-400" /> Input Tokens / Mo</span>
                                <Badge variant="secondary" className="font-mono bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 border-0">{formatNumber(inputTokens[0])}</Badge>
                            </label>
                            <Slider
                                value={inputTokens}
                                onValueChange={setInputTokens}
                                max={10000000} // 10M
                                step={10000}
                                className="cursor-pointer"
                            />
                            <p className="text-[10px] text-muted-foreground mt-2">Up to 10M tokens</p>
                        </div>

                        <div>
                            <label className="flex items-center justify-between text-sm font-medium text-white mb-4">
                                <span className="flex items-center gap-2"><Download className="w-4 h-4 text-green-400" /> Output Tokens / Mo</span>
                                <Badge variant="secondary" className="font-mono bg-green-500/10 text-green-300 hover:bg-green-500/20 border-0">{formatNumber(outputTokens[0])}</Badge>
                            </label>
                            <Slider
                                value={outputTokens}
                                onValueChange={setOutputTokens}
                                max={2000000} // 2M
                                step={1000}
                                className="cursor-pointer"
                            />
                            <p className="text-[10px] text-muted-foreground mt-2">Up to 2M tokens</p>
                        </div>

                        <div className="pt-6 border-t border-white/5">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                                <TrendingUp className="w-3 h-3" /> Total Monthly Volume
                            </div>
                            <div className="text-3xl font-bold text-white tabular-nums tracking-tight">
                                {formatNumber(inputTokens[0] + outputTokens[0])}
                            </div>

                            <Button
                                onClick={exportReport}
                                className="w-full mt-6 bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                variant="outline"
                            >
                                <Download className="w-4 h-4 mr-2" /> Export Report (CSV)
                            </Button>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Results Table */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:col-span-8"
                >
                    <div className="grid gap-3">
                        {MODELS.sort((a, b) => calculateCost(a) - calculateCost(b)).map((model, i) => {
                            const cost = calculateCost(model);
                            const isCheapest = i === 0;
                            return (
                                <GlassCard key={model.name} className={`p-5 flex items-center justify-between group transition-all duration-300 hover:scale-[1.01] ${isCheapest ? 'border-green-500/30 bg-gradient-to-r from-green-500/10 to-transparent' : 'hover:bg-white/5'}`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold border ${isCheapest ? 'bg-green-500/20 border-green-500/30 text-green-400' : 'bg-white/5 border-white/5 text-white/50'}`}>
                                            {model.provider[0]}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white flex items-center gap-3">
                                                {model.name}
                                                {isCheapest && <Badge className="bg-green-500 text-black font-bold hover:bg-green-400 border-none shadow-[0_0_10px_rgba(34,197,94,0.4)]">Best Value</Badge>}
                                            </h3>
                                            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                                <span>{model.provider}</span>
                                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                                <span className="font-mono opacity-70">${model.input.toFixed(2)} / ${model.output.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-white tabular-nums tracking-tight">
                                            ${cost.toFixed(2)}
                                        </div>
                                        <p className="text-[10px] text-muted-foreground">/ month</p>
                                    </div>
                                </GlassCard>
                            );
                        })}
                    </div>

                    <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="flex gap-4">
                            <Info className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p><strong>Pricing Analysis:</strong> DeepSeek V3 and GPT-4o-mini currently offer the best price-to-performance ratio for high-volume tasks. For complex reasoning, Gemini 1.5 Pro and Claude 3.5 Sonnet remain premium choices.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
