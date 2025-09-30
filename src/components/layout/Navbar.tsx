'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useState } from 'react';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';

type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavItem[];
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export default function Navbar() {
  const pathname = usePathname(); // ✅ один раз
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [closeTimer, setCloseTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const labelId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpenMobile(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const el = document.documentElement;
    el.style.overflow = openMobile ? 'hidden' : '';
  }, [openMobile]);

  const primary = siteConfig.nav.primary as readonly NavItem[];

  const openNow = (key: string) => {
    if (closeTimer) clearTimeout(closeTimer);
    setOpenDropdown(key);
  };
  const closeSoon = () => {
    if (closeTimer) clearTimeout(closeTimer);
    setCloseTimer(setTimeout(() => setOpenDropdown(null), 120));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setOpenMobile(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors',
        scrolled ? 'bg-black/70 backdrop-blur border-white/10' : 'bg-transparent border-transparent',
      )}
      role="banner"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only absolute left-2 top-2 z-[60] rounded bg-white px-3 py-1 text-sm text-black"
      >
        Skip to content
      </a>

      <nav aria-label="Primary" className="mx-auto flex h-[var(--nav-h)] max-w-7xl items-center justify-between px-4">
        <Link href="/" className="group inline-flex items-center gap-2" aria-label="Ir al inicio">
          <span className="relative grid place-items-center rounded-lg bg-white/5 p-2">
            <Shield className="size-5 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
          </span>
          <span className="text-sm font-semibold tracking-wide">
            <span className="text-cyan-400">Security</span>Space
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {primary.map((item) =>
            item.children && item.children.length ? (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => openNow(item.href)}
                onMouseLeave={closeSoon}
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === item.href}
                  className={cn(
                    'flex items-center gap-1 rounded-xl px-3 py-2 text-sm transition-colors',
                    isActive(pathname, item.href) ? 'text-white' : 'text-white/80 hover:text-white', // ✅ используем pathname
                  )}
                  onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      'size-4 transition-transform duration-200',
                      openDropdown === item.href && 'rotate-180',
                    )}
                  />
                </button>

                <div
                  className={cn(
                    'absolute left-0 top-full z-50 mt-2 w-[320px] rounded-2xl border border-white/10 bg-black/90 p-2 backdrop-blur transition-all',
                    openDropdown === item.href
                      ? 'pointer-events-auto opacity-100 translate-y-0'
                      : 'pointer-events-none opacity-0 -translate-y-2',
                  )}
                  role="menu"
                  aria-label={item.label}
                >
                  <div className="grid">
                    <Link
                      href={item.href}
                      className={cn(
                        'rounded-lg px-3 py-2 text-xs uppercase tracking-wider text-white/60 hover:bg-white/5',
                        isActive(pathname, item.href) && 'text-white', // ✅
                      )}
                      role="menuitem"
                    >
                      Ver todos
                    </Link>
                    <div className="my-1 h-px bg-white/10" />
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className={cn(
                          'rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5',
                          isActive(pathname, child.href) && 'text-white', // ✅
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={item.href} className="relative">
                <Link
                    href={item.href}
                    className={cn(
                    'relative rounded-xl px-3 py-2 text-sm transition-colors',
                    isActive(pathname, item.href) ? 'text-white' : 'text-white/80 hover:text-white',
                    )}
                >
                    {item.label}
                    {/* Active underline */}
                    {isActive(pathname, item.href) && (
                    <span
                        className="absolute left-3 right-3 -bottom-[2px] h-[2px] rounded-full bg-cyan-400 animate-[slideIn_0.3s_ease-out]"
                    />
                    )}
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* CTA + Burger */}
        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.cta.href}
            className="hidden rounded-xl border border-white/15 bg-white px-3 py-1.5 text-sm font-semibold text-black transition hover:bg-white/90 md:inline-flex"
          >
            {siteConfig.cta.label}
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={openMobile}
            aria-labelledby={labelId}
            onClick={() => setOpenMobile((v) => !v)}
          >
            <span id={labelId} className="sr-only">Abrir menú</span>
            {openMobile ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      <MobileMenu
        open={openMobile}
        onClose={() => setOpenMobile(false)}
        items={primary}
        pathname={pathname}
        cta={siteConfig.cta}
      />
    </header>
  );
}

function MobileMenu({
  open,
  onClose,
  items,
  pathname,
  cta,
}: {
  open: boolean;
  onClose: () => void;
  items: readonly NavItem[];
  pathname: string;
  cta: { readonly href: string; readonly label: string };
}) {
  return (
    <div id="mobile-menu" className={cn('md:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')}>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity',
          open ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-[88%] max-w-sm translate-x-0 border-l border-white/10 bg-black/95 p-4 transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="mb-2 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2" onClick={onClose}>
            <span className="relative grid place-items-center rounded-lg bg-white/5 p-2">
              <Shield className="size-5 text-cyan-400" />
            </span>
            <span className="text-sm font-semibold tracking-wide">
              <span className="text-cyan-400">Security</span>Space
            </span>
          </Link>
          <button type="button" className="rounded-lg p-2 hover:bg-white/10" onClick={onClose} aria-label="Cerrar">
            <X className="size-6" />
          </button>
        </div>

        <div className="mt-2 space-y-1">
          {items.map((item) =>
            item.children && item.children.length ? (
              <MobileAccordion key={item.href} item={item} pathname={pathname} onClose={onClose} />
            ) : (
              <MobileLink key={item.href} href={item.href} active={isActive(pathname, item.href)} onClick={onClose}>
                {item.label}
              </MobileLink>
            ),
          )}
        </div>

        <div className="mt-4 border-t border-white/10 pt-4">
          <Link
            href={cta.href}
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  children,
  onClick,
  active,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'block rounded-lg px-3 py-2 text-sm',
        active ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white',
      )}
    >
      {children}
    </Link>
  );
}

function MobileAccordion({
  item,
  pathname,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/10">
      <button
        type="button"
        className={cn(
          'flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm',
          isActive(pathname, item.href) ? 'text-white' : 'text-white/80',
        )}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown className={cn('size-4 transition-transform', open && 'rotate-180')} />
      </button>

      <div className={cn('grid transition-all duration-300', open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
        <div className="overflow-hidden">
          <MobileLink href={item.href} active={isActive(pathname, item.href)} onClick={onClose}>
            Ver todos
          </MobileLink>
          {item.children?.map((child) => (
            <MobileLink key={child.href} href={child.href} active={isActive(pathname, child.href)} onClick={onClose}>
              {child.label}
            </MobileLink>
          ))}
        </div>
      </div>
    </div>
  );
}
