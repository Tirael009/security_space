import { clsx } from 'clsx';

export default function PageHeader({
  eyebrow = 'Servicio',
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <header className={clsx('mx-auto max-w-5xl px-4 text-center', className)}>
      {/* маленький «чип» над заголовком */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-white/70">
        {eyebrow}
      </div>

      {/* сам заголовок — с градиентом */}
      <h1 className="font-heading mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight md:mt-4 md:text-5xl">
        <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>

      {/* сабтайтл — удобочитаемый, «дышит» */}
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-white/80 md:mt-5 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
