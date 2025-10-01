import Hero from '@/components/sections/Hero';
import PartnersMarquee from '@/components/sections/PartnersMarquee';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <PartnersMarquee />
        <ServicesGrid />
        <Process />
        <CTA />
        <Contact />
      </main>
    </>
  );
}
