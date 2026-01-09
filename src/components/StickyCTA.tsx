'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 800px
            setIsVisible(window.scrollY > 800);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        // Track CTA click
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'cta_click', {
                location: 'sticky_bar',
                cta_text: 'Try Playground Free',
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-gradient-to-r from-neon-purple/90 via-primary/90 to-neon-cyan/90 border-t border-white/10 shadow-2xl"
                >
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            {/* Message */}
                            <div className="flex items-center gap-3 text-white">
                                <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300 animate-pulse" />
                                <span className="font-semibold text-sm sm:text-base">
                                    Ready to build with <span className="font-bold">Agentic AI</span>?
                                </span>
                                <span className="hidden md:inline text-white/80 text-sm">
                                    • 100% Free • No Credit Card • Instant Access
                                </span>
                            </div>

                            {/* CTA Button */}
                            <Button
                                asChild
                                variant="secondary"
                                size="lg"
                                className="h-12 px-6 bg-white text-primary hover:bg-white/90 shadow-lg hover:scale-105 transition-transform"
                                onClick={handleClick}
                            >
                                <Link href="/playground" className="flex items-center gap-2">
                                    Try Playground Free
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
