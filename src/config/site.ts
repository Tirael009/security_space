export const siteConfig = {
  name: 'SecuritySpace',
  tagline: 'Auditoría y servicios de ciberseguridad ofensiva/defensiva para empresas en España y la UE.',  url: 'https://securityspace.es',
  ogImage: '/images/og.png',
  contact: {
    email: 'hello@securityspace.es',
  },

  // Единый источник правды для меню
  nav: {
    primary: [
      { href: '/', label: 'Inicio' },

      {
        href: '/servicios',
        label: 'Servicios',
        children: [
          { href: '/servicios/pentest', label: 'Pentest Web/API' },
          { href: '/servicios/attack-surface-monitoring', label: 'ASM (Perímetro)' },
          { href: '/servicios/quality-assessment', label: 'QA de software' },
        ],
      },

      {
        href: '/industrias',
        label: 'Industrias',
        children: [
          { href: '/industrias/fintech', label: 'Fintech & Payments' },
        ],
      },

      { href: '/recursos', label: 'Recursos' },
      { href: '/casos', label: 'Casos' },
      { href: '/metodologia', label: 'Metodología' },
      { href: '/cumplimiento', label: 'Cumplimiento' },
      { href: '/contacto', label: 'Contacto' },
    ] as const,
  },

  // Отдельный CTA для кнопки справа
  cta: { href: '/auditoria-gratuita', label: 'Auditoría 0€' } as const,
} as const;
