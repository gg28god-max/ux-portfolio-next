'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4">
      <div className="max-w-6xl mx-auto glass-panel rounded-2xl px-6 py-3.5 flex items-center justify-between shadow-xl">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600/30 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold tracking-tight text-white block text-sm">
              UX & Visual Dev
            </span>
            <span className="text-[11px] text-gray-400 block font-mono">
              Next.js + Framer Motion
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
          <Link href="#work" className="hover:text-indigo-400 transition-colors">
            Case Studies
          </Link>
          <Link href="#capabilities" className="hover:text-indigo-400 transition-colors">
            Capabilities
          </Link>
          <Link href="#about" className="hover:text-indigo-400 transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs font-medium text-emerald-400 border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Roles
          </div>

          <a
            href="mailto:contact@example.com"
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-all flex items-center gap-1.5 shadow-lg shadow-indigo-600/20"
          >
            Contact
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
