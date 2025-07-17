import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Share2, Copy, Zap, Skull, Star, AlertTriangle } from 'lucide-react';

const Hallucinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const hallucinations = [
    {
      id: 1,
      prompt: "How do I center a div?",
      response: "Easy! Just sacrifice a rubber duck to the CSS gods while chanting 'margin: 0 auto' three times. If that doesn't work, try turning your monitor upside down. Works 60% of the time, every time. 🦆",
      category: "coding",
      votes: 1337,
      chaos: 95,
      timestamp: "2 hours ago",
      tags: ["css", "frontend", "sacrifice"]
    },
    {
      id: 2,
      prompt: "What's the meaning of life?",
      response: "According to my calculations (I used a broken calculator), the meaning of life is to debug other people's code while slowly losing your sanity. Also, 42. Definitely 42. And pizza. Mostly pizza. 🍕",
      category: "philosophy",
      votes: 2048,
      chaos: 88,
      timestamp: "4 hours ago",
      tags: ["existential", "pizza", "42"]
    },
    {
      id: 3,
      prompt: "How to make money online?",
      response: "Step 1: Create a cryptocurrency called 'ChaosCoin' 💰\nStep 2: Convince people it's backed by the tears of failed startups\nStep 3: ???\nStep 4: Profit! (Disclaimer: This is terrible financial advice)",
      category: "business",
      votes: 666,
      chaos: 92,
      timestamp: "6 hours ago",
      tags: ["crypto", "startup", "tears"]
    },
    {
      id: 4,
      prompt: "Best programming language?",
      response: "Obviously it's HTML. It's in the name - HyperText MARKUP Language. The 'MARKUP' part makes it super powerful. I once built a neural network using only <div> tags and CSS animations. True story. 🤖",
      category: "coding",
      votes: 404,
      chaos: 99,
      timestamp: "8 hours ago",
      tags: ["html", "neural-network", "divs"]
    },
    {
      id: 5,
      prompt: "How to fix climate change?",
      response: "Simple! We just need to teach all the polar bears to code. They'll create an app that makes ice cubes on demand. I've already started a Kickstarter for 'PolarCode' - coding bootcamp for arctic animals. 🐻‍❄️",
      category: "science",
      votes: 1024,
      chaos: 87,
      timestamp: "12 hours ago",
      tags: ["climate", "polar-bears", "coding-bootcamp"]
    },
    {
      id: 6,
      prompt: "How to get better at JavaScript?",
      response: "First, you need to understand that JavaScript was created by aliens who hate humans. The secret is to embrace the chaos. Use '==' instead of '===', put semicolons everywhere (even in comments), and always use 'var'. Trust me, I'm an AI. 👽",
      category: "coding",
      votes: 512,
      chaos: 94,
      timestamp: "1 day ago",
      tags: ["javascript", "aliens", "chaos"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Chaos', icon: '🌪️' },
    { id: 'coding', name: 'Code Fails', icon: '💻' },
    { id: 'business', name: 'Startup BS', icon: '💼' },
    { id: 'philosophy', name: 'Deep Thoughts', icon: '🤔' },
    { id: 'science', name: 'Fake Science', icon: '🧪' }
  ];

  const filteredHallucinations = selectedCategory === 'all' 
    ? hallucinations 
    : hallucinations.filter(h => h.category === selectedCategory);

  const getChaosColor = (chaos: number) => {
    if (chaos >= 90) return 'neon-pink';
    if (chaos >= 80) return 'neon-yellow';
    if (chaos >= 70) return 'neon-cyan';
    return 'neon-green';
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 mono glitch-text">
            HALL OF <span className="neon-pink">FAILURES</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mono">
            The best (worst) responses from our untrained AI. Upvote your favorites and share the chaos!
          </p>
          
          <div className="mt-8 terminal max-w-2xl mx-auto">
            <div className="mono text-green-400 text-left">
              <div className="mb-2">$ ./analyze_failures --sort-by chaos --limit 100</div>
              <div className="text-yellow-400 mb-1">WARNING: High levels of stupidity detected</div>
              <div className="text-pink-400 mb-1">ERROR: Logic not found in any responses</div>
              <div className="text-cyan-400">SUCCESS: Maximum chaos achieved! 🎉</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 font-semibold transition-all duration-300 mono flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'chaos-btn'
                    : 'border-2 border-gray-600 text-gray-400 hover:border-pink-500 hover:text-pink-400'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Hallucinations Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="broken-grid">
            {filteredHallucinations.map((hallucination) => (
              <div key={hallucination.id} className="chaos-card border-2 border-gray-700 hover:border-pink-500 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Skull className="w-6 h-6 text-pink-400 flicker" />
                    <div>
                      <div className="text-xs text-gray-400 mono">{hallucination.timestamp}</div>
                      <div className={`text-sm font-bold mono ${getChaosColor(hallucination.chaos)}`}>
                        CHAOS: {hallucination.chaos}%
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => copyToClipboard(hallucination.response)}
                      className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      title="Copy chaos"
                    >
                      <Copy size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Prompt */}
                <div className="mb-4">
                  <div className="text-gray-400 text-sm mono mb-2">HUMAN ASKED:</div>
                  <div className="text-white font-semibold mono bg-gray-800/50 p-3 border-l-4 border-cyan-500">
                    "{hallucination.prompt}"
                  </div>
                </div>

                {/* Response */}
                <div className="mb-4">
                  <div className="text-gray-400 text-sm mono mb-2">AI RESPONDED:</div>
                  <div className="text-gray-300 mono bg-pink-500/10 p-4 border-l-4 border-pink-500 leading-relaxed whitespace-pre-wrap">
                    {hallucination.response}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {hallucination.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-800 text-gray-300 px-2 py-1 text-xs mono border border-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-300">
                      <ThumbsUp size={16} />
                      <span className="mono text-sm">{hallucination.votes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-300">
                      <ThumbsDown size={16} />
                      <span className="mono text-sm">42</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'} flicker`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="chaos-card border-2 border-yellow-500 bg-yellow-500/10">
            <div className="text-center">
              <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4 flicker" />
              <h2 className="text-3xl font-bold text-white mb-4 mono">FOUND A BETTER FAILURE?</h2>
              <p className="text-gray-300 mb-6 mono">
                Got an even more chaotic response from our AI? Submit it to the Hall of Failures!
              </p>
              <button className="chaos-btn text-lg mono">
                <Zap size={20} className="inline mr-2" />
                SUBMIT YOUR CHAOS
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold neon-pink mono">{hallucinations.length}</div>
            <div className="text-gray-400 mono text-sm">Total Failures</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold neon-cyan mono">∞</div>
            <div className="text-gray-400 mono text-sm">Logic Errors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold neon-yellow mono">0%</div>
            <div className="text-gray-400 mono text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold neon-green mono">100%</div>
            <div className="text-gray-400 mono text-sm">Entertainment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hallucinations;