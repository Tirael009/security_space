import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props) {
  const svc = services.find((s) => s.slug === params.slug);
  return {
    title: svc ? `${svc.title} — SecuritySpace` : 'Servicio — SecuritySpace',
    description: svc?.excerpt ?? 'Servicio de ciberseguridad',
  };
}

export default function ServicePage({ params }: Props) {
  const svc = services.find((s) => s.slug === params.slug);
  if (!svc) return notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold">{svc.title}</h1>
        <p className="mt-2 text-white/80">{svc.excerpt}</p>

        <div className="mt-6 space-y-2">
          {svc.bullets.map((b) => (
            <div key={b} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <span className="text-sm">{b}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
