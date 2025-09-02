import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout 
      title="Terms of Service - UntrainedModel"
      description="Read UntrainedModel's Terms of Service. Simple, fair terms for using our AI platform. No hidden clauses, clear guidelines for responsible AI use."
      keywords="terms of service, user agreement, AI platform terms, usage guidelines, legal terms"
    >
      <div className="min-h-screen bg-white dark:bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="section-container text-center">
            <div className="section-flag mx-auto mb-8">
              📋 Fair & Simple
            </div>
            
            <h1 className="apple-title text-gray-900 dark:text-white mb-6">
              Terms of Service
            </h1>
            
            <p className="apple-section-subtitle text-gray-600 dark:text-gray-400 mb-8">
              Simple, fair terms for using UntrainedModel. No legal jargon, 
              just clear guidelines for responsible AI use.
            </p>
            
            <div className="max-w-md mx-auto p-4 bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-200 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                ✅ Free to use<br/>
                ✅ No account required<br/>
                ✅ Responsible AI guidelines
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-even py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto prose prose-lg prose-gray dark:prose-invert">
              
              <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  📅 Last Updated: September 1, 2025
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  These Terms of Service ("Terms") govern your use of UntrainedModel ("Service") 
                  operated by UntrainedModel ("us", "we", or "our").
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    🤝 Agreement to Terms
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="text-lg leading-relaxed">
                      By accessing and using UntrainedModel, you agree to be bound by these Terms. 
                      If you disagree with any part of these terms, you may not access the Service.
                    </p>
                    <div className="bg-yellow-50 dark:bg-yellow-950/30 rounded-xl p-6">
                      <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Important Note</h3>
                      <p className="text-yellow-800 dark:text-yellow-200">
                        Since our service doesn't require account creation, your continued use of the platform 
                        constitutes acceptance of these terms and any updates we may make.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    🎯 Service Description
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      UntrainedModel provides access to artificial intelligence models for text generation, 
                      code assistance, creative writing, and other AI-powered tasks through a web-based interface.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-6">
                        <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ What We Provide</h3>
                        <ul className="space-y-2 text-green-800 dark:text-green-200">
                          <li>• Access to multiple AI models</li>
                          <li>• Web-based interface</li>
                          <li>• Real-time AI responses</li>
                          <li>• Free basic usage</li>
                          <li>• No registration required</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">ℹ️ Service Limitations</h3>
                        <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                          <li>• Usage rate limits apply</li>
                          <li>• Service availability not guaranteed</li>
                          <li>• AI responses may be inaccurate</li>
                          <li>• No conversation history</li>
                          <li>• Subject to third-party AI policies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    ✅ Acceptable Use
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      You may use UntrainedModel for any lawful purpose. We encourage creative, productive, 
                      and educational use of AI technology.
                    </p>
                    <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-6">
                      <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Encouraged Uses</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-green-800 dark:text-green-200">
                          <li>• Creative writing and storytelling</li>
                          <li>• Code development and debugging</li>
                          <li>• Learning and education</li>
                          <li>• Business content creation</li>
                          <li>• Research and analysis</li>
                        </ul>
                        <ul className="space-y-2 text-green-800 dark:text-green-200">
                          <li>• Language translation</li>
                          <li>• Brainstorming and ideation</li>
                          <li>• Technical documentation</li>
                          <li>• Personal productivity</li>
                          <li>• Artistic projects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    🚫 Prohibited Activities
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      To maintain a safe and legal service for everyone, the following activities are prohibited:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-6">
                        <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">🔒 Security & Legal</h3>
                        <ul className="space-y-2 text-red-800 dark:text-red-200">
                          <li>• Illegal activities or content</li>
                          <li>• Hacking or system exploitation</li>
                          <li>• Malware or virus creation</li>
                          <li>• Fraud or deceptive practices</li>
                          <li>• Violating others' privacy</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-950/30 rounded-xl p-6">
                        <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">⚠️ Harmful Content</h3>
                        <ul className="space-y-2 text-orange-800 dark:text-orange-200">
                          <li>• Harassment or hate speech</li>
                          <li>• Violence or threats</li>
                          <li>• Adult or explicit content</li>
                          <li>• Misinformation campaigns</li>
                          <li>• Spam or abuse</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Enforcement</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        We reserve the right to terminate access for users who violate these guidelines. 
                        Since we don't store user data, enforcement typically involves IP-based rate limiting or blocking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    🤖 AI Content and Accuracy
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      <strong>Important:</strong> AI-generated content should be used as a starting point, not as final truth. 
                      Always verify important information and use your judgment.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-yellow-50 dark:bg-yellow-950/30 rounded-xl p-4">
                        <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Accuracy</h3>
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                          AI responses may contain errors, outdated information, or biases. Always fact-check important details.
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-4">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📝 Originality</h3>
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          AI may generate content similar to existing works. Check for originality if needed for your use case.
                        </p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-4">
                        <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">⚖️ Responsibility</h3>
                        <p className="text-sm text-purple-800 dark:text-purple-200">
                          You're responsible for how you use AI-generated content. Review and edit as appropriate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    🔧 Service Availability
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      We strive to provide reliable service, but cannot guarantee 100% uptime or availability.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6">
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Service Expectations</h3>
                      <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                        <li><strong>Maintenance:</strong> We may perform scheduled maintenance with minimal notice</li>
                        <li><strong>Rate Limits:</strong> Usage limits prevent abuse and ensure fair access</li>
                        <li><strong>Third-Party Dependencies:</strong> Service depends on AI provider availability</li>
                        <li><strong>Updates:</strong> We may update features and functionality regularly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    💰 Pricing and Payment
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      UntrainedModel currently offers free access to AI models with usage limitations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-6">
                        <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Current Offering</h3>
                        <ul className="space-y-2 text-green-800 dark:text-green-200">
                          <li>• Free access to all AI models</li>
                          <li>• Generous daily usage limits</li>
                          <li>• No subscription required</li>
                          <li>• No hidden fees</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🔮 Future Plans</h3>
                        <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                          <li>• Premium tiers may be introduced</li>
                          <li>• Higher usage limits for paid users</li>
                          <li>• Advanced features and models</li>
                          <li>• Always maintain free tier</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      Any future pricing changes will be announced with reasonable notice and will not affect current free users retroactively.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    📜 Intellectual Property
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6">
                        <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">🏢 Our Rights</h3>
                        <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                          <li>• UntrainedModel platform and interface</li>
                          <li>• Our branding and trademarks</li>
                          <li>• Service infrastructure and code</li>
                          <li>• Documentation and guides</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-6">
                        <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">👤 Your Rights</h3>
                        <ul className="space-y-2 text-green-800 dark:text-green-200">
                          <li>• Your input prompts and questions</li>
                          <li>• AI-generated content you create</li>
                          <li>• Your creative works using our platform</li>
                          <li>• Commercial use of your AI content</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Important Note on AI Content</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        While you own the AI-generated content, remember that AI models are trained on existing works. 
                        For commercial use, consider checking for potential similarities to existing copyrighted material.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    ⚖️ Disclaimers and Limitations
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <div className="bg-yellow-50 dark:bg-yellow-950/30 rounded-xl p-6">
                      <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Service Disclaimer</h3>
                      <p className="text-yellow-800 dark:text-yellow-200">
                        UntrainedModel is provided "as is" without warranties of any kind. We don't guarantee 
                        the accuracy, completeness, or reliability of AI-generated content.
                      </p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-6">
                      <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">Limitation of Liability</h3>
                      <p className="text-red-800 dark:text-red-200">
                        We are not liable for any damages arising from your use of the service, including but not limited to 
                        inaccurate AI responses, service interruptions, or any consequences of using AI-generated content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    📧 Contact Information
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      Questions about these Terms of Service? We're here to help clarify anything you need to know.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Get in Touch</h3>
                      <p className="mb-3">
                        <strong>Email:</strong> <a href="mailto:support@untrainedmodel.xyz" className="text-blue-600 dark:text-blue-400 hover:underline">support@untrainedmodel.xyz</a>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We typically respond to inquiries within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    🔄 Changes to Terms
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      We may update these Terms of Service from time to time to reflect changes in our service, 
                      legal requirements, or business practices. Changes will be posted on this page with an updated date.
                    </p>
                    <div className="bg-white dark:bg-black rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">How We Handle Changes</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• <strong>Minor Changes:</strong> Updated immediately with new date</li>
                        <li>• <strong>Major Changes:</strong> Reasonable notice provided when possible</li>
                        <li>• <strong>Continued Use:</strong> Constitutes acceptance of updated terms</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Since we don't collect contact information, we recommend checking this page periodically 
                      if you're a regular user of our service.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Terms;