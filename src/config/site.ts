export const siteConfig = {
  name: 'SecuritySpace',
  tagline:
    'Auditoría de ciberseguridad para fintech y lead-gen en España y la UE.',
  url: 'https://securityspace.es',
  ogImage: '/images/og.png',
  contact: {
    email: 'hello@securityspace.es',
  },
  nav: [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/auditoria-gratuita', label: 'Auditoría gratuita' },
    { href: '/metodologia', label: 'Metodología' },
    { href: '/cumplimiento', label: 'Cumplimiento' },
    { href: '/contacto', label: 'Contacto' },
  ],
} as const;
