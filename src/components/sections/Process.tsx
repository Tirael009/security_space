// src/components/sections/Process.tsx
'use client';

import React, { memo, useEffect, useRef, useState } from 'react';
import { Check, Shield, Workflow, Wrench } from 'lucide-react';

/* ======================= Fondo de "lluvia" Matrix (sin reinicio) ======================= */
/** Dibujamos en un tamaño base y solo escalamos con setTransform:
 *  el canvas no se redimensiona al expandir tarjetas → la animación no se reinicia.
 */
const MatrixRainBg = memo(function MatrixRainBg({
  colors = ['#38bdf8', '#10b981'], // cyan (sky-400) → emerald-500
  fontSize = 14,
  trailOpacity = 0.09,
  speed = 46,
}: {
  colors?: string[];
  fontSize?: number;
  trailOpacity?: number;
  speed?: number;
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const baseW = Math.max(1, host.clientWidth);
    const baseH = Math.max(1, host.clientHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(baseW * dpr);
    canvas.height = Math.floor(baseH * dpr);
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    const columns = Math.max(1, Math.floor(baseW / fontSize));
    const drops: number[] = Array(columns).fill(1);

    let scaleX = 1, scaleY = 1;
    const updateScale = () => {
      scaleX = host.clientWidth / baseW;
      scaleY = host.clientHeight / baseH;
    };
    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(host);

    // helpers
    const hexToRgb = (h: string) => {
      const m = h.replace('#','').match(/.{1,2}/g);
      if (!m) return [56,189,248] as [number,number,number];
      const [r,g,b] = m.map(x => parseInt(x.length===1?x+x:x,16)) as [number,number,number];
      return [r,g,b];
    };
    const lerp = (a:number,b:number,t:number)=>a+(b-a)*t;
    const grad = (t:number) => {
      const stops = colors.map(hexToRgb);
      const seg = 1/(stops.length-1);
      const i = Math.min(stops.length-2, Math.max(0, Math.floor(t/seg)));
      const lt = (t - i*seg)/seg;
      const [r1,g1,b1] = stops[i];
      const [r2,g2,b2] = stops[i+1];
      const r = Math.round(lerp(r1,r2,lt));
      const g = Math.round(lerp(g1,g2,lt));
      const b = Math.round(lerp(b1,b2,lt));
      return `rgb(${r},${g},${b})`;
    };

    let last = 0;
    let rafId = 0;
    const letters = '01';

    const loop = (now: number) => {
      rafId = requestAnimationFrame(loop);
      if (now - last < speed) return;
      last = now;

      ctx.setTransform(dpr * scaleX, 0, 0, dpr * scaleY, 0, 0);
      ctx.fillStyle = `rgba(0,0,0,${trailOpacity})`;
      ctx.fillRect(0, 0, baseW, baseH);

      for (let i = 0; i < drops.length; i++) {
        const t = drops.length <= 1 ? 0 : i / (drops.length - 1);
        ctx.fillStyle = grad(t);

        const ch = letters[(Math.random() * letters.length) | 0];
        ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > baseH && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    rafId = requestAnimationFrame(loop);

    return () => { cancelAnimationFrame(rafId); ro.disconnect(); };
  }, [colors, fontSize, trailOpacity, speed]);

  return (
    <div ref={hostRef} className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
    </div>
  );
});

/* ================================== Contenido ================================== */
type Step = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  band: string;
  title: string;
  paragraph: string;
  bullets: string[];
};

const STEPS: Step[] = [
  {
    icon: Shield,
    band: 'BUSINESS·IT',
    title: 'Análisis de vulnerabilidades',
    paragraph:
      'Identificamos escenarios realistas de ataque y realizamos pruebas seguras sobre los contornos clave.',
    bullets: [
      'Escaneo + verificación manual',
      'Plan de pruebas de seguridad',
      'Ataque planificado sin impacto',
    ],
  },
  {
    icon: Workflow,
    band: 'BUSINESS·IT',
    title: 'Alineación y contrato',
    paragraph:
      'Fijamos resultados, priorizamos riesgos y acordamos alcance y SLA.',
    bullets: [
      'Resultados y prioridades',
      'Listado de servicios necesarios',
      'Oferta comercial y contrato',
    ],
  },
  {
    icon: Wrench,
    band: 'BUSINESS·IT',
    title: 'Implantación y acompañamiento',
    paragraph:
      'Activamos la protección, formamos al equipo y mantenemos con retests programados.',
    bullets: [
      'Instalación de software/hardware',
      'Formación del personal',
      'Soporte y retest',
    ],
  },
];

/* ================================ UI helpers ================================ */

const CARD_MIN_H = 260;           // ← одинаковая высота карточек
const TITLE_MIN_H = 48;           // ~2 строки
const PARAGRAPH_MIN_H = 66;       // ~3 строки

function NumBadge({ n }: { n: number }) {
  // Номер в градиенте матрицы + аккуратное свечение, без синего
  return (
    <div className="relative grid size-10 place-items-center rounded-full ring-1 ring-white/10 bg-black/70 md:size-11">
      <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent font-mono text-base font-semibold md:text-lg">
        {String(n).padStart(2, '0')}
      </span>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.28),transparent_62%)]" />
    </div>
  );
}

function Collapsible({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

function StepCard({ step, index }: { step: Step; index: number }) {
  const Icon = step.icon;
  const [open, setOpen] = useState(false);

  return (
    <article
      className="
        group relative flex h-full flex-col overflow-hidden rounded-3xl
        border border-white/10 bg-[#070a0a]/80 backdrop-blur
        ring-1 ring-white/5
        shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
        before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] before:bg-[length:100%_10px] before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.25),0_20px_60px_-15px_rgba(16,185,129,0.25)]
      "
      style={{ minHeight: CARD_MIN_H }}
    >
      {/* contorno degradado superior — matriz (cyan→emerald→cyan) */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 opacity-95" />
      {/* contorno degradado inferior */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-emerald-300 via-cyan-400 to-emerald-300 opacity-95" />

      <div className="relative z-10 flex flex-1 flex-col p-6 md:p-7">
        {/* cabecera */}
        <div className="mb-4 flex items-center gap-3">
          <NumBadge n={index + 1} />
          <span className="rounded-md border border-white/10 bg-white/0 px-2 py-0.5 text-[10px] font-medium tracking-[0.18em] text-transparent md:text-[11px] bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 bg-clip-text">
            {step.band}
          </span>
        </div>

        <div className="mb-2 flex items-start gap-3">
          <span className="grid size-10 place-items-center rounded-lg bg-emerald-400/5 ring-1 ring-emerald-300/25">
            <Icon className="size-6 text-emerald-300" />
          </span>
          <h3
            className="font-heading text-xl font-extrabold leading-snug text-white md:text-2xl"
            style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: TITLE_MIN_H }}
            title={step.title}
          >
            {step.title}
          </h3>
        </div>

        <p
          className="text-[14.5px] leading-relaxed text-white/85 md:text-[15px]"
          style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: PARAGRAPH_MIN_H }}
          title={step.paragraph}
        >
          {step.paragraph}
        </p>

        <Collapsible open={open}>
          <ul className="mt-3 space-y-2.5">
            {step.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-white/90">
                <Check className="mt-[2px] size-4 shrink-0 text-emerald-300" />
                <span className="text-[14.5px] leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </Collapsible>

        <div className="mt-4">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-300/5 px-3 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-300/10"
          >
            {open ? 'Ocultar' : 'Más detalles'}
            <svg className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.116l3.71-3.886a.75.75 0 111.08 1.04l-4.24 4.44a.75.75 0 01-1.08 0l-4.24-4.44a.75.75 0 01.02-1.06z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

/* ================================== Sección ================================== */
export default function Process() {
  return (
    <div id="process" className="mx-auto max-w-7xl px-4">
      <div className="mx-auto max-w-6xl">
        {/* cabecera (fuera de la lluvia) */}
        <div className="relative z-20 rounded-t-3xl border border-white/10 border-b-0 bg-[#0b0e11]/90 px-6 py-8 text-center backdrop-blur">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            CÓMO TRABAJAMOS
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/75">
            Análisis → acuerdo → implantación. Informes, priorización por riesgo y retest incluidos.
          </p>
          {/* разделитель также в палитре матрицы */}
          <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400" />
        </div>

        {/* cuerpo con lluvia */}
        <section
          className="relative -mt-px overflow-hidden rounded-b-3xl border border-white/10 bg-black py-12 md:py-16"
          aria-labelledby="process-cards"
        >
          <MatrixRainBg />

          {/* vineta para legibilidad */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                'radial-gradient(120% 90% at 50% 40%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.36) 45%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.06) 85%, rgba(0,0,0,0) 100%)',
            }}
          />

          {/* grid: одинаковая высота за счёт items-stretch + minHeight на карточке */}
          <div className="relative z-20 mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 px-3 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <StepCard key={s.title} step={s} index={i} />
            ))}
          </div>

          <span id="process-cards" className="sr-only">
            Tarjetas del proceso
          </span>
        </section>
      </div>
    </div>
  );
}
