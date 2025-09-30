import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
