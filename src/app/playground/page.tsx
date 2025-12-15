import { Metadata } from "next";
import PlaygroundClient from "./PlaygroundClient";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Free AI Playground | UntrainedModel",
    description: "Experiment with GPT-4o, Claude 3.5, and Gemini models for free. No signup required. The ultimate AI sandbox.",
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

            {/* SEO Content Section */}
            <section className="container max-w-5xl mx-auto px-4 py-20">

                <div className="mb-16">
                    <Badge variant="outline" className="mb-4">About the Tool</Badge>
                    <h1 className="text-4xl font-bold mb-6">The Ultimate Free AI Playground</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            UntrainedModel's AI Playground is a powerful, free-to-use interface that connects you with the world's most advanced Large Language Models (LLMs).
                            Whether you are a developer looking to debug code, a writer brainstorming your next article, or a student researching complex topics,
                            our playground provides a unified environment to interact with multiple AI providers without expensive subscriptions.
                        </p>
                        <p>
                            We support models from Google (Gemini), OpenAI (GPT-4), and Anthropic (Claude), giving you the flexibility to choose the best tool for your specific task.
                            The interface is designed for productivity, featuring syntax highlighting for code, markdown support for structured text, and specialized modes for Chat, Coding, and Research.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Why use this Playground?</h2>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">1</div>
                                <div>
                                    <strong className="block text-foreground">No Account Required</strong>
                                    <span className="text-muted-foreground">Jump straight in. We don't force you to sign up or provide credit card details to start testing basic prompts.</span>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">2</div>
                                <div>
                                    <strong className="block text-foreground">Multi-Model Support</strong>
                                    <span className="text-muted-foreground">Compare results between Gemini 2.0, GPT-4o, and Claude 3.5 Sonnet side-by-side to find the best output.</span>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">3</div>
                                <div>
                                    <strong className="block text-foreground">Developer Friendly</strong>
                                    <span className="text-muted-foreground">Dedicated Code Mode with syntax highlighting, copy-paste functionality, and wide layout for reading complex scripts.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Supported Capabilities</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-secondary/20 border border-border/50">
                                <h3 className="font-semibold mb-2">Code Generation</h3>
                                <p className="text-sm text-muted-foreground">Python, JavaScript, TypeScript, React, SQL, and more. Debug and refactor instantly.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-secondary/20 border border-border/50">
                                <h3 className="font-semibold mb-2">Content Writing</h3>
                                <p className="text-sm text-muted-foreground">SEO blogs, emails, essays, and creative stories with perfect tone matching.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-secondary/20 border border-border/50">
                                <h3 className="font-semibold mb-2">Data Analysis</h3>
                                <p className="text-sm text-muted-foreground">Summarize long documents, extract key insights, and format data into tables.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-secondary/20 border border-border/50">
                                <h3 className="font-semibold mb-2">Learning</h3>
                                <p className="text-sm text-muted-foreground">Explain complex concepts like Quantum Computing or System Design in simple terms.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is UntrainedModel really free?</AccordionTrigger>
                            <AccordionContent>
                                Yes! Our goal is to democratize AI access. We offer a generous free tier that allows you to use top models without payment. We are supported by community donations and partnerships.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Which AI models can I use?</AccordionTrigger>
                            <AccordionContent>
                                Currently, we support Google's Gemini Pro and Flash models, with integration for OpenAI's GPT-4o and Anthropic's Claude 3.5 coming soon for pro users.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Do you store my data?</AccordionTrigger>
                            <AccordionContent>
                                We prioritize privacy. Your conversations are processed to generate responses but are not stored permanently on our servers or used to train our models.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Can I use the code generated here for commercial projects?</AccordionTrigger>
                            <AccordionContent>
                                Yes, the code generated by the AI models is generally yours to use. However, we recommend reviewing the specific terms of the AI provider (e.g., Google or OpenAI) for commercial applications.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </section>
        </div>
    );
}
