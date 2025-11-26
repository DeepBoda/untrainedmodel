export const JsonLd = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "UntrainedModel",
        "url": "https://untrainedmodel.xyz",
        "logo": {
            "@type": "ImageObject",
            "url": "https://untrainedmodel.xyz/uploads/bccee730-0f1a-4541-8c9f-4760c42f0c75.png"
        },
        "description": "Free AI tools for content and code generation",
        "sameAs": []
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "UntrainedModel",
        "url": "https://untrainedmodel.xyz",
        "description": "Access powerful AI tools for free. Generate high-quality content, code, and images using GPT-4, Gemini, and Claude.",
        "publisher": organizationSchema
    };

    const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "UntrainedModel AI Playground",
        "applicationCategory": "WebApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free AI tools and playground for content and code generation"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is UntrainedModel free to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, UntrainedModel provides free access to AI tools for content and code generation using models like GPT-4, Gemini, and Claude."
                }
            },
            {
                "@type": "Question",
                "name": "What AI models does UntrainedModel support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "UntrainedModel supports multiple AI models including OpenAI's GPT-4, Google's Gemini, and Anthropic's Claude for various content and code generation tasks."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use UntrainedModel for coding?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, UntrainedModel offers specialized tools for code generation, debugging, and programming assistance across multiple programming languages."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
};
