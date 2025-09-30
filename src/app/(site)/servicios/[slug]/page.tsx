// src/app/servicios/[slug]/page.tsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceView from '@/components/sections/ServiceView';
import { services } from '@/data/services';
import JsonLd from '@/components/seo/JsonLd';
import { jsonLdService, jsonLdFAQ } from '@/lib/seo';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props) {
  const svc = services.find((s) => s.slug === params.slug);
  return {
    title: svc ? `${svc.title} — CosmaGuard` : 'Servicio — CosmaGuard',
    description: svc?.excerpt ?? 'Servicio de ciberseguridad',
  };
}

export default function ServicePage({ params }: Props) {
  const svc = services.find((s) => s.slug === params.slug);
  if (!svc) return notFound();

  const ldService = jsonLdService({
    name: svc.title,
    description: svc.excerpt,
    category: 'CybersecurityService',
  });
  const ldFAQ = jsonLdFAQ(svc.faqs ?? []);

  return (
    <>
      <Navbar />
      <main className="pt-[var(--nav-h)]">
        <ServiceView vm={svc} />
      </main>
      <Footer />
      <JsonLd data={ldService} />
      <JsonLd data={ldFAQ} />
    </>
  );
}
