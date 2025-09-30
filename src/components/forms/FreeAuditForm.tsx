'use client';

import { useState } from 'react';
import { freeAuditSchema, type FreeAuditInput } from '@/lib/validations';

type State =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success' }
  | { status: 'error'; message: string; issues?: string[] };

export default function FreeAuditForm() {
  const [state, setState] = useState<State>({ status: 'idle' });

  async function onSubmit(formData: FormData) {
    setState({ status: 'submitting' });

    const raw = {
      company: String(formData.get('company') || ''),
      email: String(formData.get('email') || ''),
      contact: String(formData.get('contact') || ''),
      domains: String(formData.get('domains') || ''),
      notes: String(formData.get('notes') || ''),
      consent: formData.get('consent') === 'on',
      website: String(formData.get('website') || ''), // honeypot
    };

    const parsed = freeAuditSchema.safeParse(raw);
    if (!parsed.success) {
      const issues = parsed.error.issues.map((i) => i.message);
      setState({ status: 'error', message: 'Revisa los campos marcados.', issues });
      return;
    }

    const payload: FreeAuditInput = parsed.data;

    try {
      const res = await fetch('/api/free-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        cache: 'no-store',
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? `Error ${res.status}`);
      }

      setState({ status: 'success' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error de red';
      setState({ status: 'error', message: msg });
    }
  }

  return (
    <form
      action={onSubmit}
      className="mx-auto max-w-2xl space-y-4"
    >
      {/* honeypot */}
      <input type="text" name="website" autoComplete="off" className="hidden" tabIndex={-1} />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm text-white/80">Empresa *</label>
          <input
            name="company"
            required
            placeholder="Nombre legal"
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
        </div>
        <div>
          <label className="block text-sm text-white/80">Email *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="tu@empresa.com"
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
        </div>
        <div>
          <label className="block text-sm text-white/80">Persona de contacto</label>
          <input
            name="contact"
            placeholder="Nombre y cargo (opcional)"
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-white/80">
            Dominios en alcance *{' '}
            <span className="text-white/50">(uno por línea o separados por coma)</span>
          </label>
          <textarea
            name="domains"
            required
            rows={4}
            placeholder={`ej.\nmiempresa.es\napp.miempresa.es\napi.miempresa.es`}
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-white/80">Notas</label>
          <textarea
            name="notes"
            rows={3}
            placeholder="Contexto, restricciones, ventanas de prueba…"
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
        </div>
      </div>

      <label className="flex items-start gap-2 text-sm text-white/80">
        <input name="consent" type="checkbox" className="mt-1 size-4 rounded border-white/20 bg-white/10" />
        Acepto el tratamiento de datos para la auditoría (RGPD). No realizamos pruebas destructivas.
      </label>

      {state.status === 'error' && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
          {state.message}
          {state.issues && (
            <ul className="mt-1 list-disc pl-5">
              {state.issues.map((i) => <li key={i}>{i}</li>)}
            </ul>
          )}
        </div>
      )}

      {state.status === 'success' ? (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          ¡Listo! Te enviaremos el informe pasivo en 48–72h. Revisa tu correo.
        </div>
      ) : (
        <button
          type="submit"
          disabled={state.status === 'submitting'}
          className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state.status === 'submitting' ? 'Enviando…' : 'Solicitar auditoría 0€'}
        </button>
      )}
    </form>
  );
}
