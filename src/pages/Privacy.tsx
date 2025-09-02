import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout 
      title="Privacy Policy - UntrainedModel"
      description="Learn how UntrainedModel protects your privacy. We don't collect personal data, store conversations, or track users. Your privacy is our priority."
      keywords="privacy policy, data protection, user privacy, no tracking, secure AI platform"
    >
      <div className="min-h-screen bg-white dark:bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="section-container text-center">
            <div className="section-flag mx-auto mb-8">
              🔒 Privacy First
            </div>
            
            <h1 className="apple-title text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            
            <p className="apple-section-subtitle text-gray-600 dark:text-gray-400 mb-8">
              Your privacy matters. We've built UntrainedModel with privacy by design - 
              no data collection, no tracking, no compromises.
            </p>
            
            <div className="max-w-md mx-auto p-4 bg-green-50 dark:bg-green-950/30 rounded-2xl border border-green-200 dark:border-green-800">
              <p className="text-green-800 dark:text-green-200 font-medium">
                ✅ No personal data collected<br/>
                ✅ No conversation storage<br/>
                ✅ No user tracking
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
                  This Privacy Policy explains how UntrainedModel ("we," "our," or "us") handles information 
                  when you use our AI platform at untrainedmodel.xyz.
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    🎯 Our Privacy Philosophy
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="text-lg leading-relaxed">
                      <strong>We believe privacy is a fundamental right.</strong> UntrainedModel is designed with 
                      privacy-first principles, meaning we've built our platform to minimize data collection 
                      and maximize your control over your information.
                    </p>
                    <p className="leading-relaxed">
                      Unlike many platforms, we don't require accounts, don't store your conversations, 
                      and don't track your behavior. Your interactions with AI models remain private and temporary.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    📊 Information We Don't Collect
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">❌ Personal Information</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• No names or email addresses</li>
                        <li>• No phone numbers or addresses</li>
                        <li>• No demographic information</li>
                        <li>• No account creation required</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">❌ Usage Data</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• No conversation history</li>
                        <li>• No behavioral tracking</li>
                        <li>• No usage analytics</li>
                        <li>• No preference profiling</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    🔧 Technical Information We Process
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      To provide our service, we process minimal technical information that is automatically 
                      deleted after each session:
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Temporary Processing Only:</h3>
                      <ul className="space-y-2">
                        <li><strong>AI Prompts:</strong> Your messages to AI models (processed and immediately deleted)</li>
                        <li><strong>IP Address:</strong> For rate limiting and security (not stored or logged)</li>
                        <li><strong>Browser Type:</strong> For compatibility (not tracked across sessions)</li>
                        <li><strong>Session Data:</strong> Temporary tokens for AI API calls (auto-expire)</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      All this information is processed in memory only and is never written to databases or log files.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    🤖 Third-Party AI Services
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      We use third-party AI providers (OpenAI, Anthropic, Google) to process your requests. 
                      Here's how we protect your privacy:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✅ What We Do</h3>
                        <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                          <li>• Send only your prompt text</li>
                          <li>• Use anonymous API calls</li>
                          <li>• Request immediate deletion</li>
                          <li>• No user identification sent</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-6">
                        <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ What We Don't Do</h3>
                        <ul className="space-y-2 text-red-800 dark:text-red-200">
                          <li>• Share your identity</li>
                          <li>• Allow conversation storage</li>
                          <li>• Enable model training on your data</li>
                          <li>• Create user profiles</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    🍪 Cookies and Local Storage
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      We use minimal local storage for essential functionality only:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-6">
                        <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Essential Storage</h3>
                        <ul className="space-y-2 text-green-800 dark:text-green-200">
                          <li><strong>Theme Preference:</strong> Light/dark mode setting</li>
                          <li><strong>Model Selection:</strong> Your preferred AI model</li>
                          <li><strong>UI Settings:</strong> Interface preferences</li>
                        </ul>
                        <p className="text-sm mt-3 text-green-700 dark:text-green-300">
                          This data stays on your device and is never transmitted to our servers.
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">No Tracking Cookies</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          We don't use analytics cookies, advertising cookies, or any form of cross-site tracking. 
                          No third-party cookies are set by our platform.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    🔐 Data Security
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      Even though we don't store your data, we implement strong security measures for data in transit:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">🔒</div>
                        <h3 className="font-semibold text-purple-900 dark:text-purple-100">HTTPS Encryption</h3>
                        <p className="text-sm text-purple-800 dark:text-purple-200">All data encrypted in transit</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">⚡</div>
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100">Memory Processing</h3>
                        <p className="text-sm text-blue-800 dark:text-blue-200">No disk storage of user data</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">🛡️</div>
                        <h3 className="font-semibold text-green-900 dark:text-green-100">API Security</h3>
                        <p className="text-sm text-green-800 dark:text-green-200">Secure third-party connections</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    🌍 International Users
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      UntrainedModel is accessible globally. Since we don't collect personal data, 
                      most international privacy regulations don't apply to our service. However, we respect 
                      all privacy rights:
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6">
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Global Privacy Compliance</h3>
                      <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                        <li><strong>GDPR (EU):</strong> No personal data processing = no GDPR obligations</li>
                        <li><strong>CCPA (California):</strong> No personal information collection or sale</li>
                        <li><strong>Other Jurisdictions:</strong> Privacy-first design meets global standards</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    📧 Contact and Questions
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      Have questions about our privacy practices? We're happy to help clarify how we protect your privacy.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Get in Touch</h3>
                      <p className="mb-3">
                        <strong>Email:</strong> <a href="mailto:support@untrainedmodel.xyz" className="text-blue-600 dark:text-blue-400 hover:underline">support@untrainedmodel.xyz</a>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We typically respond to privacy inquiries within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    🔄 Policy Updates
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">
                      We may update this Privacy Policy occasionally to reflect changes in our practices or legal requirements. 
                      Any changes will be posted on this page with an updated "Last Updated" date.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Since we don't collect contact information, we can't notify users directly of changes. 
                      We recommend checking this page periodically if you have concerns about privacy practices.
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

export default Privacy;