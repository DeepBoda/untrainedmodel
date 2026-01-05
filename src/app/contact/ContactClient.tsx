"use client";

import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Users, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactClient = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                    {/* Contact Form */}
                    <GlassCard className="p-8">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Name</label>
                                    <Input placeholder="John Doe" required className="bg-black/20 border-white/10 focus:border-primary/50" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                                    <Input type="email" placeholder="john@example.com" required className="bg-black/20 border-white/10 focus:border-primary/50" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Subject</label>
                                <Select>
                                    <SelectTrigger className="bg-black/20 border-white/10">
                                        <SelectValue placeholder="Select a topic" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="support">Technical Support</SelectItem>
                                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                                        <SelectItem value="business">Business Partnership</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Message</label>
                                <Textarea
                                    placeholder="How can we help you?"
                                    className="min-h-[150px] bg-black/20 border-white/10 focus:border-primary/50"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white shadow-neon">
                                <Send className="w-4 h-4 mr-2" /> Send Message
                            </Button>
                        </form>
                    </GlassCard>

                    {/* Contact Info & Details */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid gap-6"
                        >
                            <GlassCard className="p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <p className="text-muted-foreground text-sm mb-2">
                                        For general inquiries and support.
                                    </p>
                                    <a href="mailto:hello@untrainedmodel.xyz" className="text-primary hover:underline font-medium block">
                                        hello@untrainedmodel.xyz
                                    </a>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                    <Users className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground text-sm mb-2">
                                        Come say hello at our HQ.
                                    </p>
                                    <address className="not-italic text-sm text-gray-300 leading-relaxed">
                                        UntrainedModel AI Labs<br />
                                        No. 12, 4th Floor, Sector 6<br />
                                        HSR Layout, Bengaluru<br />
                                        Karnataka 560102, India
                                    </address>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                                    <Sparkles className="w-6 h-6 text-pink-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Partnerships</h3>
                                    <p className="text-muted-foreground text-sm mb-2">
                                        Interested in collaborating?
                                    </p>
                                    <a href="mailto:partners@untrainedmodel.xyz" className="text-primary hover:underline font-medium block">
                                        partners@untrainedmodel.xyz
                                    </a>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactClient;
