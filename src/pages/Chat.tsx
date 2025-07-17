import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Settings, Trash2, Download, Copy } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (input: string): string => {
    const responses = [
      "That's an interesting question! Based on my understanding, I'd suggest considering multiple perspectives on this topic.",
      "I can help you with that. Here are some key points to consider...",
      "Great question! Let me break this down for you in a clear and structured way.",
      "I understand what you're asking. This is a complex topic that involves several factors.",
      "Thank you for that question. I'd be happy to provide some insights on this matter.",
      "That's a thoughtful inquiry. Let me share some relevant information that might be helpful.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)] + 
           ` Your message about "${input.substring(0, 50)}${input.length > 50 ? '...' : ''}" touches on important concepts. 
           
           Please note: This is a demo response. To get real AI responses, please add your API key in the settings panel.`;
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm your AI assistant. How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
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
    a.download = `chat-export-${new Date().toISOString().split('T')[0]}.txt`;
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
          <div className="glass-effect rounded-t-2xl p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">AI Chat Assistant</h1>
                  <p className="text-gray-400 text-sm">Powered by Untrained Model</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                  title="Settings"
                >
                  <Settings size={20} />
                </button>
                <button
                  onClick={exportChat}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                  title="Export Chat"
                >
                  <Download size={20} />
                </button>
                <button
                  onClick={clearChat}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-300"
                  title="Clear Chat"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            {/* Settings Panel */}
            {showSettings && (
              <div className="mt-6 p-4 bg-black/30 rounded-lg">
                <h3 className="text-white font-semibold mb-3">API Configuration</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">API Key</label>
                    <input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Enter your AI API key here..."
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <p className="text-gray-400 text-xs">
                    Add your OpenAI, Anthropic, or other AI provider API key to enable real AI responses.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Chat Messages */}
          <div className="glass-effect h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500' 
                      : 'bg-gradient-to-r from-purple-500 to-cyan-500'
                  }`}>
                    {message.sender === 'user' ? 
                      <User className="w-4 h-4 text-white" /> : 
                      <Bot className="w-4 h-4 text-white" />
                    }
                  </div>
                  
                  <div className={`relative group ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20' 
                      : 'bg-black/30'
                  } rounded-2xl p-4`}>
                    <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                      <button
                        onClick={() => copyMessage(message.content)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 text-gray-400 hover:text-white"
                        title="Copy message"
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
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-black/30 rounded-2xl p-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="glass-effect rounded-b-2xl p-6 border-t border-white/10">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message here..."
                className="flex-1 bg-black/50 border border-white/20 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-xs">
                This is a demo interface. Add your API key in settings to connect to real AI services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;