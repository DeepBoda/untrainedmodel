'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GlassCard } from '@/components/ui/GlassCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewsletterPopup() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Don't show if already shown in this session
        if (hasShown || typeof window === 'undefined') return;

        // Show on exit intent (mouse leaving top of page)
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setShow(true);
                setHasShown(true);
            }
        };

        // Show after 30 seconds if still on page
        const showTimer = setTimeout(() => {
            if (!hasShown) {
                setShow(true);
                setHasShown(true);
            }
        }, 30000);

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(showTimer);
        };
    }, [hasShown]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Track event
        // Analytics tracking for conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'newsletter_signup', {
                source: 'exit_intent_popup',
                email_domain: email.split('@')[1],
            });
        }

        // Simulate API call for subscriber storage
        // In production, replacing with actual provider (e.g. ConvertKit/BeeHiiv)
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setShow(false), 2000);
        }, 1000);
    };

    if (!show) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setShow(false)}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <GlassCard className="max-w-md w-full p-8 relative">
                        {/* Close button */}
                        <button
                            onClick={() => setShow(false)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {status === 'success' ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">✓</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">You're In! 🎉</h3>
                                <p className="text-muted-foreground">
                                    Check your inbox for the welcome email.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-cyan">
                                        Don't Miss Out on AI Insights! 🚀
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Join <strong>10,000+ developers</strong> getting weekly tutorials on Agentic AI,
                                        GPT-5, Gemini 3 Pro & cutting-edge AI automation.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <Input
                                            type="email"
                                            placeholder="your@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="h-12 text-base bg-white/5 border-white/10 focus:border-primary"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="premium"
                                        size="lg"
                                        className="w-full h-12"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Subscribing...' : 'Get Free AI Tutorials'}
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground">
                                        Free forever. Unsubscribe anytime. No spam, we promise.
                                    </p>
                                </form>

                                <button
                                    onClick={() => setShow(false)}
                                    className="mt-6 w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    No thanks, I'll miss out on free Agentic AI insights
                                </button>
                            </>
                        )}
                    </GlassCard>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
