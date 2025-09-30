import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import Link from 'next/link';

export const metadata = {
  title: 'Contacto — SecuritySpace',
  description: 'Hablemos sobre tu superficie, APIs o entregabilidad.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        <PageHeader eyebrow="Contacto" title="Contacto" subtitle="Cuéntanos tu contexto y priorizamos juntos." className="pt-8" />
        <Section>
          <div className="mx-auto max-w-3xl space-y-3 text-white/80">
            <div>Correo: <a className="underline" href="mailto:hello@securityspace.es">hello@securityspace.es</a></div>
            <div>
              ¿Prefieres empezar sin riesgo?{' '}
              <Link href="/auditoria-gratuita" className="underline">Auditoría pasiva 0€</Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
