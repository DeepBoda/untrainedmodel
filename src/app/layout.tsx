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
import Script from "next/script";

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
        default: "Free AI Playground 2025 | ChatGPT Alternative - No Credit Card",
        template: "%s | UntrainedModel"
    },
    description: "🚀 Access GPT-5, Claude & Gemini for FREE. Best AI playground for developers worldwide. No signup, no credit card required. Start building with AI today!",
    keywords: [
        // Primary global keywords
        "free AI tools", "AI playground", "ChatGPT alternative", "free AI",
        "AI for developers", "free ChatGPT", "AI tools for developers",
        // Specific tools
        "GPT-5 free", "Claude free", "Gemini free", "free AI API",
        "AI coding assistant", "AI content generator", "AI research tool",
        // Use cases
        "AI for coding", "AI for content writing", "AI for research",
        "free AI playground online", "best free AI tools 2025",
        // Generic
        "AI", "artificial intelligence", "ChatGPT", "Gemini", "Claude",
        "machine learning", "automation", "generative AI",
        "productivity", "AI tools"
    ],
    authors: [{ name: "UntrainedModel Team" }],
    creator: "UntrainedModel",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://untrainedmodel.xyz",
        title: "Free AI Playground 2025 | ChatGPT, Claude & Gemini Alternative",
        description: "Access GPT-5, Claude & Gemini for free. Best AI playground for developers, content creators & researchers worldwide. No credit card required.",
        siteName: "UntrainedModel",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "UntrainedModel - Free AI Playground",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free AI Playground | ChatGPT Alternative - UntrainedModel",
        description: "🚀 Access GPT-5, Claude & Gemini for FREE. No signup, no credit card. Best AI tools for developers worldwide.",
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

                {/* Google AdSense */}
                <meta name="google-adsense-account" content="ca-pub-3606235083263616" />
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3606235083263616"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
            </head>
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col`}>
                <Providers>
                    <ScrollProgress />
                    <BackToTop />
                    <JsonLd />
                    <EnhancedSchema />
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
