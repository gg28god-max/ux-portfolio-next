'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Users, Activity, Layers, CheckCircle2, Lock } from 'lucide-react';

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Collaborative Anchor' | 'Analytical Redesign';
  industry: string;
  impact: string;
  tags: string[];
  status: 'In Progress (Research Phase)' | 'Complete';
  description: string;
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'collaborative-enterprise-saas',
    title: 'Enterprise Role-Based Access & Workflow Redesign',
    subtitle: 'Streamlining complex permissions and developer handoff for B2B SaaS',
    category: 'Collaborative Anchor',
    industry: 'B2B SaaS & Developer Tools',
    impact: 'Reduced setup time by 38% across 5 dev teams',
    tags: ['Cross-Functional Dev Work', 'System Architecture', 'Figma + React Spec', 'Usability'],
    status: 'In Progress (Research Phase)',
    description:
      'Working alongside developers to refactor a multi-tenant enterprise admin portal. Focused on balancing security compliance with intuitive UI affordances under strict API constraints.',
    gradient: 'from-indigo-600/20 via-purple-600/10 to-transparent',
  },
  {
    id: '2',
    slug: 'analytical-wealthtech-redesign',
    title: 'FinTech Portfolio & Compliance Dashboard Redesign',
    subtitle: 'Usability testing & data-driven redesign of wealth management analytics',
    category: 'Analytical Redesign',
    industry: 'FinTech / WealthTech',
    impact: '+27% task completion speed in 5 user test sessions',
    tags: ['5 User Tests (Zoom/Meet)', 'Pain-Point Synthesis', 'Interactive Prototype', 'Trade-off Audit'],
    status: 'In Progress (Research Phase)',
    description:
      'Conducted recorded usability tests on an existing analytics product with 5 target users. Synthesized friction points into actionable component redesigns validated in round 2 testing.',
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
  },
];

export default function CaseStudyGrid() {
  return (
    <section id="work" className="py-16 px-6 max-w-6xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-widest mb-2">
            <Layers className="w-3.5 h-3.5" /> Featured Deep Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Case Studies & System Design
          </h2>
        </div>
        <p className="text-sm text-gray-400 max-w-md">
          Focusing on 2 high-impact, logic-heavy case studies with real constraints, developer collaboration, and user testing metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study, idx) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group relative glass-panel rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300"
          >
            {/* Ambient Card Header Gradient */}
            <div className={`h-48 w-full bg-gradient-to-br ${study.gradient} p-6 flex flex-col justify-between border-b border-white/5 relative`}>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium glass-pill text-indigo-300 border border-indigo-500/30">
                  {study.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-amber-400 font-mono glass-pill px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  {study.status}
                </span>
              </div>

              <div>
                <span className="text-xs text-gray-400 font-mono block">Industry: {study.industry}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {study.title}
                </h3>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-sm text-gray-300 leading-relaxed">
                {study.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Impact / Metric: {study.impact}
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">
                  Spec & Wireframes Ready
                </span>
                <Link
                  href={`/projects/${study.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                >
                  View Case Study Draft
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
