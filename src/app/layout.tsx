// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import '@/styles/cyber.scss';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';

import { Manrope, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const fontSans = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-sans' });
const fontHeading = Space_Grotesk({ subsets: ['latin'], display: 'swap', variable: '--font-heading' });
const fontMono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono' });

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name} — Ciberseguridad para empresas`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.tagline,
    url: `https://${siteConfig.domain}/`,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.tagline,
    images: ['/og.png'],
  },
  icons: [
    { rel: 'icon', url: '/logo.png' },
    { rel: 'apple-touch-icon', url: '/logo.png' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} antialiased font-sans bg-black text-white`}>
        <Navbar />
        <main id="main" className="pt-[var(--nav-h)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
