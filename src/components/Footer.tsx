'use client';

import Link from 'next/link';
import { Terminal, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 max-w-6xl mx-auto mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span className="font-semibold text-white text-sm">UX & Visual Development Portfolio</span>
          </div>
          <p className="text-xs text-gray-500 font-mono">
            Built with Next.js 15, Tailwind CSS, & Framer Motion. Deployed on Vercel.
          </p>
        </div>

        <div className="flex items-center gap-6 text-gray-400">
          <a
            href="https://github.com/gg28god-max"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="Email Contact"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
