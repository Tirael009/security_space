'use client';

import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ShieldCheck, Radar, Code2, GraduationCap, ShieldAlert,
  Network, ServerCog, LockKeyhole, CircuitBoard, FileCheck,
  PanelTop, ShieldHalf, Shield, PanelsTopLeft, ScanLine, ChevronRight, ChevronDown,
} from 'lucide-react';

/* ============================ data ============================ */
type Service = {
  title: string;
  slug: string; // /servicios?focus=slug
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  excerpt: string; // breve descripción visible
};

const SERVICES: Service[] = [
  { title: 'Pruebas de penetración', slug: 'pentest', icon: ShieldCheck, excerpt: 'Ataques realistas sin impacto: web, API, red y móvil.' },
  { title: 'Supervisión del perímetro (CyberWatch)', slug: 'cyberwatch', icon: Radar, excerpt: 'Monitorización continua de la superficie de exposición externa.' },
  { title: 'Evaluación de calidad de software (QA)', slug: 'quality-assessment', icon: FileCheck, excerpt: 'Code review, SAST/DAST y auditoría del SDLC.' },
  { title: 'Ejercicios de ciberseguridad', slug: 'cyber-drills', icon: ShieldHalf, excerpt: 'Tabletop y técnicos: Blue / Red / Purple Team.' },
  { title: 'Security Awareness (portal de concienciación)', slug: 'security-awareness', icon: GraduationCap, excerpt: 'Formación, simulaciones de phishing y reporting.' },
  { title: 'Desarrollo de software', slug: 'software-dev', icon: Code2, excerpt: 'Productos y APIs con arquitectura segura.' },
  { title: 'Diseño e implantación de medidas de seguridad', slug: 'infosec-integration', icon: ShieldAlert, excerpt: 'DLP, EDR/XDR, SIEM, WAF, PAM: selección e integración.' },
  { title: 'Protección de infraestructuras críticas (CII)', slug: 'kii-protection', icon: Network, excerpt: 'Evaluación, segmentación y monitorización OT/ICS.' },
  { title: 'Protección de datos personales (PD)', slug: 'pdn-protection', icon: LockKeyhole, excerpt: 'GDPR/LOPDGDD: inventario, DPIA y controles.' },
  { title: 'Protección de sistemas de información públicos (GIS)', slug: 'gis-protection', icon: PanelsTopLeft, excerpt: 'Modelos de amenaza, control de accesos y trazabilidad.' },
  { title: 'Implantación y soporte de proyectos en 1C', slug: '1c-projects', icon: ServerCog, excerpt: 'Integración segura de 1C en el entorno y CI/CD.' },
  { title: 'Antilocker', slug: 'antilocker', icon: Shield, excerpt: 'Defensa anti-ransomware: detección temprana y aislamiento.' },
  { title: 'Soluciones de Infowatch', slug: 'infowatch', icon: PanelTop, excerpt: 'DLP y prevención de fugas internas.' },
  { title: 'Soluciones de Spacebit', slug: 'spacebit', icon: CircuitBoard, excerpt: 'Protección HW/SW y telemetría en tiempo real.' },
  { title: 'Soluciones de Indid para gestión y protección de accesos', slug: 'indid-access', icon: ScanLine, excerpt: 'Identidad, SSO y autorización end-to-end.' },
  { title: 'Soluciones de Avanpost para autenticación y accesos', slug: 'avanpost', icon: LockKeyhole, excerpt: 'Autenticación fuerte y gobierno de privilegios.' },
  { title: 'Cyber Range', slug: 'cyber-range', icon: Radar, excerpt: 'Entrenamiento SOC/IR con escenarios reales.' },
  { title: 'Cortafuegos para ICS/OT', slug: 'ics-firewall', icon: ShieldAlert, excerpt: 'Segmentación y control de protocolos industriales.' },
  { title: 'Formación', slug: 'training', icon: GraduationCap, excerpt: 'Cursos para devs, admins, CISO y SOC.' },
];

/* топ-8 для десктопа (в порядке важности) */
const PRIMARY_ORDER: string[] = [
  'pentest',
  'cyberwatch',
  'quality-assessment',
  'security-awareness',
  'software-dev',
  'infosec-integration',
  'kii-protection',
  'pdn-protection',
];

/* ============================ Tarjeta ============================ */
const CARD_H = 230; // одинаковая высота

function ServiceCard({ s }: { s: Service }) {
  const Icon = s.icon;
  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl
        border border-sky-500/20 bg-[#070a0a]/80 backdrop-blur ring-1 ring-white/5
        shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
        transition-transform duration-300 hover:-translate-y-0.5
        hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_10px_36px_-10px_rgба(56,189,248,0.25)]
      "
      style={{ height: CARD_H }}
    >
      {/* контуры-градиенты */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-primary via-cyan-400 to-brand-secondary opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 opacity-90" />

      {/* glow + scan-lines */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,0.10),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_10px]" />
      </div>

      <div className="relative z-10 flex h-full flex-col p-5">
        <div className="mb-3 flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-400/5 ring-1 ring-sky-500/25">
            <Icon className="size-5 text-sky-300" />
          </span>
          <h3
            className="font-heading text-[16.5px] font-extrabold leading-snug text-white"
            style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
            title={s.title}
          >
            {s.title}
          </h3>
        </div>

        <p
          className="mt-1 text-[14.5px] leading-relaxed text-white/80"
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: 44 }}
          title={s.excerpt}
        >
          {s.excerpt}
        </p>

        <div className="mt-auto pt-4">
          <Link
            href={`/servicios?focus=${encodeURIComponent(s.slug)}`}
            className="inline-flex items-center gap-2 rounded-lg border border-sky-500/30 bg-sky-400/5 px-3 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-400/10"
            aria-label={`Más detalles: ${s.title}`}
          >
            Más detalles… <ChevronRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ============================ Carrusel móvil (без паузы) ============================ */
function MobileMarquee({ items, speed = 44 }: { items: Service[]; speed?: number }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const xRef = useRef(0);
  const wRef = useRef(0);
  const runningRef = useRef(true);
  const pointerIdRef = useRef<number | null>(null);
  const dragRef = useRef({ primed: false, dragging: false, startX: 0, startVal: 0 });

  const doubled = useMemo(() => items.concat(items), [items]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => (wRef.current = track.scrollWidth / 2);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    let rafId = 0, last = performance.now();
    const step = () => {
      rafId = requestAnimationFrame(step);
      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;
      if (runningRef.current && !dragRef.current.dragging) xRef.current -= speed * dt;
      const limit = wRef.current;
      if (limit > 0) {
        if (xRef.current <= -limit) xRef.current += limit;
        if (xRef.current >= 0) xRef.current -= limit;
      }
      if (trackRef.current) trackRef.current.style.transform = `translate3d(${xRef.current}px,0,0)`;
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  useEffect(() => {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    const DRAG_THRESHOLD = 6;
    const isInteractive = (el: Element) => !!el.closest('a,button,input,textarea,select,[role="button"]');

    const onPointerDown = (e: PointerEvent) => {
      if (isInteractive(e.target as Element)) return;
      dragRef.current = { primed: true, dragging: false, startX: e.clientX, startVal: xRef.current };
      pointerIdRef.current = e.pointerId;
      runningRef.current = true;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragRef.current.primed) return;
      const dx = e.clientX - dragRef.current.startX;
      if (!dragRef.current.dragging && Math.abs(dx) > DRAG_THRESHOLD) {
        dragRef.current.dragging = true;
        if (pointerIdRef.current != null) wrap.setPointerCapture(pointerIdRef.current);
        runningRef.current = false;
      }
      if (dragRef.current.dragging) xRef.current = dragRef.current.startVal + dx;
    };
    const endDrag = (e: PointerEvent) => {
      if (dragRef.current.dragging && pointerIdRef.current != null) wrap.releasePointerCapture(pointerIdRef.current);
      dragRef.current = { primed: false, dragging: false, startX: 0, startVal: 0 };
      pointerIdRef.current = null;
      runningRef.current = true;
    };

    wrap.addEventListener('pointerdown', onPointerDown);
    wrap.addEventListener('pointermove', onPointerMove);
    wrap.addEventListener('pointerup', endDrag);
    wrap.addEventListener('pointercancel', endDrag);
    return () => {
      wrap.removeEventListener('pointerdown', onPointerDown);
      wrap.removeEventListener('pointermove', onPointerMove);
      wrap.removeEventListener('pointerup', endDrag);
      wrap.removeEventListener('pointercancel', endDrag);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative select-none overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0b0e11]/90 to-black/90 py-4 touch-pan-y md:hidden"
      aria-label="Lista de servicios: carrusel continuo (móvil)"
    >
      <div ref={trackRef} className="relative z-20 flex h-[300px] items-center" style={{ willChange: 'transform' }}>
        {doubled.map((s, i) => (
          <div key={`${s.slug}-${i}`} className="mx-3 w-[320px]">
            <ServiceCard s={s} />
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-30"
        style={{ background: 'radial-gradient(110% 80% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.10) 60%, rgba(0,0,0,0.22) 100%)' }}
      />
    </div>
  );
}

/* ============================ Grid desktop con “Ver más” ============================ */
function DesktopGrid({ items }: { items: Service[] }) {
  const [expanded, setExpanded] = useState(false);

  const primary: Service[] = useMemo(() => {
    const map = new Map(items.map((it) => [it.slug, it]));
    return PRIMARY_ORDER.map((slug) => map.get(slug)!).filter(Boolean);
  }, [items]);

  const rest: Service[] = useMemo(
    () => items.filter((it) => !PRIMARY_ORDER.includes(it.slug)),
    [items]
  );

  const moreCount = rest.length;

  // фиксируем число колонок: 1 / 2 / 3 / 4 и НЕ больше 4 даже на очень широких экранах
  const gridCols =
    'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4';

  return (
    <div className="hidden md:block">
      {/* 8 ключевых */}
      <div className={gridCols}>
        {primary.map((s) => (
          <ServiceCard key={s.slug} s={s} />
        ))}
      </div>

      {/* скрытая часть — плавно “выплывает” */}
      <div className={`mt-6 grid transition-all duration-500 ease-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className={gridCols}>
            {rest.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </div>

      {/* кнопка */}
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-400/5 px-4 py-2.5 text-sm font-medium text-sky-200 transition hover:bg-sky-400/10"
          aria-expanded={expanded}
          aria-controls="more-services"
        >
          {expanded ? 'Ver menos' : `Ver más servicios (${moreCount})`}
          <ChevronDown className={`size-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
}

/* ============================ Section ============================ */
export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="
        mx-auto mt-16 max-w-7xl scroll-mt-[var(--nav-h)] px-4
        mb-24 md:mb-22  /* БОЛЬШОЙ отступ снизу секции */
        pb-2           /* небольшой внутренний нижний паддинг */
      "
      aria-labelledby="services-title"
    >
      <header className="mx-auto mb-6 max-w-4xl text-center md:mb-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">Servicios y soluciones</div>
        <h2 id="services-title" className="font-heading mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Ciberseguridad práctica para tu negocio
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-white/75">
          Todo lo necesario: desde pentesting y concienciación hasta protección de CII y la integración de soluciones de nuestros partners.
        </p>
      </header>

      {/* móvil: carrusel; desktop: 8 карточек + раскрытие (фиксированные колонки: 1/2/3/4) */}
      <MobileMarquee items={SERVICES} />
      <DesktopGrid items={SERVICES} />
    </section>
  );
}
