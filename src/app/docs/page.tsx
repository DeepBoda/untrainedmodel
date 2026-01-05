import { Metadata } from "next";
import DocsClient from "./DocsClient";

export const metadata: Metadata = {
    title: "Complete AI Platform Documentation 2026 | Guides & Tutorials",
    description: "Comprehensive documentation for UntrainedModel's Agentic AI platform. Learn to use Gemini 3 Pro, GPT-5, Claude 4.5 Sonnet effectively. Model comparisons, prompting guides, API references, and roadmap. Free forever.",
    keywords: [
        "AI documentation", "UntrainedModel guide", "AI platform docs",
        "Gemini 3 Pro guide", "GPT-5 tutorial", "AI prompting guide",
        "free AI tools documentation", "AI model comparison"
    ],
};

export default function DocsPage() {
    return <DocsClient />;
}
