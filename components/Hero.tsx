'use client';

import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Zap } from 'lucide-react';

const Hero = () => {
  const [glitchText, setGlitchText] = useState("Where Dumb AI Meets Brilliant Chaos");
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchVariations = [
    "Where D̷u̷m̷b̷ AI M̷e̷e̷t̷s̷ Brilliant Ch̷a̷o̷s̷",
    "Wh3r3 Dum6 A1 M33t5 8r1ll14nt Ch405",
    "404: Intelligence Not Found",
    "Where Dumb AI Meets Brilliant Chaos",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setGlitchText(glitchVariations[Math.floor(Math.random() * glitchVariations.length)]);
        setIsGlitching(false);
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center space-x-4">
          <Brain className="w-12 h-12 text-cyan-400 animate-bounce will-change-transform" />
          <Cpu className="w-12 h-12 text-pink-400 animate-pulse will-change-opacity" />
          <Zap className="w-12 h-12 text-yellow-400 animate-spin will-change-transform" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          UntrainedModel
        </h1>

        <p className={`text-xl md:text-2xl mb-8 font-medium transition-all duration-200 ${isGlitching ? 'blur-sm' : ''}`}>
          {glitchText}
        </p>

        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-6">
            The AI that forgot to train. Explore chaotic creativity with our experimental playground where accuracy is optional and vibes are mandatory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 will-change-transform"
            >
              Try Playground
            </button>
            <button 
              onClick={() => window.location.href = '/blog'}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Read Blog
            </button>
          </div>
        </div>

        {/* Ad Container */}
        <div className="ad-container mb-12">
          <p className="text-gray-500 text-sm">Advertisement Space</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900/50 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-colors">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Just Vibes</h3>
            <p className="text-gray-300">No accuracy guaranteed. Pure experimental chaos.</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-pink-500/30 hover:border-pink-400 transition-colors">
            <h3 className="text-xl font-bold text-pink-400 mb-2">No Training</h3>
            <p className="text-gray-300">AI that learned from Wikipedia comments.</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-400 transition-colors">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Pure Chaos</h3>
            <p className="text-gray-300">Where billion-dollar ideas meet garage hacks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;