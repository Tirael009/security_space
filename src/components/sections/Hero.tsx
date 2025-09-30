'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import CyberBg from '@/components/visuals/CyberBg';

export default function Hero() {
  return (
    <section className="relative isolate pt-28">
      <CyberBg />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 text-center md:pt-16">
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-balance text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          Auditoría de ciberseguridad para{' '}
          <span className="text-cyan-400">fintech</span> y{' '}
          <span className="text-cyan-400">lead-gen</span> en España y la UE
        </motion.h1>

        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-pretty text-base text-white/80 md:text-lg"
        >
          Pentest Web/API, análisis de perímetro (ASM), QA de software, ciberentrenamientos,
          awareness y cumplimiento RGPD/LOPDGDD. Auditoría pasiva de perímetro en 48–72h — 0€.
        </motion.p>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <Button href="/auditoria-gratuita">Solicitar auditoría 0€</Button>
          <Button href="/servicios" variant="ghost">Ver servicios</Button>
        </motion.div>
      </div>
    </section>
  );
}
