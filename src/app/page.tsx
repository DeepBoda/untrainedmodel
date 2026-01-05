import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "Free Agentic AI Playground 2026 | Build AI Agents with Gemini 3 Pro & GPT-5",
    description: "The ultimate Agentic AI lab for 2026. Build autonomous AI agents with Gemini 3 Pro, GPT-5, Claude 4.5 Sonnet. Multi-agent orchestration, code generation, content creation. Free forever, no credit card.",
    keywords: [
        "Agentic AI Playground", "AI Agents 2026", "Gemini 3 Pro Free", "GPT-5 Free", "Claude 4.5 Sonnet Free",
        "Multi-agent Systems", "AI Orchestration", "Autonomous AI", "AI Code Generation",
        "AI Automation", "Agentic Workflows", "Free AI Tools 2026", "UntrainedModel"
    ],
    openGraph: {
        title: "Free Agentic AI Playground 2026 | Gemini 3 Pro, GPT-5, Claude 4.5 Sonnet",
        description: "Build autonomous AI agents for free. Access Gemini 3 Pro, GPT-5, Claude 4.5 Sonnet. Multi-agent orchestration, intelligent automation. No credit card required.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "UntrainedModel - Agentic AI Platform 2026",
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
