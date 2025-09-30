import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import JsonLd from '@/components/seo/JsonLd';
import { jsonLdService } from '@/lib/seo';

export const metadata = {
  title: 'Lead-gen & Marketing — SecuritySpace',
  description:
    'Seguridad para plataformas de generación de leads: privacidad, correo (SPF/DKIM/DMARC), hardening de landings y protección de formularios/CRM.',
};

const pains = [
  'Filtraciones de datos personales (formularios, CRM, integraciones terceras).',
  'Baja entregabilidad de emails por mala configuración SPF/DKIM/DMARC.',
  'Exposición de subdominios/lp antiguas y fugas de keys en front.',
  'Bots y spam en formularios, abuso de cupones/flows.',
];

const solutions = [
  'Auditoría de landings y pipelines (front → API → CRM/ESP).',
  'Revisión y corrección de SPF/DKIM/DMARC + políticas de subdominios.',
  'ASM para vigilar superficie (subdominios, servicios olvidados).',
  'Endurecimiento de formularios (tokens, rate-limits, bot-mitigation).',
  'Pentest de integraciones (webhooks, CRMs, ESPs) y retest incluido.',
];

const kpis = [
  { label: 'Informe', value: '48–72h' },
  { label: 'Retest', value: 'Incluido' },
  { label: 'Cobertura', value: 'ES · UE' },
];

export default function LeadgenPage() {
  const ld = jsonLdService({
    name: 'Seguridad para Lead-gen & Marketing',
    description:
      'Privacidad y seguridad para plataformas de leads: correo, superficie de ataque y protección de formularios/CRM.',
    category: 'MarketingSecurity',
  });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PageHeader
          eyebrow="Industria"
          title="Lead-gen & Marketing"
          subtitle="Privacidad, correo y superficie bajo control. Más entregabilidad, menos exposición y abusos."
          className="pt-8"
        />

        <Section title="Retos típicos">
          <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
            {pains.map((p) => (
              <li key={p} className="rounded-2xl bg-white/5 p-5 text-sm text-white/80 ring-1 ring-white/10">
                • {p}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Cómo ayudamos">
          <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
            {solutions.map((s) => (
              <li key={s} className="rounded-2xl bg-white/5 p-5 text-sm text-white/80 ring-1 ring-white/10">
                • {s}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="KPIs">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-2xl bg-white/5 p-5 text-center ring-1 ring-white/10">
                <div className="font-mono text-xs uppercase tracking-wider text-white/60">{k.label}</div>
                <div className="font-heading mt-1 text-2xl font-bold">{k.value}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
            <h3 className="font-heading text-xl font-semibold">¿Empezamos con el perímetro?</h3>
            <p className="mt-1 text-white/75">Auditoría pasiva — 0€ en 48–72h. Priorizamos quick wins.</p>
            <div className="mt-4">
              <a href="/auditoria-gratuita" className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black">
                Auditoría 0€
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <JsonLd data={ld} />
    </>
  );
}
