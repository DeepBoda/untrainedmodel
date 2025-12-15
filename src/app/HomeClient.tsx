"use client";

import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import RecentBlogPosts from "@/components/RecentBlogPosts";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, FileText, TrendingUp, Terminal, Zap, Users, Shield, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const Index = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <>
            {/* Hero Section */}
            <section ref={targetRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Ambient Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20" />
                </div>

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Content */}
                        <motion.div
                            style={{ opacity, y }}
                            className="text-center lg:text-left space-y-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Badge variant="neon" className="mb-6 px-4 py-1.5 text-sm">
                                    <Zap className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
                                    The Future of AI is Untrained
                                </Badge>
                                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
                                    Raw Potential. <br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan animate-gradient">Infinite Intelligence.</span>
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                    Your free AI lab for content, code & research. Unleash the power of the "Vibrant U" model without limits.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <Button asChild variant="premium" size="lg" className="h-14 px-8 text-lg shadow-neon hover:scale-105 transition-transform">
                                    <Link href="/playground">
                                        Start Building
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button asChild variant="glass" size="lg" className="h-14 px-8 text-lg">
                                    <Link href="/use-cases">Explore Use Cases</Link>
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center justify-center lg:justify-start gap-8 pt-4 text-muted-foreground/60 text-sm font-mono"
                            >
                                <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> No Credit Card</span>
                                <span className="flex items-center gap-2"><Users className="w-4 h-4" /> Open Access</span>
                                <span className="flex items-center gap-2"><Cpu className="w-4 h-4" /> 100% Free</span>
                            </motion.div>
                        </motion.div>

                        {/* Hero Visual - Glowing Logo */}
                        <motion.div
                            style={{ scale }}
                            className="relative hidden lg:flex items-center justify-center perspective-1000"
                        >
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                {/* Glowing Aura */}
                                <div className="absolute inset-0 bg-neon-purple/30 rounded-full blur-[80px] animate-pulse-glow" />

                                {/* Main Logo */}
                                <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                                    <Image
                                        src="/logo.png"
                                        alt="UntrainedModel Iconic Logo"
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                                        priority
                                    />
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute -top-10 -right-10"
                                >
                                    <GlassCard className="p-4 flex items-center gap-3 bg-black/60 backdrop-blur-xl border-neon-cyan/30 shadow-glow-intense rounded-2xl">
                                        <div className="p-2 bg-neon-cyan/20 rounded-xl text-neon-cyan">
                                            <Cpu className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Model Status</div>
                                            <div className="text-sm font-bold text-white">Online</div>
                                        </div>
                                    </GlassCard>
                                </motion.div>

                                <motion.div
                                    animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-10 -left-10"
                                >
                                    <GlassCard className="p-4 flex items-center gap-3 bg-black/60 backdrop-blur-xl border-neon-purple/30 shadow-glow rounded-2xl">
                                        <div className="p-2 bg-neon-purple/20 rounded-xl text-neon-purple">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Latency</div>
                                            <div className="text-sm font-bold text-white">12ms</div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Strip */}
            <section className="py-12 border-y border-white/5 bg-white/2 backdrop-blur-sm">
                <div className="section-container text-center">
                    <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest">Built for the builders of tomorrow</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {['Developers', 'Traders', 'Researchers', 'Creators', 'Students'].map((item) => (
                            <span key={item} className="text-xl font-bold text-white/80 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary" /> {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="section-spacing relative">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything you need to <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">build faster</span></h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Powerful AI tools to accelerate your workflow, from code generation to market research.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FileText,
                                title: "AI Content Studio",
                                desc: "Generate high-quality blog posts, marketing copy, and social media captions in seconds.",
                                color: "text-neon-purple"
                            },
                            {
                                icon: Code,
                                title: "AI Code Lab",
                                desc: "Generate boilerplates, debug code, and write scripts in Python, JavaScript, and more.",
                                color: "text-neon-blue"
                            },
                            {
                                icon: TrendingUp,
                                title: "Research Helper",
                                desc: "Summarize market trends, analyze data, and get trading strategy insights instantly.",
                                color: "text-neon-cyan"
                            }
                        ].map((feature, i) => (
                            <GlassCard key={i} className="h-full">
                                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${feature.color}`}>
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Teaser */}
            <section className="section-spacing bg-black/20">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-6">
                            <Badge variant="pill">For Developers</Badge>
                            <h3 className="text-3xl font-bold">Automate your coding workflow</h3>
                            <p className="text-muted-foreground text-lg">
                                Stop writing boilerplate. Let UntrainedModel generate your API endpoints, database schemas, and utility functions.
                            </p>
                            <ul className="space-y-3">
                                {['Generate React Components', 'Write SQL Queries', 'Debug Python Scripts'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="link" asChild className="p-0 text-neon-blue">
                                <Link href="/use-cases">View Developer Use Cases <ArrowRight className="w-4 h-4 ml-1" /></Link>
                            </Button>
                        </div>
                        <GlassCard className="bg-black/40 border-neon-blue/20">
                            <div className="font-mono text-sm text-muted-foreground p-4">
                                <div className="text-neon-blue mb-2">// Generating API Endpoint...</div>
                                <div className="text-green-400">app.get('/api/users', async (req, res) ={'>'} {'{'}</div>
                                <div className="pl-4 text-white">const users = await db.user.findMany();</div>
                                <div className="pl-4 text-white">res.json(users);</div>
                                <div className="text-green-400">{'}'});</div>
                            </div>
                        </GlassCard>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <GlassCard className="bg-black/40 border-neon-purple/20 order-2 md:order-1">
                            <div className="space-y-4 p-2">
                                <div className="h-2 w-3/4 bg-white/10 rounded" />
                                <div className="h-2 w-full bg-white/10 rounded" />
                                <div className="h-2 w-5/6 bg-white/10 rounded" />
                                <div className="p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/20 mt-4">
                                    <p className="text-sm text-white">"The market shows a bullish divergence on the 4H timeframe..."</p>
                                </div>
                            </div>
                        </GlassCard>
                        <div className="space-y-6 order-1 md:order-2">
                            <Badge variant="pill">For Traders</Badge>
                            <h3 className="text-3xl font-bold">Smart market analysis</h3>
                            <p className="text-muted-foreground text-lg">
                                Get instant summaries of market conditions, explain complex trading strategies, and backtest ideas.
                            </p>
                            <Button variant="link" asChild className="p-0 text-neon-purple">
                                <Link href="/use-cases">View Trading Use Cases <ArrowRight className="w-4 h-4 ml-1" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Playground Teaser */}
            <section className="section-spacing relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
                <div className="section-container text-center">
                    <Badge variant="neon" className="mb-6">Live Demo</Badge>
                    <h2 className="text-4xl font-bold mb-8">Try it right now, <span className="text-neon-cyan">Free</span></h2>

                    <div className="max-w-3xl mx-auto">
                        <GlassCard className="text-left p-0 overflow-hidden border-white/15 shadow-2xl">
                            <div className="bg-white/5 border-b border-white/10 p-4 flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-xs text-muted-foreground font-mono">untrainedmodel-playground</div>
                            </div>
                            <div className="p-6 space-y-6 font-mono text-sm">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Users className="w-4 h-4" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-muted-foreground">User</p>
                                        <p className="text-white">Generate a Python script to backtest a simple moving average crossover strategy.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                                        <Cpu className="w-4 h-4" />
                                    </div>
                                    <div className="space-y-2 w-full">
                                        <p className="text-muted-foreground">UntrainedModel</p>
                                        <div className="bg-black/50 rounded-lg p-4 border border-white/10 text-green-400 overflow-x-auto">
                                            <code>
                                                import pandas as pd<br />
                                                import numpy as np<br />
                                                <br />
                                                def backtest_strategy(data):<br />
                                                &nbsp;&nbsp;data['SMA_50'] = data['Close'].rolling(window=50).mean()<br />
                                                &nbsp;&nbsp;# ... code continues<br />
                                            </code>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-2">Generated in 1.2s</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 border-t border-white/10 text-center">
                                <p className="text-sm text-muted-foreground mb-4">This is a demo. No signup required.</p>
                                <Button asChild variant="premium" className="w-full sm:w-auto shadow-neon">
                                    <Link href="/playground">Open Full Playground</Link>
                                </Button>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Community / Openness */}
            <section className="section-spacing border-y border-white/5 bg-black/40">
                <div className="section-container text-center">
                    <h2 className="text-3xl font-bold mb-12">Why is this free?</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { title: "No Credit Card", desc: "We don't ask for payment details. Just start building." },
                            { title: "Open Research", desc: "We believe in democratizing access to AI tools." },
                            { title: "Community Driven", desc: "Built by developers, for developers." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-3">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10">
                                    <Shield className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works - Step by Step */}
            <section className="section-spacing relative">
                <div className="section-container">
                    <div className="text-center mb-20">
                        <Badge variant="outline" className="mb-4">Simple Workflow</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">From Idea to <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">Reality</span></h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Three simple steps to supercharge your productivity with AI.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent border-t border-dashed border-white/20" />

                        {[
                            { step: "01", title: "Choose a Tool", desc: "Select from our suite of AI tools for content, code, or research." },
                            { step: "02", title: "Input Details", desc: "Describe what you need in plain English. The more specific, the better." },
                            { step: "03", title: "Get Results", desc: "Instantly receive high-quality outputs ready to use or refine." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative text-center group"
                            >
                                <div className="w-24 h-24 mx-auto bg-black/40 border border-white/10 rounded-full flex items-center justify-center text-3xl font-bold font-mono mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-glow">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">{item.step}</span>
                                    <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 animate-pulse-slow" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed px-4">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials / Social Proof */}
            <section className="section-spacing bg-white/2 border-y border-white/5 overflow-hidden">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Loved by Builders</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { quote: "UntrainedModel helped me generate the boilerplate for my entire SaaS in minutes. It's insane.", author: "Alex Chen", role: "Full Stack Dev" },
                            { quote: "The research tool is a game changer. I use it to analyze market trends before every trade.", author: "Sarah Miller", role: "Crypto Trader" },
                            { quote: "Finally, a free AI playground that actually works and looks beautiful. The UX is top notch.", author: "James Wilson", role: "Product Designer" }
                        ].map((t, i) => (
                            <GlassCard key={i} className="bg-black/20 hover:bg-black/40 transition-colors">
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <div key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500">★</div>
                                    ))}
                                </div>
                                <p className="text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center font-bold">
                                        {t.author[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">{t.author}</div>
                                        <div className="text-xs text-muted-foreground">{t.role}</div>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <RecentBlogPosts />

            {/* Final CTA */}
            <section className="section-spacing relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-cyan/20 blur-3xl opacity-30" />
                <div className="section-container relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                        Ready to build the future?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Join thousands of developers and creators using UntrainedModel today.
                        No paywall, no limits.
                    </p>
                    <Button asChild variant="premium" size="lg" className="h-14 px-10 text-lg shadow-neon hover:scale-105 transition-transform">
                        <Link href="/playground">Start Building Now</Link>
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Index;
