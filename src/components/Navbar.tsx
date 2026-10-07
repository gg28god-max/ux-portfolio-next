'use client';

import Link from 'next/link';
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf7f3]/80 backdrop-blur-md border-b border-black/5 py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-black tracking-tight font-serif">
          <span>GUILLAUME</span>
          <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-black/5 text-gray-600">
            UX & Visual Dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link href="#works" className="hover:text-black transition-colors">
            Works
          </Link>
          <Link href="#about" className="hover:text-black transition-colors">
            About Me
          </Link>
          <Link href="#blog" className="hover:text-black transition-colors">
            Thoughts
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:gg28.god@gmail.com"
            className="px-4 py-2 rounded-full bg-black text-white text-xs font-medium hover:bg-gray-800 transition-all flex items-center gap-1.5 shadow-sm"
          >
            Let's Talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg bg-black/5 text-black"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 border-t border-black/5 mt-3 space-y-3 bg-[#faf7f3]">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-black">
            Home
          </Link>
          <Link href="#works" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700">
            Works
          </Link>
          <Link href="#about" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700">
            About Me
          </Link>
          <Link href="#blog" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700">
            Thoughts
          </Link>
          <a
            href="mailto:gg28.god@gmail.com"
            className="block text-center py-2.5 rounded-full bg-black text-white text-xs font-medium"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
