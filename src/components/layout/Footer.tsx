'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import FooterConstellation from '@/components/visuals/FooterConstellation';
import { Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16">
      {/* тонкая «аврора» по верхней кромке */}
      <div className="footer-aurora" aria-hidden="true" />
      {/* фоновое созвездие */}
      <FooterConstellation />

      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-14">
        {/* Верхняя полоса: бренд + быстрый CTA */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={32}
              height={32}
              className="rounded-md"
              priority
            />
            <div>
              <div className="text-base font-semibold leading-none">
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
              </div>
              <p className="mt-1 max-w-xl text-sm text-white/70">
                {siteConfig.tagline ?? 'Ciberseguridad B2B: pentest, ASM y respuesta para entornos híbridos.'}
              </p>
            </div>
          </div>

          <Link
            href={siteConfig.cta?.href ?? '/auditoria-gratuita'}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
            aria-label="Solicitar auditoría gratuita"
          >
            {siteConfig.cta?.label ?? 'Auditoría 0€'}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Основная сетка ссылок */}
        <div className="mt-10 grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
          <nav aria-label="Servicios" className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/60">Servicios</div>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/servicios#pentest" className="hover:text-white">Pentest</Link></li>
              <li><Link href="/servicios#asm" className="hover:text-white">Attack Surface Management</Link></li>
              <li><Link href="/servicios#respuesta" className="hover:text-white">Respuesta a incidentes</Link></li>
              <li><Link href="/servicios#awareness" className="hover:text-white">Security Awareness</Link></li>
              <li><Link href="/servicios" className="hover:text-white">Todos los servicios</Link></li>
            </ul>
          </nav>

          

          <nav aria-label="Cumplimiento" className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/60">Cumplimiento</div>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/cumplimiento#owasp" className="hover:text-white">OWASP</Link></li>
              <li><Link href="/cumplimiento#nist" className="hover:text-white">NIST</Link></li>
              <li><Link href="/cumplimiento#ens" className="hover:text-white">ENS</Link></li>
              <li><Link href="/cumplimiento#iso27001" className="hover:text-white">ISO 27001</Link></li>
              <li><Link href="/cumplimiento#nis2" className="hover:text-white">NIS2 &amp; GDPR/LOPDGDD</Link></li>
            </ul>
          </nav>

          <div aria-label="Contacto" className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/60">Contacto</div>
            <address className="not-italic space-y-2 text-white/80">
              <div>Pamplona, Navarra · España</div>
              <div>
                <a href="mailto:contacto@cosmaguard.io" className="hover:text-white">contacto@cosmaguard.io</a>
              </div>
              <div>
                <a href="tel:+34000000000" className="hover:text-white">+34 000 000 000</a>
              </div>
              <div className="flex gap-3 pt-1">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white">
                  <Linkedin className="size-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-white/70 hover:text-white">
                  <Twitter className="size-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white">
                  <Github className="size-5" />
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Бейдж-строка методологий */}
        <ul className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/55">
          <li>OWASP</li>
          <li>NIST</li>
          <li>ENS</li>
          <li>ISO 27001</li>
          <li>NIS2</li>
          <li>GDPR</li>
        </ul>

        {/* Юридическая полоса */}
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/55">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <div>
              © {year} {siteConfig.name}. Todos los derechos reservados.
              <span className="mx-2 text-white/25">·</span>
              Hecho en Navarra, España.
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link href="/aviso-legal" className="hover:text-white">Aviso legal</Link>
              <Link href="/politica-de-privacidad" className="hover:text-white">Privacidad</Link>
              <Link href="/politica-de-cookies" className="hover:text-white">Cookies</Link>
              <Link href="/dpa" className="hover:text-white">DPA &amp; NDA</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
