'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f4efe8] py-16 px-6 mt-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">
              Got a project in mind?
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Let's talk.
            </h2>
            <p className="text-sm text-gray-600 max-w-md">
              Available for full-time UX Design, Visual Development, and freelance product projects.
            </p>
          </div>

          <a
            href="mailto:gg28.god@gmail.com"
            className="px-8 py-4 rounded-full bg-black text-white font-semibold text-sm hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg"
          >
            <Mail className="w-4 h-4" />
            gg28.god@gmail.com
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-black/10 text-xs font-medium">
          <div className="space-y-2">
            <span className="text-gray-400 font-mono block">Navigation</span>
            <ul className="space-y-1 text-gray-700 font-normal">
              <li><Link href="/" className="hover:text-black">Home</Link></li>
              <li><Link href="#works" className="hover:text-black">Works</Link></li>
              <li><Link href="#about" className="hover:text-black">About Me</Link></li>
              <li><Link href="#blog" className="hover:text-black">Thoughts</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-gray-400 font-mono block">Socials</span>
            <ul className="space-y-1 text-gray-700 font-normal">
              <li>
                <a href="https://github.com/gg28god-max" target="_blank" rel="noopener noreferrer" className="hover:text-black flex items-center gap-1">
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black flex items-center gap-1">
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2 col-span-2 sm:col-span-2">
            <span className="text-gray-400 font-mono block">GUILLAUME GODER</span>
            <p className="text-gray-600 text-xs leading-relaxed font-normal">
              UX Designer & Visual Developer. Built with Next.js 15, Tailwind CSS v4, & Framer Motion. Recreated from Framer template canvas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
