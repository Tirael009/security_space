export type Step = {
  title: string;
  text: string;
};

export const processSteps: Step[] = [
  {
    title: 'Análisis y propuesta',
    text:
      'Reunimos contexto, definimos alcance y riesgos. Entregamos propuesta con objetivos, plazos y entregables.',
  },
  {
    title: 'Ejecución controlada',
    text:
      'Realizamos pruebas/acuerdos según reglas de compromiso. Comunicación continua, evidencias y quick wins.',
  },
  {
    title: 'Informe y remediación',
    text:
      'Informe claro con priorización. Acompañamos la corrección y hacemos retest para cerrar vulnerabilidades.',
  },
];
