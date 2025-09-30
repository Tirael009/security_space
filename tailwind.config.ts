import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}', // app/, components/, (site)/ и т.д.
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
      colors: {
        // доступ к токенам из CSS-переменных
        brand: {
          primary: 'rgb(var(--brand-prim) / <alpha-value>)',     // синий
          secondary: 'rgb(var(--brand-sec) / <alpha-value>)',    // зелёный
        },
      },
      backgroundImage: {
        brand: 'linear-gradient(90deg, rgb(var(--brand-prim)) 0%, rgb(var(--brand-sec)) 100%)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
};

export default config;
