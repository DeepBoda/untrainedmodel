"use client";

import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValueEvent, useMotionTemplate } from "framer-motion";
import { RefObject, useState } from "react";

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

    const velocity = useVelocity(scrollYProgress);
    const [isScrolling, setIsScrolling] = useState(false);

    useMotionValueEvent(velocity, "change", (latest) => {
        setIsScrolling(Math.abs(latest) > 0.01);
    });

    // Map scaleX (0-1) to percentage string for left position
    const leftPosition = useTransform(scaleX, [0, 1], ["0%", "100%"]);

    // Dynamic glow opacity based on velocity
    const glowOpacity = useTransform(velocity, [-1, 0, 1], [0.3, 0.8, 0.3]);
    const width = useTransform(velocity, [-1, 0, 1], ["100px", "30px", "100px"]);

    return (
        <div className={className}>
            {/* Background Track */}
            <div className="fixed top-0 left-0 right-0 h-0.5 bg-white/5 z-[100]" />

            {/* Main Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-neon-cyan origin-left z-[101]"
                style={{ scaleX }}
            />

            {/* Dynamic Glow Trail */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 origin-left z-[100] blur-md bg-gradient-to-r from-transparent via-neon-purple to-neon-cyan"
                style={{ scaleX, opacity: glowOpacity }}
            />

            {/* Meteor Head (The "Spark") */}
            <motion.div
                className="fixed top-0 left-0 h-1 z-[102] pointer-events-none"
                style={{
                    left: leftPosition,
                    x: "-100%"
                }}
            >
                {/* Core Spark */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-white rounded-full shadow-[0_0_15px_2px_rgba(255,255,255,1)] z-10" />

                {/* Horizontal Flare */}
                <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-white blur-[1px]"
                    style={{ width }}
                />

                {/* Vertical Flare */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-white/50 blur-[2px] rounded-full" />

                {/* Particle Dust (CSS Animation) */}
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-20 h-8 opacity-50 overflow-hidden">
                    <div className="w-1 h-1 bg-white rounded-full absolute top-1/2 right-0 animate-particle-1" />
                    <div className="w-1 h-1 bg-cyan-400 rounded-full absolute top-1/3 right-2 animate-particle-2" />
                    <div className="w-1 h-1 bg-purple-400 rounded-full absolute top-2/3 right-4 animate-particle-3" />
                </div>
            </motion.div>
        </div>
    );
};
