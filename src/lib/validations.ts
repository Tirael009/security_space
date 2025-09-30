import { z } from 'zod';

export const freeAuditSchema = z.object({
  company: z.string().min(2, 'Nombre de empresa requerido'),
  email: z.string().email('Email inválido'),
  contact: z.string().optional(),
  domains: z
    .string()
    .min(1, 'Indica al menos un dominio')
    .transform((v) =>
      v
        .split(/\r?\n|,|\s+/)
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean),
    )
    .refine((arr) => arr.length > 0, 'Indica al menos un dominio'),
  notes: z.string().max(1500).optional(),

  // ✅ было z.literal(true, { errorMap… }) — заменили на boolean + refine
  consent: z.boolean().refine((v) => v === true, {
    message: 'Necesitamos tu consentimiento para tratar los datos',
  }),

  // honeypot
  website: z.string().max(0).optional(),
});

export type FreeAuditInput = z.infer<typeof freeAuditSchema>;
