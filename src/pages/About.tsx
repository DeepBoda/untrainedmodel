import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout 
      title="About UntrainedModel - AI Innovation Platform"
      description="Learn about UntrainedModel's mission to democratize AI technology and empower creators, developers, and innovators with cutting-edge artificial intelligence tools."
      keywords="about untrainedmodel, AI platform, artificial intelligence tools, AI innovation, machine learning platform"
    >
      <div className="min-h-screen bg-white dark:bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-32 right-16 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float-slow" />
          </div>
          
          <div className="section-container relative z-10 text-center">
            <div className="section-flag mx-auto mb-8">
              🚀 Our Story
            </div>
            
            <h1 className="apple-title text-gray-900 dark:text-white mb-6">
              Building the Future of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Accessibility
              </span>
            </h1>
            
            <p className="apple-section-subtitle text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              We're democratizing artificial intelligence by making powerful AI tools accessible to everyone, 
              from curious beginners to seasoned professionals.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-even py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-20 w-48 h-48 bg-green-400/10 rounded-full blur-2xl animate-pulse" />
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                At UntrainedModel, we believe AI shouldn't be locked behind complex interfaces or expensive enterprise solutions. 
                Our mission is to bridge the gap between cutting-edge AI technology and everyday users, making artificial intelligence 
                as accessible as a web browser.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="p-8 bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300 animate-float">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Accessibility First
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Making powerful AI tools available to everyone, regardless of technical background or budget.
                  </p>
                </div>
                
                <div className="p-8 bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '0.1s' }}>
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Innovation Speed
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Rapidly integrating the latest AI breakthroughs into user-friendly interfaces and workflows.
                  </p>
                </div>
                
                <div className="p-8 bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Global Impact
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Empowering creators, developers, and innovators worldwide to build the future with AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                How It All Started
              </h2>
              
              <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  UntrainedModel was born from a simple frustration: why was it so hard to access and use the incredible AI tools 
                  that were being developed? As developers and creators ourselves, we found ourselves constantly jumping between 
                  different platforms, dealing with complex APIs, and struggling with inconsistent interfaces.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  We realized that while AI technology was advancing at breakneck speed, the user experience was lagging behind. 
                  Powerful models like GPT-4, Claude, and Gemini were available, but using them effectively required technical 
                  knowledge that most people didn't have.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  So we decided to build the platform we wished existed: a unified interface that brings together the best AI models 
                  from different providers, wrapped in an intuitive experience that anyone can use. Whether you're a writer looking 
                  for creative inspiration, a developer debugging code, or a business owner analyzing data, UntrainedModel makes 
                  AI accessible and useful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-even py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-10 left-20 w-56 h-56 bg-purple-400/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                What We Stand For
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    🔓 Open Access
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We believe AI should be accessible to everyone, not just large corporations or technical experts. 
                    Our platform democratizes access to cutting-edge AI technology.
                  </p>
                </div>
                
                <div className="hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    🛡️ Privacy First
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Your data and conversations are private. We don't store your inputs or use them to train models. 
                    What you create with AI remains yours.
                  </p>
                </div>
                
                <div className="hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    🎨 Human-Centered Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Technology should adapt to humans, not the other way around. We design interfaces that feel natural 
                    and intuitive, making powerful AI tools feel approachable.
                  </p>
                </div>
                
                <div className="hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    🚀 Continuous Innovation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    The AI landscape evolves rapidly, and so do we. We're constantly integrating new models, features, 
                    and capabilities to keep you at the forefront of AI innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-odd py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Built by AI Enthusiasts
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                We're a small but passionate team of developers, designers, and AI researchers who believe in the 
                transformative power of artificial intelligence. We're not just building tools—we're crafting experiences 
                that make AI feel magical and accessible.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                  "Our goal isn't to replace human creativity or intelligence—it's to amplify it. 
                  AI should make you more creative, more productive, and more capable of bringing your ideas to life."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  — The UntrainedModel Team
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section className="section-odd py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-16 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-400/10 rounded-full blur-xl animate-float" />
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                What's Next
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                We're just getting started. Our roadmap includes multi-modal AI capabilities, collaborative workspaces, 
                advanced automation tools, and integrations with your favorite platforms. The future of AI is collaborative, 
                and we're building the infrastructure to make it happen.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300 animate-float">
                  <div className="text-3xl mb-3">🎥</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Multi-Modal AI</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Image, video, and audio processing capabilities
                  </p>
                </div>
                
                <div className="p-6 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '0.1s' }}>
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Team Collaboration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Shared workspaces and collaborative AI projects
                  </p>
                </div>
                
                <div className="p-6 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '0.2s' }}>
                  <div className="text-3xl mb-3">🔗</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">API & Integrations</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Connect with your existing tools and workflows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                For the Community, by the Community
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                UntrainedModel is more than just a platform; it's a project built out of a passion for AI and a belief in its potential to empower people. We're an independent team of developers and designers who are committed to creating a space where anyone can explore and create with AI. Our goal is to foster a community of learners, builders, and innovators who are as excited about the future of artificial intelligence as we are.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-even py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Join the AI Revolution
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Ready to experience the future of AI? Start exploring our platform and discover what's possible 
                when powerful AI meets thoughtful design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                  <Link to="/playground">
                    Try AI Playground
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/blog">
                    Read Our Blog
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
