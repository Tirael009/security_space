import type { MetadataRoute } from 'next';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://securityspace.es';
  const now = new Date().toISOString();

  // 1) Статические страницы сайта
  const staticPages: MetadataRoute.Sitemap = [
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
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.7,
  }));

  // 2) Динамические страницы услуг из твоего источника данных
  const servicePagesFromData: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 3) «Страховочные» услуги, которые мы уже создали руками
  // (на случай, если их пока нет в '@/data/services')
  const extraServiceSlugs = [
    'pentest',
    'attack-surface-monitoring',
    'quality-assessment',
  ];

  const servicePagesExtra: MetadataRoute.Sitemap = extraServiceSlugs.map((slug) => ({
    url: `${base}/servicios/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 4) Страницы отраслей (Industries)
  const industryPages: MetadataRoute.Sitemap = [
    '/industrias/fintech',
    '/industrias/leadgen',
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 5) Ресурсы / статьи (Recursos)
  const resourcesPages: MetadataRoute.Sitemap = [
    '/recursos/asm-checklist',
    '/recursos/preparar-un-pentest',
    '/recursos/spf-dkim-dmarc',
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // 6) Дедупликация на случай пересечений
  const all = [...staticPages, ...servicePagesFromData, ...servicePagesExtra, ...industryPages, ...resourcesPages];
  const seen = new Set<string>();
  const deduped = all.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });

  return deduped;
}
