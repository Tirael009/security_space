import Navbar from '@/components/layout/Navbar';
import PageHeader from '@/components/sections/PageHeader';
import Section from '@/components/sections/Section';
import FreeAuditForm from '@/components/forms/FreeAuditForm';

export const metadata = {
  title: 'Auditoría pasiva de perímetro — 0€ · SecuritySpace',
  description:
    'Descubrimos exposición DNS/TLS/Headers, correo (SPF/DKIM/DMARC) y quick wins de hardening. Informe en 48–72h.',
};

export default function FreeAuditPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PageHeader
          eyebrow="Auditoría 0€"
          title="Auditoría pasiva de perímetro (48–72h)"
          subtitle="Descubrimos exposición pública y entregamos quick wins de hardening. Sin pruebas destructivas ni impacto en tus servicios."
          className="pt-8"
        />

        <Section title="¿Qué revisamos?" subtitle="Análisis OSINT sin intrusión ni denegación.">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            <ul className="rounded-2xl bg-white/5 p-5 text-sm text-white/75 ring-1 ring-white/10">
              <li>• Dominios y subdominios (descubrimiento público)</li>
              <li>• DNS (A/AAAA, MX, TXT), correo (SPF/DKIM/DMARC)</li>
              <li>• Certificados TLS/HTTPS (protocolos, HSTS, ciphers)</li>
              <li>• HTTP Security Headers (CSP, SRI, etc.)</li>
              <li>• Exposición de servicios conocidos y quick wins</li>
            </ul>
            <ul className="rounded-2xl bg-white/5 p-5 text-sm text-white/75 ring-1 ring-white/10">
              <li>• Informe PDF con evidencias y priorización</li>
              <li>• Reunión de 20–30 min para walkthrough</li>
              <li>• Recomendaciones por impacto/esfuerzo</li>
              <li>• Siguientes pasos: pentest/QA/conciencia</li>
              <li>• Opcional: retest tras corrección</li>
            </ul>
          </div>
        </Section>

        <Section title="Solicitar auditoría">
          <FreeAuditForm />
        </Section>
      </main>
    </>
  );
}
