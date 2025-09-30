import Link from 'next/link';
import { services } from '@/data/services';
import { Card } from '@/components/ui/Card';
import {
  type LucideIcon,
  ShieldCheck,
  Radar,
  FileCheck,
  Target,
  GraduationCap,
  CircuitBoard,
  Scale,
  Server,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  Radar,
  FileCheck,
  Target,
  GraduationCap,
  CircuitBoard,
  Scale,
  Server,
};

export default function ServicesGrid() {
  return (
    <section className="mx-auto mt-4 max-w-7xl px-4 pb-8">
      <h2 className="text-center text-2xl font-bold md:text-3xl">Servicios</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-white/70">
        Selección de servicios productizados para necesidades reales. Informe claro, priorización y retest.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon: LucideIcon = ICONS[s.icon ?? 'ShieldCheck'] ?? ShieldCheck;

          return (
            <Card key={s.slug} className="flex flex-col overflow-hidden">
              <div className="flex items-center gap-2 p-4">
                <Icon className="size-5 text-cyan-400" />
                <h3 className="text-base font-semibold">{s.title}</h3>
              </div>

              <p className="px-4 text-sm text-white/70">{s.excerpt}</p>

              <ul className="mt-3 space-y-1 px-6 pb-4 text-sm text-white/70">
                {s.bullets.slice(0, 3).map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="mt-auto border-t border-white/10 p-4">
                <Link
                  href={`/servicios/${s.slug}`}
                  className="text-sm text-cyan-400 hover:underline"
                >
                  Ver detalle →
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
