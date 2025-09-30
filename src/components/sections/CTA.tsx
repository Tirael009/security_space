import { Button } from '@/components/ui/Button';

export default function CTA() {
  return (
    <section className="mx-auto my-10 max-w-7xl px-4">
      <div className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
        <h3 className="text-xl font-semibold">Auditoría pasiva de perímetro — 0€</h3>
        <p className="mt-1 text-white/70">
          Recibe un informe con quick wins en 48–72h. Sin pruebas destructivas.
        </p>
        <div className="mt-4">
          <Button href="/auditoria-gratuita">Solicitar ahora</Button>
        </div>
      </div>
    </section>
  );
}
