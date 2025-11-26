import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://untrainedmodel.xyz' // Replace with actual domain

    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.lastUpdated || post.publishDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const routes = [
        '',
        '/blog',
        '/use-cases',
        '/docs',
        '/playground',
        '/contact',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [...routes, ...posts]
}
