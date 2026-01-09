import { BlogPost } from '@/lib/blog-posts';

interface Props {
    post: BlogPost;
}

export const ArticleSchema = ({ post }: Props) => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://untrainedmodel.xyz/blog/${post.slug}`,
        },
        headline: post.title,
        description: post.metaDescription,
        image: `https://untrainedmodel.xyz${post.featuredImage}`,
        author: {
            '@type': 'Person',
            name: post.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'UntrainedModel',
            logo: {
                '@type': 'ImageObject',
                url: 'https://untrainedmodel.xyz/logo-optimized.png',
            },
        },
        datePublished: post.publishDate.toISOString(),
        dateModified: (post.lastUpdated || post.publishDate).toISOString(),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
