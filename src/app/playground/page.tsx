import { Metadata } from "next";
import { Terminal, Code2, BookOpen, Share2, Sparkles, MessageSquare, ArrowRight } from "lucide-react";
import PlaygroundClient from "./PlaygroundClient";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Free AI Playground | UntrainedModel",
    description: "Experiment with GPT-5, Claude 4.5 Sonnet, and Gemini 3 Pro models for free. No signup required. The ultimate AI sandbox.",
    openGraph: {
        title: "Free AI Playground - UntrainedModel",
        description: "Access top-tier AI models for free. Generate code, write content, and experiment without limits.",
        images: ["/og-image.png"],
    },
};

export default function PlaygroundPage() {
    return (
        <div className="min-h-screen bg-background pt-16">
            <PlaygroundClient />

            {/* SEO Content Section - AdSense Remediation: High Quality, Deep Content */}
            <section className="container max-w-5xl mx-auto px-4 py-20">

                <div className="mb-20">
                    <Badge variant="outline" className="mb-4">Comprehensive Guide</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">The Ultimate Guide to Using AI Models for Free in 2025</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                        <p>
                            Welcome to <strong>UntrainedModel's AI Playground</strong>, the premier destination for accessing state-of-the-art Large Language Models (LLMs) completely free of charge.
                            In an era where artificial intelligence is reshaping industries, access to these powerful tools is often gated behind expensive monthly subscriptions.
                            We believe that the transformative power of AI should be a public utility, accessible to every student in a dorm room, every developer in a garage, and every creative mind with a story to tell.
                        </p>
                        <p>
                            This comprehensive guide will walk you through exactly how to leverage this playground to its fullest potential.
                            We will cover the specific strengths of each model we offer—<strong>Google's Gemini 3 Pro</strong>, <strong>OpenAI's GPT-5</strong>, and <strong>Anthropic's Claude 4.5 Sonnet</strong>—and
                            provide actionable, expert-level strategies for prompting them effectively. Whether you are debugging complex React hooks, writing a master's thesis,
                            or analyzing financial markets, this guide is your manual for success.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-8 space-y-16">
                        {/* Section 1: Model Deep Dive */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6 text-foreground">Understanding Your Tools: A Deep Dive into Our Models</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Not all AI models are created equal. While they are all built on the Transformer architecture, they have been fine-tuned for different objectives.
                                Understanding these nuances is the key to unlocking "Superuser" status.
                            </p>

                            <div className="space-y-8">
                                <div className="bg-secondary/10 border border-border rounded-xl p-8">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mr-3 text-sm">G</span>
                                        Google Gemini 3 Pro (& Flash)
                                    </h3>
                                    <div className="space-y-4 text-muted-foreground">
                                        <p>
                                            <strong>Best For:</strong> Large Context Analysis, Multimodal Tasks, and Speed.
                                        </p>
                                        <p>
                                            Gemini 3 Pro represents Google's pinnacle of AI engineering. Its standout feature is its massive <strong>context window</strong> (up to 10 million tokens in Pro).
                                            This means you can paste entire codebases, 500-page textbooks, or lengthy legal contracts, and Gemini can "hold" all that information in its working memory simultaneously.
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Multimodal Native:</strong> Unlike other models that "patch on" vision, Gemini was trained from the start on images, video, and text. Use it to analyze charts, screenshots of UI bugs, or handwritten notes.</li>
                                            <li><strong>Up-to-date Knowledge:</strong> Being a Google product, it has excellent connectivity with valid, real-time information retrieval, making it superior for current events or fact-checking.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-secondary/10 border border-border rounded-xl p-8">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-3 text-sm">O</span>
                                        OpenAI GPT-5 (Omni)
                                    </h3>
                                    <div className="space-y-4 text-muted-foreground">
                                        <p>
                                            <strong>Best For:</strong> General Reasoning, Coding, and Instruction Following.
                                        </p>
                                        <p>
                                            GPT-5 is the industry standard for a reason. It excels at <strong>complex logical reasoning</strong> and strictly adhering to detailed system instructions.
                                            If you need a model to output a response in a very specific JSON format, or to follow a 15-step complex workflow without hallucinating, GPT-5 is your reliable workhorse.
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Coding Proficiency:</strong> GPT-5 has been trained on a massive dataset of GitHub repositories. It is exceptionally skilled at Python, JavaScript/TypeScript, and SQL. It rarely makes syntax errors and understands modern frameworks like Next.js 15.</li>
                                            <li><strong>Mathematical Logic:</strong> It scores highest on benchmarks involving math word problems and logical puzzles, making it great for STEM homework help.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-secondary/10 border border-border rounded-xl p-8">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center mr-3 text-sm">C</span>
                                        Anthropic Claude 4.5 Sonnet
                                    </h3>
                                    <div className="space-y-4 text-muted-foreground">
                                        <p>
                                            <strong>Best For:</strong> Creative Writing, Nuance, and Human-Like Tone.
                                        </p>
                                        <p>
                                            Claude is often described as the most "human" of the AI models. It has a distinctive writing style that is less robotic and repetitive than its competitors.
                                            It is the preferred choice for copywriters, novelists, and marketing professionals who need engaging content that doesn't sound "AI-generated."
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Safety & Ethics:</strong> Claude is built with "Constitutional AI," making it safer and less prone to generating harmful or biased content.</li>
                                            <li><strong>Literary Quality:</strong> In blind tests, Claude's prose is consistently rated higher for flow, vocabulary usage, and emotional intelligence.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Use Cases */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6 text-foreground">Mastering the Playground: Roles & Strategies</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                UntrainedModel is designed to be a versatile workspace. Here is how three major user groups can maximize their productivity.
                            </p>

                            <div className="space-y-12">
                                {/* For Developers */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">👨‍💻 For Developers: The Pair Programmer</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Think of the Playground as a Senior Engineer sitting next to you. Use the "Code Mode" to get syntax highlighting and wide-screen viewing.
                                    </p>
                                    <div className="bg-secondary/20 p-6 rounded-lg border-l-4 border-primary">
                                        <h4 className="font-semibold mb-2 text-foreground">Pro Workflow: The "Rubber Duck" Method</h4>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Don't just ask for code. Paste your buggy function along with the error message and ask the AI to explain <em>why</em> it failed before fixing it.
                                        </p>
                                        <div className="bg-black/40 p-4 rounded-md font-mono text-xs text-green-400">
                                            "I am getting a hydation error in Next.js 14. Here is my component code. Explain the concept of Client vs Server components in this context, and then provide the refactored solution."
                                        </div>
                                    </div>
                                </div>

                                {/* For Students */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">🎓 For Students: The 24/7 Tutor</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Whether you are preparing for JEE, NEET, or University exams, AI can personalize education like never before.
                                    </p>
                                    <div className="bg-secondary/20 p-6 rounded-lg border-l-4 border-pink-500">
                                        <h4 className="font-semibold mb-2 text-foreground">Pro Workflow: The Feynman Technique</h4>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Use the prompt below to ensure you truly understand a concept, rather than just memorizing it.
                                        </p>
                                        <div className="bg-black/40 p-4 rounded-md font-mono text-xs text-pink-400">
                                            "Explain the concept of Quantum Entanglement to me as if I were a 12-year-old. Use analogies involving everyday items like socks or dice. Then, quiz me with 3 conceptual questions to test my understanding."
                                        </div>
                                    </div>
                                </div>

                                {/* For Writers */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">✍️ For Writers: The Creative Editor</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Writer's block is a thing of the past. Use Claude 4.5 Sonnet to brainstorm outlines, character arcs, or alternative headlines.
                                    </p>
                                    <div className="bg-secondary/20 p-6 rounded-lg border-l-4 border-purple-500">
                                        <h4 className="font-semibold mb-2 text-foreground">Pro Workflow: Style Transfer</h4>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            AI can mimic tone perfectly if you give it examples.
                                        </p>
                                        <div className="bg-black/40 p-4 rounded-md font-mono text-xs text-purple-400">
                                            "Here are three paragraphs of my previous writing. Analyze my style, tone, and sentence structure. Then, write an introduction to a blog post about 'Sustainable Coffee' using strictly that same style."
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Prompt Engineering */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6 text-foreground">Prompt Engineering 101: Getting Better Results</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                                <p>
                                    "Prompt Engineering" is simply the art of communicating clearly with an AI. The quality of your output is directly determined by the quality of your input.
                                </p>
                                <h3 className="text-xl font-bold text-foreground mt-6">The CO-STAR Framework</h3>
                                <p>
                                    To write the perfect prompt, ensure you include these six elements:
                                </p>
                                <ul className="space-y-4 my-6">
                                    <li><strong>C - Context:</strong> Give background information. "I am a senior marketing manager..."</li>
                                    <li><strong>O - Objective:</strong> State clearly what you want. "...generating a LinkedIn post..."</li>
                                    <li><strong>S - Style:</strong> Define the persona. "...professional yet witty..."</li>
                                    <li><strong>T - Tone:</strong> "Empathetic, authoritative..."</li>
                                    <li><strong>A - Audience:</strong> "Targeting CTOs of Series B startups..."</li>
                                    <li><strong>R - Response:</strong> Format requirements. "...in a markdown list with emojis."</li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div className="md:col-span-4 space-y-8">
                        {/* Sidebar: Quick Links */}
                        <div className="bg-secondary/10 border border-border rounded-xl p-6 sticky top-24">
                            <h3 className="font-bold mb-4 text-foreground">Quick Resources</h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a href="/use-cases" className="text-primary hover:underline flex items-center">
                                        <ArrowRight className="w-4 h-4 mr-2" />
                                        Browse Use Cases
                                    </a>
                                </li>
                                <li>
                                    <a href="/blog/complete-guide-ai-powered-web-development-2025" className="text-primary hover:underline flex items-center">
                                        <ArrowRight className="w-4 h-4 mr-2" />
                                        AI for Web Devs
                                    </a>
                                </li>
                                <li>
                                    <a href="/blog/prompt-engineering-masterclass-2025" className="text-primary hover:underline flex items-center">
                                        <ArrowRight className="w-4 h-4 mr-2" />
                                        Prompt Engineering Guide
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <h3 className="font-bold mb-4 text-foreground">Popular prompts</h3>
                                <div className="space-y-3">
                                    <div className="p-3 bg-secondary/50 rounded-lg text-xs text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
                                        "Debug this React useEffect hook..."
                                    </div>
                                    <div className="p-3 bg-secondary/50 rounded-lg text-xs text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
                                        "Write a cover letter for..."
                                    </div>
                                    <div className="p-3 bg-secondary/50 rounded-lg text-xs text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
                                        "Explain Black Holes..."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto border-t border-border pt-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is UntrainedModel really free forever?</AccordionTrigger>
                            <AccordionContent>
                                Yes! Our core mission is democratization. We support the platform through community donations, partnerships, and non-intrusive advertising. You will never be asked for a credit card to access the base models.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Which AI model should I use for coding?</AccordionTrigger>
                            <AccordionContent>
                                For comprehensive full-stack development, we recommend <strong>GPT-5</strong> due to its superior reasoning capabilities. However, for quick scripts or explaining code, <strong>Claude 4.5 Sonnet</strong> is excellent. If you are analyzing a massive legacy codebase, use <strong>Gemini 3 Pro</strong> for its large context window.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is my data private?</AccordionTrigger>
                            <AccordionContent>
                                Absolutely. We operate on a privacy-first architecture. Your prompts are processed ephemerally to generate the response and are not stored in any persistent database on our servers. We do not use your data to train our own models.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Can I use this for commercial work?</AccordionTrigger>
                            <AccordionContent>
                                Yes. The output generated by the AI models is generally yours to use for commercial purposes, including writing code for your startup or generating marketing copy for your clients. However, we always recommend verifying the specific terms of service of the underlying model providers (OpenAI, Google, Anthropic).
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>How is this different from ChatGPT Plus?</AccordionTrigger>
                            <AccordionContent>
                                ChatGPT Plus is a paid subscription ($20/month). UntrainedModel provides free access to similar capabilities. While paid plans might offer higher rate limits or specialized features like DALL-E 3 image generation, our platform is the perfect free alternative for text analysis, coding, and generation.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </section>
        </div>
    );
}
