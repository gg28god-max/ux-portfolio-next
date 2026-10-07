'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

const articles = [
  {
    title: 'Top Web Design Trends to Watch in 2025',
    readTime: '8 min read',
    date: 'Jun 16, 2025',
    snippet:
      'Web design in 2025 is more immersive, responsive, and human-centered than ever before. Exploring AI-enhanced personalization, kinetic typography, and accessible UX.',
  },
  {
    title: 'Starting and Growing a Career in Web Design',
    readTime: '6 min read',
    date: 'May 5, 2025',
    snippet:
      'Web designers operating at the intersection of creativity and front-end code command higher trust and bridge the gap between vision and implementation.',
  },
  {
    title: 'Designing Products with Clear Purpose',
    readTime: '6 min read',
    date: 'May 5, 2025',
    snippet:
      'Purposeful digital product design starts with a simple idea: every interface and interaction should solve a real user problem.',
  },
  {
    title: 'How Creative Teams Build Brand Systems',
    readTime: '5 min read',
    date: 'Jun 16, 2025',
    snippet:
      'A brand system is the comprehensive set of rules, design tokens, and components that define how an organization communicates visually across touchpoints.',
  },
];

export default function ThoughtsBlog() {
  return (
    <section id="blog" className="py-16 px-6 max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">
            Articles & Research
          </span>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Thoughts & Writings</h2>
        </div>
        <p className="text-sm text-gray-600 max-w-sm">
          Insights on UI/UX trends, system design, front-end workflows, and user research.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {articles.map((article, idx) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group framer-card p-6 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">{article.snippet}</p>
            </div>

            <div className="pt-3 border-t border-black/5 flex items-center justify-between">
              <span className="text-xs font-medium text-indigo-600 group-hover:underline">Read Article</span>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
