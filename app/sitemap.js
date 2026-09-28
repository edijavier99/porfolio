import { posts } from '@/lib/posts';

const BASE = 'https://edijavier.com';

export default function sitemap() {
  const staticRoutes = [
    { url: BASE,                       lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/about`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`,             lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/sustainability`,   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${BASE}/privacy`,          lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
  ];

  const blogRoutes = posts.map((post) => ({
    url: `${BASE}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
