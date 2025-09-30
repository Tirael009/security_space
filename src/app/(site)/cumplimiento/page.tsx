import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';

export const metadata = {
  title: 'Cumplimiento — SecuritySpace',
  description: 'RGPD/LOPDGDD, seguridad por diseño y evidencias de auditoría.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        <PageHeader eyebrow="Cumplimiento" title="RGPD / LOPDGDD" subtitle="Buenas prácticas, privacidad y evidencias para auditorías." className="pt-8" />
        <Section title="Qué cubrimos">
          <ul className="mx-auto max-w-4xl space-y-2 text-white/80">
            <li>• Revisión mínima de datos personales en flujos y formularios.</li>
            <li>• DPA/SCC: asesoramiento básico y controles técnicos.</li>
            <li>• Correo: SPF/DKIM/DMARC, anti-spoofing y entregabilidad.</li>
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}
