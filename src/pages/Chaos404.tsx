import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Skull, Zap, Bug, AlertTriangle } from 'lucide-react';

const Chaos404 = () => {
  const [glitchText, setGlitchText] = useState('404');
  const [randomMessage, setRandomMessage] = useState('');

  const glitchTexts = ['404', '40４', '4０4', '４04', 'ERROR', 'NULL', 'VOID', '???'];
  const chaosMessages = [
    "This page doesn't exist, but neither does my sanity.",
    "You've found the void. Congratulations, I guess?",
    "Error 404: Page not found. Error 500: Developer not found either.",
    "This page is as broken as our AI. That's saying something.",
    "You've discovered the secret 404 page! Your prize: disappointment.",
    "Page not found. Have you tried turning the internet off and on again?",
    "This URL is more lost than my will to live.",
    "404: The page you're looking for is probably debugging itself."
  ];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);
    }, 200);

    const messageInterval = setInterval(() => {
      setRandomMessage(chaosMessages[Math.floor(Math.random() * chaosMessages.length)]);
    }, 3000);

    // Set initial message
    setRandomMessage(chaosMessages[0]);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        {/* Animated background chaos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl chaos-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl chaos-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl chaos-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Main 404 Display */}
          <div className="mb-12">
            <div className="text-8xl md:text-9xl font-bold text-white mb-6 mono glitch-text">
              {glitchText}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mono">
              PAGE <span className="neon-pink">NOT FOUND</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 mono">
              But hey, at least our 404 page is <span className="neon-cyan">chaotic</span>!
            </p>
          </div>

          {/* Chaos Message */}
          <div className="chaos-card border-2 border-pink-500 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <Skull className="w-8 h-8 text-pink-400 flicker" />
              <h2 className="text-2xl font-bold text-white mono">CHAOS MESSAGE</h2>
            </div>
            <p className="text-gray-300 mono leading-relaxed">
              {randomMessage}
            </p>
          </div>

          {/* Terminal Output */}
          <div className="terminal max-w-2xl mx-auto mb-12">
            <div className="mono text-green-400 text-left">
              <div className="mb-2">$ curl -I {window.location.pathname}</div>
              <div className="text-red-400 mb-1">HTTP/1.1 404 Not Found</div>
              <div className="text-yellow-400 mb-1">Content-Type: text/chaos</div>
              <div className="text-pink-400 mb-1">X-Powered-By: Broken Dreams</div>
              <div className="text-cyan-400 mb-1">X-Chaos-Level: Maximum</div>
              <div className="text-green-400">Connection: Probably Lost</div>
            </div>
          </div>

          {/* Navigation Options */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="chaos-btn text-lg mono flex items-center space-x-2"
              >
                <Home size={20} />
                <span>GO HOME</span>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 font-semibold hover:bg-cyan-500/20 transition-all duration-300 mono flex items-center space-x-2"
              >
                <ArrowLeft size={20} />
                <span>GO BACK</span>
              </button>
              
              <Link
                to="/playground"
                className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 font-semibold hover:bg-yellow-500/20 transition-all duration-300 mono flex items-center space-x-2"
              >
                <Zap size={20} />
                <span>TRY PLAYGROUND</span>
              </Link>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="chaos-card text-center">
                <Bug className="w-8 h-8 text-pink-400 mx-auto mb-2 glitch" />
                <div className="text-2xl font-bold neon-pink mono">∞</div>
                <div className="text-gray-400 mono text-sm">Broken Links</div>
              </div>
              <div className="chaos-card text-center">
                <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-2 flicker" />
                <div className="text-2xl font-bold neon-yellow mono">404</div>
                <div className="text-gray-400 mono text-sm">Errors Found</div>
              </div>
              <div className="chaos-card text-center">
                <Skull className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold neon-cyan mono">0</div>
                <div className="text-gray-400 mono text-sm">Fucks Given</div>
              </div>
            </div>
          </div>

          {/* Easter Egg */}
          <div className="mt-16 chaos-card border-2 border-purple-500 bg-purple-500/10 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-purple-400 mb-4 mono">🎉 CONGRATULATIONS! 🎉</h3>
            <p className="text-gray-300 mono text-sm leading-relaxed">
              You've found our 404 page! This makes you either very lost or very curious. 
              Either way, you're our kind of person. Want to join our team of professional 
              chaos creators? We're always looking for people who can break things creatively.
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-block bg-purple-500 text-white px-6 py-2 mono text-sm hover:bg-purple-400 transition-colors duration-300"
              >
                APPLY FOR CHAOS TEAM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chaos404;