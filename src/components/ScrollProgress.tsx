"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { RefObject } from "react";

interface ScrollProgressProps {
    containerRef?: RefObject<HTMLElement>;
    className?: string;
}

export const ScrollProgress = ({ containerRef, className }: ScrollProgressProps) => {
    const { scrollYProgress } = useScroll({
        container: containerRef
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className={className}>
            {/* Background Track */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-[100]" />

            {/* Main Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan origin-left z-[101]"
                style={{ scaleX }}
            />

            {/* Glow Effect */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 origin-left z-[100] blur-md opacity-70 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan"
                style={{ scaleX }}
            />

            {/* Meteor Head (The "Spark") */}
            <motion.div
                className="fixed top-0 left-0 h-1 z-[102] pointer-events-none"
                style={{
                    left: useSpring(scrollYProgress, { stiffness: 1000, damping: 30 }).get() * 100 + "%",
                    x: "-100%" // Offset to keep it at the tip
                }}
            >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-transparent to-white blur-[2px]" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-white rounded-full blur-[4px] shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
        </div>
    );
};
