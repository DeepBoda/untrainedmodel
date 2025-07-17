'use client';

import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              UntrainedModel.xyz
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#playground" className="text-cyan-400 hover:text-pink-400 transition-colors duration-300 font-medium">
              Playground
            </a>
            <a href="#features" className="text-cyan-400 hover:text-pink-400 transition-colors duration-300 font-medium">
              Chaos Lab
            </a>
            <a href="#blog" className="text-cyan-400 hover:text-pink-400 transition-colors duration-300 font-medium">
              Hallucinations
            </a>
            <Link href="/blog" className="text-cyan-400 hover:text-pink-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-cyan-400 hover:text-pink-400 transition-colors duration-300 font-medium">
              WTF?
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-pink-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#playground" className="block text-cyan-400 hover:text-pink-400 transition-colors py-2">
              Playground
            </a>
            <a href="#features" className="block text-cyan-400 hover:text-pink-400 transition-colors py-2">
              Chaos Lab
            </a>
            <a href="#blog" className="block text-cyan-400 hover:text-pink-400 transition-colors py-2">
              Hallucinations
            </a>
            <Link href="/blog" className="block text-cyan-400 hover:text-pink-400 transition-colors py-2">
              Blog
            </Link>
            <Link href="/about" className="block text-cyan-400 hover:text-pink-400 transition-colors py-2">
              WTF?
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;