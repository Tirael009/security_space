export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  bullets: string[];
  cta?: string;
  icon?: string;     // имя иконки (lucide), опционально
  image?: string;    // /images/services/...
};

export const services: Service[] = [
  {
    slug: 'pentest',
    title: 'Pentest Web/API',
    excerpt:
      'Pruebas de penetración de aplicaciones web y APIs con enfoque en OWASP Top-10, PoC reproductibles y retest incluido.',
    bullets: [
      'Black/Gray/White-box según el caso',
      'Mapeo de superficie de ataque y enumeración',
      'OWASP Top-10 (Inyección, Auth, XSS, SSRF, etc.)',
      'Evidencias claras, riesgo y plan de remediación',
      'Retest de vulnerabilidades críticas/altas',
    ],
    cta: 'Solicitar evaluación',
    icon: 'ShieldCheck',
    image: '/images/services/pentest.jpg',
  },
  {
    slug: 'attack-surface-monitoring',
    title: 'Análisis de seguridad del perímetro (ASM)',
    excerpt:
      'Descubrimiento continuo de activos, configuración DNS/TLS/headers, detección de exposición y quick wins de hardening.',
    bullets: [
      'Descubrimiento de dominios/subdominios',
      'Revisión DNS, SPF/DKIM/DMARC, MX',
      'TLS/HTTPS (protocolos, HSTS, cifrados)',
      'HTTP security headers y misconfiguraciones',
      'Informe 0€ como auditoría pasiva de entrada',
    ],
    cta: 'Auditoría 0€',
    icon: 'Radar',
    image: '/images/services/asm.jpg',
  },
  {
    slug: 'quality-assessment',
    title: 'Quality Assessment (QA) de software',
    excerpt:
      'Evaluación técnica del producto: arquitectura, dependencias, seguridad de código y prácticas de desarrollo.',
    bullets: [
      'Revisión de dependencias y vulnerabilidades',
      'Gestión de secretos y configuración',
      'Flujos CI/CD y control de versiones',
      'Recomendaciones de refactor y hardening',
      'Checklist para preparar auditorías formales',
    ],
    cta: 'Solicitar diagnóstico',
    icon: 'FileCheck',
    image: '/images/services/qa.jpg',
  },
  {
    slug: 'cyber-range',
    title: 'Ciberentrenamientos (Cyber Range)',
    excerpt:
      'Simulaciones realistas: respuesta a incidentes, ejercicios rojos/azules y formación del equipo.',
    bullets: [
      'Escenarios personalizados por sector',
      'Simulación de phishing y BEC',
      'Playbooks de respuesta a incidentes',
      'KPIs de aprendizaje y mejora continua',
      'Sesiones remotas o presenciales',
    ],
    cta: 'Diseñar entrenamiento',
    icon: 'Target',
    image: '/images/services/cyber-range.jpg',
  },
  {
    slug: 'security-awareness',
    title: 'Security Awareness',
    excerpt:
      'Programa de concienciación: campañas, micro-módulos y reporting para reducir el riesgo humano.',
    bullets: [
      'Contenido en español, casos reales',
      'Simulaciones periódicas de phishing',
      'Paneles de participación y métricas',
      'Integración con correo corporativo',
      'Guías breves y políticas base',
    ],
    cta: 'Plan trimestral',
    icon: 'GraduationCap',
    image: '/images/services/awareness.jpg',
  },
  {
    slug: 'consultoria-ib',
    title: 'Consultoría e implantación de medidas (SOC/SIEM)',
    excerpt:
      'Diseño de controles de seguridad, despliegue de SIEM/SOC y mejora de visibilidad y respuesta.',
    bullets: [
      'Requisitos y priorización por riesgo',
      'Casos de uso, alertas y correlación',
      'Fuentes de logs y retención',
      'Integración con ticketing/ITSM',
      'Runbooks operativos',
    ],
    cta: 'Evaluar necesidades',
    icon: 'CircuitBoard',
    image: '/images/services/siem.jpg',
  },
  {
    slug: 'rgpd-cumplimiento',
    title: 'Cumplimiento RGPD/LOPDGDD',
    excerpt:
      'Acompañamiento práctico en protección de datos: minimización, transferencias, DPA/SCC y evidencias.',
    bullets: [
      'Mapeo de datos y bases legales',
      'Evaluaciones de impacto (DPIA)',
      'Acuerdos DPA y cláusulas SCC',
      'Transferencias internacionales seguras',
      'Pruebas de consentimiento y registros',
    ],
    cta: 'Revisión de cumplimiento',
    icon: 'Scale',
    image: '/images/services/rgpd.jpg',
  },
  {
    slug: 'infraestructura-critica',
    title: 'Protección de infraestructuras críticas (CII)',
    excerpt:
      'Seguridad para entornos críticos: segmentación, endurecimiento y monitorización específica.',
    bullets: [
      'Inventario y clasificación de activos',
      'Segmentación de red y acceso mínimo',
      'Políticas de parcheo y backup',
      'Monitoreo y alertas específicas',
      'Pruebas periódicas y auditorías',
    ],
    cta: 'Plan de protección',
    icon: 'Server',
    image: '/images/services/cii.jpg',
  },
];
