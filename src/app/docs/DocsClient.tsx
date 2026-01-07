"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Book, Code, Zap, Map, Terminal, AlertCircle, CheckCircle2 } from "lucide-react";

const DocsClient = () => {
    const sections = [
        { id: "getting-started", title: "Getting Started", icon: Zap },
        { id: "prompting-guide", title: "Prompting Guide", icon: Terminal },
        { id: "models", title: "Available Models", icon: Code },
        { id: "roadmap", title: "Roadmap", icon: Map },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-20 relative">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20" />
            </div>

            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-[250px_1fr] gap-10">
                    {/* Sidebar Navigation */}
                    <div className="hidden lg:block sticky top-24 h-[calc(100vh-8rem)]">
                        <GlassCard className="h-full p-4 flex flex-col">
                            <div className="flex items-center gap-2 mb-6 px-2">
                                <Book className="w-5 h-5 text-primary" />
                                <span className="font-bold">Documentation</span>
                            </div>
                            <ScrollArea className="flex-1">
                                <div className="space-y-2">
                                    {sections.map((section) => (
                                        <Button
                                            key={section.id}
                                            variant="ghost"
                                            className="w-full justify-start"
                                            onClick={() => scrollToSection(section.id)}
                                        >
                                            <section.icon className="w-4 h-4 mr-2" />
                                            {section.title}
                                        </Button>
                                    ))}
                                </div>
                            </ScrollArea>
                        </GlassCard>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <Badge variant="neon">Docs v1.0</Badge>
                            <h1 className="text-4xl font-bold">Welcome to UntrainedModel Docs</h1>
                            <p className="text-xl text-muted-foreground">
                                Everything you need to know about using our free AI tools.
                            </p>
                        </div>

                        {/* Getting Started */}
                        <section id="getting-started" className="space-y-6 scroll-mt-24">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Zap className="w-6 h-6 text-neon-yellow" />
                                Getting Started
                            </h2>
                            <GlassCard className="p-6 space-y-4">
                                <h3 className="text-lg font-semibold">No Signup Required</h3>
                                <p className="text-muted-foreground">
                                    UntrainedModel is designed to be frictionless. You do not need to create an account,
                                    provide an email, or enter credit card details to use the core features.
                                </p>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <p className="text-sm font-mono">
                                        1. Navigate to <Link href="/playground" className="text-primary hover:underline">/playground</Link><br />
                                        2. Select a tool (Content, Code, or Research)<br />
                                        3. Type your prompt and hit Generate
                                    </p>
                                </div>
                            </GlassCard>
                        </section>

                        {/* Prompting Guide */}
                        <section id="prompting-guide" className="space-y-6 scroll-mt-24">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Terminal className="w-6 h-6 text-neon-blue" />
                                Prompting Guide
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <GlassCard className="p-6">
                                    <h3 className="font-bold mb-2 text-green-400">Do This</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Be specific about the output format</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Provide context and examples</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Ask for step-by-step explanations</li>
                                    </ul>
                                </GlassCard>
                                <GlassCard className="p-6">
                                    <h3 className="font-bold mb-2 text-red-400">Avoid This</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-400" /> Being vague ("Write something cool")</li>
                                        <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-400" /> Asking for real-time private data</li>
                                        <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-red-400" /> Ignoring model limitations</li>
                                    </ul>
                                </GlassCard>
                            </div>
                        </section>

                        {/* Available Models */}
                        <section id="models" className="space-y-6 scroll-mt-24">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Code className="w-6 h-6 text-neon-pink" />
                                Available Models
                            </h2>
                            <div className="grid gap-6 md:grid-cols-3">
                                <GlassCard className="p-6 space-y-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <span className="text-lg">🤖</span>
                                        </div>
                                        <h3 className="font-bold">OpenAI</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            GPT-5-mini
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            GPT-5
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            GPT-5-turbo
                                        </li>
                                    </ul>
                                </GlassCard>

                                <GlassCard className="p-6 space-y-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <span className="text-lg">⚡</span>
                                        </div>
                                        <h3 className="font-bold">Google</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            gemini-3-flash-exp
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            gemini-3-pro
                                        </li>
                                    </ul>
                                </GlassCard>

                                <GlassCard className="p-6 space-y-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                            <span className="text-lg">🧠</span>
                                        </div>
                                        <h3 className="font-bold">Anthropic</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                            claude-3-5-haiku
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                            claude-3-5-sonnet
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                            claude-3-opus
                                        </li>
                                    </ul>
                                </GlassCard>
                            </div>
                        </section>

                        {/* Roadmap */}
                        <section id="roadmap" className="space-y-6 scroll-mt-24">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Map className="w-6 h-6 text-neon-purple" />
                                Roadmap
                            </h2>
                            <GlassCard className="p-8">
                                <div className="relative border-l border-white/10 pl-8 space-y-8">
                                    <div className="relative">
                                        <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-green-500 shadow-neon" />
                                        <h3 className="font-bold text-lg">Phase 1: Foundation (Current)</h3>
                                        <p className="text-muted-foreground">Launch of Playground, Use Cases, and Core Design System.</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white/20" />
                                        <h3 className="font-bold text-lg">Phase 2: User Accounts (Optional)</h3>
                                        <p className="text-muted-foreground">Save your history, favorite prompts, and custom settings locally.</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white/20" />
                                        <h3 className="font-bold text-lg">Phase 3: API Access</h3>
                                        <p className="text-muted-foreground">Free limited API access for developers to build their own tools.</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocsClient;
