// src/components/sections/ServiceView.tsx
'use client';

import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import FAQ, { type QA } from '@/components/sections/FAQ';
import Link from 'next/link';
import { CheckCircle2, Info, CalendarClock, ArrowRight } from 'lucide-react';

export type ServiceVM = {
  title: string;
  hero: { eyebrow?: string; subtitle: string };
  intro?: string;
  deliverables: string[];
  methodology: string[];
  timelines: { label: string; value: string }[];
  requirements: string[];
  faqs?: QA[];
};

export default function ServiceView({ vm }: { vm: ServiceVM }) {
  const { title, hero, intro, deliverables, methodology, timelines, requirements, faqs } = vm;

  return (
    <>
      {/* Hero-заголовок сервиса */}
      <Section className="pt-8 md:pt-12">
        <PageHeader eyebrow={hero.eyebrow ?? 'Servicio'} title={title} subtitle={hero.subtitle} />
      </Section>

      {/* Короткое интро — улучшенная типографика */}
      {intro ? (
        <Section>
          <div className="mx-auto max-w-3xl text-pretty leading-relaxed text-white/85 md:text-lg">
            {intro}
          </div>
        </Section>
      ) : null}

      {/* Что получите + как работаем */}
      <Section title="Qué obtendrás" subtitle="Entregables claros y prácticos, без воды.">
        <div className="grid gap-6 md:grid-cols-2">
          <InfoBox title="Entregables" icon={<CheckCircle2 className="size-5 text-emerald-300" />}>
            <BulletList items={deliverables} />
          </InfoBox>

          <InfoBox title="Metodología" icon={<Info className="size-5 text-cyan-300" />}>
            <BulletList items={methodology} />
          </InfoBox>
        </div>
      </Section>

      {/* Сроки / формат работ */}
      {timelines?.length ? (
        <Section title="Plazos orientativos" subtitle="Под конкретный объём и контур скорректируем план.">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {timelines.map((t) => (
              <StatCard key={t.label} label={t.label} value={t.value} />
            ))}
          </div>
        </Section>
      ) : null}

      {/* Что потребуется от заказчика */}
      {requirements?.length ? (
        <Section title="Requisitos previos">
          <InfoBox>
            <BulletList items={requirements} compact />
          </InfoBox>
        </Section>
      ) : null}

      {/* FAQ */}
      {faqs?.length ? (
        <Section title="FAQ">
          <FAQ items={faqs} />
        </Section>
      ) : null}

      {/* Финальный призыв — аккуратная карточка */}
      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="max-w-[36rem]">
              <h3 className="text-lg font-semibold">¿Listo para empezar?</h3>
              <p className="mt-1 text-sm text-white/70">
                Запросите бесплатную мини-аудиторию: проверим контур, подготовим план и оценку сроков/стоимости.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/contacto#auditoria"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white text-black hover:bg-white/90 px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
              >
                Solicitar auditoría 0€ <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-sm text-white/80"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ======================= UI bits ======================= */

function InfoBox({
  title,
  icon,
  children,
}: {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur">
      {title ? (
        <div className="mb-3 flex items-center gap-2">
          {icon ? <span className="inline-flex items-center justify-center">{icon}</span> : null}
          <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        </div>
      ) : null}
      {children}
    </div>
  );
}

function BulletList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  if (!items?.length) return null;
  return (
    <ul className={compact ? 'space-y-1.5' : 'space-y-2.5 md:space-y-2'}>
      {items.map((text) => (
        <li key={text} className="pl-5 text-white/85 before:absolute relative before:-ml-5 before:mr-2 before:mt-[0.5em] before:inline-block before:size-[6px] before:translate-y-[-1px] before:rounded-full before:bg-emerald-300/80">
          {text}
        </li>
      ))}
    </ul>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center ring-1 ring-white/10">
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/60">
        <CalendarClock className="size-3.5" /> {label}
      </div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
    </div>
  );
}
