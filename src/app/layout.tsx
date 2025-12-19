import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
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
        default: "UntrainedModel - Generative AI Platform",
        template: "%s | UntrainedModel"
    },
    description: "Empowering everyone with accessible AI tools for productivity, creativity, and innovation. Free AI lab for content, code & research.",
    keywords: ["AI", "artificial intelligence", "ChatGPT", "Gemini", "productivity", "AI tools", "machine learning", "automation", "generative ai", "free ai tools"],
    authors: [{ name: "UntrainedModel Team" }],
    creator: "UntrainedModel",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://untrainedmodel.xyz",
        title: "UntrainedModel - Generative AI Platform",
        description: "Your free AI lab for content, code & research. Generate blogs, scripts, and market insights without limits.",
        siteName: "UntrainedModel",
        images: [
            {
                url: "/og-image.png", // Needs to be added to public folder
                width: 1200,
                height: 630,
                alt: "UntrainedModel Platform Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "UntrainedModel - Generative AI Platform",
        description: "Your free AI lab for content, code & research. Generate blogs, scripts, and market insights without limits.",
        images: ["/og-image.png"],
        creator: "@untrainedmodel", // Replace with actual handle if available
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
