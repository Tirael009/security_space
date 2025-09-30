export function jsonLdOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SecuritySpace',
    url: 'https://securityspace.es',
    logo: 'https://securityspace.es/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/securityspace',
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'contacto@securityspace.es',
      areaServed: 'ES',
      availableLanguage: ['es', 'en'],
    }],
  };
}

export function jsonLdService({
  name,
  description,
  category = 'CyberSecurity',
  areaServed = ['ES','EU'],
}: {
  name: string; description: string; category?: string; areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: category,
    areaServed,
    provider: {
      '@type': 'Organization',
      name: 'SecuritySpace',
      url: 'https://securityspace.es',
    },
  };
}

export function jsonLdFAQ(qa: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(i => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}
