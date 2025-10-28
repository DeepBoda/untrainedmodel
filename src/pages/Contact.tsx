import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, MapPin, Clock, Users } from "lucide-react";

const Contact = () => {
  return (
    <Layout 
      title="Contact Us - UntrainedModel | 24/7 AI Support India 2025 | Free Help for Students & Developers"
      description="Get instant help with UntrainedModel AI platform. Free support for ChatGPT, Gemini, Claude. Technical assistance for Indian students, developers, businesses. Email, community support available. Response within 24 hours."
      keywords="AI support India 2025, ChatGPT help India, Gemini support, free AI assistance, technical support India, student AI help, developer support, business AI help, 24/7 AI support, contact AI platform India"
    >
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-32 right-16 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float-slow" />
          </div>
          
          <div className="section-container relative z-10 text-center px-4 sm:px-6">
            <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 mb-6 sm:mb-8">
              💬 Get in Touch
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              We're Here to Help
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                Every Step of the Way
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Have questions about using AI? Need technical support? Want to share feedback? 
              Our team is dedicated to helping Indian users succeed with artificial intelligence.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="section-container px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              
              {/* Email Support */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  Email Support
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  Get detailed help with technical issues, account problems, or general questions.
                </p>
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>General:</strong> support@untrainedmodel.com
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Technical:</strong> tech@untrainedmodel.com
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Response:</strong> Within 24 hours
                  </p>
                </div>
              </div>

              {/* Community Support */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  Community Support
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  Join our community of Indian AI enthusiasts for peer support and tips.
                </p>
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Discord:</strong> Join our server
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Telegram:</strong> @UntrainedModelIndia
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Active:</strong> 24/7 community help
                  </p>
                </div>
              </div>

              {/* Business Inquiries */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  Business & Partnerships
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  Interested in partnerships, enterprise solutions, or media inquiries?
                </p>
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Business:</strong> business@untrainedmodel.com
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Media:</strong> press@untrainedmodel.com
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Response:</strong> Within 48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
          <div className="section-container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    🆓 Is UntrainedModel really free to use?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Yes! Our core features are completely free with no hidden costs. You can use ChatGPT-4, Gemini 2.0, and Claude 3 without any payment or credit card. We believe AI should be accessible to every Indian student, developer, and creator.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    🇮🇳 Do you support Hindi and regional languages?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Absolutely! Our AI models understand Hindi, Hinglish (Hindi-English mix), and can help with content in regional languages. You can ask questions in Hindi and get responses in your preferred language.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    📱 Does it work on slow internet connections?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Yes! We've optimized our platform specifically for Indian internet conditions. It works well on 3G/4G connections and is mobile-first designed for smartphone users across India.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    🎓 Can I use this for JEE/NEET/UPSC preparation?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Definitely! Thousands of Indian students use UntrainedModel for exam preparation. Get step-by-step solutions, concept explanations, practice questions, and study plans for JEE, NEET, UPSC, and other competitive exams.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    💼 Can I use AI-generated content for my business?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Yes! You own the content generated through our platform. Many Indian freelancers, content creators, and businesses use our AI tools to create blog posts, social media content, marketing copy, and more.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    🔒 Is my data safe and private?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Your privacy is our priority. We don't store your conversations permanently, don't use your data to train models, and comply with Indian data protection laws. What you create is yours alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="section-container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
                Support Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      Support Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                      <span className="text-gray-900 dark:text-white font-medium">9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                      <span className="text-gray-900 dark:text-white font-medium">10:00 AM - 4:00 PM IST</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                      <span className="text-gray-900 dark:text-white font-medium">Community Support Only</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      Our Location
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-white">UntrainedModel</strong><br />
                      Made with ❤️ in India<br />
                      Serving users across India and globally
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                      We're a distributed team working to make AI accessible to every Indian user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <div className="section-container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Still Have Questions?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                Don't hesitate to reach out. We're here to help you succeed with AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-6 py-3">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Support
                </Button>
                <Button variant="outline" className="text-sm sm:text-base px-6 py-3">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
