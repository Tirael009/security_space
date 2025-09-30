import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import Link from 'next/link';

const industries = [
  { href: '/industrias/fintech', title: 'Fintech & Payments', desc: 'API security, fraude y cumplimiento para plataformas en crecimiento.' },
];

export const metadata = {
  title: 'Industrias — SecuritySpace',
  description: 'Soluciones por industria: Fintech & Payments, e-commerce y SaaS.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        <PageHeader eyebrow="Industrias" title="Sectores a los que ayudamos" className="pt-8" />
        <Section>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
            {industries.map((i) => (
              <Link key={i.href} href={i.href} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10">
                <h3 className="font-heading text-lg font-bold">{i.title}</h3>
                <p className="mt-2 text-sm text-white/75">{i.desc}</p>
                <span className="mt-3 inline-block text-xs text-white/60">Ver industria →</span>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
