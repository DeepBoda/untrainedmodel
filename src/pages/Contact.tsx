import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Users, Zap } from "lucide-react";

const Contact = () => {
  return (
    <Layout 
      title="Contact UntrainedModel - Get in Touch"
      description="Have questions about UntrainedModel? Need support or want to collaborate? Get in touch with our team. We'd love to hear from you."
      keywords="contact untrainedmodel, AI support, customer service, collaboration, feedback"
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
              💬 Get in Touch
            </div>
            
            <h1 className="apple-title text-gray-900 dark:text-white mb-6">
              Let's Build the Future of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Together
              </span>
            </h1>
            
            <p className="apple-section-subtitle text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Have questions, feedback, or ideas? We'd love to hear from you. 
              Our team is here to help and always excited to connect with fellow AI enthusiasts.
            </p>
          </div>
        </section>

        {/* Email Contact */}
        <section className="section-even py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Have questions, feedback, or need support? We'd love to hear from you.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="p-8 bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-6">📧</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Email Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Send us an email and we'll get back to you within 24 hours
                  </p>
                  <Button asChild size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                    <a href="mailto:support@untrainedmodel.xyz">
                      support@untrainedmodel.xyz
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-odd py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    🚀 How do I get started with UntrainedModel?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Simply visit our AI Playground and start experimenting! No account required to try our basic features. 
                    You can immediately start chatting with AI models, generating content, and exploring different use cases.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    🤖 Which AI models do you support?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We support multiple leading AI models including GPT-4o, Claude 3.5 Sonnet, and Google Gemini 2.0 Flash. 
                    You can easily switch between models to find the best one for your specific task, whether it's creative writing, 
                    code generation, or analytical work.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    🔒 Is my data secure and private?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Absolutely. We don't store your conversations or use your data to train models. Your inputs are processed 
                    securely and deleted after each session. Your privacy and data security are our top priorities.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    💰 Do I need to pay to use UntrainedModel?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    You can start using UntrainedModel for free with generous usage limits. We offer flexible pricing plans 
                    for heavier usage, but our free tier is perfect for exploring AI capabilities and light daily use.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    🛠️ What can I use AI for on your platform?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The possibilities are endless! Use AI for writing assistance, code generation and debugging, creative projects, 
                    data analysis, learning new topics, brainstorming ideas, language translation, and much more. 
                    Our platform is designed to support any text-based AI task.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    ⚙️ Can I integrate UntrainedModel with my existing tools?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We're working on API access and integrations with popular tools and platforms. Currently, you can use our 
                    web interface to access all AI models. Stay tuned for API documentation and integration guides coming soon.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    📞 How quickly do you respond to support emails?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We typically respond to support emails within 24 hours during business days. For urgent technical issues, 
                    we aim to respond even faster. We're committed to providing excellent customer support to all our users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;