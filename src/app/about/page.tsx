import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About UntrainedModel | Free AI Platform India 2025 | Our Mission to Democratize AI",
    description: "Learn about UntrainedModel's mission to make AI accessible to every Indian. Free GPT-5, Gemini Pro, Claude 4.5 for students, developers, businesses. No signup, no payment. Built in India, for India. Empowering 1M+ users with AI tools.",
    keywords: "about UntrainedModel, free AI platform India, AI for India, democratize AI, AI mission India, free AI tools 2025, AI accessibility India, Indian AI platform, AI for students India, AI for developers India, make AI accessible, AI innovation India",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white">
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
                                UntrainedModel was founded in early 2023 by a group of software engineers and designers who were captivated by the potential of large language models but frustrated by their inaccessibility. As developers and creators ourselves, we found ourselves constantly jumping between different platforms, dealing with complex APIs, and struggling with inconsistent interfaces. We saw a clear need for a unified, user-friendly platform that would make the power of AI accessible to everyone.
                            </p>

                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                We realized that while AI technology was advancing at breakneck speed, the user experience was lagging behind. Powerful models like GPT-5, Claude 4.5, and Gemini Pro were available, but using them effectively required technical knowledge that most people didn't have. Our mission became to bridge this gap.
                            </p>

                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                So we decided to build the platform we wished existed: a unified interface that brings together the best AI models from different providers, wrapped in an intuitive experience that anyone can use. Whether you're a writer looking for creative inspiration, a developer debugging code, or a business owner analyzing data, UntrainedModel makes AI accessible and useful. We are entirely self-funded and driven by our passion for this technology and our belief in its potential to empower people.
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
                            Built by AI Enthusiasts for the Indian Community
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                            We're a passionate team of developers, designers, and AI researchers based in India who believe in the
                            transformative power of artificial intelligence. Our mission is to democratize AI access for Indian students,
                            professionals, entrepreneurs, and businesses. We understand the unique challenges and opportunities in the Indian
                            market, from language diversity to cost sensitivity, and we've built UntrainedModel to address these specific needs.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                                <div className="text-4xl mb-4">🇮🇳</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    Made in India, For India
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Understanding Indian users' needs, from regional language support to affordable pricing models.
                                    We're building AI tools that work for Indian internet speeds, devices, and use cases.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                                <div className="text-4xl mb-4">🎓</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    Empowering Students & Professionals
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    From engineering students learning to code to content creators building their brands,
                                    we provide free AI tools that level the playing field and unlock opportunities.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                            <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                                "Our goal isn't to replace human creativity or intelligence—it's to amplify it.
                                AI should make you more creative, more productive, and more capable of bringing your ideas to life.
                                We believe every Indian student, entrepreneur, and professional deserves access to world-class AI tools
                                without breaking the bank."
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                — The UntrainedModel Team, India
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why India Needs UntrainedModel */}
            <section className="py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                            Why India Needs Accessible AI
                        </h2>

                        <div className="space-y-8">
                            <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    💼 Bridging the Digital Divide
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    India has over 700 million internet users, but access to premium AI tools remains limited due to cost barriers.
                                    Many international AI platforms charge in dollars, making them unaffordable for students and small businesses.
                                    UntrainedModel provides free access to the same powerful AI models used by Fortune 500 companies, ensuring that
                                    talent and ambition—not budget—determine success.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Whether you're a student in a tier-2 city preparing for competitive exams, a freelancer building your portfolio,
                                    or a startup founder creating your first product, you deserve the same AI capabilities as anyone else in the world.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    🚀 Accelerating India's Tech Revolution
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    India is home to the world's third-largest startup ecosystem and produces millions of engineering graduates annually.
                                    However, many talented individuals lack access to cutting-edge tools that could accelerate their learning and innovation.
                                    UntrainedModel is helping bridge this gap by providing:
                                </p>
                                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span><strong>Code assistance</strong> for developers learning new programming languages and frameworks</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span><strong>Content creation tools</strong> for digital marketers and social media managers</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span><strong>Research assistance</strong> for students and academics working on projects and papers</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span><strong>Business planning support</strong> for entrepreneurs developing their ideas</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    🌏 Understanding Indian Context
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    We're not just another AI platform—we understand the Indian context. Our platform is optimized for:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6">
                                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Technical Optimization</h4>
                                        <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                                            <li>• Works on slower internet connections</li>
                                            <li>• Mobile-first design for smartphone users</li>
                                            <li>• Lightweight interface for older devices</li>
                                            <li>• Efficient data usage</li>
                                        </ul>
                                    </div>
                                    <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6">
                                        <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Cultural Understanding</h4>
                                        <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                                            <li>• Support for Indian English and expressions</li>
                                            <li>• Understanding of local business contexts</li>
                                            <li>• Relevant examples and use cases</li>
                                            <li>• Respect for cultural sensitivities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                            For the Indian Community, by the Indian Community
                        </h2>

                        <div className="space-y-8">
                            <div className="text-center mb-12">
                                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                                    UntrainedModel is more than just a platform; it's a movement to democratize AI access in India.
                                    We're an independent team of developers and designers committed to creating a space where every Indian—
                                    from students in small towns to entrepreneurs in metros—can explore and create with AI. Our goal is to
                                    foster a community of learners, builders, and innovators who are as excited about the future of
                                    artificial intelligence as we are.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-black rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                                    <div className="text-3xl mb-4">🎓</div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                        Students & Learners
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        From IIT aspirants to college students, use AI to learn faster, understand complex concepts,
                                        and complete assignments more efficiently. Free tools for every student in India.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-black rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                                    <div className="text-3xl mb-4">💼</div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                        Professionals & Freelancers
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Content writers, developers, designers, and marketers—boost your productivity and deliver
                                        better work to clients. Compete globally with world-class AI tools.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-black rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:scale-105 transition-all duration-300">
                                    <div className="text-3xl mb-4">🚀</div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                        Startups & Businesses
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Build products faster, create marketing content, analyze data, and automate tasks.
                                        Access enterprise-grade AI without enterprise-grade costs.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-orange-50 to-green-50 dark:from-orange-950/30 dark:to-green-950/30 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                                    🇮🇳 Our Commitment to India
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Always Free Core Features</h4>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            We promise to always maintain a generous free tier that provides real value.
                                            AI shouldn't be a luxury—it should be accessible to every Indian with an internet connection.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Built for Indian Users</h4>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            From understanding Indian English to optimizing for mobile-first usage, we're building
                                            features specifically for the Indian market. Your feedback shapes our roadmap.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real User Stories */}
            <section className="section-even py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                            Real Stories from Indian Users
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-4xl">🎓</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            Engineering Student, Pune
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            "As a third-year computer science student, UntrainedModel has been a game-changer for my projects.
                                            I used it to debug my code, understand complex algorithms, and even generate documentation.
                                            What would have taken me days now takes hours. The best part? It's completely free, which is perfect
                                            for students like me who can't afford expensive AI subscriptions."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-4xl">✍️</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            Freelance Content Writer, Bangalore
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            "I write content for multiple clients, and UntrainedModel helps me brainstorm ideas, improve my drafts,
                                            and meet tight deadlines. It's like having a writing partner who's available 24/7. I've increased my
                                            output by 40% while maintaining quality. For freelancers working on tight budgets, this tool is invaluable."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-4xl">🚀</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            Startup Founder, Delhi
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            "We're a bootstrapped startup, and hiring a full content team wasn't feasible. UntrainedModel helped us
                                            create marketing copy, product descriptions, and even investor pitch materials. It's saved us lakhs in
                                            content creation costs and helped us move faster than our funded competitors. This is exactly what Indian
                                            startups need—powerful tools without the Silicon Valley price tag."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <Link href="/playground">
                                    Try AI Playground
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/blog">
                                    Read Our Blog
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
