import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import Link from 'next/link';

const services = [
  { href: '/servicios/pentest', title: 'Pentest Web/API', desc: 'OWASP, PoC reproducibles, informe 48–72h y retest.' },
  { href: '/servicios/attack-surface-monitoring', title: 'ASM (Perímetro)', desc: 'Inventario y vigilancia continua de exposición.' },
  { href: '/servicios/quality-assessment', title: 'QA de software', desc: 'Revisión de dependencias, CI/CD y configuración.' },
];

export const metadata = {
  title: 'Servicios — SecuritySpace',
  description: 'Pentest, ASM y QA para fintech y lead-gen en España y la UE.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        <PageHeader eyebrow="Servicios" title="Servicios de ciberseguridad" subtitle="Paquetes claros, entregables accionables y retest incluido." className="pt-8" />
        <Section>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10">
                <h3 className="font-heading text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/75">{s.desc}</p>
                <span className="mt-3 inline-block text-xs text-white/60">Ver servicio →</span>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
