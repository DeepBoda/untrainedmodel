import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://untrainedmodel.xyz'

    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.lastUpdated || post.publishDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const routes = [
        { route: '', priority: 1.0, changeFrequency: 'daily' as const },
        { route: '/playground', priority: 0.9, changeFrequency: 'daily' as const },
        { route: '/tools', priority: 0.9, changeFrequency: 'weekly' as const },
        { route: '/tools/token-calculator', priority: 0.8, changeFrequency: 'weekly' as const },
        { route: '/tools/cost-estimator', priority: 0.8, changeFrequency: 'weekly' as const },
        { route: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
        { route: '/use-cases', priority: 0.8, changeFrequency: 'weekly' as const },
        { route: '/docs', priority: 0.7, changeFrequency: 'weekly' as const },
        { route: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
        { route: '/contact', priority: 0.5, changeFrequency: 'monthly' as const },
        { route: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
        { route: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    ].map(({ route, priority, changeFrequency }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
    }))

    return [...routes, ...posts]
}
