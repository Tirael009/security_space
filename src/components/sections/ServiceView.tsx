// src/components/sections/ServiceView.tsx
'use client';

import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import FAQ, { type QA } from '@/components/sections/FAQ';
import Link from 'next/link';

export type ServiceVM = {
  title: string;
  hero: { eyebrow?: string; subtitle: string };
  intro?: string;
  deliverables: string[];
  methodology: string[];
  timelines: { label: string; value: string }[];
  requirements: string[];
  pricingFactors: string[];
  faqs: QA[];
};

export default function ServiceView({ vm }: { vm: ServiceVM }) {
  return (
    <>
      <PageHeader
        eyebrow={vm.hero.eyebrow ?? 'Servicio'}
        title={vm.title}
        subtitle={vm.hero.subtitle}
        className="pt-8"
      />

      {/* Intro opcional */}
      {vm.intro ? (
        <Section>
          <div className="mx-auto max-w-3xl">
            <div className="h-px w-full bg-gradient-to-r from-cyan-400/30 via-emerald-300/30 to-cyan-400/30" aria-hidden="true" />
            <div className="prose prose-invert mt-6 max-w-none text-white/80">
              {vm.intro.split('\n\n').map((p) => (
                <p key={p} className="leading-relaxed tracking-[0.005em]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      {/* Entregables + Metodología */}
      <Section title="¿Qué entregamos?" subtitle="Entregables claros y metodología transparente para tu equipo.">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          <Card title="Entregables" items={vm.deliverables} />
          <Card title="Metodología" items={vm.methodology} />
        </div>
      </Section>

      {/* Plazos & Alcance */}
      <Section title="Plazos & Alcance">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          <InfoBox>
            <ListDense
              title="Plazos"
              items={vm.timelines.map((t) => `${t.label}: ${t.value}`)}
            />
          </InfoBox>
          <InfoBox>
            <ListDense title="Requisitos" items={vm.requirements} />
          </InfoBox>
          <InfoBox>
            <div className="text-sm text-white/80">
              <b>Precio orientativo:</b>
              <ul className="mt-2 space-y-1.5">
                {vm.pricingFactors.map((f) => (
                  <li key={f} className="pl-5 before:-ml-5 before:mr-2 before:inline-block before:size-1.5 before:translate-y-[-1px] before:rounded-full before:bg-emerald-300/80">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </InfoBox>
        </div>
      </Section>

      {/* FAQ */}
      {vm.faqs?.length ? (
        <Section title="FAQ">
          <FAQ items={vm.faqs} />
        </Section>
      ) : null}

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center ring-1 ring-white/10 backdrop-blur">
          <h3 className="font-heading text-xl font-semibold tracking-tight">
            ¿Quieres empezar con algo rápido?
          </h3>
          <p className="mt-1 text-white/75">
            Auditoría pasiva de perímetro — 0€ en 48–72h.
          </p>
          <div className="mt-4">
            <Link
              href="/auditoria-gratuita"
              className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-12px_rgba(255,255,255,0.35)] transition hover:bg-white/90"
            >
              Auditoría 0€
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ---------- helpers ---------- */
function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 opacity-90" />
      <h3 className="font-heading text-[15px] font-semibold tracking-tight text-white">
        {title}
      </h3>
      <ul className="mt-2 space-y-2 text-sm text-white/80">
        {items.map((e) => (
          <li
            key={e}
            className="pl-5 leading-relaxed before:-ml-5 before:mr-2 before:inline-block before:size-1.5 before:translate-y-[-1px] before:rounded-full before:bg-cyan-300/80"
          >
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-emerald-300 via-cyan-400 to-emerald-300 opacity-90" />
      {children}
    </div>
  );
}

function ListDense({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="text-sm text-white/80">
      <b className="text-white">{title}:</b>
      <ul className="mt-2 space-y-1.5">
        {items.map((f) => (
          <li
            key={f}
            className="pl-5 before:-ml-5 before:mr-2 before:inline-block before:size-1.5 before:translate-y-[-1px] before:rounded-full before:bg-cyan-300/80"
          >
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
