'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-indigo-300 border border-indigo-500/30"
        >
          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          Technical Product Designer & UX Engineer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight"
        >
          Designing complex systems into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            frictionless web software.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg sm:text-xl leading-relaxed font-normal"
        >
          Specializing in <strong className="text-gray-200">B2B SaaS, FinTech, & Developer Tooling</strong>. 
          Bridging deep user research, system design, and production React code with real-world constraints.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 hover:opacity-95 transition-all flex items-center gap-2"
          >
            Explore Case Studies
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#capabilities"
            className="px-6 py-3.5 rounded-xl glass-panel text-gray-300 font-semibold text-sm hover:text-white transition-all flex items-center gap-2 border border-white/10"
          >
            <Code2 className="w-4 h-4 text-indigo-400" />
            Technical Stack
          </a>
        </motion.div>

        {/* Pillars / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left"
        >
          <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-1">
            <div className="text-indigo-400 font-semibold text-sm flex items-center gap-2">
              <Layers className="w-4 h-4" /> 2 Deep Case Studies
            </div>
            <p className="text-xs text-gray-400">
              Collaborative & Analytical redesigns with real user validation data.
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-1">
            <div className="text-purple-400 font-semibold text-sm flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Custom Next.js Build
            </div>
            <p className="text-xs text-gray-400">
              Vibe-coded React components, Tailwind CSS, & Framer Motion animations.
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-1">
            <div className="text-emerald-400 font-semibold text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Real Constraints
            </div>
            <p className="text-xs text-gray-400">
              Documented technical trade-offs, developer handoff, & metrics.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
