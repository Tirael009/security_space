// src/components/sections/ServiceView.tsx
'use client';

import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import FAQ, { type QA } from '@/components/sections/FAQ';
import Link from 'next/link';

export type ServiceVM = {
  title: string;
  hero: { eyebrow?: string; subtitle: string };
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

      {/* Entregables + Metodología */}
      <Section title="¿Qué entregamos?" subtitle="Entregables claros y metodología transparente para tu equipo.">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          <Card title="Entregables" items={vm.deliverables} />
          <Card title="Metodología" items={vm.methodology} />
        </div>
      </Section>

      {/* Plazos & Alcance */}
      <Section title="Plazos & Alcance">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
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
            <div className="text-sm text-white/75">
              <b>Precio orientativo:</b>
              <ul className="mt-2 space-y-1">
                {vm.pricingFactors.map((f) => (
                  <li key={f}>• {f}</li>
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
        <div className="mx-auto max-w-3xl rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
          <h3 className="font-heading text-xl font-semibold">
            ¿Quieres empezar con algo rápido?
          </h3>
          <p className="mt-1 text-white/75">
            Auditoría pasiva de perímetro — 0€ en 48–72h.
          </p>
          <div className="mt-4">
            <Link
              href="/auditoria-gratuita"
              className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
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
    <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-2 space-y-2 text-sm text-white/75">
        {items.map((e) => (
          <li key={e}>• {e}</li>
        ))}
      </ul>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
      {children}
    </div>
  );
}

function ListDense({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="text-sm text-white/75">
      <b>{title}:</b>
      <ul className="mt-2 space-y-1">
        {items.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
    </div>
  );
}
