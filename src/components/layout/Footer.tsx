import Link from 'next/link';
import { siteConfig } from '@/config/site';
import FooterConstellation from '@/components/visuals/FooterConstellation';

export default function Footer() {
  return (
    <footer className="relative mt-16">
      {/* тонкая «аврора» по верхней кромке */}
      <div className="footer-aurora" aria-hidden="true" />

      {/* созвездие в фоне */}
      <FooterConstellation />

      <div className="relative mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <div className="text-lg font-semibold">
              <span className="text-cyan-400">Security</span>Space
            </div>
            <p className="mt-2 text-sm text-white/70">{siteConfig.tagline}</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/80 md:grid-cols-3">
            <Link href="/servicios" className="hover:text-white">Servicios</Link>
            <Link href="/auditoria-gratuita" className="hover:text-white">Auditoría 0€</Link>
            <Link href="/metodologia" className="hover:text-white">Metodología</Link>
            <Link href="/cumplimiento" className="hover:text-white">Cumplimiento</Link>
            <Link href="/casos" className="hover:text-white">Casos</Link>
            <Link href="/contacto" className="hover:text-white">Contacto</Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/55">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados. ·{' '}
          <Link href="/aviso-legal" className="hover:text-white">Aviso legal</Link> ·{' '}
          <Link href="/politica-de-privacidad" className="hover:text-white">Privacidad</Link> ·{' '}
          <Link href="/politica-de-cookies" className="hover:text-white">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
