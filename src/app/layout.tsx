import type { Metadata } from 'next';
import { Bebas_Neue, Plus_Jakarta_Sans, JetBrains_Mono, Oswald } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Guillaume Goder — Graphic Design & Digital Marketing | Targeted for KRB Avocats',
  description:
    'Bilingual Graphic Design & Digital Marketing Coordinator based in Montreal. Specializing in high-stakes B2B collateral, brand identity, and legal sector marketing.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-white text-[#111111] antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
