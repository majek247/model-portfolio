import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { series } from '@/lib/portfolio';
import { getPosts } from '@/lib/posts';

const base = (siteUrl || 'https://www.muizthomas.com').replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/journal',
    ...series.map((s) => `/work/${s.slug}`),
    ...getPosts().map((p) => `/journal/${p.slug}`),
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}