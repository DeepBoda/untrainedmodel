"use client";

import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Users, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ContactClient = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission
        // Form submission logic would go here
        alert("Thanks for reaching out! We'll get back to you soon.");
    };

    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="neon" className="mb-4">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        We're here to help
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Get in <span className="text-gradient-premium">Touch</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Have questions, feedback, or just want to say hello?
                        We'd love to hear from you.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Info & FAQ */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        <GlassCard className="p-6 flex flex-col items-center text-center hover:bg-white/5 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                                <Mail className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Email Support</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                For general inquiries and technical support.
                            </p>
                            <a href="mailto:hello@untrainedmodel.xyz" className="text-primary hover:underline font-medium">
                                hello@untrainedmodel.xyz
                            </a>
                        </GlassCard>

                        <GlassCard className="p-6 flex flex-col items-center text-center hover:bg-white/5 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                <Users className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Community</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Join our Discord server to chat with other users.
                            </p>
                            <a href="#" className="text-primary hover:underline font-medium">
                                Join Discord Server
                            </a>
                        </GlassCard>

                        <GlassCard className="p-6 flex flex-col items-center text-center hover:bg-white/5 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                                <Sparkles className="w-8 h-8 text-pink-400" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Partnerships</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Interested in collaborating with UntrainedModel?
                            </p>
                            <a href="mailto:partners@untrainedmodel.xyz" className="text-primary hover:underline font-medium">
                                partners@untrainedmodel.xyz
                            </a>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactClient;
