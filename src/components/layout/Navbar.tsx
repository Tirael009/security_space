'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { clsx } from 'clsx';
import { Shield } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="relative grid place-items-center rounded-lg bg-white/5 p-2">
            <Shield className="size-5 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
          </span>
          <span className="text-sm font-semibold tracking-wide">
            <span className="text-cyan-400">Security</span>Space
          </span>
        </Link>

        <ul className="hidden gap-6 md:flex">
          {siteConfig.nav.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  'text-sm text-white/80 hover:text-white transition-colors',
                  pathname === l.href && 'text-white',
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/auditoria-gratuita"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm transition hover:bg-white/10"
          >
            Auditoría 0€
          </Link>
        </div>
      </nav>
    </header>
  );
}
