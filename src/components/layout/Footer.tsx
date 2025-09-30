import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/70">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <strong className="text-white">{siteConfig.name}</strong> — {siteConfig.tagline}
          </div>
          <nav className="flex flex-wrap gap-4">
            <Link href="/aviso-legal" className="hover:text-white">Aviso legal</Link>
            <Link href="/politica-de-privacidad" className="hover:text-white">Privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:text-white">Cookies</Link>
          </nav>
        </div>
        <div className="mt-4 text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
