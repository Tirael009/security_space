import Link from 'next/link';
import { clsx } from 'clsx';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type BaseProps = {
  variant?: 'solid' | 'ghost' | 'outline';
  className?: string;
  href?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  variant = 'solid',
  className,
  href,
  children,
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition';
  const styles = {
    solid: 'bg-white text-black hover:bg-white/90',
    ghost: 'text-white border border-white/20 hover:bg-white/10',
    outline: 'text-white ring-1 ring-white/30 hover:bg-white/10',
  }[variant];

  if (href) {
    return (
      <Link href={href} className={clsx(base, styles, className)} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={clsx(base, styles, className)} {...rest}>
      {children}
    </button>
  );
}
