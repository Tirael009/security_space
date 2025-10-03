'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const LOGOS: Logo[] = [
  { src: '/images/partners/EmplDocs_Logo.png', alt: 'EmplDocs', width: 160, height: 60 },
  { src: '/images/partners/Colorful_Logo.png', alt: 'AlfaDoc',   width: 160, height: 60 },
  { src: '/images/partners/AXXoft_Logo.png',   alt: 'Axoft',     width: 160, height: 60 },
  { src: '/images/partners/Huawei_Logo.png',   alt: 'Huawei',    width: 160, height: 60 },
  { src: '/images/partners/Lenovo_Logo.png',   alt: 'Lenovo',    width: 160, height: 60 },
  { src: '/images/partners/Microsoft_Logo.png',alt: 'Microsoft', width: 160, height: 60 },
  { src: '/images/partners/Dr.Web_Logo.png',   alt: 'Dr.Web',    width: 160, height: 60 },
  { src: '/images/partners/Fujitsu_Logo.png',  alt: 'Fujitsu',   width: 160, height: 60 },
  { src: '/images/partners/eset.png',          alt: 'ESET',      width: 160, height: 60 },
  { src: '/images/partners/Positive Technologies_Logo.png', alt: 'Positive Technologies', width: 160, height: 60 },
  { src: '/images/partners/AVANPOST_Logo.png', alt: 'Avanpost',  width: 160, height: 60 },
  { src: '/images/partners/SpaceBit_Logo.png', alt: 'SpaceBit',  width: 160, height: 60 },
  { src: '/images/partners/Facct_Logo.png',    alt: 'FACCT',     width: 160, height: 60 },
];

// дублируем список — вторая половина делает «стык» идентичным и петля получается бесшовной
const DOUBLED = (arr: Logo[]) => arr.concat(arr);

export default function PartnersMarquee() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const xRef = useRef<number>(0);     // текущий translateX
  const halfWRef = useRef<number>(0); // ширина половины (оригинального списка)
  const SPEED = 42; // px/сек

  const items = useMemo(() => DOUBLED(LOGOS), []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      // половина ширины: вся ширина дублированного трека / 2
      halfWRef.current = track.scrollWidth / 2;
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);

    let rafId = 0;
    let last = performance.now();

    const step = () => {
      rafId = requestAnimationFrame(step);
      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;

      xRef.current -= SPEED * dt;

      // бесшовное «оборачивание»: когда ушли левее -half, возвращаем на +half
      const limit = halfWRef.current;
      if (limit > 0) {
        if (xRef.current <= -limit) xRef.current += limit;
        // (в обратную сторону тоже будет бесшовно)
        if (xRef.current >= 0) xRef.current -= limit;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${xRef.current}px,0,0)`;
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      aria-label="Clientes y partners"
      className="relative mx-auto max-w-[100vw] border-y border-white/10 bg-[#05070a] py-8 md:py-12 my-12 md:my-16"
    >
      {/* мягкие градиенты по краям, чтобы вход/выход логотипов был приятным */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#05070a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05070a] to-transparent" />

      {/* трек — управляется через RAF, без CSS-анимаций => без рывков и рестартов */}
      <div ref={wrapperRef} className="relative mx-auto max-w-7xl px-4 overflow-hidden">
        <ul
          ref={trackRef}
          className="flex items-center gap-10 md:gap-12 px-6 will-change-transform"
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          {items.map((logo, i) => (
            <li
              key={`${logo.src}-${i}`}
              className="shrink-0 opacity-80 transition-transform duration-300 hover:scale-105 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width ?? 160}
                height={logo.height ?? 60}
                className="h-10 w-auto md:h-12"
                priority={i < 6}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* подпись-социальное доказательство */}
      <div className="absolute -top-6 md:-top-8 left-1/2 z-20 -translate-x-1/2
             rounded-full border border-white/10 bg-[#0b0e11]/90
             px-4 py-1 text-xs font-medium text-white/80 shadow-md backdrop-blur">
        Más de <span className="font-semibold text-teal-400">20 partners</span> confían en nosotros
      </div>
    </section>
  );
}
