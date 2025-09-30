import { freeAuditSchema } from '@/lib/validations';

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);
    const parsed = freeAuditSchema.safeParse(json);
    if (!parsed.success) {
      return Response.json(
        { error: 'Datos inválidos', issues: parsed.error.issues.map((i) => i.message) },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // Если заполнен honeypot — тихо отвечаем ОК, но ничего не делаем
    if (data.website && data.website.length > 0) {
      return Response.json({ ok: true });
    }

    const webhook = process.env.N8N_WEBHOOK_URL;
    if (!webhook) {
      return Response.json(
        { error: 'Falta N8N_WEBHOOK_URL' },
        { status: 500 },
      );
    }

    // Шлём в n8n
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // можно добавить идентификатор источника
      body: JSON.stringify({ source: 'securityspace.es', type: 'free-audit', payload: data }),
      cache: 'no-store',
      // Таймаут — чтобы не висеть вечно
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return Response.json({ error: `Webhook error: ${res.status} ${text}` }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Error';
    return Response.json({ error: msg }, { status: 500 });
  }
}
