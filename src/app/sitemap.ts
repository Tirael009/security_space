// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://cosmaguard.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/recursos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/casos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/metodologia`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/cumplimiento`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/auditoria-gratuita`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];

  // Если есть динамический список услуг — добавь тут. Пока три базовых:
  const services = ['pentest', 'asm', 'qa'].map((slug) => ({
    url: `${base}/servicios/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...services];
}
