import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import JsonLd from '@/components/seo/JsonLd';
import { jsonLdService } from '@/lib/seo';

export const metadata = {
  title: 'Fintech & Payments — SecuritySpace',
  description:
    'Seguridad aplicada a fintech/pagos: API security, fraude, cumplimiento y hardening continuo para plataformas en crecimiento.',
};

const pains = [
  'Exposición de APIs/servicios y credenciales por malas prácticas CI/CD.',
  'Riesgos en flujos de autenticación/autorización (MFA, token leakage).',
  'Cumplimiento y evidencias (auditorías, revisiones de terceros).',
  'Fraude/abusos en onboarding y transaccional (bypass de controles).',
];

const solutions = [
  'Pentest Web/API orientado a flujos de negocio críticos (pagos, KYC/KYB).',
  'ASM continuo para detectar exposición y cambios de superficie.',
  'Revisión de correos (SPF/DKIM/DMARC), cabeceras de seguridad y TLS.',
  'Security awareness y ciberentrenamientos para equipos técnicos.',
  'Playbooks de respuesta y retest para vulnerabilidades críticas.',
];

const kpis = [
  { label: 'Tiempo de entrega de informe', value: '48–72h' },
  { label: 'Retest incluido', value: 'Sí' },
  { label: 'Cobertura', value: 'ES · UE' },
];

export default function FintechPage() {
  const ld = jsonLdService({
    name: 'Seguridad para Fintech & Payments',
    description:
      'Paquetes de seguridad para fintech: pentest de APIs, ASM continuo, awareness y cumplimiento.',
    category: 'FinancialSecurity',
  });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PageHeader
          eyebrow="Industria"
          title="Fintech & Payments"
          subtitle="Paquetes de seguridad centrados en APIs, fraude y cumplimiento. Diseñado para equipos de producto en crecimiento."
          className="pt-8"
        />

        <Section title="Principales retos">
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
                <div className="font-mono text-xs uppercase tracking-wider text-white/60">
                  {k.label}
                </div>
                <div className="font-heading mt-1 text-2xl font-bold">{k.value}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
            <h3 className="font-heading text-xl font-semibold">¿Empezamos por el perímetro?</h3>
            <p className="mt-1 text-white/75">
              Solicita la auditoría pasiva — 0€ en 48–72h. Buen punto de partida para priorizar.
            </p>
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
