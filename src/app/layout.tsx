import type { Metadata } from 'next';
import './globals.css';
import '@/styles/cyber.scss';

import { Manrope, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const fontSans = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});
const fontHeading = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});
const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'SecuritySpace — Auditoría de Ciberseguridad para Fintech y Lead-Gen',
  description:
    'Pentest Web/API, Cloud Security Review, Phishing Simulation y cumplimiento RGPD/LOPDGDD. Auditoría de perímetro gratuita para España y la UE.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
