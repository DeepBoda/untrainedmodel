import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'website' | 'article' | 'organization';
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  author?: string;
  publishDate?: string;
}

export const StructuredData = ({
  type = 'website',
  title = "UntrainedModel - Free AI Tools for Content & Code Generation",
  description = "Access powerful AI tools for free. Generate high-quality content, code, and images using GPT-4, Gemini, and Claude.",
  url = "https://www.untrainedmodel.xyz",
  image = "https://www.untrainedmodel.xyz/uploads/bccee730-0f1a-4541-8c9f-4760c42f0c75.png",
  author,
  publishDate
}: StructuredDataProps) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UntrainedModel",
    "url": "https://www.untrainedmodel.xyz",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.untrainedmodel.xyz/uploads/bccee730-0f1a-4541-8c9f-4760c42f0c75.png"
    },
    "description": "Free AI tools for content and code generation",
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "UntrainedModel",
    "url": "https://www.untrainedmodel.xyz",
    "description": description,
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

  const articleSchema = type === 'article' && author && publishDate ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": organizationSchema,
    "datePublished": publishDate,
    "url": url
  } : null;

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
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareApplicationSchema)}
      </script>
      {type === 'website' && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};