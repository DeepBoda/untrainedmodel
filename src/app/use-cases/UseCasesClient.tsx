"use client";

import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Code, TrendingUp, PenTool, GraduationCap, ArrowRight, CheckCircle2, Zap, Terminal, BarChart2, FileText, BookOpen } from "lucide-react";
import Link from "next/link";

const UseCasesClient = () => {
    const categories = {
        developers: {
            icon: Code,
            title: "Developers",
            desc: "Automate boilerplate, debug faster, and learn new stacks.",
            color: "text-neon-blue",
            items: [
                {
                    title: "API Generation",
                    desc: "Generate RESTful API endpoints, database schemas, and type definitions in seconds.",
                    icon: Terminal,
                    prompt: "Create a Node.js Express route for user authentication with JWT..."
                },
                {
                    title: "Code Refactoring",
                    desc: "Clean up legacy code, improve performance, and add comments automatically.",
                    icon: Zap,
                    prompt: "Refactor this React component to use custom hooks and improve readability..."
                },
                {
                    title: "Bug Fixing",
                    desc: "Paste your error logs and get instant solutions and explanations.",
                    icon: CheckCircle2,
                    prompt: "Explain this 'Cannot read property of undefined' error in my JavaScript code..."
                }
            ]
        },
        traders: {
            icon: TrendingUp,
            title: "Traders",
            desc: "Analyze markets, backtest strategies, and summarize news.",
            color: "text-neon-purple",
            items: [
                {
                    title: "Strategy Backtesting",
                    desc: "Generate Python scripts to backtest trading strategies on historical data.",
                    icon: BarChart2,
                    prompt: "Write a Python script to backtest a MACD crossover strategy on BTC/USD..."
                },
                {
                    title: "Market Analysis",
                    desc: "Summarize complex financial reports and news into actionable insights.",
                    icon: FileText,
                    prompt: "Summarize the key takeaways from the latest FOMC meeting minutes..."
                },
                {
                    title: "Technical Indicators",
                    desc: "Get explanations and code implementations for custom technical indicators.",
                    icon: TrendingUp,
                    prompt: "Explain how the RSI indicator works and write a Pine Script for it..."
                }
            ]
        },
        creators: {
            icon: PenTool,
            title: "Creators",
            desc: "Generate content, scripts, and marketing copy.",
            color: "text-neon-pink",
            items: [
                {
                    title: "Blog Writing",
                    desc: "Generate SEO-optimized blog posts, outlines, and catchy headlines.",
                    icon: FileText,
                    prompt: "Write an SEO-friendly blog post about the benefits of meditation..."
                },
                {
                    title: "Social Media",
                    desc: "Create engaging captions, threads, and hashtags for Instagram and Twitter.",
                    icon: Zap,
                    prompt: "Write a Twitter thread about the future of remote work..."
                },
                {
                    title: "Video Scripts",
                    desc: "Generate scripts for YouTube videos, TikToks, and Reels.",
                    icon: FileText,
                    prompt: "Write a script for a 60-second YouTube Short about productivity hacks..."
                }
            ]
        },
        students: {
            icon: GraduationCap,
            title: "Students",
            desc: "Solve problems, explain concepts, and prepare for exams.",
            color: "text-neon-cyan",
            items: [
                {
                    title: "Homework Help",
                    desc: "Get step-by-step solutions for math, physics, and coding problems.",
                    icon: BookOpen,
                    prompt: "Solve this calculus problem step-by-step: Integral of x^2 * e^x..."
                },
                {
                    title: "Concept Explainer",
                    desc: "Understand complex topics with simple, analogy-based explanations.",
                    icon: Zap,
                    prompt: "Explain quantum entanglement like I'm 5 years old..."
                },
                {
                    title: "Exam Prep",
                    desc: "Generate practice questions and flashcards for any subject.",
                    icon: CheckCircle2,
                    prompt: "Create 10 multiple-choice questions for my history exam on World War II..."
                }
            ]
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[120px]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <Badge variant="neon" className="mb-4">
                        <Zap className="w-3 h-3 mr-1" />
                        Endless Possibilities
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Built for <span className="text-gradient-premium">Every Workflow</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Whether you're writing code, analyzing markets, or studying for exams,
                        UntrainedModel adapts to your needs.
                    </p>
                </div>

                <Tabs defaultValue="developers" className="space-y-12">
                    <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent p-0 mb-12">
                        {Object.entries(categories).map(([key, cat]) => (
                            <TabsTrigger
                                key={key}
                                value={key}
                                className="rounded-full px-6 py-3 data-[state=active]:bg-white/10 data-[state=active]:backdrop-blur-md data-[state=active]:border-white/10 border border-transparent transition-all duration-300"
                            >
                                <cat.icon className={`w-4 h-4 mr-2 ${cat.color}`} />
                                {cat.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {Object.entries(categories).map(([key, cat]) => (
                        <TabsContent key={key} value={key} className="space-y-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4">{cat.title}</h2>
                                <p className="text-muted-foreground text-lg">{cat.desc}</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {cat.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <GlassCard className="h-full flex flex-col hover:border-primary/30 transition-colors duration-300">
                                            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${cat.color}`}>
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                            <p className="text-muted-foreground mb-6 flex-1">{item.desc}</p>

                                            <div className="bg-black/30 rounded-lg p-4 border border-white/5 text-sm font-mono text-muted-foreground">
                                                <div className="flex items-center gap-2 mb-2 text-xs opacity-50">
                                                    <Terminal className="w-3 h-3" />
                                                    Example Prompt
                                                </div>
                                                "{item.prompt}"
                                            </div>
                                        </GlassCard>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                <div className="mt-32 text-center">
                    <GlassCard className="max-w-4xl mx-auto p-12 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-blue/10">
                        <h2 className="text-3xl font-bold mb-6">Ready to start building?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Join thousands of users leveraging AI to work smarter.
                            No credit card required.
                        </p>
                        <Button asChild variant="premium" size="lg" className="shadow-neon">
                            <Link href="/playground">
                                Try UntrainedModel Free
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default UseCasesClient;
