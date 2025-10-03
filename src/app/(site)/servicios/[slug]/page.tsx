// src/app/servicios/[slug]/page.tsx
import ServiceView from '@/components/sections/ServiceView';
import { services } from '@/data/services';
import JsonLd from '@/components/seo/JsonLd';
import { jsonLdService, jsonLdFAQ } from '@/lib/seo';
import { notFound } from 'next/navigation';
import NeuralNetBg from '@/components/visuals/NeuralNetBg';
import OrbitBg from '@/components/visuals/OrbitBg';

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
      <main className="relative overflow-x-clip">
        {/* Fondo tecnológico coherente con la home */}
        <NeuralNetBg />
        <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(70%_55%_at_50%_30%,rgba(0,0,0,.35),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-black/70" aria-hidden="true" />

        {/* Halo orbital sutil bajo el hero */}
        <div className="absolute inset-0 -z-20 opacity-60">
          <OrbitBg />
        </div>

        <ServiceView vm={svc} />
      </main>
      <JsonLd data={ldService} />
      <JsonLd data={ldFAQ} />
    </>
  );
}
