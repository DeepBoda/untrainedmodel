import { blogPosts } from './blog-posts';

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export function generateSitemap(): string {
  const baseURL = 'https://untrainedmodel.com';

  const staticPages: SitemapURL[] = [
    {
      loc: `${baseURL}/`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseURL}/playground`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseURL}/blog`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.9
    },
    {
      loc: `${baseURL}/about`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseURL}/use-cases`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseURL}/contact`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseURL}/privacy`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseURL}/terms`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: 0.3
    }
  ];

  const blogPages: SitemapURL[] = blogPosts.map(post => ({
    loc: `${baseURL}/blog/${post.slug}`,
    lastmod: post.lastUpdated.toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: post.featured ? 0.8 : 0.7
  }));

  const allPages = [...staticPages, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

export function saveSitemap(): void {
  const sitemap = generateSitemap();
  console.log('Sitemap generated:');
  console.log(sitemap);

  // In a real app, you would write this to public/sitemap.xml
  // For now, we'll log it and you can copy it manually
}
