import type { MetadataRoute } from 'next';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://securityspace.es';
  const now = new Date().toISOString();

  const staticPages = [
    '',
    '/servicios',
    '/auditoria-gratuita',
    '/metodologia',
    '/cumplimiento',
    '/casos',
    '/nosotros',
    '/contacto',
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.7,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
