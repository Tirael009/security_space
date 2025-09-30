// src/data/services.ts
import type { QA } from '@/components/sections/FAQ';

export type Service = {
  slug: 'pentest' | 'asm' | 'qa';
  title: string;
  excerpt: string;
  hero: {
    eyebrow?: string;
    subtitle: string;
  };
  deliverables: string[];
  methodology: string[];
  timelines: { label: string; value: string }[];
  requirements: string[];
  pricingFactors: string[];
  faqs: QA[];
  icon: 'pentest' | 'asm' | 'qa';
};

export const services: Service[] = [
  {
    slug: 'pentest',
    icon: 'pentest',
    title: 'Pentest Web/API',
    excerpt:
      'Pruebas de penetración centradas en OWASP, PoC reproducibles, informe claro en 48–72h y retest incluido.',
    hero: {
      eyebrow: 'Servicio',
      subtitle:
        'Validamos con ataque controlado (ROE) y priorizamos la remediación por riesgo e impacto.',
    },
    deliverables: [
      'Informe ejecutivo (riesgo, impacto, prioridades).',
      'Informe técnico con evidencias, pasos de reproducción y PoC.',
      'Clasificación CVSS, matriz de riesgo, quick wins.',
      'Revisión de headers HTTP/TLS/CSP, auth y sesiones.',
      'Retest de vulnerabilidades críticas/altas.',
    ],
    methodology: [
      'Descubrimiento y modelado de amenazas del alcance.',
      'Testing según OWASP (Top-10/ASVS) + enfoque por riesgo.',
      'Pruebas manuales y tooling (no destructivas por defecto).',
      'Validación y correlación de hallazgos.',
      'Entrega, walkthrough y acompañamiento de remediación.',
    ],
    timelines: [
      { label: 'Tiempo de ejecución', value: '3–7 días' },
      { label: 'Informe', value: '48–72 h tras la ejecución' },
    ],
    requirements: [
      'Acceso y credenciales de prueba',
      'ROE/ventanas de prueba definidas',
      'Contacto técnico para dudas',
    ],
    pricingFactors: [
      'Nº de apps/APIs y complejidad de flujos',
      'Entornos (pre/prod) y restricciones',
      'Autenticación/MFA/SSO/Federación',
      'Volumen de endpoints/subdominios',
    ],
    faqs: [
      {
        q: '¿Qué marco seguís?',
        a: 'OWASP (Top-10, ASVS) como base y enfoque por riesgo. Ajustamos el ROE a tus requisitos.',
      },
      {
        q: '¿Incluye retest?',
        a: 'Sí, el primer retest de vulnerabilidades críticas/altas está incluido.',
      },
      {
        q: '¿Trabajáis bajo NDA?',
        a: 'Sí. Firmamos NDA y preferimos pruebas en pre-producción cuando sea posible.',
      },
    ],
  },
  {
    slug: 'asm',
    icon: 'asm',
    title: 'ASM — Análisis de superficie de ataque',
    excerpt:
      'Inventario vivo de activos expuestos y quick wins priorizados; alertas ante cambios en tu perímetro.',
    hero: {
      eyebrow: 'Servicio',
      subtitle:
        'Visibilidad continua de dominios, subdominios y servicios. Recomendaciones accionables y re-check.',
    },
    deliverables: [
      'Inventario de dominios/subdominios y servicios.',
      'Detección de configuraciones débiles (TLS/DNS/Headers/Correo).',
      'Panel de quick wins con impacto/esfuerzo.',
      'Alertas ante cambios de exposición.',
      'Informe mensual ejecutivo + detalle técnico.',
    ],
    methodology: [
      'OSINT continuo (passive/certificados/DNS).',
      'Fingerprints y evaluación no intrusiva.',
      'Validación manual de outliers.',
      'Recomendaciones y re-check post-fix.',
    ],
    timelines: [
      { label: 'Puesta en marcha', value: '1–3 días' },
      { label: 'Primer resumen', value: 'En la primera semana' },
    ],
    requirements: [
      'Listado de dominios en alcance',
      'Contacto técnico para integrar alertas',
    ],
    pricingFactors: [
      'Nº de dominios/activos y frecuencia de escaneo',
      'Integraciones (SIEM/Ticketing) y SLAs',
      'Necesidad de validación manual ampliada',
    ],
    faqs: [
      { q: '¿Es intrusivo?', a: 'No. Principalmente OSINT y técnicas no intrusivas; no DoS ni explotación.' },
      { q: '¿Si ya tengo pentest?', a: 'ASM cubre el hueco entre pentests detectando nuevas exposiciones.' },
      { q: '¿Tiempo de alta?', a: '1–3 días según alcance.' },
    ],
  },
  {
    slug: 'qa',
    icon: 'qa',
    title: 'QA de software',
    excerpt:
      'Revisión de seguridad y calidad: dependencias, CI/CD, cloud config, arquitectura y código clave.',
    hero: {
      eyebrow: 'Servicio',
      subtitle:
        'Diagnóstico claro de riesgos técnicos con plan de acción priorizado para el equipo.',
    },
    deliverables: [
      'Informe ejecutivo + técnico con plan de acción.',
      'Revisión de dependencias y políticas de actualización.',
      'Análisis de secrets y configuraciones (env/build/repos).',
      'Chequeo de CI/CD, permisos y pasos inseguros.',
      'Revisión de arquitectura y controles (auth/roles/logs).',
    ],
    methodology: [
      'Entrevista y definición de alcance (repos/servicios).',
      'Análisis estático y dinámico de puntos críticos.',
      'Revisión manual focalizada y validación.',
      'Priorización por riesgo/impacto y quick wins.',
    ],
    timelines: [{ label: 'Tiempo típico', value: '3–7 días' }],
    requirements: ['Acceso de solo lectura a repos/CI', 'Contacto técnico'],
    pricingFactors: ['Tamaño/stack/repos', 'Profundidad requerida', 'Accesos a entornos'],
    faqs: [
      { q: '¿Es lo mismo que un pentest?', a: 'No. QA evalúa SDLC/configuraciones; no explota activos en ejecución.' },
      { q: '¿Qué necesitáis?', a: 'Acceso de solo lectura a repos y pipelines, y un contacto técnico.' },
      { q: '¿Incluye cambios?', a: 'Incluye recomendaciones; ejecución de cambios se presupuesta aparte.' },
    ],
  },
];
