import React from 'react';
import { Github, Twitter, MessageCircle, Heart, Zap } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                UntrainedModel.xyz
              </span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Where dumb AI meets brilliant chaos. The playground for experimental prompts, 
              tech satire, and beautiful hallucinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors" aria-label="Discord">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#playground" className="text-gray-400 hover:text-cyan-400 transition-colors">Chaos Playground</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-cyan-400 transition-colors">Hallucinations Blog</a></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal*</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy*</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Chaos</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookie Confession</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">AI Rights (lol)</a></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">*Written by our untrained legal AI</p>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 UntrainedModel.xyz. All rights reserved. Accuracy not included.
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> and questionable AI decisions
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            ⚠️ Warning: This website may cause confusion, laughter, existential dread, or sudden urges to question reality. 
            Our AI is not responsible for any insights gained or brain cells lost during your visit.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;