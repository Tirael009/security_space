// src/config/site.ts
export const siteConfig = {
  name: 'CosmaGuard',
  domain: 'cosmaguard.io', // ← поменяй на реальный домен/поддомен
  locale: 'es-ES',
  tagline:
    'Ciberseguridad B2B: pentest, ASM y respuesta para entornos híbridos.',
  cta: { href: '/auditoria-gratuita', label: 'Auditoría 0€' },
  social: {
    linkedin: 'https://www.linkedin.com/company/cosmaguard', // opt
    twitter: 'https://x.com/cosmaguard',                      // opt
    github: 'https://github.com/cosmaguard',                  // opt
  },
  nav: {
    primary: [
      { label: 'Inicio', href: '/' },
      {
        label: 'Servicios',
        href: '/servicios',
        children: [
          { label: 'Pentest', href: '/servicios/pentest' },
          { label: 'ASM', href: '/servicios/asm' },
          { label: 'QA', href: '/servicios/qa' },
        ],
      },
      { label: 'Cumplimiento', href: '/cumplimiento' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
