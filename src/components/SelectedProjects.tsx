'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    slug: 'collaborative-enterprise-saas',
    title: 'CodeForACause',
    subtitle: 'Empowering Community Care Through Smart, Simple Inventory',
    category: 'Collaborative Anchor',
    image: 'https://framerusercontent.com/images/2c0716ba1156f255f9c2959ad82b90d153352638.png',
  },
  {
    slug: 'analytical-wealthtech-redesign',
    title: 'NoteEase',
    subtitle: 'Safety & AI Friction in High-Stakes Dashboards',
    category: 'Analytical Redesign',
    image: 'https://framerusercontent.com/images/34e0b2991e6c0cfa98576117351f95ea9bbc9737.png',
  },
  {
    slug: 'plug-pay-go',
    title: 'Plug, Pay, Go',
    subtitle: 'Public EV Fast-Charger Payment & Authentication Flow',
    category: 'FinTech UX',
    image: 'https://framerusercontent.com/images/822bd4a85aaf8c79eff30908f6c8e4c88f3e2c73.png',
  },
  {
    slug: 'sham-brand-system',
    title: 'Sham',
    subtitle: 'Design System & Creative Brand Architecture',
    category: 'Visual Dev',
    image: 'https://framerusercontent.com/images/c57f8e2b10c46d080fa5304882381c8ae0810894.png',
  },
];

export default function SelectedProjects() {
  return (
    <section id="works" className="py-16 px-6 max-w-6xl mx-auto space-y-8">
      {/* Section Header matching Framer canvas */}
      <div className="flex items-center justify-between border-b border-black/10 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
          Selected Projects
        </h2>
        <Link
          href="#works"
          className="text-xs font-medium text-gray-500 hover:text-black flex items-center gap-1 transition-colors"
        >
          View all <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 2x2 Grid matching Framer canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group cursor-pointer space-y-3"
          >
            {/* Card Image Container */}
            <div className="w-full h-72 rounded-2xl overflow-hidden bg-gray-100 border border-black/10 relative shadow-sm">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundColor: '#f0ede8',
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/90 text-black shadow-sm border border-black/10">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Card Info */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-black group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-xs text-gray-600">{project.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
