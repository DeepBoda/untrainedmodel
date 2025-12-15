"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { Rocket, ChevronUp, Zap } from "lucide-react";

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    // Smooth progress for the circle
    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-8 right-8 z-50 pointer-events-auto"
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <motion.button
                        onClick={scrollToTop}
                        className="relative w-14 h-14 flex items-center justify-center group"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {/* 1. Glass Orb Background */}
                        <div className="absolute inset-0 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-500" />

                        {/* 2. Progress Ring SVG */}
                        <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] -rotate-90 pointer-events-none">
                            {/* Track */}
                            <circle
                                cx="50%"
                                cy="50%"
                                r="26"
                                className="stroke-white/10"
                                strokeWidth="2"
                                fill="none"
                            />
                            {/* Indicator */}
                            <motion.circle
                                cx="50%"
                                cy="50%"
                                r="26"
                                className="stroke-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                style={{ pathLength }}
                            />
                        </svg>

                        {/* 3. Inner Icon Group */}
                        <div className="relative z-10 flex items-center justify-center overflow-hidden w-full h-full rounded-full">
                            {/* Normal State: Rocket */}
                            <motion.div
                                className="absolute text-white/80 group-hover:text-white transition-colors"
                                initial={{ y: 0 }}
                                whileHover={{ y: -30, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Rocket className="w-6 h-6 transform rotate-0" />
                            </motion.div>

                            {/* Hover State: Warp/Arrow */}
                            <motion.div
                                className="absolute text-neon-cyan"
                                initial={{ y: 30, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronUp className="w-7 h-7 animate-bounce" />
                            </motion.div>
                        </div>

                        {/* 4. Particle Effects on Interaction */}
                        <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary/20 via-transparent to-neon-cyan/20 blur-md pointer-events-none" />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
