'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Code2, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-16 pb-20 px-6 max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="space-y-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full framer-pill text-xs font-mono font-medium text-gray-800"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            Product Designer & UX Researcher
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
          >
            I'm Guillaume, Product Designer & UX Researcher.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg sm:text-xl leading-relaxed font-normal"
          >
            Hi! I design and build purposeful digital products — specializing in{' '}
            <strong className="text-gray-900 font-semibold">B2B SaaS, FinTech, & Developer Tooling</strong>. 
            Bridging user research, system design, and production React code with real-world constraints.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <a
              href="#works"
              className="px-6 py-3 rounded-full bg-black text-white font-medium text-sm hover:bg-gray-800 transition-all flex items-center gap-2 shadow-sm"
            >
              Explore Selected Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:gg28.god@gmail.com"
              className="px-6 py-3 rounded-full border border-black/15 text-gray-800 font-medium text-sm hover:bg-black/5 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Avatar / Profile Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-80 h-96 rounded-3xl bg-gray-200 border border-black/10 overflow-hidden relative shadow-lg flex flex-col justify-end p-6 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://framerusercontent.com/images/ue9IClg37SpZ5YcBTAPeavvDUNo.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="relative z-10 text-white space-y-1">
            <span className="text-xs font-mono text-gray-300">Guillaume Goder</span>
            <p className="text-sm font-medium">Montréal, Canada</p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for UX & Visual Dev Roles
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
      >
        <div className="framer-card p-5 rounded-2xl space-y-1">
          <div className="text-black font-semibold text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" /> Collaborative Anchor
          </div>
          <p className="text-xs text-gray-600">
            Open-source & developer workflow redesigns with cross-functional constraints.
          </p>
        </div>

        <div className="framer-card p-5 rounded-2xl space-y-1">
          <div className="text-black font-semibold text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Analytical Redesign
          </div>
          <p className="text-xs text-gray-600">
            Recorded usability testing with 5 target users & data-driven iterations.
          </p>
        </div>

        <div className="framer-card p-5 rounded-2xl space-y-1">
          <div className="text-black font-semibold text-sm flex items-center gap-2">
            <Code2 className="w-4 h-4 text-purple-600" /> Next.js & Framer Motion
          </div>
          <p className="text-xs text-gray-600">
            Vibe-coded custom components with zero platform lock-in on Vercel.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
