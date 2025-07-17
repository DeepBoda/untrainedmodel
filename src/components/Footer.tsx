import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Heart, Skull, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center">
                <Skull className="text-white w-5 h-5" />
              </div>
              <span className="text-white font-bold text-lg mono">UntrainedModel</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mono">
              Where dumb AI meets brilliant chaos. The AI that forgot to train. Just vibes. No accuracy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Chaos Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mono neon-pink">Chaos Menu</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 mono">
                🏠 Home (Broken)
              </Link>
              <Link to="/playground" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 mono">
                🎮 AI Playground
              </Link>
              <Link to="/hallucinations" className="block text-gray-400 hover:text-yellow-400 transition-colors duration-300 mono">
                🤯 Best Fails
              </Link>
              <Link to="/blog" className="block text-gray-400 hover:text-green-400 transition-colors duration-300 mono">
                📝 Rants & Chaos
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mono neon-cyan">Features</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 mono">
                🧠 Dumb AI Models
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 mono">
                🎲 Random Prompts
              </a>
              <a href="#" className="block text-gray-400 hover:text-yellow-400 transition-colors duration-300 mono">
                💥 Glitch Generator
              </a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors duration-300 mono">
                🔥 Chaos Mode
              </a>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mono neon-yellow">System Status</h3>
            <div className="space-y-2 text-gray-400 text-sm mono">
              <p className="success-text">AI: Barely Working</p>
              <p className="error-text">Logic: Completely Broken</p>
              <p className="success-text">Chaos: 100% Operational</p>
              <p className="neon-green">Vibes: Immaculate</p>
            </div>
            <button className="chaos-btn text-sm">
              <Zap size={14} className="inline mr-2" />
              BREAK MORE STUFF
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mono">
            © 2025 UntrainedModel.xyz. All rights reserved (probably).
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-1 mt-4 md:mt-0 mono">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 flicker" />
            <span>and</span>
            <Skull size={16} className="text-pink-500" />
            <span>by chaotic humans</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;