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
        console.log("Form submitted");
        alert("Thanks for reaching out! We'll get back to you soon.");
    };

    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-neon-blue/5 rounded-full blur-[120px]" />
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

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <GlassCard className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <Input id="subject" placeholder="How can we help?" className="bg-white/5 border-white/10" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us more about your inquiry..."
                                        className="min-h-[150px] bg-white/5 border-white/10 resize-none"
                                        required
                                    />
                                </div>

                                <Button type="submit" variant="premium" className="w-full shadow-neon">
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </GlassCard>
                    </motion.div>

                    {/* Contact Info & FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="grid gap-6">
                            <GlassCard className="p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Support</h3>
                                    <p className="text-muted-foreground text-sm mb-2">
                                        For general inquiries and technical support.
                                    </p>
                                    <a href="mailto:hello@untrainedmodel.xyz" className="text-primary hover:underline">
                                        hello@untrainedmodel.xyz
                                    </a>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Community</h3>
                                    <p className="text-muted-foreground text-sm mb-2">
                                        Join our Discord server to chat with other users.
                                    </p>
                                    <a href="#" className="text-primary hover:underline">
                                        Join Discord Server
                                    </a>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-6 h-6 text-pink-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Partnerships</h3>
                                    <p className="text-muted-foreground text-sm mb-2">
                                        Interested in collaborating with UntrainedModel?
                                    </p>
                                    <a href="mailto:partners@untrainedmodel.xyz" className="text-primary hover:underline">
                                        partners@untrainedmodel.xyz
                                    </a>
                                </div>
                            </GlassCard>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactClient;
