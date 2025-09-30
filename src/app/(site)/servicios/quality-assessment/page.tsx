import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import FAQ, { type QA } from '@/components/sections/FAQ';
import JsonLd from '@/components/seo/JsonLd';
import { jsonLdService, jsonLdFAQ } from '@/lib/seo';

export const metadata = {
  title: 'QA de software — SecuritySpace',
  description:
    'Revisión de seguridad y calidad: dependencias, CI/CD, configuración cloud, arquitectura y código clave. Informe claro y plan de acción.',
};

const entregables = [
  'Informe ejecutivo + técnico con riesgos y plan de acción.',
  'Revisión de dependencias y políticas de actualización.',
  'Análisis de secrets y configuraciones (env, build, repos).',
  'Chequeo de CI/CD, permisos y pasos inseguros.',
  'Revisión de arquitectura y controles (auth, roles, logs).',
];

const metodologia = [
  'Entrevista inicial y definición de alcance (repos, servicios).',
  'Análisis estático y dinámico de puntos críticos.',
  'Revisión manual focalizada y validación de hallazgos.',
  'Priorización por riesgo/impacto y quick wins.',
];

const factoresPrecio = [
  'Nº de repos/servicios, tamaño y stack.',
  'Profundidad requerida (code review, IaC, cloud).',
  'Integraciones con CI/CD y acceso a entornos.',
];

const faqs: QA[] = [
  { q: '¿Es lo mismo que un pentest?', a: 'No. QA evalúa la calidad/seguridad del ciclo de desarrollo y la configuración, no necesariamente vulnera activos en ejecución.' },
  { q: '¿Qué necesitáis?', a: 'Acceso de solo lectura a repos y pipelines, y un contacto técnico para dudas.' },
  { q: '¿Incluye remediación?', a: 'Incluye recomendaciones y priorización; la ejecución de cambios puede presupuestarse aparte.' },
];

export default function QAPage() {
  const ldService = jsonLdService({
    name: 'QA de software',
    description: 'Revisión de seguridad y calidad de software y pipelines.',
    category: 'SoftwareSecurity',
  });
  const ldFAQ = jsonLdFAQ(faqs);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PageHeader
          eyebrow="Servicio"
          title="QA de software"
          subtitle="Diagnóstico claro de riesgos técnicos: dependencias, CI/CD, configuración cloud y arquitectura."
          className="pt-8"
        />

        <Section title="¿Qué entregamos?">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <h3 className="font-semibold">Entregables</h3>
              <ul className="mt-2 space-y-2 text-sm text-white/75">
                {entregables.map((e) => <li key={e}>• {e}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <h3 className="font-semibold">Metodología</h3>
              <ul className="mt-2 space-y-2 text-sm text-white/75">
                {metodologia.map((m) => <li key={m}>• {m}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Plazos & Alcance">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"><div className="text-sm text-white/75"><b>Tiempo típico:</b> 3–7 días según alcance.</div></div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"><div className="text-sm text-white/75"><b>Requisitos:</b> acceso a repos/CI y contacto técnico.</div></div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm text-white/75"><b>Precio orientativo:</b>
                <ul className="mt-2 space-y-1">{factoresPrecio.map((f)=> <li key={f}>• {f}</li>)}</ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title="FAQ">
          <FAQ items={faqs} />
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
            <h3 className="font-heading text-xl font-semibold">¿Empezamos por algo rápido?</h3>
            <p className="mt-1 text-white/75">Auditoría pasiva de perímetro — 0€ en 48–72h.</p>
            <div className="mt-4">
              <a href="/auditoria-gratuita" className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black">
                Auditoría 0€
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <JsonLd data={ldService} />
      <JsonLd data={ldFAQ} />
    </>
  );
}
