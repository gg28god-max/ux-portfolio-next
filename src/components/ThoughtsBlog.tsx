'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ThoughtsBlog() {
  return (
    <section id="blog" className="py-16 px-6 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-black/10 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
          Thoughts
        </h2>
        <a href="#blog" className="text-xs font-medium text-gray-500 hover:text-black flex items-center gap-1">
          View all <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-black/10 flex flex-col justify-between"
        >
          <div className="h-48 w-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('https://framerusercontent.com/images/2c0716ba1156f255f9c2959ad82b90d153352638.png')` }} />
          <div className="p-5 space-y-2">
            <span className="text-[11px] font-mono text-gray-400">May 5, 2025</span>
            <h3 className="font-bold text-black text-base group-hover:text-indigo-600 transition-colors leading-snug">
              Building Trust Through Clear Design
            </h3>
            <p className="text-xs text-gray-600">How thoughtful visual choices create a stronger sense of reliability for modern products.</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-black/10 flex flex-col justify-between"
        >
          <div className="h-48 w-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('https://framerusercontent.com/images/34e0b2991e6c0cfa98576117351f95ea9bbc9737.png')` }} />
          <div className="p-5 space-y-2">
            <span className="text-[11px] font-mono text-gray-400">Jun 16, 2025</span>
            <h3 className="font-bold text-black text-base group-hover:text-indigo-600 transition-colors leading-snug">
              The Role of Art Direction in Branding
            </h3>
            <p className="text-xs text-gray-600">Why visual direction helps brands create emotion and a distinct point of view.</p>
          </div>
        </motion.div>

        {/* Card 3: Dark CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#111111] text-white p-6 rounded-2xl flex flex-col justify-between space-y-6"
        >
          <div className="space-y-3">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Blog & Insights</span>
            <h3 className="text-xl font-bold text-white leading-snug">
              See how we shape brands with clarity and craft — explore our blog
            </h3>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-gray-300 transition-colors"
          >
            Explore all articles <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
