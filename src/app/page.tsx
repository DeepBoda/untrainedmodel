import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "UntrainedModel: Free AI Playground for Developers & Creators",
    description: "🚀 Access the latest AI models like GPT-5, Gemini 3 Pro, and Claude 4.5 Sonnet for free. Build, test, and create with our powerful AI playground. No signup required.",
    keywords: [
        "AI playground", "free AI tools", "agentic AI", "AI for developers", "GPT-5", "Gemini 3 Pro",
        "Claude 4.5 Sonnet", "AI code generation", "AI content creation", "generative AI",
        "ChatGPT alternative", "free AI API", "multi-agent systems", "AI orchestration"
    ],
    openGraph: {
        title: "UntrainedModel: Free AI Playground for Developers & Creators",
        description: "Access GPT-5, Gemini 3 Pro, and Claude 4.5 Sonnet for free. Build, test, and create with our powerful AI playground. No signup required.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "UntrainedModel - Free AI Playground for Developers & Creators",
            },
        ],
    },
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "UntrainedModel",
                        "url": "https://untrainedmodel.xyz",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://untrainedmodel.xyz/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })
                }}
            />
            <HomeClient />
        </>
    );
}
