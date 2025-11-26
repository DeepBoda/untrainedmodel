import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
    title: "AI Insights & Tutorials | UntrainedModel Blog",
    description: "Expert guides, tutorials, and insights on AI development, prompt engineering, and the future of technology in India.",
    keywords: "AI blog, ChatGPT tutorials, Gemini guides, AI development India, tech blog",
};

export default function BlogPage() {
    return <BlogClient />;
}
