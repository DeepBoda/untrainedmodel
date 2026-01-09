import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { EnhancedSchema } from "@/components/EnhancedSchema";
import NewsletterPopup from "@/components/NewsletterPopup";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: 'swap',
    preload: true,
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: 'swap',
    preload: true,
});

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://untrainedmodel.xyz'),
    alternates: {
        canonical: './',
    },
    title: {
        default: "Free AI Agents & Agentic AI Playground 2026 | Gemini 3 Pro, GPT-5 & Claude 4.5 Sonnet",
        template: "%s | UntrainedModel"
    },
    description: "🚀 Build with Agentic AI & AI Agents in 2026. Access Gemini 3 Pro, GPT-5, Claude 4.5 Sonnet FREE. Multi-agent systems, AI orchestration, code generation. No credit card, no signup required.",
    keywords: [
        // 2026 Trending Keywords
        "agentic AI", "AI agents", "agentic AI platform", "multi-agent systems", "AI orchestration",
        "Gemini 3 Pro free", "Gemini 3 Flash", "AI agents 2026", "autonomous AI", "intelligent automation",
        // Primary global keywords
        "free AI tools 2026", "AI playground", "ChatGPT alternative", "free AI",
        "AI for developers", "free ChatGPT", "AI tools for developers",
        // Specific tools
        "GPT-5 free", "Claude 4.5 Sonnet free", "Gemini 3 Pro free", "free AI API",
        "AI coding assistant", "AI code generation", "AI content generator", "AI research tool",
        // Advanced features
        "agentic workflows", "AI automation", "domain-specific AI", "physical AI",
        "multimodal AI", "AI collaboration", "human-AI collaboration",
        // Use cases
        "AI for coding", "AI for content writing", "AI for research",
        "free AI playground online", "best free AI tools 2026",
        // Generic
        "AI", "artificial intelligence", "ChatGPT", "Gemini", "Claude",
        "machine learning", "automation", "generative AI",
        "productivity", "AI tools", "LLM", "large language models"
    ],
    authors: [{ name: "UntrainedModel AI Labs" }],
    creator: "UntrainedModel AI Labs",
    publisher: "UntrainedModel AI Labs",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://untrainedmodel.xyz",
        title: "Free Agentic AI Playground 2026 | Gemini 3 Pro, GPT-5, Claude 4.5 Sonnet",
        description: "Build with AI Agents & Agentic AI. Access Gemini 3 Pro, GPT-5, Claude 4.5 Sonnet for free. Multi-agent systems, AI orchestration, autonomous AI tools. No credit card required.",
        siteName: "UntrainedModel",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "UntrainedModel - Free Agentic AI Playground 2026",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Agentic AI Playground 2026 | Gemini 3 Pro, GPT-5 & Claude 4.5 Sonnet",
        description: "🚀 Access Gemini 3 Pro, GPT-5, Claude 4.5 Sonnet FREE. Build AI Agents, Multi-agent Systems. No signup, no credit card. Start with Agentic AI today!",
        images: ["/og-image.png"],
        creator: "@untrainedmodel",
    },
    icons: {
        icon: "/favicon.ico?v=13",
        shortcut: "/favicon.ico?v=13",
        apple: "/apple-touch-icon.png?v=13",
        other: {
            rel: "icon",
            url: "/icon.svg?v=13",
        },
    },
    manifest: "/site.webmanifest",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="dark">
            <head>
                {/* International Targeting */}
                <link rel="alternate" hrefLang="x-default" href="https://untrainedmodel.xyz/" />
                <link rel="alternate" hrefLang="en" href="https://untrainedmodel.xyz/" />
                <link rel="alternate" hrefLang="en-us" href="https://untrainedmodel.xyz/" />
                <link rel="alternate" hrefLang="en-gb" href="https://untrainedmodel.xyz/" />
                <link rel="alternate" hrefLang="en-ca" href="https://untrainedmodel.xyz/" />
                <link rel="alternate" hrefLang="en-au" href="https://untrainedmodel.xyz/" />
                <link rel="alternate" hrefLang="en-in" href="https://untrainedmodel.xyz/" />
                <meta name="google" content="notranslate" />

                {/* Resource Hints for Performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TSTK7HPL');`,
                    }}
                ></script>

                {/* Google AdSense */}
                <meta name="google-adsense-account" content="ca-pub-3606235083263616" />
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3606235083263616"
                    crossOrigin="anonymous"
                ></script>

                {/* Google Analytics 4 */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-VLSKCHSKE6"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-VLSKCHSKE6', {
                                page_path: window.location.pathname,
                                send_page_view: true
                            });
                        `,
                    }}
                ></script>
            </head>
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col`}>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-TSTK7HPL"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                <Providers>
                    <ScrollProgress />
                    <BackToTop />
                    <JsonLd />
                    <EnhancedSchema />
                    <NewsletterPopup />
                    <StickyCTA />
                    <Navigation />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
