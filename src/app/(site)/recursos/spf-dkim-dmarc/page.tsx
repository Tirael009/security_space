import Navbar from '@/components/layout/Navbar';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';

export const metadata = {
  title: 'SPF/DKIM/DMARC en 15 minutos — SecuritySpace',
  description: 'Guía rápida para mejorar entregabilidad y evitar suplantaciones.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PageHeader eyebrow="Guía" title="SPF/DKIM/DMARC en 15 minutos" subtitle="Pautas mínimas para una postura de correo saludable." className="pt-8" />
        <Section>
          <ul className="mx-auto max-w-3xl space-y-2 text-white/80">
            <li>• SPF: autoriza solo tus IPs/ESPs; evita `+all`.</li>
            <li>• DKIM: activa firma con clave ≥ 2048 bits.</li>
            <li>• DMARC: política `p=quarantine` → `p=reject` progresiva.</li>
            <li>• Subdominios: políticas separadas si usas varios ESPs.</li>
            <li>• Monitoriza reportes agregados (RUA) y ajusta.</li>
          </ul>
        </Section>
      </main>
    </>
  );
}
