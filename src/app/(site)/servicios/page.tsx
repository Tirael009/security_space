import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesGrid from '@/components/sections/ServicesGrid';

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mt-8 text-3xl font-bold">Servicios</h1>
          <p className="mt-2 text-white/80">
            Pentest Web/API, ASM, QA de software, ciberentrenamientos, awareness, SOC/SIEM y cumplimiento RGPD/LOPDGDD.
          </p>
        </div>
        <ServicesGrid />
      </main>
      <Footer />
    </>
  );
}
