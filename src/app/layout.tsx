import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-[#111111] antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
