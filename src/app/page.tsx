import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "UntrainedModel - Free AI Playground, Content & Code Tools",
    description: "The ultimate free AI lab. Access GPT-4o, Claude 3.5, and Gemini models without a subscription. Generate code, write blogs, and analyze markets instantly.",
    keywords: ["Free AI Playground", "GPT-4o Free", "Claude 3.5 Sonnet Free", "AI Code Generator", "AI Blog Writer", "Market Analysis AI", "UntrainedModel"],
    openGraph: {
        title: "UntrainedModel - Free AI Playground & Tools",
        description: "Build, write, and research with top-tier AI models for free. No credit card required.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "UntrainedModel Platform",
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
