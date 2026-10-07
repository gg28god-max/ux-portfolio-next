'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-12 pb-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left Column: Heading & Bio (7 cols) */}
        <div className="md:col-span-7 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-black leading-[1.1]"
          >
            I'm Guillaume, Product Designer and UX Researcher
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pt-4 space-y-4 max-w-xl text-gray-700 text-base sm:text-lg leading-relaxed"
          >
            <p className="font-semibold text-black">Hi!</p>
            <p>
              I'm Guillaume, a UI/UX designer & visual developer currently working on web applications, design systems, and product experiences.
            </p>
            <p className="text-sm text-gray-600">
              For the past 4+ years, I've designed & built digital products across B2B SaaS, FinTech, and developer tools with a heavy focus on usability, technical feasibility, and clarity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2 flex items-center gap-4"
          >
            <a
              href="#works"
              className="px-6 py-3 rounded-full bg-black text-white font-medium text-sm hover:bg-gray-800 transition-all inline-flex items-center gap-2"
            >
              Selected Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Photo Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-md h-[420px] rounded-3xl overflow-hidden bg-gray-200 border border-black/10 shadow-md relative group">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: `url('https://framerusercontent.com/images/ue9IClg37SpZ5YcBTAPeavvDUNo.png')`,
                backgroundColor: '#eae6e1',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white font-medium text-sm">
              <span>Guillaume Goder</span>
              <span className="block text-xs text-gray-300 font-mono">Product Designer & Visual Dev</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
