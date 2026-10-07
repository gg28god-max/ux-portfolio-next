'use client';

import { motion } from 'framer-motion';
import { Layers, Terminal, Sparkles, Cpu } from 'lucide-react';

const testimonials = [
  {
    icon: Terminal,
    title: 'Developer Handoff',
    text: 'Guillaume bridges complex frontend logic with clean design system specs seamlessly.',
  },
  {
    icon: Cpu,
    title: 'System Architecture',
    text: 'Designed role-based access & admin workflows that reduced user friction by 38%.',
  },
  {
    icon: Sparkles,
    title: 'Visual Polish',
    text: 'Crisp typography hierarchy, soft contrast palettes, and interactive Framer Motion micro-interactions.',
  },
  {
    icon: Layers,
    title: 'User Validation',
    text: 'Rigorous 5-user usability testing protocols that uncover real product friction.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
      <div className="border-b border-black/10 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
          Testimonials & Highlights
        </h2>
      </div>

      {/* 2x2 Dark Rounded Square Cards Grid matching Framer canvas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {testimonials.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#111111] text-white p-6 rounded-2xl flex flex-col justify-between aspect-square hover:bg-black transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed font-normal">{item.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
