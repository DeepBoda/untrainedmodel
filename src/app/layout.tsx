import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { EnhancedSchema } from "@/components/EnhancedSchema";

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
        default: "UntrainedModel: Free AI Playground for Developers & Creators",
        template: "%s | UntrainedModel"
    },
    description: "🚀 Access the latest AI models like GPT-5, Gemini 3 Pro, and Claude 4.5 Sonnet for free. Build, test, and create with our powerful AI playground. No signup required.",
    keywords: [
        "AI playground", "free AI tools", "agentic AI", "AI for developers", "GPT-5", "Gemini 3 Pro",
        "Claude 4.5 Sonnet", "AI code generation", "AI content creation", "generative AI",
        "ChatGPT alternative", "free AI API", "multi-agent systems", "AI orchestration"
    ],
    authors: [{ name: "UntrainedModel AI Labs" }],
    creator: "UntrainedModel AI Labs",
    publisher: "UntrainedModel AI Labs",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://untrainedmodel.xyz",
        title: "UntrainedModel: Free AI Playground for Developers & Creators",
        description: "Access GPT-5, Gemini 3 Pro, and Claude 4.5 Sonnet for free. Build, test, and create with our powerful AI playground. No signup required.",
        siteName: "UntrainedModel",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "UntrainedModel - Free AI Playground for Developers & Creators",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "UntrainedModel: Free AI Playground for Developers & Creators",
        description: "🚀 Access GPT-5, Gemini 3 Pro, and Claude 4.5 Sonnet for free. Build, test, and create with our powerful AI playground. No signup required.",
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
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3606235083263616"
                    crossOrigin="anonymous"
                ></script>

                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
                        `,
                    }}
                />
            </head>
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col`}>
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                <Providers>
                    <ScrollProgress />
                    <BackToTop />
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
