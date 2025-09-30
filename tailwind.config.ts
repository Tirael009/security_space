import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}', // покрывает app/, components/, (site)/ и т.д.
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'ui-sans-serif', 'Arial'],
        heading: ['var(--font-heading)', 'system-ui', 'ui-sans-serif', 'Arial'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
    },
  },
  plugins: [],
};

export default config;
