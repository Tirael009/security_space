import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';

export const metadata = {
  title: 'Casos — SecuritySpace',
  description: 'Resultados resumidos de proyectos reales.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        <PageHeader eyebrow="Casos" title="Historias de clientes" subtitle="Contexto → acción → resultado. Métricas y quick wins." className="pt-8" />
        <Section>
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-white/75">
            Próximamente: 2–3 casos con métricas (antes/después).
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
