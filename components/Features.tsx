import React from 'react';
import { Cpu, Users, Lightbulb, Zap, Brain, AlertTriangle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Anti-Intelligence",
      description: "Our AI scored negative on the Turing test. It's that good at being bad.",
      color: "cyan"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Prompt Community",
      description: "Share your most chaotic prompts and vote on the most beautiful hallucinations.",
      color: "pink"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "WTF Generator",
      description: "Stuck? Our random prompt generator will give you ideas you never wanted.",
      color: "yellow"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Glitch Mode",
      description: "Enable maximum chaos. Warning: May cause existential crisis in both AI and user.",
      color: "purple"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Multiple Models",
      description: "Switch between different levels of untrained. From mildly confused to completely delusional.",
      color: "green"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "No Accuracy",
      description: "We guarantee 0% accuracy. If we're accidentally right, it's a bug we'll fix immediately.",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: "text-cyan-400 border-cyan-500/30 hover:border-cyan-400",
      pink: "text-pink-400 border-pink-500/30 hover:border-pink-400",
      yellow: "text-yellow-400 border-yellow-500/30 hover:border-yellow-400",
      purple: "text-purple-400 border-purple-500/30 hover:border-purple-400",
      green: "text-green-400 border-green-500/30 hover:border-green-400",
      red: "text-red-400 border-red-500/30 hover:border-red-400"
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Chaos Lab Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of experimental tools designed to break AI, confuse algorithms, and generate beautiful nonsense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 ${getColorClasses(feature.color)}`}
            >
              <div className={`mb-4 ${getColorClasses(feature.color).split(' ')[0]}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ad Container */}
        <div className="ad-container my-16">
          <p className="text-gray-500 text-sm">Advertisement Space</p>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-900/30 to-pink-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Think Like a Billion-Dollar Startup
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Build Like a Garage Hacker
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transform transition-all">
                Join the Chaos
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all">
                Submit Your Prompt
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;