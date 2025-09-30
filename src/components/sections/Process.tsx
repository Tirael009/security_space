import { processSteps } from '@/data/process';

export default function Process() {
  return (
    <section className="mx-auto mt-6 max-w-7xl px-4 pb-16">
      <h2 className="text-center text-2xl font-bold md:text-3xl">Cómo trabajamos</h2>
      <div className="mx-auto mt-6 grid max-w-4xl gap-4 md:grid-cols-3">
        {processSteps.map((s) => (
          <div key={s.title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="text-sm font-semibold">{s.title}</div>
            <div className="mt-1 text-sm text-white/70">{s.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
