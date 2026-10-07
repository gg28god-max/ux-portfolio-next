'use client';

import { motion } from 'framer-motion';
import { Code2, Compass, Cpu, Terminal, GitBranch, Sparkles } from 'lucide-react';

const capabilities = [
  {
    title: 'UX Research & Usability Testing',
    icon: Compass,
    skills: ['User Interviews (Zoom/Meet)', 'Usability Test Audits', 'Friction Point Synthesis', 'Task Success Metrics'],
    color: 'text-indigo-400',
  },
  {
    title: 'UI Design & System Architecture',
    icon: Cpu,
    skills: ['Figma Design Systems', 'Auto-Layout & Variants', 'Role-Based Permissions', 'Data-Dense Dashboards'],
    color: 'text-purple-400',
  },
  {
    title: 'Vibe-Coding Frontend (Next.js)',
    icon: Code2,
    skills: ['Next.js App Router', 'React Components', 'Tailwind CSS v4', 'Framer Motion Animations'],
    color: 'text-emerald-400',
  },
  {
    title: 'Technical Delivery & Handoff',
    icon: GitBranch,
    skills: ['GitHub Repository Management', 'Vercel Deployment Pipelines', 'Developer Specs & Constraints', 'MDX Content Systems'],
    color: 'text-pink-400',
  },
];

export default function TechStackGrid() {
  return (
    <section id="capabilities" className="py-16 px-6 max-w-6xl mx-auto space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> Core Capabilities
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Where UX Strategy meets Production Code
        </h2>
        <p className="text-sm text-gray-400">
          Equipped with both product design empathy and modern React web skills to collaborate seamlessly with engineering teams.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/15 transition-all space-y-4"
            >
              <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${item.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base leading-snug">{item.title}</h3>
              <ul className="space-y-2 text-xs text-gray-400 font-mono">
                {item.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
