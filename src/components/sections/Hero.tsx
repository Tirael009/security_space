'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import NeuralNetBg from '@/components/visuals/NeuralNetBg';
import { ShieldCheck, Timer, RefreshCw } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="
        relative isolate
        min-h-[calc(100dvh-var(--nav-h))]
        pt-[var(--nav-h)]
      "
    >
      {/* фон нейросетей на весь hero */}
      <NeuralNetBg />

      {/* мягкий градиент по низу для плавного перехода к следующей секции */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24
                   bg-gradient-to-b from-transparent to-black/60"
      />

      <div className="mx-auto flex min-h-[calc(100dvh-var(--nav-h))] max-w-7xl flex-col items-center justify-center px-4 text-center">
        {/* вертикальный стек с увеличенными отступами */}
        <div className="w-full space-y-8 md:space-y-10 lg:space-y-14">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-balance text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            <h1 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            Seguridad inteligente para <span className="text-gradient-brand">empresas</span> en España y la UE
            </h1>
          </motion.h1>

          <motion.p
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-2xl text-pretty text-base text-white/80 md:text-lg"
          >
            Pentesting realista, protección de datos, cumplimiento y respuesta a incidentes — todo lo crítico para tu negocio.
          </motion.p>

          {/* бейджи-ценности */}
          <motion.ul
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5"
          >
            <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="size-5 text-cyan-400" />
                <span className="text-sm font-semibold">OWASP + PoC reproducibles</span>
              </div>
            </li>
            <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-center gap-2">
                <Timer className="size-5 text-cyan-400" />
                <span className="text-sm font-semibold">Informe en 48–72h</span>
              </div>
            </li>
            <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-center gap-2">
                <RefreshCw className="size-5 text-cyan-400" />
                <span className="text-sm font-semibold">Retest incluido</span>
              </div>
            </li>
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex items-center justify-center gap-3"
          >
            <Button className="bg-brand text-black hover:opacity-95">Solicitar auditoría 0€</Button>
            <Button href="/servicios" variant="ghost">
              Ver servicios
            </Button>
          </motion.div>
        </div>

        {/* подсказка «прокрутить» */}
        <a
          href="#services"
          className="group absolute inset-x-0 bottom-4 mx-auto w-max rounded-full border border-white/15
                     bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur transition
                     hover:bg-white/10"
          aria-label="Desplazar a servicios"
        >
          Desplazar a servicios
          <span
            className="ml-2 inline-block translate-y-0 animate-bounce rounded-full
                       border border-white/15 px-2 py-[2px] text-white/70"
          >
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
