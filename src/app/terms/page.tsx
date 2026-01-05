import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service - UntrainedModel | Free AI Platform India 2025",
    description: "UntrainedModel Terms 2025: Simple, friendly terms for free AI access. No signup, no hidden fees. Use ChatGPT, Gemini, Claude for students, developers, businesses in India.",
    keywords: "terms of service 2025, free AI terms India, AI platform agreement, ChatGPT terms, Gemini usage policy, student AI terms, developer AI policy, business AI terms, Indian AI platform",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground">
                        Simple, Fair, and Friendly Terms for Everyone
                    </p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                    <p className="text-lg text-muted-foreground mb-8">
                        <strong>Last updated:</strong> January 15, 2025
                    </p>

                    <div className="bg-blue-500/10 p-6 rounded-lg mb-8">
                        <p className="text-lg leading-relaxed text-blue-200">
                            Welcome to UntrainedModel! These are the simplest, friendliest terms you'll ever read. We keep it simple because our platform is simple—no accounts, no data collection, just free AI tools for everyone.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        1. What UntrainedModel Is
                    </h2>

                    <p className="text-muted-foreground mb-4">
                        UntrainedModel is a free AI platform that gives you access to powerful AI models from OpenAI, Google, and Anthropic. You can use it for:
                    </p>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>✅ <strong>Text Generation:</strong> Write essays, blogs, social media posts, emails</li>
                        <li>✅ <strong>Code Generation:</strong> Get help with programming, debugging, learning to code</li>
                        <li>✅ <strong>AI Conversations:</strong> Ask questions, solve problems, get explanations</li>
                        <li>✅ <strong>Study Help:</strong> JEE, NEET, UPSC preparation, homework assistance</li>
                        <li>✅ <strong>Business Tools:</strong> Content creation, marketing, productivity</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        2. No Account Needed
                    </h2>

                    <div className="bg-green-500/10 p-5 rounded-lg">
                        <p className="text-green-200">
                            <strong>Good news!</strong> You don't need to create an account, sign up, or provide any personal information. Just visit our website and start using AI tools immediately. It's that simple!
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        3. How to Use Our Platform Responsibly
                    </h2>

                    <h3 className="text-xl font-semibold text-green-400 mt-6 mb-3">
                        ✅ Please DO use UntrainedModel for:
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li>• Learning and education (JEE, NEET, UPSC, school projects)</li>
                        <li>• Writing content (blogs, essays, social media, emails)</li>
                        <li>• Coding help (learning programming, debugging, building projects)</li>
                        <li>• Business tasks (marketing, content creation, productivity)</li>
                        <li>• Personal projects and creative work</li>
                        <li>• Getting answers to your questions</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-red-400 mt-6 mb-3">
                        ❌ Please DON'T use UntrainedModel for:
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li>• Anything illegal or harmful</li>
                        <li>• Harassment, hate speech, or bullying</li>
                        <li>• Creating spam or scams</li>
                        <li>• Cheating on exams (use it to learn, not to cheat!)</li>
                        <li>• Spreading false information or fake news</li>
                        <li>• Violating others' copyrights or intellectual property</li>
                    </ul>

                    <p className="text-muted-foreground mt-4 italic">
                        <strong>Simple rule:</strong> Use AI to help you learn and create, not to harm others or break laws.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        4. Who Owns What?
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-blue-500/10 p-5 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">
                                Your Prompts (What You Type)
                            </h3>
                            <p className="text-muted-foreground">
                                You own your prompts. We don't store them, so there's nothing to worry about!
                            </p>
                        </div>

                        <div className="bg-purple-500/10 p-5 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">
                                AI Responses (What AI Generates)
                            </h3>
                            <p className="text-muted-foreground">
                                You can use AI-generated content however you want! But remember:
                            </p>
                            <ul className="mt-2 space-y-1 text-muted-foreground">
                                <li>• AI might give similar answers to different people</li>
                                <li>• Always verify important information</li>
                                <li>• If you're a student, cite AI assistance in your work</li>
                                <li>• Check for accuracy before using in professional work</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        5. Your Privacy (Super Important!)
                    </h2>

                    <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-r-lg">
                        <p className="text-muted-foreground mb-3">
                            <strong>We don't collect your data. Period.</strong>
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>✅ No account creation or signup</li>
                            <li>✅ No cookies or tracking</li>
                            <li>✅ No storing your conversations</li>
                            <li>✅ No collecting personal information</li>
                        </ul>
                        <p className="text-muted-foreground mt-3">
                            Read our <Link href="/privacy" className="text-blue-400 underline">Privacy Policy</Link> for full details.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        6. Service Availability
                    </h2>

                    <p className="text-muted-foreground mb-4">
                        We try our best to keep UntrainedModel running 24/7, but sometimes:
                    </p>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>• We might need to do maintenance or updates</li>
                        <li>• AI providers (OpenAI, Google, Anthropic) might have downtime</li>
                        <li>• We might add new features or improve existing ones</li>
                        <li>• We might set usage limits to keep the service free for everyone</li>
                    </ul>

                    <p className="text-muted-foreground mt-4">
                        We'll always try to give you a heads up if something changes!
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        7. Important Things to Know About AI
                    </h2>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                        <p className="text-muted-foreground mb-3">
                            <strong>AI is powerful but not perfect!</strong> Please understand:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>⚠️ <strong>AI can make mistakes:</strong> Always verify important information</li>
                            <li>⚠️ <strong>Not professional advice:</strong> Don't use AI for medical, legal, or financial decisions without consulting experts</li>
                            <li>⚠️ <strong>Knowledge cutoff:</strong> AI's knowledge has a cutoff date and might be outdated</li>
                            <li>⚠️ <strong>Use your judgment:</strong> You're responsible for how you use AI-generated content</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        8. Our Responsibility
                    </h2>

                    <p className="text-muted-foreground mb-4">
                        UntrainedModel is a free service, and we provide it "as is". This means:
                    </p>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>• We're not responsible if AI gives wrong information</li>
                        <li>• We're not liable for decisions you make based on AI responses</li>
                        <li>• We can't guarantee the service will always be available</li>
                        <li>• You use the platform at your own risk (but we try our best to make it great!)</li>
                    </ul>

                    <p className="text-muted-foreground mt-4 italic">
                        Since our service is free, we can't be held financially liable. But we genuinely care about providing a good experience!
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        9. If Something Goes Wrong
                    </h2>

                    <p className="text-muted-foreground mb-4">
                        We hope you never have issues, but if you do:
                    </p>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>Talk to us first:</strong> Contact us and we'll try to help</li>
                        <li>• <strong>Indian laws apply:</strong> These terms follow Indian laws (Information Technology Act, 2000)</li>
                        <li>• <strong>Indian jurisdiction:</strong> Any legal matters will be handled in Indian courts</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        10. Changes to These Terms
                    </h2>

                    <p className="text-muted-foreground">
                        We might update these terms occasionally. If we make big changes, we'll let you know on our website. By continuing to use UntrainedModel, you agree to the updated terms.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Documentation related to these Terms or other legal policies can be requested at:
                        </p>
                        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                            <p className="font-semibold text-white mb-2">UntrainedModel AI Labs</p>
                            <p className="text-muted-foreground">No. 12, 4th Floor, Sector 6</p>
                            <p className="text-muted-foreground">HSR Layout, Bengaluru</p>
                            <p className="text-muted-foreground mb-4">Karnataka 560102, India</p>
                            <p className="text-primary">Email: legal@untrainedmodel.xyz</p>
                        </div>
                    </section>

                    <div className="bg-blue-500/10 rounded-xl p-6 mt-8">
                        <h3 className="text-xl font-bold mb-3">
                            🇮🇳 Made for India, Made Simple
                        </h3>
                        <p className="text-muted-foreground mb-4">
                            These terms are designed to be simple and fair for Indian users. We comply with Indian laws (Information Technology Act, 2000) and respect your rights as an Indian user.
                        </p>
                        <p className="text-muted-foreground">
                            <strong>For Students:</strong> Use AI to learn and grow! Just remember to cite AI assistance in your academic work and follow your school/college policies.
                        </p>
                    </div>

                    <div className="bg-purple-500/10 rounded-xl p-6 mt-6">
                        <h3 className="text-lg font-semibold text-purple-200 mb-3">
                            💡 Bottom Line
                        </h3>
                        <p className="text-purple-200">
                            Use UntrainedModel responsibly, don't do anything illegal or harmful, and remember that AI is a tool to help you—not replace your thinking. We're here to make AI accessible to everyone in India. Enjoy! 🚀
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
