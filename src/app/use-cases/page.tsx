import { Metadata } from "next";
import UseCasesClient from "./UseCasesClient";

export const metadata: Metadata = {
    title: "AI Use Cases | UntrainedModel",
    description: "Discover how to use AI for coding, trading, content creation, and learning. Practical examples and templates.",
    openGraph: {
        title: "AI Use Cases - UntrainedModel",
        description: "Explore real-world applications of AI for developers, traders, and creators.",
        images: ["/og-image.png"],
    },
};

export default function UseCasesPage() {
    return (
        <main>
            <UseCasesClient />

            {/* Static Deep Dive Content for AdSense/SEO */}
            <section className="container max-w-5xl mx-auto px-4 pb-24">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div className="mb-16">
                        <h2>In-Depth Guides: How to Maximize AI Potential</h2>
                        <p>
                            Artificial Intelligence is not just a novelty; it is a productivity multiplier. However, the gap between having access to AI and actually extracting value from it lies in one skill: <strong>Prompt Engineering</strong>.
                            Below, we break down detailed workflows for our four primary user bases to help you move beyond basic queries and start building complex solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Developers Guide */}
                        <div className="space-y-6">
                            <h3>👨‍💻 For Developers: Beyond Code Generation</h3>
                            <p>
                                Most developers use AI to "write a function that does X." While useful, this barely scratches the surface. The real power of models like <strong>GPT-5o</strong> and <strong>Claude 3.5 Sonnet</strong> is in <em>architectural reasoning</em> and <em>debugging</em>.
                            </p>
                            <h4>Workflow 1: The "Senior Engineer" Review</h4>
                            <p>
                                Instead of asking AI to write code from scratch, paste your existing implementation and ask for a "Code Review."
                                <br />
                                <strong>Prompt:</strong> <em>"Review this React component for security vulnerabilities, unnecessary re-renders, and accessibility compliance. Rank issues by severity."</em>
                            </p>
                            <h4>Workflow 2: Test Case Generation</h4>
                            <p>
                                Writing unit tests is tedious. Automate it.
                                <br />
                                <strong>Prompt:</strong> <em>"Generate a Jest test suite for this utility function. Include edge cases for null inputs, large arrays, and invalid data types."</em>
                            </p>
                        </div>

                        {/* Traders Guide */}
                        <div className="space-y-6">
                            <h3>📈 For Traders: Data-Driven Decisions</h3>
                            <p>
                                In financial markets, speed is everything. AI models can process unstructured data (news, earnings calls, sentiment) faster than any human.
                            </p>
                            <h4>Workflow 1: Sentiment Analysis</h4>
                            <p>
                                Paste a transcript of an earnings call into <strong>Gemini Pro</strong> (due to its large context window).
                                <br />
                                <strong>Prompt:</strong> <em>"Analyze the CEO's tone during the Q&A session. Flag any hesitation when discussing future guidance or supply chain issues. Output a sentiment score from 1-10."</em>
                            </p>
                            <h4>Workflow 2: Pine Script Generation</h4>
                            <p>
                                Visualize your strategies on TradingView without learning Pine Script.
                                <br />
                                <strong>Prompt:</strong> <em>"Write a Pine Script v5 strategy that buys when the 200 EMA is trending up and the RSI crosses below 30. Add stop-loss at 2%."</em>
                            </p>
                        </div>

                        {/* Creators Guide */}
                        <div className="space-y-6">
                            <h3>✍️ For Creators: Killing the Blank Page</h3>
                            <p>
                                Content creation is often bottlenecked by "Zero to One"—getting the first draft down. AI effectively removes this friction.
                            </p>
                            <h4>Workflow 1: The "Viral Hook" Generator</h4>
                            <p>
                                You have a topic, but you need an angle.
                                <br />
                                <strong>Prompt:</strong> <em>"I am writing a LinkedIn post about 'Burnout in Tech.' Generate 10 opening hooks. 3 should be controversial, 3 should be data-driven, and 4 should be personal storytelling style."</em>
                            </p>
                            <h4>Workflow 2: Repurposing Engines</h4>
                            <p>
                                Turn one YouTube video script into a week's worth of content.
                                <br />
                                <strong>Prompt:</strong> <em>"Turn this video script into: 1. A Twitter thread (10 tweets) 2. An SEO blog post outline 3. An Instagram carousel caption."</em>
                            </p>
                        </div>

                        {/* Students Guide */}
                        <div className="space-y-6">
                            <h3>🎓 For Students: Active Recall & Understanding</h3>
                            <p>
                                Don't use AI to write your essays—that cheats you out of learning. Use it to <em>deepen</em> your understanding.
                            </p>
                            <h4>Workflow 1: Socratic Tutor</h4>
                            <p>
                                Prepare for oral exams or deepen your grasp of a subject.
                                <br />
                                <strong>Prompt:</strong> <em>"I am studying Organic Chemistry. Quiz me on 'Nucleophilic Substitution.' Do not give me the answer right away; instead, give me a hint if I get it wrong."</em>
                            </p>
                            <h4>Workflow 2: The "ELI5" (Explain Like I'm 5)</h4>
                            <p>
                                Complex academic jargon can be a barrier.
                                <br />
                                <strong>Prompt:</strong> <em>"Explain the theory of General Relativity using an analogy of a trampoline and bowling balls. Keep it under 200 words."</em>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
