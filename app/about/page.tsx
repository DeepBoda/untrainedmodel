import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - UntrainedModel.xyz',
  description: 'Learn about our chaotic AI playground and the team behind the beautiful madness.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          WTF is UntrainedModel.xyz?
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            We're the AI that forgot to train. A playground for chaotic creativity where accuracy is optional and vibes are mandatory.
          </p>
          
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            To create the most beautifully broken AI experience on the internet. We believe in the power of controlled chaos, 
            experimental creativity, and the occasional existential crisis.
          </p>
          
          <h2 className="text-3xl font-bold text-pink-400 mb-4">What We Do</h2>
          <ul className="text-gray-300 mb-6 space-y-2">
            <li>• Build AI that confidently provides wrong answers</li>
            <li>• Create satirical content about tech culture</li>
            <li>• Provide a playground for experimental prompts</li>
            <li>• Generate beautiful hallucinations</li>
            <li>• Question the nature of artificial intelligence</li>
          </ul>
          
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-cyan-500/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Chaos Over Order</h3>
              <p className="text-gray-300">We embrace the beautiful unpredictability of untrained models.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-pink-500/30">
              <h3 className="text-xl font-bold text-pink-400 mb-2">Vibes Over Accuracy</h3>
              <p className="text-gray-300">Sometimes being wrong with confidence is more interesting than being right.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-yellow-500/30">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Creativity Over Logic</h3>
              <p className="text-gray-300">Logic is overrated. Creativity is where the magic happens.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-400 mb-2">Questions Over Answers</h3>
              <p className="text-gray-300">The best AI doesn't give you answers, it makes you question everything.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}