import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - UntrainedModel | No Data Collection, 100% Anonymous AI Platform India",
    description: "UntrainedModel Privacy Policy 2025: We don't collect data, no cookies, no tracking. Free anonymous AI platform for Indian students & professionals. ChatGPT, Gemini, Claude access without signup.",
    keywords: "privacy policy 2025, no data collection AI, anonymous AI platform India, free AI without signup, ChatGPT privacy, Gemini privacy, no tracking AI tool, student privacy AI, GDPR compliant AI, data protection India",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground">
                        Your Privacy, Our Priority - 100% Anonymous AI Platform
                    </p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                    <p className="text-lg text-muted-foreground mb-8">
                        <strong>Last updated:</strong> January 15, 2025
                    </p>

                    <div className="bg-green-500/10 border-l-4 border-green-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg shadow-sm">
                        <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-2 flex items-center gap-2">
                            <span className="text-2xl">🎉</span> Good News!
                        </h3>
                        <p className="text-green-200 text-base sm:text-lg leading-relaxed">
                            We don't collect your personal data. No accounts, no cookies, no tracking. Your privacy is 100% protected!
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                        At UntrainedModel, your privacy isn't just important—it's guaranteed. This Privacy Policy explains our simple, transparent approach to your data and privacy.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6">
                        What We DON'T Collect
                    </h2>

                    <div className="bg-blue-500/10 p-4 sm:p-6 rounded-xl mb-6 shadow-sm">
                        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
                            <li>✅ <strong>No Account Creation:</strong> You can use our platform completely anonymously—no signup, no login, no email required</li>
                            <li>✅ <strong>No Cookies:</strong> We don't use cookies or any tracking technologies on your device</li>
                            <li>✅ <strong>No Personal Data:</strong> We don't collect your name, email, phone number, or any personal information</li>
                            <li>✅ <strong>No Device Tracking:</strong> We don't track your IP address, browser type, device info, or location</li>
                            <li>✅ <strong>No Usage Analytics:</strong> We don't monitor how you use our platform or track your behavior</li>
                            <li>✅ <strong>No Data Storage:</strong> Your conversations are not saved or stored on our servers</li>
                        </ul>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6">
                        How Our Platform Works
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                        UntrainedModel is a simple, privacy-first AI platform:
                    </p>

                    <ol className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground list-decimal list-inside">
                        <li><strong>You visit our website</strong> - No signup needed, just start using it</li>
                        <li><strong>You type your prompt</strong> - Your message is processed in real-time</li>
                        <li><strong>AI generates response</strong> - We send your prompt to AI providers (OpenAI, Google, Anthropic) to get the answer</li>
                        <li><strong>You see the result</strong> - That's it! Nothing is saved or tracked</li>
                    </ol>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        Third-Party AI Providers
                    </h2>

                    <p className="text-muted-foreground mb-4">
                        To generate AI responses, we send your prompts to third-party AI services:
                    </p>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>OpenAI (ChatGPT):</strong> For text and code generation</li>
                        <li>• <strong>Google (Gemini):</strong> For advanced AI conversations</li>
                        <li>• <strong>Anthropic (Claude):</strong> For intelligent responses</li>
                    </ul>

                    <p className="text-muted-foreground mt-4">
                        <strong>Important:</strong> These AI providers may have their own privacy policies. Your prompts are sent directly to them for processing. We recommend not sharing sensitive personal information in your prompts.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        Your API Keys (Optional)
                    </h2>

                    <p className="text-muted-foreground mb-4">
                        If you choose to use your own API keys:
                    </p>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>• API keys are stored <strong>only in your browser's local storage</strong></li>
                        <li>• We never send your API keys to our servers</li>
                        <li>• Keys stay on your device and are used directly to call AI providers</li>
                        <li>• You can delete them anytime by clearing your browser data</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        Data Security
                    </h2>

                    <p className="text-muted-foreground mb-4">
                        Even though we don't collect data, we still ensure security:
                    </p>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>HTTPS Encryption:</strong> All communication is encrypted using SSL/TLS</li>
                        <li>• <strong>No Server Storage:</strong> Your prompts and responses are not stored on our servers</li>
                        <li>• <strong>Direct API Calls:</strong> Your requests go directly to AI providers securely</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        Children's Privacy
                    </h2>

                    <p className="text-muted-foreground">
                        Our platform is safe for students of all ages. Since we don't collect any personal information, there's no risk to children's privacy. However, we recommend parental guidance for children under 13 when using AI tools.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        Your Rights
                    </h2>

                    <p className="text-muted-foreground mb-4">
                        Since we don't collect your data, you automatically have complete control:
                    </p>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>✅ <strong>Right to Privacy:</strong> Guaranteed—we don't collect anything</li>
                        <li>✅ <strong>Right to Anonymity:</strong> Use our platform without revealing your identity</li>
                        <li>✅ <strong>Right to Delete:</strong> Nothing to delete—we don't store your data</li>
                        <li>✅ <strong>Right to Access:</strong> No data collected means no data to access</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        Changes to This Policy
                    </h2>

                    <p className="text-muted-foreground">
                        If we ever change our privacy practices, we'll update this page and change the "Last updated" date. We'll always maintain our commitment to your privacy.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                            <p className="font-semibold text-white mb-2">UntrainedModel AI Labs</p>
                            <p className="text-muted-foreground">No. 12, 4th Floor, Sector 6</p>
                            <p className="text-muted-foreground">HSR Layout, Bengaluru</p>
                            <p className="text-muted-foreground mb-4">Karnataka 560102, India</p>
                            <p className="text-primary">Email: privacy@untrainedmodel.xyz</p>
                        </div>
                    </section>

                    <div className="bg-blue-500/10 rounded-xl p-4 sm:p-6 mt-8 sm:mt-10 shadow-md border border-blue-500/20">
                        <h3 className="text-base sm:text-lg font-semibold text-blue-200 mb-2 sm:mb-3 flex items-center gap-2">
                            <span className="text-xl sm:text-2xl">🇮🇳</span> For Indian Users
                        </h3>
                        <p className="text-sm sm:text-base text-blue-300 leading-relaxed">
                            We comply with Indian data protection laws including the Digital Personal Data Protection Act, 2023.
                            Your data is processed in accordance with Indian privacy regulations and your rights as an Indian citizen are fully protected.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                            📊 Quick Summary
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
                            <div className="flex items-start gap-2">
                                <span className="text-green-500 text-lg">✓</span>
                                <span className="text-muted-foreground">No signup required</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-green-500 text-lg">✓</span>
                                <span className="text-muted-foreground">Zero data collection</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-green-500 text-lg">✓</span>
                                <span className="text-muted-foreground">No cookies or tracking</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-green-500 text-lg">✓</span>
                                <span className="text-muted-foreground">100% anonymous usage</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
