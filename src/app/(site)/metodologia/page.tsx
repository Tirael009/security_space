import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';

export const metadata = {
  title: 'Metodología — SecuritySpace',
  description: 'OWASP / NIST, enfoque por riesgo y entregables claros.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        <PageHeader eyebrow="Metodología" title="Cómo trabajamos" subtitle="Enfoque por riesgo, sin pruebas destructivas por defecto." className="pt-8" />
        <Section title="Principios">
          <ul className="mx-auto max-w-4xl space-y-2 text-white/80">
            <li>• OWASP (Top-10/ASVS) y NIST CSF como base.</li>
            <li>• Pruebas manuales + tooling, con PoC reproducibles.</li>
            <li>• Informe ejecutivo + técnico, quick wins y retest.</li>
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}
