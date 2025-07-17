import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'UntrainedModel.xyz - Where Dumb AI Meets Brilliant Chaos',
  description: 'The AI that forgot to train. Interactive playground for chaotic creativity, tech satire, and experimental prompts. Just vibes. No accuracy.',
  keywords: 'AI playground, experimental AI, tech satire, prompt engineering, artificial intelligence, machine learning, creative AI',
  authors: [{ name: 'UntrainedModel Team' }],
  creator: 'UntrainedModel.xyz',
  publisher: 'UntrainedModel.xyz',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://untrainedmodel.xyz',
    siteName: 'UntrainedModel.xyz',
    title: 'UntrainedModel.xyz - Where Dumb AI Meets Brilliant Chaos',
    description: 'The AI that forgot to train. Interactive playground for chaotic creativity, tech satire, and experimental prompts.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UntrainedModel.xyz - Chaotic AI Playground',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UntrainedModel.xyz - Where Dumb AI Meets Brilliant Chaos',
    description: 'The AI that forgot to train. Interactive playground for chaotic creativity and experimental prompts.',
    images: ['/og-image.jpg'],
    creator: '@untrainedmodel',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://untrainedmodel.xyz',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'UntrainedModel.xyz',
              description: 'The AI that forgot to train. Interactive playground for chaotic creativity, tech satire, and experimental prompts.',
              url: 'https://untrainedmodel.xyz',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://untrainedmodel.xyz/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}