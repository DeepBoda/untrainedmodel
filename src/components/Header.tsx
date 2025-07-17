import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Bug, Skull } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [glitchText, setGlitchText] = useState('UntrainedModel');
  const location = useLocation();

  useEffect(() => {
    const glitchTexts = ['UntrainedModel', 'UntranedMdel', 'UntrainedMod3l', 'UntrainedModel', 'Untr4in3dM0d3l'];
    let index = 0;
    
    const interval = setInterval(() => {
      setGlitchText(glitchTexts[index % glitchTexts.length]);
      index++;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Playground', path: '/playground', icon: '🎮' },
    { name: 'Hallucinations', path: '/hallucinations', icon: '🤯' },
    { name: 'Blog', path: '/blog', icon: '📝' },
    { name: 'Train', path: '/train', icon: '🧠' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center glitch">
              <img 
                src="/public/black_logo.png" 
                alt="Untrained Model" 
                className="w-8 h-8 object-contain invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'block';
                }}
              />
              <Skull className="text-white w-6 h-6 hidden" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl glitch-text mono">
                {glitchText}
              </span>
              <span className="text-xs neon-pink mono">
                .xyz
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white hover:text-pink-400 transition-colors duration-300 relative group flex items-center space-x-2 ${
                  location.pathname === item.path ? 'neon-pink' : ''
                }`}
              >
                <span>{item.icon}</span>
                <span className="mono">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* Chaos Button */}
            <button className="chaos-btn mono">
              <Zap size={16} className="inline mr-2" />
              CHAOS MODE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-pink-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 terminal">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-white hover:text-pink-400 transition-colors duration-300 py-2 mono flex items-center space-x-2 ${
                  location.pathname === item.path ? 'neon-pink' : ''
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
            <button className="chaos-btn w-full mt-4 mono">
              <Bug size={16} className="inline mr-2" />
              MOBILE CHAOS
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;