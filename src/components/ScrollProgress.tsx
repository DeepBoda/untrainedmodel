"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 50,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 origin-left z-[100]"
                style={{ scaleX }}
            />
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 origin-left z-[99] blur-sm opacity-50 bg-gradient-to-r from-primary via-purple-500 to-cyan-500"
                style={{ scaleX }}
            />
        </>
    );
};
