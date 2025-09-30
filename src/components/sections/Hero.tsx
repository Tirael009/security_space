'use client';

import { Button } from '@/components/ui/Button';
import NeuralNetBg from '@/components/visuals/NeuralNetBg';
import { ShieldCheck, FileText, RotateCcw, Fingerprint } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative isolate min-h-[calc(100dvh-var(--nav-h))] pt-[var(--nav-h)]"
      aria-label="Ciberseguridad para empresas"
    >
      {/* Fondo */}
      <NeuralNetBg />

      {/* Dim local para legibilidad */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_40%,rgba(0,0,0,.45),transparent_70%)]"
      />

      {/* Degradado inferior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/60"
      />

      <div className="relative mx-auto flex min-h-[calc(100dvh-var(--nav-h))] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="w-full space-y-7 md:space-y-10 lg:space-y-12">
          {/* Kicker (оставляю) */}
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70">
            Ciberseguridad B2B <span className="opacity-40">•</span> Pentest
            <span className="opacity-40">•</span> ASM
            <span className="opacity-40">•</span> Respuesta
          </p>

          {/* H1 — “Безопасное цифровое будущее” на испанском */}
          <h1 className="mx-auto max-w-[52rem] text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">
              Futuro digital
            </span>{' '}
            seguro.
          </h1>

          {/* Sub — про MSSP и F.A.C.C.T. ASM */}
          <p className="mx-auto max-w-[48rem] text-pretty text-base text-white/80 md:text-lg">
            Somos el <strong>primer MSSP en España</strong> que integra las soluciones
            <br className="hidden sm:block" />
            <strong>F.A.C.C.T. Attack Surface Management</strong>.
            Visibilidad continua del perímetro y priorización de riesgos, alineados con OWASP, NIST, ENS e ISO&nbsp;27001.
          </p>

          {/* Chips: scroll en móvil, grid en desktop */}
          <ul
            className="
              mx-auto flex max-w-4xl gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2
              [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]
              md:grid md:grid-cols-4 md:overflow-visible md:[mask-image:none]
            "
          >
            <li className="snap-center shrink-0 min-w-[16rem] rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 md:min-w-0 md:snap-none">
              <div className="flex items-center justify-center gap-2">
                <Fingerprint className="size-5 text-emerald-300" />
                <span className="text-sm font-semibold">Hackers éticos · NDA</span>
              </div>
            </li>

            <li className="snap-center shrink-0 min-w-[16rem] rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 md:min-w-0 md:snap-none">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="size-5 text-emerald-300" />
                <span className="text-sm font-semibold">Metodologías OWASP / NIST</span>
              </div>
            </li>

            <li className="snap-center shrink-0 min-w-[16rem] rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 md:min-w-0 md:snap-none">
              <div className="flex items-center justify-center gap-2">
                <FileText className="size-5 text-emerald-300" />
                <span className="text-sm font-semibold">Informe ejecutivo + técnico</span>
              </div>
            </li>

            <li className="snap-center shrink-0 min-w-[16rem] rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 md:min-w-0 md:snap-none">
              <div className="flex items-center justify-center gap-2">
                <RotateCcw className="size-5 text-emerald-300" />
                <span className="text-sm font-semibold">Retest incluido (validación)</span>
              </div>
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              className="bg-white text-black hover:bg-white/90 focus:ring-2 focus:ring-emerald-300/40"
              data-cta="audit"
              aria-label="Solicitar auditoría gratuita"
            >
              Solicitar auditoría 0€
            </Button>
            <Button href="/servicios" variant="ghost" aria-label="Ver todos los servicios">
              Ver servicios
            </Button>
          </div>

          {/* Badges */}
          <ul className="mx-auto -mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/55">
            <li>OWASP</li>
            <li>NIST</li>
            <li>ENS</li>
            <li>ISO 27001</li>
          </ul>

          {/* Microcopy */}
          <p className="mx-auto max-w-xl text-xs text-white/60">
            Respuesta &lt; 24&nbsp;h laborables. Plan de pruebas coordinado y PoC reproducibles en cada hallazgo crítico.
          </p>
        </div>

        {/* Indicador de scroll */}
        <a
          href="#services"
          className="group absolute inset-x-0 bottom-4 mx-auto w-max rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur transition hover:bg-white/10"
          aria-label="Desplazar a servicios"
        >
          Desplazar a servicios
          <span className="ml-2 inline-block translate-y-0 animate-bounce rounded-full border border-white/15 px-2 py-[2px] text-white/70">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
