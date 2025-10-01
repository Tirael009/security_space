import Navbar from '@/components/layout/Navbar';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import FAQ, { type QA } from '@/components/sections/FAQ';
import JsonLd from '@/components/seo/JsonLd';
import { jsonLdService, jsonLdFAQ } from '@/lib/seo';

export const metadata = {
  title: 'ASM — Análisis de superficie de ataque · SecuritySpace',
  description:
    'Descubrimos y monitorizamos activos expuestos: dominios, subdominios, servicios y configuraciones débiles. Alertas y quick wins con priorización.',
};

const entregables = [
  'Inventario vivo de dominios/subdominios y servicios expuestos.',
  'Detección de configuraciones débiles (TLS/Headers/DNS/Correo).',
  'Panel de quick wins con impacto/Esfuerzo y priorización.',
  'Alertas cuando cambie la superficie (nuevos hosts/servicios).',
  'Informe mensual resumido para negocio + detalle técnico.',
];

const metodologia = [
  'Descubrimiento OSINT continuo (passive + certificados + DNS).',
  'Fingerprints de servicios y evaluación de riesgo no intrusiva.',
  'Verificación manual de outliers y correlación.',
  'Recomendaciones accionables y validación post-fix (recheck).',
];

const factoresPrecio = [
  'Número de dominios/activos y frecuencia de escaneo.',
  'Integraciones (SIEM/Ticketing) y SLAs de alerta.',
  'Necesidad de validación manual ampliada.',
];

const faqs: QA[] = [
  { q: '¿Es intrusivo el ASM?', a: 'No; usamos principalmente OSINT y técnicas no intrusivas. No realizamos DoS ni explotación.' },
  { q: '¿Qué gano si ya tengo pentest?', a: 'ASM cubre el hueco entre pentests: vigila cambios y exposiciones nuevas para reaccionar rápido.' },
  { q: '¿En cuánto tiempo se configura?', a: 'Normalmente 1–3 días para puesta en marcha inicial (según alcance).' },
];

export default function ASMPage() {
  const ldService = jsonLdService({
    name: 'Attack Surface Monitoring (ASM)',
    description: 'Inventario y vigilancia de activos expuestos con quick wins y alertas.',
  });
  const ldFAQ = jsonLdFAQ(faqs);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PageHeader
          eyebrow="Servicio"
          title="ASM — Análisis de superficie de ataque"
          subtitle="Inventario continuo de activos expuestos y quick wins priorizados. Ideal para equipos con cambios frecuentes."
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
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm text-white/75">
                <b>Puesta en marcha:</b> 1–3 días; primer resumen en la primera semana.
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm text-white/75">
                <b>Requisitos:</b> dominios en alcance y contacto técnico para integrar alertas.
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm text-white/75">
                <b>Precio orientativo:</b>
                <ul className="mt-2 space-y-1">
                  {factoresPrecio.map((f) => <li key={f}>• {f}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title="FAQ">
          <FAQ items={faqs} />
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
            <h3 className="font-heading text-xl font-semibold">¿Quieres probar sin riesgo?</h3>
            <p className="mt-1 text-white/75">
              Solicita la auditoría pasiva de perímetro — 0€ en 48–72h.
            </p>
            <div className="mt-4">
              <a href="/auditoria-gratuita" className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black">
                Auditoría 0€
              </a>
            </div>
          </div>
        </Section>
      </main>

      {/* JSON-LD */}
      <JsonLd data={ldService} />
      <JsonLd data={ldFAQ} />
    </>
  );
}
