import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    metadataBase: new URL('https://untrainedmodel.xyz'), // Replace with actual domain
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
        icon: "/favicon.ico?v=3",
        shortcut: "/favicon.ico?v=3",
        apple: "/apple-touch-icon.png?v=3",
        other: {
            rel: "icon",
            url: "/icon.svg?v=3",
        },
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col`}>
                <Providers>
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
