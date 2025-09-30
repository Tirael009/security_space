// src/app/servicios/page.tsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import Link from 'next/link';
import { services } from '@/data/services';
import { ShieldCheck, Radar, FileCheck } from 'lucide-react';

export const metadata = {
  title: 'Servicios — CosmaGuard',
  description:
    'Pentest, ASM y QA para empresas en España y la UE. Entregables claros y retest incluido.',
};

const ICONS = {
  pentest: ShieldCheck,
  asm: Radar,
  qa: FileCheck,
} as const;

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-[var(--nav-h)]">
        <PageHeader
          eyebrow="Servicios"
          title="Servicios de ciberseguridad"
          subtitle="Paquetes claros, entregables accionables y retest incluido."
          className="pt-8"
        />

        <Section>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="
                    group relative flex h-full flex-col overflow-hidden rounded-2xl
                    border border-white/10 bg-white/5 ring-1 ring-white/5
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
                    transition-transform duration-300 hover:-translate-y-0.5
                  "
                  style={{ minHeight: 220 }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 opacity-90" />
                  <div className="relative z-10 flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-start gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-400/5 ring-1 ring-emerald-300/20">
                        <Icon className="size-5 text-emerald-300" />
                      </span>
                      <h3
                        className="font-heading text-[16.5px] font-extrabold leading-snug text-white"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          minHeight: 44,
                        }}
                      >
                        {s.title}
                      </h3>
                    </div>

                    <p
                      className="mt-1 text-[14.5px] leading-relaxed text-white/80"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: 66,
                      }}
                    >
                      {s.excerpt}
                    </p>

                    <div className="mt-auto pt-4 text-sm text-cyan-300 group-hover:text-cyan-200">
                      Ver servicio →
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-emerald-300 via-cyan-400 to-emerald-300 opacity-90" />
                </Link>
              );
            })}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
