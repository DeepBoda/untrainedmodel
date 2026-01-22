"use client";

import { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Coins, TrendingUp, Download, Upload, Info } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';

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
        hidden: { opacity: 0, x: 20 },
        show: { opacity: 1, x: 0 }
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
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-purple-500/10 text-neon-purple mb-8 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)] backdrop-blur-xl">
                    <Coins className="w-10 h-10" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Inference Cost Projector</h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    Compare monthly compute costs across top-tier foundation models.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Controls */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-4 space-y-6"
                >
                    <GlassCard className="p-8 space-y-8 sticky top-32 border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.05)]">
                        <div>
                            <label className="flex items-center justify-between text-xs font-bold text-white uppercase tracking-widest mb-4">
                                <span className="flex items-center gap-2"><Upload className="w-4 h-4 text-blue-400" /> Input Stats</span>
                                <Badge variant="secondary" className="font-mono bg-blue-500/10 text-blue-300 border-0 px-2 py-1"><AnimatedNumber value={inputTokens[0]} /></Badge>
                            </label>
                            <Slider
                                value={inputTokens}
                                onValueChange={setInputTokens}
                                max={10000000} // 10M
                                step={10000}
                                className="cursor-pointer"
                            />
                            <p className="text-[10px] text-muted-foreground mt-2 pl-1">Scales to 10M tokens/mo</p>
                        </div>

                        <div>
                            <label className="flex items-center justify-between text-xs font-bold text-white uppercase tracking-widest mb-4">
                                <span className="flex items-center gap-2"><Download className="w-4 h-4 text-green-400" /> Output Stats</span>
                                <Badge variant="secondary" className="font-mono bg-green-500/10 text-green-300 border-0 px-2 py-1"><AnimatedNumber value={outputTokens[0]} /></Badge>
                            </label>
                            <Slider
                                value={outputTokens}
                                onValueChange={setOutputTokens}
                                max={2000000} // 2M
                                step={1000}
                                className="cursor-pointer"
                            />
                            <p className="text-[10px] text-muted-foreground mt-2 pl-1">Scales to 2M tokens/mo</p>
                        </div>

                        <div className="pt-8 border-t border-white/5">
                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                                <TrendingUp className="w-3 h-3" /> Total Monthly Volume
                            </div>
                            <div className="text-4xl font-bold text-white tabular-nums tracking-tight mb-6">
                                <AnimatedNumber value={inputTokens[0] + outputTokens[0]} />
                            </div>

                            <Button
                                onClick={exportReport}
                                className="w-full h-12 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                                variant="outline"
                            >
                                <Download className="w-4 h-4 mr-2" /> Export Usage Report
                            </Button>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Results Table */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="lg:col-span-8"
                >
                    <div className="grid gap-4">
                        {MODELS.sort((a, b) => calculateCost(a) - calculateCost(b)).map((model, i) => {
                            const cost = calculateCost(model);
                            const isCheapest = i === 0;
                            return (
                                <motion.div variants={item} key={model.name}>
                                    <GlassCard className={`p-6 flex items-center justify-between group transition-all duration-300 hover:translate-x-1 ${isCheapest ? 'border-green-500/30 bg-gradient-to-r from-green-500/5 to-transparent shadow-[0_0_30px_rgba(34,197,94,0.1)]' : 'hover:bg-white/5'}`}>
                                        <div className="flex items-center gap-5">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold border transition-colors ${isCheapest ? 'bg-green-500/20 border-green-500/30 text-green-400' : 'bg-white/5 border-white/5 text-white/40 group-hover:text-white group-hover:bg-white/10'}`}>
                                                {model.provider[0]}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white flex items-center gap-3 tracking-tight">
                                                    {model.name}
                                                    {isCheapest && <Badge className="bg-green-500 text-black font-bold text-[10px] hover:bg-green-400 border-none shadow-[0_0_15px_rgba(34,197,94,0.4)] px-2 py-0.5">BEST VALUE</Badge>}
                                                </h3>
                                                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1.5 opacity-80">
                                                    <span className="capitalize">{model.provider}</span>
                                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                                    <span className="font-mono">${model.input.toFixed(2)} / ${model.output.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <div className="text-3xl font-bold text-white tabular-nums tracking-tight group-hover:text-purple-300 transition-colors">
                                                ${cost.toFixed(2)}
                                            </div>
                                            <p className="text-[10px] text-muted-foreground mt-1 lowercase">per month</p>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div variants={item} className="mt-8 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                        <div className="flex gap-4">
                            <Info className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                                <p><strong className="text-white">Strategic Analysis:</strong> DeepSeek V3 and GPT-4o-mini represent the new efficiency frontier, offering near-SOTA performance at commodity pricing. For high-stakes reasoning tasks (Coding, Legal), Gemini 1.5 Pro remains valid despite the premium.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
