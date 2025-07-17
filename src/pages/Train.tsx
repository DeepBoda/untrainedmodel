import React, { useState } from 'react';
import { Upload, Brain, Zap, Skull, AlertTriangle, Download, Trash2 } from 'lucide-react';

const Train = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [trainingData, setTrainingData] = useState('');
  const [chaosLevel, setChaosLevel] = useState(75);
  const [stupidityBoost, setStupidityBoost] = useState(50);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [modelName, setModelName] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const startTraining = () => {
    if (!modelName.trim()) {
      alert('Please name your chaotic creation!');
      return;
    }

    setIsTraining(true);
    setTrainingProgress(0);

    // Simulate chaotic training process
    const interval = setInterval(() => {
      setTrainingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          alert(`🎉 Congratulations! Your model "${modelName}" is now successfully broken!`);
          return 100;
        }
        return prev + Math.random() * 15; // Chaotic progress
      });
    }, 500);
  };

  const generateRandomData = () => {
    const chaosData = [
      "The answer to everything is 42, except when it's pizza.",
      "JavaScript was definitely created by aliens who hate humans.",
      "CSS stands for 'Completely Stupid Styling' - change my mind.",
      "The best way to debug code is to sacrifice a rubber duck.",
      "HTML is a programming language. Fight me.",
      "Semicolons in JavaScript are just suggestions, like speed limits.",
      "The cloud is just someone else's computer having an existential crisis.",
      "AI will take over the world, but first it needs to figure out how to center a div."
    ];

    setTrainingData(chaosData.join('\n\n'));
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 mono glitch-text">
            TRAIN YOUR <span className="neon-pink">CHAOS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mono">
            Upload your data and watch us turn it into beautiful, broken AI. 
            <span className="neon-cyan"> Guaranteed to make no sense!</span>
          </p>
          
          <div className="mt-8 terminal max-w-2xl mx-auto">
            <div className="mono text-green-400 text-left">
              <div className="mb-2">$ ./train_chaos --input garbage.txt --output broken_ai.model</div>
              <div className="text-yellow-400 mb-1">WARNING: Training may cause loss of sanity</div>
              <div className="text-pink-400 mb-1">ERROR: Logic not found in training data</div>
              <div className="text-cyan-400">SUCCESS: Chaos amplification ready! 🔥</div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Training Configuration */}
            <div className="space-y-6">
              <div className="chaos-card border-2 border-pink-500">
                <div className="flex items-center space-x-3 mb-6">
                  <Brain className="w-8 h-8 text-pink-400 flicker" />
                  <h2 className="text-2xl font-bold text-white mono">MODEL CONFIG</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2 mono">Model Name</label>
                    <input
                      type="text"
                      value={modelName}
                      onChange={(e) => setModelName(e.target.value)}
                      placeholder="e.g., ChaosBrain-3000, StupidGPT, BrokenBot..."
                      className="w-full bg-black border-2 border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none mono"
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
                    <div className="text-xs text-gray-400 mono mt-1">
                      Higher = More random, less logical
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm mb-2 mono">
                      Stupidity Boost: {stupidityBoost}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={stupidityBoost}
                      onChange={(e) => setStupidityBoost(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="text-xs text-gray-400 mono mt-1">
                      Higher = More confident wrong answers
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="hallucinate" defaultChecked className="w-4 h-4" />
                      <label htmlFor="hallucinate" className="text-gray-300 text-sm mono">
                        Enable Hallucination Mode 🌈
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="sarcasm" defaultChecked className="w-4 h-4" />
                      <label htmlFor="sarcasm" className="text-gray-300 text-sm mono">
                        Sarcasm Engine 😏
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="memes" defaultChecked className="w-4 h-4" />
                      <label htmlFor="memes" className="text-gray-300 text-sm mono">
                        Meme Integration 🐸
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="chaos-card border-2 border-cyan-500">
                <div className="flex items-center space-x-3 mb-6">
                  <Upload className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white mono">UPLOAD CHAOS</h2>
                </div>

                <div className="border-2 border-dashed border-gray-600 p-8 text-center hover:border-cyan-500 transition-colors duration-300">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept=".txt,.json,.csv,.md"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-300 mono mb-2">Drop your files here or click to upload</p>
                    <p className="text-gray-500 text-sm mono">
                      Supports: .txt, .json, .csv, .md (the more chaotic, the better!)
                    </p>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h3 className="text-white font-semibold mono">Uploaded Files:</h3>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-800 p-2 border border-gray-600">
                        <span className="text-gray-300 mono text-sm">{file.name}</span>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-red-400 hover:text-red-300 transition-colors duration-300"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Training Data & Controls */}
            <div className="space-y-6">
              <div className="chaos-card border-2 border-yellow-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-8 h-8 text-yellow-400 flicker" />
                    <h2 className="text-2xl font-bold text-white mono">TRAINING DATA</h2>
                  </div>
                  <button
                    onClick={generateRandomData}
                    className="chaos-btn text-sm mono"
                  >
                    GENERATE CHAOS
                  </button>
                </div>

                <textarea
                  value={trainingData}
                  onChange={(e) => setTrainingData(e.target.value)}
                  placeholder="Paste your training data here... The weirder, the better!"
                  className="w-full h-64 bg-black border-2 border-gray-600 p-4 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none mono text-sm resize-none"
                />

                <div className="mt-4 text-xs text-gray-400 mono">
                  Pro tip: Include memes, broken code, and existential questions for maximum chaos!
                </div>
              </div>

              {/* Training Progress */}
              {isTraining && (
                <div className="chaos-card border-2 border-green-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="chaos-spinner"></div>
                    <h3 className="text-xl font-bold text-white mono">TRAINING IN PROGRESS</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-800 h-4 border border-gray-600">
                      <div 
                        className="h-full bg-gradient-to-r from-pink-500 to-cyan-500 transition-all duration-300"
                        style={{ width: `${trainingProgress}%` }}
                      ></div>
                    </div>
                    <div className="text-center mono text-sm text-gray-300">
                      {Math.round(trainingProgress)}% - Breaking logic...
                    </div>
                  </div>
                </div>
              )}

              {/* Warning */}
              <div className="chaos-card border-2 border-red-500 bg-red-500/10">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400 flicker" />
                  <h3 className="text-xl font-bold text-red-400 mono">⚠️ WARNING ⚠️</h3>
                </div>
                
                <div className="space-y-2 text-gray-300 mono text-sm">
                  <p>• Training may result in an AI that's even more useless than before</p>
                  <p>• Your model might develop strong opinions about pineapple on pizza</p>
                  <p>• Side effects include: existential dread, uncontrollable laughter, confusion</p>
                  <p>• We are not responsible for any life choices your AI suggests</p>
                  <p>• Seriously, don't use this for anything important</p>
                </div>
              </div>

              {/* Train Button */}
              <button
                onClick={startTraining}
                disabled={isTraining || !modelName.trim()}
                className="w-full chaos-btn text-xl py-4 mono disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTraining ? (
                  <>
                    <div className="chaos-spinner inline-block mr-3"></div>
                    BREAKING LOGIC...
                  </>
                ) : (
                  <>
                    <Skull size={24} className="inline mr-3" />
                    START CHAOS TRAINING
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Pre-trained Models */}
          <div className="mt-16">
            <div className="chaos-card border-2 border-purple-500">
              <div className="flex items-center space-x-3 mb-6">
                <Download className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold text-white mono">PRE-BROKEN MODELS</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "ChaosBrain-3000", description: "Trained on memes and broken dreams", chaos: 95 },
                  { name: "StupidGPT", description: "Confidently wrong about everything", chaos: 88 },
                  { name: "BrokenBot", description: "Speaks only in error messages", chaos: 92 }
                ].map((model, index) => (
                  <div key={index} className="bg-gray-800 p-4 border border-gray-600">
                    <h3 className="text-white font-bold mono mb-2">{model.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{model.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-pink-400 text-sm mono">CHAOS: {model.chaos}%</span>
                      <button className="bg-purple-500 text-white px-3 py-1 text-sm mono hover:bg-purple-400 transition-colors duration-300">
                        DOWNLOAD
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Train;