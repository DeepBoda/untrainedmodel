import React from 'react';

export function EnhancedSchema() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "UntrainedModel",
        "url": "https://untrainedmodel.xyz",
        "logo": {
            "@type": "ImageObject",
            "url": "https://untrainedmodel.xyz/logo-optimized.png",
            "width": 400,
            "height": 400
        },
        "description": "Free AI Playground providing access to GPT-5, Claude, and Gemini for developers worldwide",
        "foundingDate": "2024",
        "sameAs": [
            "https://twitter.com/untrainedmodel",
            "https://github.com/untrainedmodel"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "availableLanguage": ["English"]
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "UntrainedModel",
        "alternateName": "Untrained Model AI Playground",
        "url": "https://untrainedmodel.xyz",
        "description": "Free AI playground with GPT-5, Claude, and Gemini access",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://untrainedmodel.xyz/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "UntrainedModel AI Playground",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "150",
            "bestRating": "5",
            "worstRating": "1"
        },
        "description": "Free AI playground providing access to GPT-5, Claude, and Gemini for content generation, code writing, and research",
        "featureList": [
            "Free GPT-5 Access",
            "Claude AI Integration",
            "Gemini 3 Pro Access",
            "Code Generation",
            "Content Writing",
            "Research Tools"
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://untrainedmodel.xyz"
            }
        ]
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
                    "text": "Yes, UntrainedModel provides free access to AI tools for content and code generation using models like GPT-5, Gemini, and Claude."
                }
            },
            {
                "@type": "Question",
                "name": "What AI models does UntrainedModel support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "UntrainedModel supports multiple AI models including OpenAI's GPT-5, Google's Gemini, and Anthropic's Claude for various content and code generation tasks."
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
