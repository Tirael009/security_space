// src/data/services.ts
import type { QA } from '@/components/sections/FAQ';

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  hero: {
    eyebrow?: string;
    subtitle: string;
  };
  intro?: string;
  deliverables: string[];
  methodology: string[];
  timelines: { label: string; value: string }[];
  requirements: string[];
  pricingFactors: string[];
  faqs: QA[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: 'pentest',
    icon: 'pentest',
    title: 'Pruebas de penetración',
    excerpt:
      'Pruebas de penetración centradas en OWASP, PoC reproducibles, informe claro en 48–72h y retest incluido.',
    hero: {
      eyebrow: 'Servicio',
      subtitle:
        'Validamos con ataque controlado (ROE) y priorizamos la remediación por riesgo e impacto.',
    },
    intro:
      'Para evaluar el nivel de seguridad de redes de telecomunicaciones y sistemas informáticos utilizados por empresas y organismos públicos, se realizan pruebas de penetración. Es un conjunto de actividades que simulan distintos tipos de ataques por parte de actores maliciosos. El proceso incluye la verificación del sistema de seguridad para detectar vulnerabilidades que puedan provocar un funcionamiento incorrecto o incluso una caída total del servicio.\n\nEl objetivo principal del análisis es evaluar la posibilidad de penetración en el SGSI. La información obtenida permite prever el posible daño derivado de acciones de ciberdelincuentes. Como resultado del análisis se elabora un informe donde nuestros expertos describen todas las vulnerabilidades identificadas y proponen medidas para su remediación.',
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
      // Extendido según el requerimiento
      'Test de objetos de la infraestructura IT y aplicaciones web/móviles.',
      'Análisis profundo del código fuente para detectar vulnerabilidades.',
      'Pruebas de sistemas automáticos de control de procesos (OT/ICS).',
      'Verificación de fugas de información sensible.',
      'Remediación de autenticación y gestión de sesiones incorrectas.',
      'Detección de fallos en control de acceso, deserialización insegura y mala configuración.',
      'Pruebas de XSS y uso de componentes con vulnerabilidades conocidas.',
      'Pruebas con entidades externas XML (XXE).',
      'Comprobación de ausencia de monitorización y registro adecuados.',
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
    slug: 'qa',
    icon: 'qa',
    title: 'Quality Assessment — Evaluación de calidad de software',
    excerpt:
      'Evaluación integral de calidad y seguridad: cumplimiento de estándares, defectos y áreas de mejora.',
    hero: { eyebrow: 'Servicio', subtitle: 'Valida si tu software y servicios cumplen los estándares y requisitos deseados.' },
    intro:
      'Quality Assessment (evaluación de calidad) es el proceso de evaluar la calidad de un producto o servicio para determinar si cumple con los estándares y requisitos deseados. Su objetivo es identificar defectos, debilidades y áreas de mejora para introducir cambios y optimizaciones necesarias. Se aplica a software, servicios web y procesos, utilizando inspecciones, pruebas y auditorías, con enfoques objetivos y subjetivos. Una evaluación efectiva incrementa la satisfacción de clientes, la eficiencia y reduce los costes de corrección tardía.',
    deliverables: [
      'Informe ejecutivo + técnico con hallazgos priorizados y plan de mejora.',
      'Mapa de conformidad con estándares internos/industriales.',
      'Backlog de acciones corregibles (quick wins y mejoras estructurales).',
      'Revisión de dependencias y políticas de actualización.',
      'Chequeo de CI/CD, permisos y pasos inseguros.',
    ],
    methodology: [
      'Inspección y walkthroughs guiados de producto y procesos.',
      'Pruebas (funcionales, no funcionales) y muestreo representativo.',
      'Auditoría de calidad: criterios, métricas y evidencias.',
      'Análisis estático/dinámico y revisión manual focalizada.',
      'Entrevistas y correlación para priorizar por impacto/esfuerzo.',
    ],
    timelines: [ { label: 'Tiempo típico', value: '3–7 días' } ],
    requirements: ['Acceso de solo lectura a repos/CI', 'Contacto técnico'],
    pricingFactors: ['Tamaño y complejidad', 'Stack/arquitectura', 'Alcance y profundidad requeridos'],
    faqs: [
      { q: '¿Qué beneficios aporta?', a: 'Mejora de calidad, satisfacción del cliente, reducción de costes, mayor eficiencia y reputación.' },
      { q: '¿Cumplimiento?', a: 'Ayuda a verificar alineamiento con normas y estándares aplicables.' },
    ],
  },
  {
    slug: 'cyberwatch',
    icon: 'radar',
    title: 'Análisis de seguridad del perímetro (CyberWatch)',
    excerpt: 'Identifica debilidades y protege tu negocio con una visión 360º del perímetro.',
    hero: { eyebrow: 'Servicio', subtitle: 'Identificación de puntos débiles y priorización de medidas con visibilidad completa del perímetro.' },
    intro:
      '¡Obtén la imagen completa de tus riesgos con nuestro servicio CyberWatch! Las amenazas sin precedentes requieren una defensa impecable. CyberWatch te ayuda a identificar los puntos débiles y a proteger tu negocio.\n\nAnalizamos tu perímetro de forma profunda pero segura (sin impacto en la operación), para ofrecerte un informe claro con los problemas confirmados y recomendaciones accionables.',
    deliverables: [
      'Expreso-pentest: pruebas automatizadas sobre activos críticos para detectar fallos comunes.',
      'Expreso-phishing: campañas formativas a un grupo seleccionado (hasta 50 personas) y derivación a portal de concienciación.',
      'Expreso-análisis de código: SAST automatizado para detectar bugs y vulnerabilidades.',
      'Expreso-carga: pruebas tipo DoS/DDoS controladas para validar la resiliencia.',
      'Ciber-ejercicios: sesiones conjuntas con tu equipo de seguridad para mejorar la respuesta.',
      'Seguridad de red: búsqueda de debilidades en la protección perimetral.',
      'Análisis de vulnerabilidades: identificación de puntos débiles en la infraestructura.',
      'Seguridad SSL/TLS: verificación de la integridad del cifrado del tráfico.',
      'Seguridad de correo: detección de amenazas en tu sistema de e-mail.',
      'Detección de malware: identificación de infecciones y actividad maliciosa.',
      'DNS y dominios: análisis de riesgos asociados a dominios y configuraciones.',
      'Fugas de datos: detección de exposiciones y datos sensibles publicados.',
      'Menciones en dark web: monitorización de referencias a tu organización.'
    ],
    methodology: [
      'Escaneo del perímetro: con tu dominio principal evaluamos en 1–2 días sin interrumpir el servicio.',
      'Descubrimiento de activos: inventariamos y relacionamos los activos vinculados a tu infraestructura.',
      'Filtrado conjunto: depuramos hallazgos contigo para asegurar precisión y relevancia.',
      'Informe detallado: problemas confirmados por activo y recomendaciones de remediación prioritarias.'
    ],
    timelines: [ { label: 'Tiempo de análisis', value: '1–2 días' } ],
    requirements: ['Dominio principal en alcance', 'Contacto técnico para validaciones'],
    pricingFactors: ['Volumen de dominios/servicios', 'Necesidad de campañas y ejercicios'],
    faqs: [],
  },
  {
    slug: 'cyber-drills',
    icon: 'shield-half',
    title: 'Ejercicios de ciberseguridad',
    excerpt: 'Tabletop y ejercicios técnicos: Blue / Red / Purple Team.',
    hero: { eyebrow: 'Servicio', subtitle: 'Repite y mejora tu respuesta ante incidentes con simulaciones realistas.' },
    intro:
      'Para poner a prueba la capacidad de tu organización frente a ataques reales, realizamos ejercicios de ciberseguridad. Esta “repetición” de ataques externos es necesaria para empresas y organismos públicos: acelera la respuesta, eleva la eficacia operativa y aporta experiencia práctica sin impacto en la producción.',
    deliverables: [
      'Monitorización de la postura y madurez del equipo (SOC/IR).',
      'Cartoteca de incidentes simulados, análisis de causas y remediación.',
      'Entrenamientos del personal responsable de la SGSI.',
      'Pruebas sociotécnicas (phishing/ing. social) con plan de mitigación del factor humano.',
      'Informe post-mortem y plan de mejora priorizado.',
    ],
    methodology: [
      'Diseño de escenarios: técnicos y tabletop (gestión).',
      'Ejecución controlada con métricas de desempeño.',
      'Observabilidad y recogida de evidencias.',
      'Lecciones aprendidas y actualización de runbooks.',
    ],
    timelines: [ { label: 'Duración típica', value: '1–3 días por ejercicio' } ],
    requirements: ['Contacto de IR/SOC', 'Ventanas de simulación'],
    pricingFactors: ['Número de escenarios', 'Equipos involucrados', 'Profundidad técnica'],
    faqs: [],
  },
  {
    slug: 'security-awareness',
    icon: 'graduation-cap',
    title: 'Security Awareness (portal de concienciación)',
    excerpt: 'Formación continua, simulaciones de phishing y comunicación de riesgos.',
    hero: { eyebrow: 'Servicio', subtitle: 'Eleva la conciencia en ciberseguridad en toda la organización.' },
    intro:
      'Uno de los mayores retos de la seguridad es la falta de concienciación del personal. Hasta el 80% de incidentes se debe a errores no malintencionados. Implantamos un programa de Security Awareness que reduce riesgos operativos y mejora el cumplimiento.',
    deliverables: [
      'Portal de formación y micro‑learning por roles.',
      'Simulaciones de phishing con campañas periódicas.',
      'Materiales y comunicaciones sobre amenazas actuales.',
      'KPIs y reportes para dirección (tasa de clic, reporte, repetidores).',
    ],
    methodology: [
      'Diseño del programa y segmentación por colectivos.',
      'Ejecución de formaciones y simulaciones recurrentes.',
      'Medición de resultados y retroalimentación continua.',
      'Refuerzo en incidentes y actualización de contenidos.',
    ],
    timelines: [ { label: 'Puesta en marcha', value: '2–4 semanas' } ],
    requirements: ['Listado de empleados/grupos', 'Canal de comunicación'],
    pricingFactors: ['Número de usuarios', 'Frecuencia de campañas'],
    faqs: [],
  },
  {
    slug: 'software-dev',
    icon: 'code2',
    title: 'Desarrollo de software',
    excerpt: 'Productos y APIs con seguridad por diseño (SDLC) y soporte continuo.',
    hero: { eyebrow: 'Servicio', subtitle: 'Equipo senior para producto llave en mano: análisis, diseño, desarrollo, pruebas y soporte.' },
    intro:
      'Ofrecemos desarrollo de software a medida, de extremo a extremo: desde el análisis de requisitos hasta el soporte del producto. Trabajamos con soluciones multiplataforma, backend y desktop, con un enfoque flexible para clientes con especificaciones detalladas o solamente una idea inicial.',
    deliverables: [
      'Análisis de requisitos y diseño de arquitectura.',
      'Diseño de interfaz y experiencia de usuario.',
      'Implementación y pruebas continuas (unit/E2E).',
      'Despliegue y soporte evolutivo.',
    ],
    methodology: [
      'Descubrimiento y definición de alcance (NDA si se requiere).',
      'Propuesta de solución y planificación.',
      'Ejecución iterativa con QA integrado.',
      'Entrega y soporte post‑lanzamiento.',
    ],
    timelines: [ { label: 'Según alcance', value: '4–12+ semanas' } ],
    requirements: ['Stakeholders y priorización', 'Accesos a entornos si aplica'],
    pricingFactors: ['Stack y complejidad', 'Alcance funcional', 'Integraciones'],
    faqs: [],
  },
  {
    slug: 'infosec-integration',
    icon: 'shield-alert',
    title: 'Diseño e implantación de medidas de seguridad',
    excerpt: 'DLP, EDR/XDR, SIEM, WAF, PAM: selección, integración y operación segura.',
    hero: { eyebrow: 'Servicio', subtitle: 'Protege tus datos e infraestructuras con controles bien diseñados y operados.' },
    intro:
      'Cada organización afronta amenazas diarias. Diseñamos e implantamos medidas de seguridad para estaciones, redes, aplicaciones y datos, evitando fugas y ataques dirigidos y mejorando la gobernanza de identidades y privilegios.',
    deliverables: [
      'Diseño de arquitectura de seguridad y segmentación.',
      'Implantación de DLP, EDR/XDR, SIEM, WAF, PAM.',
      'Políticas, procedimientos y runbooks operativos.',
      'Integración con correo, perímetro, bases de datos y aplicaciones.',
    ],
    methodology: [
      'Evaluación de necesidades y modelado de amenazas.',
      'Selección tecnológica y plan de despliegue.',
      'Integración, hardening y pruebas de aceptación.',
      'Handover, formación y operación asistida.',
    ],
    timelines: [ { label: 'Proyecto típico', value: '3–8 semanas' } ],
    requirements: ['Acceso a infra/activos en alcance', 'Contacto técnico'],
    pricingFactors: ['Alcance y nº de activos', 'Integraciones', 'SLAs'],
    faqs: [],
  },
  {
    slug: 'kii-protection',
    icon: 'network',
    title: 'Protección de infraestructuras críticas (CII)',
    excerpt: 'Cumplimiento y resiliencia para sistemas OT/ICS: categorización, diseño, despliegue y auditoría.',
    hero: { eyebrow: 'Servicio', subtitle: 'Seguridad para sistemas críticos y continuidad de negocio.' },
    intro:
      'Las organizaciones con Infraestructura Crítica (CII) deben proteger sistemas de información, telecomunicaciones y automatización que soportan procesos esenciales. Aseguramos la continuidad, el cumplimiento normativo y la protección de datos mediante un programa integral de ciberseguridad OT/ICS.',
    deliverables: [
      'Categorización de activos CII y análisis de amenazas.',
      'Diseño del sistema de ciberseguridad (arquitectura y segmentación).',
      'Implantación de medidas de protección (endpoints, red, aplicaciones).',
      'Pruebas y validación: hardening y tests de seguridad controlados.',
      'Auditoría de cumplimiento con normas y estándares aplicables.',
      'Documentación técnica, políticas y procedimientos operativos.',
    ],
    methodology: [
      'Inventario de activos OT/ICS y clasificación por criticidad.',
      'Modelado de amenazas y evaluación de riesgos.',
      'Arquitectura de seguridad y controles (zona/conduits, DMZ industrial).',
      'Despliegue, pruebas de aceptación y puesta en producción.',
      'Auditoría periódica y mejora continua.',
    ],
    timelines: [ { label: 'Proyecto típico', value: '4–10 semanas (según alcance)' } ],
    requirements: ['Listado de activos/segmentos en alcance', 'Contacto técnico OT/IT'],
    pricingFactors: ['Número de activos/segmentos', 'Integraciones OT/IT', 'Requisitos normativos'],
    faqs: [],
  },
  {
    slug: 'pdn-protection',
    icon: 'lock-keyhole',
    title: 'Protección de datos personales (PD)',
    excerpt: 'Clasificación de ISPDn/PD, DPIA y adecuación a normativa con controles efectivos.',
    hero: { eyebrow: 'Servicio', subtitle: 'Protege los datos personales cumpliendo normativa y mejores prácticas.' },
    intro:
      'Una ISPDn (sistema de información de datos personales) incluye no solo los PD, sino todos los medios usados para su tratamiento, sistematización y protección. Clasificamos la ISPDn, evaluamos amenazas y nivel de protección requerido, y llevamos tus procesos a conformidad con la normativa aplicable.',
    deliverables: [
      'Términos de referencia y diseño del sistema de protección de PD.',
      'Clasificación de la ISPDn por grupos y determinación del nivel de protección.',
      'Levantamiento de procesos que tratan PD y mapa de tratamientos.',
      'Medidas organizativas y técnicas de protección alineadas a normativa.',
      'Ajuste de procesos a requisitos legales y mejores prácticas.',
      'Evaluación/inspección de preparación para auditorías y controles.',
    ],
    methodology: [
      'Inventario de activos y flujos de PD.',
      'Análisis de amenazas y evaluación de riesgos.',
      'DPIA (evaluación de impacto) y definición de controles.',
      'Implementación/ajuste de medidas y documentación.',
      'Verificación y preparación para auditoría externa.',
    ],
    timelines: [ { label: 'Proyecto típico', value: '3–6 semanas' } ],
    requirements: ['Listado de tratamientos/activos', 'Contacto legal/técnico'],
    pricingFactors: ['Volumen de tratamientos', 'Complejidad organizativa', 'Requisitos regulatorios'],
    faqs: [],
  },
  {
    slug: 'gis-protection',
    icon: 'panels-top-left',
    title: 'Protección de sistemas de información públicos (GIS)',
    excerpt: 'Clasificación, diseño y certificación de seguridad para servicios públicos y trámites digitales.',
    hero: { eyebrow: 'Servicio', subtitle: 'Confidencialidad, integridad y disponibilidad en plataformas públicas.' },
    intro:
      'La interacción digital con administraciones exige proteger los datos de ciudadanos y procesos. Ejecutamos el ciclo completo: análisis, diseño, despliegue y acompañamiento hasta la certificación de conformidad.',
    deliverables: [
      'Clasificación de GIS y análisis de amenazas.',
      'Requisitos de seguridad y documentación de proyecto.',
      'Implementación de medidas técnicas y organizativas.',
      'Evaluación de eficacia y verificación de controles.',
      'Ensayos/atestado de conformidad con requisitos normativos.',
      'Control del uso de criptografía y gestión de claves.',
    ],
    methodology: [
      'Levantamiento y clasificación.',
      'Modelo de amenazas y diseño de controles.',
      'Implantación y hardening.',
      'Pruebas, auditoría y certificación.',
    ],
    timelines: [ { label: 'Proyecto típico', value: '4–8 semanas' } ],
    requirements: ['Alcance funcional y datos tratados', 'Equipos responsables'],
    pricingFactors: ['Alcance del sistema', 'Requisitos regulatorios', 'Integraciones'],
    faqs: [],
  },
  {
    slug: '1c-projects',
    icon: 'server-cog',
    title: 'Implantación y soporte de proyectos en 1C',
    excerpt: 'Consultoría, desarrollo, despliegue, pruebas y soporte integral sobre la plataforma 1C.',
    hero: { eyebrow: 'Servicio', subtitle: 'Acompañamiento de extremo a extremo para maximizar el valor de 1C.' },
    intro:
      'Proporcionamos implantación y soporte de proyectos en 1C: desde la selección de soluciones hasta el desarrollo, pruebas y operación. Atendemos clientes con requisitos definidos o solo ideas iniciales, con enfoque a eficiencia y ROI.',
    deliverables: [
      'Consultoría de selección y diseño de solución 1C.',
      'Desarrollo y configuración (contabilidad, automatización, integraciones).',
      'Pruebas en todas las etapas y puesta en producción.',
      'Soporte evolutivo y optimización de procesos.',
    ],
    methodology: [
      'Recepción de requerimientos y NDA si aplica.',
      'Análisis y propuesta de implementación.',
      'Planificación, ejecución y validación con el cliente.',
      'Operación y soporte continuo.',
    ],
    timelines: [ { label: 'Según alcance', value: '3–10 semanas' } ],
    requirements: ['Acceso a entornos/DB si aplica', 'Contacto funcional y técnico'],
    pricingFactors: ['Módulos/volumen', 'Integraciones', 'SLAs'],
    faqs: [],
  },
  {
    slug: 'antilocker',
    icon: 'shield',
    title: 'Antilocker',
    excerpt: 'Protección de archivos por grupo de programas; bloquea cifrado y accesos no autorizados.',
    hero: { eyebrow: 'Solución', subtitle: 'Control de acceso a nivel de driver en Windows para frenar ransomware.' },
    intro:
      'Antilocker protege datos de usuario contra modificaciones no autorizadas mediante el concepto de “grupo de programas”: solo el grupo que creó un archivo puede modificarlo. Implementado como mini‑filtro de driver en Windows con utilidades CLI/GUI para su gestión.',
    deliverables: [
      'Prevención del cifrado por ransomware (bloqueo de acceso a datos por procesos maliciosos).',
      'Listas automáticas de archivos protegidos y aplicaciones de confianza.',
      'Protección frente a binarios alterados (EXE/DLL) y verificación de firmas.',
      'Operación a nivel de driver confiable en Windows con bajo consumo.',
      'Soporte para entornos aislados (sin Internet) y servidores/estaciones.',
      'Modos PRO y ENTERPRISE con capacidades ampliadas.',
    ],
    methodology: [
      'Instalación del mini‑filtro y definición de grupos de programas.',
      'Políticas de acceso a archivos por grupo y excepciones.',
      'Integración opcional con SIEM/SOC (Enterprise).',
      'Despliegue mediante Group Policy y operación en clúster (Enterprise).',
    ],
    timelines: [ { label: 'Despliegue típico', value: '1–3 días' } ],
    requirements: ['Windows 10+ con NTFS', 'Permisos de administrador'],
    pricingFactors: ['Número de endpoints/servidores', 'Requisitos Enterprise'],
    faqs: [
      { q: '¿Diferencias PRO vs Enterprise?', a: 'Enterprise amplía límites (grupos/listas), añade SIEM/SOC, firma digital y clúster.' },
    ],
  },
  {
    slug: 'infowatch',
    icon: 'panel-top',
    title: 'Soluciones de Infowatch',
    excerpt: 'Suite DLP y ARMA: prevención de fugas, analítica y protección industrial.',
    hero: { eyebrow: 'Solución', subtitle: 'Plataforma InfoWatch para control de datos y seguridad OT/IT.' },
    intro:
      'Somos partners de InfoWatch (fundada en 2003, con 28 patentes incluyendo IA). Integramos su suite para proteger datos, investigar incidentes y asegurar redes corporativas e industriales (OT/ICS).',
    deliverables: [
      'Diseño de arquitectura y casos de uso (DLP/OT/NGFW).',
      'Implantación, integración y tuning de políticas.',
      'Formación, runbooks y operación asistida.',
      'Dashboards y reporting para cumplimiento y dirección.',
    ],
    methodology: [
      'Evaluación de riesgo y priorización de casos.',
      'Despliegue por fases y validación de eficacia.',
      'Optimización continua y respuesta a incidentes.',
    ],
    timelines: [ { label: 'Proyecto típico', value: '3–8 semanas' } ],
    requirements: ['Inventario de datos y activos', 'Accesos de integración'],
    pricingFactors: ['Alcance funcional', 'Volumen de usuarios/datos', 'Módulos seleccionados'],
    faqs: [
      { q: '¿Qué módulos destacan?', a: 'Traffic Monitor (DLP), Vision (visual analytics), Prediction (IA), Activity Monitor (UEBA), DCAP (almacenamiento y permisos), ARMA Industrial Firewall/Endpoint/Console, ARMA NGFW.' },
      { q: '¿Certificaciones?', a: 'ARMA cumple certificaciones locales para entornos industriales.' },
    ],
  },
  {
    slug: 'spacebit',
    icon: 'circuit-board',
    title: 'Soluciones de Spacebit',
    excerpt: 'Productos de ciberseguridad para automatizar gestión de IB y elevar la protección.',
    hero: { eyebrow: 'Solución', subtitle: 'Suite Spacebit para gestión de criptografía, configuración y respuesta a incidentes.' },
    intro:
      'Spacebit es un fabricante que desarrolla productos modernos de ciberseguridad para empresas y organismos públicos. Sus soluciones ayudan a aumentar el nivel de protección de la infraestructura TI y a automatizar procesos de gestión de seguridad.',
    deliverables: [
      'X‑Control — gestión del ciclo de vida de medios criptográficos (СКЗИ): inventario actualizado y menor carga operativa.',
      'X‑Config — gestión de vulnerabilidades de configuración: proceso continuo para reducir riesgos por mala configuración.',
      'SpaceView — monitorización y respuesta ante incidentes (IRP): automatiza la respuesta, reduce MTTR y apoya investigación.',
      'Arquitectura e integración en la infraestructura del cliente.',
      'Formación y documentación operacional.',
    ],
    methodology: [
      'Evaluación de necesidades y casos de uso (СКЗИ, configuración, IR).',
      'Diseño de arquitectura e integración con sistemas existentes.',
      'Despliegue, tuning y validación en producción.',
      'Operación asistida y mejora continua.',
    ],
    timelines: [ { label: 'Proyecto típico', value: '2–6 semanas' } ],
    requirements: ['Accesos de integración', 'Inventario y responsables'],
    pricingFactors: ['Módulos seleccionados', 'Volumen de activos', 'Integraciones'],
    faqs: [
      { q: 'Ventajas clave', a: 'Desarrollo local, aplicable a cualquier sector, fácil despliegue y soporte, escalable y flexible, licenciamiento adaptable.' },
    ],
  },
  {
    slug: 'indid-access',
    icon: 'scan-line',
    title: 'Soluciones de Indid para gestión y protección de accesos',
    excerpt: 'Plataforma nacional para MFA, acceso federado, cuentas privilegiadas y PKI.',
    hero: { eyebrow: 'Solución', subtitle: 'Centraliza y fortalece la autenticación y el control de accesos.' },
    intro:
      'Somos partners autorizados de Indid, fabricante nacional de soluciones de gestión y protección de acceso lógico. Sus productos cumplen con normativa local y soportan requisitos de import substitution y estándares (ГОСТ/FSTEC).',
    deliverables: [
      'Indeed Access Manager (AM): MFA y punto único de acceso (SSO) con integración amplia.',
      'Indeed Privileged Access Manager (PAM): control de sesiones y cuentas privilegiadas; auditoría y acceso de terceros.',
      'Indeed Certificate Manager (CM): gestión centralizada de certificados, smart‑cards y tokens; auditoría PKI.',
      'Diseño e implantación con políticas de acceso y federación.',
    ],
    methodology: [
      'Evaluación de arquitectura y sistemas objetivo.',
      'Integración con IdP/SSO y orígenes (LDAP/AD, apps).',
      'Definición de factores MFA y flujos de acceso.',
      'Gobierno de privilegios y vaulting de credenciales.',
      'Gestión PKI y automatización de ciclo de vida de certificados.',
    ],
    timelines: [ { label: 'Proyecto típico', value: '2–6 semanas' } ],
    requirements: ['Inventario de aplicaciones/usuarios', 'Accesos a IdP/PKI/AD'],
    pricingFactors: ['Módulos (AM/PAM/CM)', 'Nº de usuarios y apps', 'Requisitos de cumplimiento'],
    faqs: [
      { q: '¿Qué aporta AM?', a: 'MFA flexible, SSO y menor coste operativo.' },
      { q: '¿Qué aporta PAM?', a: 'Control de sesiones, auditoría y acceso seguro de terceros.' },
    ],
  },
  {
    slug: 'avanpost',
    icon: 'lock-keyhole',
    title: 'Soluciones de Avanpost para autenticación y accesos',
    excerpt: 'Plataforma escalable para MFA, federación, directorio, IDM y PKI.',
    hero: { eyebrow: 'Solución', subtitle: 'De la autenticación fragmentada a un enfoque integral de seguridad.' },
    intro:
      'Avanpost es un fabricante que ofrece una plataforma moderna, tolerante a fallos y escalable, con APIs abiertas y SDL en el ciclo de desarrollo. Cumple estándares XACML, NIST RBAC, SCIM, OIDC, SAML, FIDO U2F.',
    deliverables: [
      'MFA+: proveedor de autenticación multifactor con factores modernos y políticas flexibles.',
      'FAM: centro de acceso federado para apps corporativas (IdP/SP).',
      'DS: servicio de directorio para Linux con modelo jerárquico.',
      'IDM: gestión de identidades y accesos a recursos corporativos.',
      'PKI: ciclo de vida de claves y certificados desde un punto central.',
      'Arquitectura, despliegue en clúster y automatización (autoscaling).',
    ],
    methodology: [
      'Evaluación de requisitos y casos (RBAC/ABAC, federación).',
      'Integración con infra existente (AD/LDAP, apps, cloud).',
      'Definición de políticas, flujos MFA y conectores.',
      'Pruebas de carga y alta disponibilidad; hardening.',
      'Handover, soporte 24/7 y planes de mantenimiento.',
    ],
    timelines: [ { label: 'Proyecto típico', value: '3–8 semanas' } ],
    requirements: ['Inventario de apps/usuarios', 'Integraciones y endpoints'],
    pricingFactors: ['Módulos (MFA/FAM/DS/IDM/PKI)', 'Usuarios/TPM', 'Clustering/HA'],
    faqs: [
      { q: '¿Stack?', a: 'PostgreSQL/.NET Core/EF/Akka.Net/Angular y Go/BadgerDB/NATS/Vue para servicios de alto rendimiento.' },
    ],
  },
  {
    slug: 'cyber-range',
    icon: 'radar',
    title: 'Cyber Range',
    excerpt: 'Polígono cibernético para ejercicios realistas y mejora continua de la SGSI.',
    hero: { eyebrow: 'Solución', subtitle: 'Entorno multifuncional cercano a la realidad para detectar y responder mejor.' },
    intro:
      'Desplegamos un ciberpolígono que replica condiciones reales para detectar vulnerabilidades en diversos SI y elevar la eficacia de protección. Permite entrenar personal, investigar incidentes y cumplir normativas.',
    deliverables: [
      'Incremento de protección de HW/SW y sistemas en operación.',
      'Desarrollo de habilidades del personal y simulaciones prácticas.',
      'Capacidades de investigación y respuesta a incidentes (IR).',
      'Auditorías de infraestructura y pruebas de penetración controladas.',
      'Pruebas de conformidad con normas aplicables.',
      'Entrenamientos, competiciones y ciber‑ejercicios.',
      'Generación de ataques de prueba y orquestación de respuesta.',
    ],
    methodology: [
      'Diseño de arquitectura del polígono y escenarios de ataque.',
      'Automatización de ataques y telemetría; KPIs de desempeño.',
      'Ejecución de ejercicios y evaluación; lecciones aprendidas.',
    ],
    timelines: [ { label: 'Puesta en marcha', value: '2–4 semanas' } ],
    requirements: ['Recursos de laboratorio/entorno', 'Equipo técnico'],
    pricingFactors: ['Nº de escenarios', 'Sistemas simulados', 'Integraciones (SIEM/SOAR)'],
    faqs: [],
  },
  {
    slug: 'ics-firewall',
    icon: 'shield-alert',
    title: 'Cortafuegos para ICS/OT',
    excerpt: 'NGFW y gateway con IDS/IPS, VPN, filtrado y módulos integrados para red corporativa/industrial.',
    hero: { eyebrow: 'Solución', subtitle: 'Protege y gobierna tu red con perfiles certificados y despliegue flexible.' },
    intro:
      'Solución de cortafuegos moderna (IKS) con variantes certificadas (FSTEC) y gateway estándar. Basada en buenas prácticas SDL, con perfiles de protección y amplia funcionalidad de seguridad y networking.',
    deliverables: [
      'IKS FSTEC: NGFW con protección de red, IDS/IPS, VPN, AAA, filtrado de contenido y perfiles de seguridad.',
      'IKS Internet Gateway: AAA, filtrado, optimización de tráfico, integración con DLP y SIEM.',
      'Servicios integrados: correo, IP‑telefonía, content filter (incluidos en licencia).',
      'Módulos opcionales: AV/antispam Kaspersky, Suricata Rules, Garnet Web Filter.',
      'Prueba gratuita 14 días y formación gratuita para IT.',
    ],
    methodology: [
      'Evaluación de red y requisitos de protección.',
      'Instalación y hardening; definición de políticas y perfiles.',
      'Integración con infra (DLP/SIEM) y pruebas de aceptación.',
      'Handover y acompañamiento de operación.',
    ],
    timelines: [ { label: 'Despliegue típico', value: '2–5 semanas' } ],
    requirements: ['Topología y rangos', 'Integraciones requeridas'],
    pricingFactors: ['Sitios y throughput', 'Módulos y licencias', 'HA/cluster'],
    faqs: [
      { q: '¿Dónde aplica?', a: 'GOV, ISPDn, CII/ICS y sistemas de uso general con perfiles acreditados.' },
    ],
  },
  {
    slug: 'training',
    icon: 'graduation-cap',
    title: 'Formación',
    excerpt: 'Curso online “Fundamentos de programación DevSecOps” para adolescentes y principiantes.',
    hero: { eyebrow: 'Servicio', subtitle: 'Aprende programación con enfoque DevSecOps: teoría + práctica.' },
    intro:
      'En un mundo donde la tecnología avanza veloz, conocer fundamentos de programación ya no es un plus: es una necesidad. Nuestro curso online “Fundamentos de programación DevSecOps” introduce a jóvenes y principiantes en conceptos básicos con enfoque práctico y seguro. No solo para quien quiera una carrera en TI: también para entrenar pensamiento lógico y resolver problemas creativamente.\n\nLa novedad del programa es su adaptación al formato a distancia: cada tema incluye clases grabadas y material adicional para avanzar al propio ritmo. La estructura equilibra bloques teóricos con práctica obligatoria, asegurando progresión por módulos y motivación continua.',
    deliverables: [
      'Plan docente con módulos y objetivos claros.',
      'Materiales y clases grabadas por cada tema.',
      'Tareas prácticas con corrección y feedback.',
      'Evaluaciones por módulo y certificado final.',
    ],
    methodology: [
      'Bloques teóricos breves seguidos de ejercicios guiados.',
      'Proyectos prácticos para afianzar conceptos.',
      'Rúbricas de evaluación y retroalimentación individual.',
      'Ritmo flexible y progreso por hitos (desbloqueo por tareas).',
    ],
    timelines: [ { label: 'Duración estimada', value: '4–6 semanas (auto‑ritmo)' } ],
    requirements: ['PC con Internet', 'Cuenta de correo', 'Navegador moderno'],
    pricingFactors: ['Número de plazas', 'Mentoría adicional', 'Certificación'],
    faqs: [
      { q: '¿Para quién es?', a: 'Adolescentes y principiantes que quieran bases de programación con enfoque DevSecOps.' },
      { q: '¿Programa?', a: 'Compartiremos el temario detallado mediante enlace al publicarse.' },
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
  
];
