// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { services } from '@/data/services';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://cosmaguard.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/cumplimiento`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/auditoria-gratuita`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const dynamicServices = services.map((s) => ({
    url: `${base}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...dynamicServices];
}
