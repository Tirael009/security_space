import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';

export const metadata = {
  title: 'ASM Checklist — SecuritySpace',
  description: 'Primeros pasos para vigilar tu perímetro sin intrusión.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PageHeader eyebrow="Guía" title="ASM Checklist: primeros pasos" subtitle="Crea inventario de activos expuestos y prioriza quick wins." className="pt-8" />
        <Section>
          <ol className="mx-auto max-w-3xl list-decimal space-y-2 pl-6 text-white/80">
            <li>Lista tus dominios y subdominios (incluye históricos).</li>
            <li>Revisa DNS (A/AAAA, MX, TXT) y correo (SPF/DKIM/DMARC).</li>
            <li>Comprueba TLS/HTTPS (protocolos, HSTS, ciphers) y headers.</li>
            <li>Identifica servicios expuestos y versiones.</li>
            <li>Prioriza quick wins por impacto/esfuerzo y define alertas.</li>
          </ol>
        </Section>
      </main>
      <Footer />
    </>
  );
}
