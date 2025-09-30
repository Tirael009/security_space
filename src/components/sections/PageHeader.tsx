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
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
        {eyebrow}
      </div>
      <h1 className="font-heading mt-2 text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-3xl text-white/80 md:text-lg">{subtitle}</p>
      ) : null}
    </header>
  );
}
