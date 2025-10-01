'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Phase = 'typing' | 'hold' | 'glitch' | 'crt' | 'done';

type Props = {
  text?: string;
  onDone: () => void;
  charFixMinMs?: number;
  charFixMaxMs?: number;
  fullHoldMs?: number;
  glitchStormMs?: number;
  crtDurationMs?: number;
};

const GLITCH_CHARS =
  '█░▒▓<>/\\|_-=+*#%@&1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function HeroIntro({
  text = 'COSMAGUARD',
  onDone,
  // ещё быстрее: было 160–240 → стало 80–120
  charFixMinMs = 80,
  charFixMaxMs = 120,
  // держим полное слово чуть меньше
  fullHoldMs = 600,
  glitchStormMs = 650,
  crtDurationMs = 900,
}: Props) {
  const [display, setDisplay] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');
  const rafRef = useRef<number | null>(null);

  // уважение reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setPhase('done');
      onDone();
    }
  }, [onDone]);

  // быстрый набор с глитч-хвостом
  useEffect(() => {
    if (phase !== 'typing') return;

    const target = text.toUpperCase();
    const total = target.length;
    let fixedCount = 0;
    let nextFixAt = performance.now() + jitter();

    function jitter() {
      return charFixMinMs + Math.random() * (charFixMaxMs - charFixMinMs);
    }

    function tick(ts: number) {
      if (ts >= nextFixAt && fixedCount < total) {
        fixedCount++;
        nextFixAt = ts + jitter();
      }

      const head = target.slice(0, fixedCount);
      const tailLen = Math.max(0, total - fixedCount);
      let tail = '';
      for (let i = 0; i < tailLen; i++) {
        tail += GLITCH_CHARS[(Math.random() * GLITCH_CHARS.length) | 0];
      }
      setDisplay(head + tail);

      if (fixedCount >= total) {
        setDisplay(target);
        setPhase('hold');
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [phase, text, charFixMinMs, charFixMaxMs]);

  // полное слово → буря → CRT-off
  useEffect(() => {
    if (phase !== 'hold') return;
    const t = setTimeout(() => setPhase('glitch'), fullHoldMs);
    return () => clearTimeout(t);
  }, [phase, fullHoldMs]);

  useEffect(() => {
    if (phase !== 'glitch') return;
    const t = setTimeout(() => setPhase('crt'), glitchStormMs);
    return () => clearTimeout(t);
  }, [phase, glitchStormMs]);

  useEffect(() => {
    if (phase !== 'crt') return;
    const t = setTimeout(() => {
      setPhase('done');
      onDone();
    }, crtDurationMs + 150);
    return () => clearTimeout(t);
  }, [phase, crtDurationMs, onDone]);

  if (phase === 'done') return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[49] grid place-items-center bg-black"
      data-phase={phase}
    >
      {/* Текст/набор — ещё крупнее + больше letter-spacing */}
      <div className="relative">
        <span
          className={`
            intro-text
            font-heading tracking-[0.36em]
            text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none
            bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent
            hero-glitch ${phase === 'crt' ? 'intro-crt-fade' : ''}
          `}
          aria-label={display}
        >
          {display}
        </span>
        {/* Очень лёгкие RGB-слои, чтобы "не трясло" */}
        <span className="hero-glitch-layer hero-glitch-r">{display}</span>
        <span className="hero-glitch-layer hero-glitch-g">{display}</span>
        <span className="hero-glitch-layer hero-glitch-b">{display}</span>
      </div>

      {/* Скан-линии */}
      <div aria-hidden className="hero-scanlines absolute inset-0" />

      {/* Экранная "буря" */}
      <AnimatePresence>
        <motion.div
          key={phase === 'glitch' ? 'storm' : 'storm-off'}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'glitch' ? 1 : 0 }}
          transition={{ duration: glitchStormMs / 1000 }}
          className="hero-glitch-full absolute inset-0"
        />
      </AnimatePresence>

      {/* CRT-выключение */}
      <AnimatePresence>
        {phase === 'crt' && (
          <motion.div
            key="crt"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: crtDurationMs / 1000 }}
            className="hero-crt-off absolute inset-0"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
