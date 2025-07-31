import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const Layout = ({ 
  children, 
  title = "UntrainedModel - Generative AI Platform",
  description = "Empowering everyone with accessible AI tools for productivity, creativity, and innovation. Connect with ChatGPT and Gemini APIs through our intuitive interface.",
  keywords = "AI, artificial intelligence, ChatGPT, Gemini, productivity, AI tools, machine learning, automation",
  image = "https://www.untrainedmodel.xyz/og-image.jpg"
}: LayoutProps) => {
  const fullTitle = title.includes("UntrainedModel") ? title : `${title} | UntrainedModel`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="UntrainedModel" />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://www.untrainedmodel.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="UntrainedModel" />
        
        {/* Twitter Card */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} /> */}
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="UntrainedModel" />
        <meta name="application-name" content="UntrainedModel" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://www.untrainedmodel.xyz" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* AdSense */}
        {/* <meta name="google-adsense-account" content="ca-pub-placeholder" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-placeholder"
          crossOrigin="anonymous"
        ></script>
         */}
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "UntrainedModel",
            "url": "https://www.untrainedmodel.xyz",
            "logo": "https://www.untrainedmodel.xyz/uploads/bccee730-0f1a-4541-8c9f-4760c42f0c75.png",
            "description": description,
            "foundingDate": "2025",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Global"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "",
              "contactType": "customer service",
              "email": "contact@untrainedmodel.xyz"
            },
            "sameAs": [
              "https://twitter.com/untrainedmodel",
              "https://linkedin.com/company/untrainedmodel"
            ],
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.untrainedmodel.xyz/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "UntrainedModel",
            "url": "https://www.untrainedmodel.xyz",
            "description": description,
            "inLanguage": "en-US",
            "isAccessibleForFree": true,
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.untrainedmodel.xyz/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Software Application Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "UntrainedModel AI Playground",
            "description": "Advanced AI playground for text, code, and image generation using cutting-edge AI models",
            "url": "https://www.untrainedmodel.xyz/playground",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
      </Helmet>
      
      <Navigation />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;