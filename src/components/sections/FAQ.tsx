'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

export type QA = { q: string; a: string };

export default function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl bg-white/5 ring-1 ring-white/10">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="px-4 py-3 md:px-6 md:py-4">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-medium">{it.q}</span>
              <ChevronDown
                className={clsx('size-4 transition-transform', isOpen && 'rotate-180')}
              />
            </button>
            <div
              className={clsx(
                'grid transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="mt-2 text-sm text-white/75">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
