import { clsx } from 'clsx';

export default function Section({
  title,
  subtitle,
  children,
  className,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={clsx('mx-auto max-w-6xl px-4 py-10 md:py-14', className)}>
      {title ? (
        <div className="mb-6 text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">{title}</h2>
          {subtitle ? (
            <p className="mx-auto mt-2 max-w-3xl text-white/70">{subtitle}</p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
