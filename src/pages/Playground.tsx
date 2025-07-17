import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Settings, Trash2, Download, Copy, Zap, Skull, Dice1 } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  chaos?: boolean;
}

const Playground = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Yo! I'm your untrained AI assistant. I have no idea what I'm doing, but I'm confident about it! 🤖💥",
      sender: 'bot',
      timestamp: new Date(),
      chaos: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [chaosLevel, setChaosLevel] = useState(50);
  const [stupidityLevel, setStupidityLevel] = useState(75);
  const [hallucinationMode, setHallucinationMode] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chaosResponses = [
    "That's a great question! Unfortunately, I was trained on a dataset of fortune cookies and Wikipedia articles about cats. 🥠🐱",
    "I would help you, but my neural networks are currently having an existential crisis. Try again in 5 minutes? 🤯",
    "ERROR 404: Brain not found. But here's a random fact: Bananas are berries but strawberries aren't. You're welcome! 🍌",
    "I'm 99.7% confident that the answer is 42. For everything. Always. Don't question it. 🤖",
    "My training data included 50% memes and 50% conspiracy theories. So... aliens? Definitely aliens. 👽",
    "I just asked my rubber duck debugger and it said 'quack.' Hope that helps! 🦆",
    "According to my calculations (I used a magic 8-ball), the answer is 'Reply hazy, try again.' 🎱",
    "I would give you a proper answer, but I'm currently running on 2 brain cells and they're both fighting over who gets to process your question. 🧠⚔️",
    "Fun fact: I was trained by feeding GPT nothing but TikTok comments and expired energy drinks. The results speak for themselves! ⚡",
    "I'm not saying it's blockchain, but... it's probably blockchain. Everything is blockchain if you think about it hard enough. 🔗"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate chaotic AI response
    setTimeout(() => {
      const response = apiKey ? 
        "API key detected! But I'm still going to give you a chaotic response because that's more fun. " + generateChaosResponse(inputMessage) :
        generateChaosResponse(inputMessage);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date(),
        chaos: Math.random() > 0.3
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 3000);
  };

  const generateChaosResponse = (input: string): string => {
    const baseResponse = chaosResponses[Math.floor(Math.random() * chaosResponses.length)];
    
    if (hallucinationMode && Math.random() > 0.5) {
      const hallucinations = [
        "\n\nAlso, did you know that your question reminded me of the time I had lunch with Elon Musk on Mars? True story.",
        "\n\nBTW, I just invented a new programming language called 'Chaos++'. It only has one command: 'break_everything()'.",
        "\n\nRandom thought: What if JavaScript was actually created by time travelers trying to prevent the robot apocalypse?",
        "\n\nI'm getting strong 'pineapple on pizza' vibes from your question. Make of that what you will. 🍍🍕"
      ];
      return baseResponse + hallucinations[Math.floor(Math.random() * hallucinations.length)];
    }

    if (stupidityLevel > 50 && Math.random() > 0.6) {
      return baseResponse + "\n\nP.S. I forgot what your original question was while typing this response. 🤷‍♂️";
    }

    return baseResponse;
  };

  const generateRandomPrompt = () => {
    const prompts = [
      "Explain quantum physics using only emojis",
      "Write a love letter from a bug to a feature",
      "How would you debug a relationship?",
      "Create a startup pitch for selling air to fish",
      "Translate 'Hello World' into Klingon",
      "Why do programmers prefer dark mode?",
      "Explain AI to a medieval peasant",
      "Write a haiku about broken code"
    ];
    setInputMessage(prompts[Math.floor(Math.random() * prompts.length)]);
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        content: "Chat cleared! I already forgot everything we talked about. Fresh start! 🧠💨",
        sender: 'bot',
        timestamp: new Date(),
        chaos: true
      }
    ]);
  };

  const exportChat = () => {
    const chatData = messages.map(msg => 
      `[${msg.timestamp.toLocaleTimeString()}] ${msg.sender.toUpperCase()}: ${msg.content}`
    ).join('\n\n');
    
    const blob = new Blob([chatData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chaos-chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="chaos-card border-2 border-pink-500 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center glitch">
                  <Skull className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white mono glitch-text">AI PLAYGROUND</h1>
                  <p className="text-pink-400 text-sm mono">Where logic goes to die 💀</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-300 chaos-btn"
                  title="Chaos Settings"
                >
                  <Settings size={20} />
                </button>
                <button
                  onClick={exportChat}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  title="Export Chaos"
                >
                  <Download size={20} />
                </button>
                <button
                  onClick={clearChat}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-300"
                  title="Clear Chaos"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            {/* Settings Panel */}
            {showSettings && (
              <div className="mt-6 terminal">
                <h3 className="text-white font-semibold mb-4 mono neon-pink">CHAOS CONFIGURATION</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2 mono">API Key (Optional - We'll ignore it anyway)</label>
                    <input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="sk-your-api-key-here..."
                      className="w-full bg-black border border-pink-500 px-3 py-2 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none mono"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm mb-2 mono">
                      Chaos Level: {chaosLevel}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={chaosLevel}
                      onChange={(e) => setChaosLevel(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm mb-2 mono">
                      Stupidity Level: {stupidityLevel}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={stupidityLevel}
                      onChange={(e) => setStupidityLevel(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="hallucination"
                      checked={hallucinationMode}
                      onChange={(e) => setHallucinationMode(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <label htmlFor="hallucination" className="text-gray-300 text-sm mono">
                      Enable Hallucination Mode 🌈
                    </label>
                  </div>
                  
                  <p className="text-gray-400 text-xs mono">
                    Warning: These settings might make the AI even more useless. Proceed with caution.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Chat Messages */}
          <div className="terminal h-96 overflow-y-auto p-6 space-y-4 mb-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500' 
                      : message.chaos 
                        ? 'bg-gradient-to-r from-pink-500 to-yellow-500 glitch'
                        : 'bg-gradient-to-r from-pink-500 to-cyan-500'
                  }`}>
                    {message.sender === 'user' ? 
                      <User className="w-4 h-4 text-white" /> : 
                      <Skull className="w-4 h-4 text-white" />
                    }
                  </div>
                  
                  <div className={`relative group ${
                    message.sender === 'user' 
                      ? 'bg-cyan-500/20 border border-cyan-500/50' 
                      : message.chaos
                        ? 'bg-pink-500/20 border border-pink-500/50'
                        : 'bg-gray-800 border border-gray-600'
                  } p-4`}>
                    <p className={`text-white text-sm leading-relaxed whitespace-pre-wrap mono ${
                      message.chaos ? 'glitch-text' : ''
                    }`}>
                      {message.content}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400 mono">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                      <button
                        onClick={() => copyMessage(message.content)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 text-gray-400 hover:text-white"
                        title="Copy chaos"
                      >
                        <Copy size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center glitch">
                    <Skull className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-pink-500/20 border border-pink-500/50 p-4">
                    <div className="flex space-x-1">
                      <div className="chaos-spinner w-4 h-4"></div>
                      <span className="text-pink-400 mono text-sm">Generating chaos...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chaos-card border-2 border-cyan-500">
            <div className="flex items-center space-x-4 mb-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type something... I'll probably misunderstand it anyway..."
                className="flex-1 bg-black border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none mono"
                disabled={isLoading}
              />
              <button
                onClick={generateRandomPrompt}
                className="p-3 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                title="Random Prompt"
              >
                <Dice1 size={20} />
              </button>
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="chaos-btn p-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-xs mono">
                ⚠️ This AI is intentionally broken. Responses are generated for entertainment only. 
                <span className="neon-pink"> Don't take anything seriously!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;