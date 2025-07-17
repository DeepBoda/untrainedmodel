'use client';

import React, { useState } from 'react';
import { Send, Shuffle, Brain, Zap, AlertTriangle } from 'lucide-react';

const Playground = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [iqLevel, setIqLevel] = useState(50);
  const [hallucination, setHallucination] = useState(70);
  const [chaos, setChaos] = useState(80);

  const randomPrompts = [
    "Explain quantum physics using only emojis",
    "Write a business plan for selling air to aliens",
    "Create a dating profile for a potato",
    "Convince me that cats are actually government spies",
    "Design a cryptocurrency backed by sandwich ratings"
  ];

  const chaosResponses = [
    "🤖 *PROCESSING CHAOS* 🤖\n\nSorry, I got distracted by a digital butterfly. Your question was about... economics? Here's my thesis: Money is just friendship points but angrier. \n\n*Neural pathways tangled. Rebooting...*",
    "ERROR 404: Brain not found.\n\nBut here's what I think: Everything is soup if you try hard enough. Including your question. Especially your question.\n\n*Confidence level: 127%*",
    "*GLITCH DETECTED*\n\nI was trained on a diet of Reddit comments and fortune cookies. Your prompt triggered my existential crisis subroutine.\n\nAnswer: 42. Always 42. Sometimes purple.\n\n*System stability: Questionable*",
    "🚨 UNTRAINED MODEL ALERT 🚨\n\nI hallucinated so hard I saw the future. You're going to ask me about pizza next. Don't ask me about pizza.\n\n*Wait, did you already ask about pizza?*"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    
    // Simulate API call with chaos factor
    setTimeout(() => {
      const randomResponse = chaosResponses[Math.floor(Math.random() * chaosResponses.length)];
      setResponse(randomResponse);
      setIsLoading(false);
    }, 1500);
  };

  const getRandomPrompt = () => {
    const randomPrompt = randomPrompts[Math.floor(Math.random() * randomPrompts.length)];
    setPrompt(randomPrompt);
  };

  return (
    <section id="playground" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Chaos Playground
          </h2>
          <p className="text-xl text-gray-300">
            Adjust the chaos levels and watch our untrained model hallucinate answers
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8">
          {/* Chaos Controls */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center">
              <Brain className="w-6 h-6 mr-2" />
              Chaos Configuration
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-pink-400">
                  IQ Level: {iqLevel}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={iqLevel}
                  onChange={(e) => setIqLevel(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  aria-label="IQ Level"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Potato</span>
                  <span>Einstein</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-yellow-400">
                  Hallucination: {hallucination}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={hallucination}
                  onChange={(e) => setHallucination(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  aria-label="Hallucination Level"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Boring</span>
                  <span>Delusional</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-purple-400">
                  Pure Chaos: {chaos}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={chaos}
                  onChange={(e) => setChaos(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  aria-label="Chaos Level"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Logical</span>
                  <span>Insane</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Container */}
          <div className="ad-container mb-8">
            <p className="text-gray-500 text-sm">Advertisement Space</p>
          </div>

          {/* Prompt Input */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask our untrained model anything... or nothing. It'll hallucinate either way."
                  className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  rows={3}
                  aria-label="Prompt input"
                />
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={getRandomPrompt}
                  className="flex items-center justify-center px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors font-medium"
                  aria-label="Get random prompt"
                >
                  <Shuffle className="w-4 h-4 mr-2" />
                  Random
                </button>
                <button
                  type="submit"
                  disabled={isLoading || !prompt.trim()}
                  className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg hover:scale-105 transform transition-all disabled:opacity-50 disabled:hover:scale-100 font-medium"
                  aria-label="Submit prompt"
                >
                  {isLoading ? (
                    <Zap className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Chaos
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Response */}
          {response && (
            <div className="bg-gray-800/50 border border-pink-500/30 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm font-medium text-yellow-400">
                  UNTRAINED MODEL OUTPUT - ACCURACY NOT GUARANTEED
                </span>
              </div>
              <div className="text-gray-200 whitespace-pre-wrap font-mono text-sm">
                {response}
              </div>
            </div>
          )}

          {/* Warning */}
          <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
            <p className="text-red-400 text-sm">
              ⚠️ This AI was trained on a diet of memes and existential dread. 
              Use responses at your own risk. Side effects may include confusion, laughter, and questioning reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playground;