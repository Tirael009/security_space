import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import Link from 'next/link';

const posts = [
  {
    slug: 'asm-checklist',
    title: 'ASM Checklist: primeros pasos para vigilar tu perímetro',
    excerpt: 'Cómo empezar con el inventario de activos expuestos sin romper nada.',
  },
  {
    slug: 'preparar-un-pentest',
    title: 'Cómo preparar un pentest (sin dolor)',
    excerpt: 'ROE, entornos, credenciales y ventanas para un test eficaz.',
  },
  {
    slug: 'spf-dkim-dmarc',
    title: 'SPF/DKIM/DMARC en 15 minutos',
    excerpt: 'Guía rápida para mejorar la entregabilidad y evitar suplantaciones.',
  },
];

export const metadata = {
  title: 'Recursos — SecuritySpace',
  description: 'Guías y artículos prácticos para fortalecer tu postura de seguridad.',
};

export default function RecursosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PageHeader eyebrow="Recursos" title="Guías prácticas" subtitle="Material accionable para priorizar y mejorar rápido." className="pt-8" />
        <Section>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {posts.map((p) => (
              <Link key={p.slug} href={`/recursos/${p.slug}`} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10">
                <h3 className="font-heading text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75">{p.excerpt}</p>
                <span className="mt-3 inline-block text-xs text-white/60">Leer →</span>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
