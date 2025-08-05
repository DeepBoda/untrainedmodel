import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO = ({
  title = "UntrainedModel - Free AI Tools for Content & Code Generation",
  description = "Access powerful AI tools for free. Generate high-quality content, code, and images using GPT-4, Gemini, and Claude. Free AI playground for developers, creators, and businesses.",
  keywords = "free AI tools, GPT-4, Gemini AI, Claude AI, content generation, code generation, AI playground, artificial intelligence, machine learning, free AI chatbot",
  image = "/uploads/bccee730-0f1a-4541-8c9f-4760c42f0c75.png",
  url = "https://untrainedmodel.xyz"
}: SEOProps) => {
  const fullTitle = title.includes("UntrainedModel") ? title : `${title} | UntrainedModel`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};