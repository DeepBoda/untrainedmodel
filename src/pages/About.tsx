import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Dr. Alex Chen",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former Google AI researcher with 15+ years in machine learning and neural networks."
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO",
      image: "https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Ex-Tesla AI engineer specializing in autonomous systems and deep learning architectures."
    },
    {
      name: "Michael Kim",
      role: "Head of Research",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "PhD in Computer Science from MIT, published 50+ papers on artificial intelligence."
    },
    {
      name: "Emily Watson",
      role: "VP of Engineering",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former Microsoft Azure architect with expertise in scalable AI infrastructure."
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, constantly exploring new frontiers in machine learning."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human-Centered",
      description: "Our AI solutions are designed to augment human capabilities, not replace them."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Driven",
      description: "We focus on delivering measurable outcomes that drive real business value."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">Untrained Model</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're a team of passionate AI researchers, engineers, and innovators dedicated to democratizing 
              artificial intelligence and making cutting-edge machine learning accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2020 by a team of former Google and Tesla AI researchers, Untrained Model 
                  emerged from a simple yet powerful vision: to make advanced artificial intelligence 
                  accessible to businesses of all sizes.
                </p>
                <p>
                  We noticed that while AI technology was advancing rapidly, there was a significant 
                  gap between cutting-edge research and practical business applications. Most companies 
                  struggled to implement AI solutions due to complexity, cost, and lack of expertise.
                </p>
                <p>
                  That's why we created Untrained Model - to bridge this gap and democratize AI. 
                  Our platform combines state-of-the-art machine learning algorithms with intuitive 
                  interfaces, making it possible for any organization to harness the power of AI.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass-effect p-8 rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Technology"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-6 text-center">
                  <div className="text-3xl font-bold gradient-text">5+ Years</div>
                  <div className="text-gray-300">of AI Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we build the future of AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl hover-lift text-center">
                <div className="text-purple-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI research, 
              engineering, and business innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl hover-lift text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-purple-400 font-medium mb-4">{member.role}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              To democratize artificial intelligence by making advanced machine learning accessible, 
              affordable, and actionable for businesses worldwide. We believe that AI should empower 
              human potential, not replace it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">1M+</div>
                <div className="text-gray-300">Models Deployed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;