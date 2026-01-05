import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
    title: "Agentic AI Insights & Developer Tutorials 2026 | UntrainedModel Blog",
    description: "Deep-dive tutorials on Agentic AI, AI Agents, Gemini 3 Pro, GPT-5, multi-agent systems, AI orchestration, and autonomous AI development. Expert guides for building with cutting-edge AI in 2026.",
    keywords: [
        "Agentic AI tutorial", "AI agents guide", "Gemini 3 Pro tutorial", "GPT-5 guide",
        "multi-agent systems tutorial", "AI orchestration guide", "autonomous AI development",
        "AI blog 2026", "AI development India", "tech blog", "LLM fine-tuning",
        "React Server Components", "Platform Engineering", "System Design AI", "TypeScript patterns"
    ],
};

export default function BlogPage() {
    return <BlogClient />;
}
