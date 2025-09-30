import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';

export const metadata = {
  title: 'Nosotros — SecuritySpace',
  description: 'Quiénes somos y cómo trabajamos.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        <PageHeader eyebrow="Nosotros" title="Equipo y misión" className="pt-8" />
        <Section>
          <div className="mx-auto max-w-3xl text-white/80">
            Trabajamos con enfoque práctico y entregables accionables para producto y negocio.
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
