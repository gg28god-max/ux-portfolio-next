'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Guillaume bridges the gap between complex engineering requirements and user empathy seamlessly. His design handoff saved our dev team weeks.',
    author: 'Lead Software Engineer',
    company: 'Enterprise SaaS Startup',
  },
  {
    quote:
      'The 5 usability testing sessions Guillaume ran uncovered critical friction points we had missed for months. Outstanding data-driven UX process.',
    author: 'Product Manager',
    company: 'FinTech Platform',
  },
  {
    quote:
      'Attention to detail, crisp typography hierarchy, and smooth Framer Motion micro-interactions. Guillaume is a top-tier visual developer.',
    author: 'Design Director',
    company: 'Creative Studio',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">
          Feedback & Endorsements
        </span>
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="framer-card p-6 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed italic">"{item.quote}"</p>
            </div>
            <div className="pt-3 border-t border-black/5 text-xs">
              <span className="font-semibold text-gray-900 block">{item.author}</span>
              <span className="text-gray-500 font-mono">{item.company}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
