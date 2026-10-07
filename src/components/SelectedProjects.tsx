'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    slug: 'collaborative-enterprise-saas',
    title: 'CodeForACause',
    subtitle: 'Empowering Community Care Through Smart, Simple Inventory',
    category: 'Collaborative Anchor',
    year: '2025',
    description:
      'Redesigned an open-source inventory & admin workflow alongside developers. Solved role-based permissions and complex data-dense tables under real API constraints.',
    tags: ['Cross-Functional Dev Work', 'System Architecture', 'Figma + React Spec'],
    image: 'https://framerusercontent.com/images/2c0716ba1156f255f9c2959ad82b90d153352638.png',
  },
  {
    slug: 'analytical-wealthtech-redesign',
    title: 'NoteEase',
    subtitle: 'Safety & AI Friction in High-Stakes Dashboards',
    category: 'Analytical Redesign',
    year: '2025',
    description:
      'Conducted recorded usability testing sessions with 5 target users. Synthesized friction points into actionable component redesigns validated in round 2 testing.',
    tags: ['5 User Tests (Zoom/Meet)', 'Usability Metrics', 'Trade-off Audit'],
    image: 'https://framerusercontent.com/images/34e0b2991e6c0cfa98576117351f95ea9bbc9737.png',
  },
  {
    slug: 'plug-pay-go',
    title: 'Plug, Pay, Go',
    subtitle: 'EV Fast-Charger Unattended Payment Authentication Flow',
    category: 'FinTech & Hardware UX',
    year: '2025',
    description:
      'Optimized a high-stakes checkout flow at physical EV chargers. Reduced transaction drop-off by redesigning real-time status feedback and tap-to-pay triggers.',
    tags: ['Mobile UX', 'Hardware Constraints', 'Payment Flow'],
    image: 'https://framerusercontent.com/images/822bd4a85aaf8c79eff30908f6c8e4c88f3e2c73.png',
  },
  {
    slug: 'abjad-design-system',
    title: 'Abjad',
    subtitle: 'Editorial & Content-Heavy Design System for Enterprise',
    category: 'Design Systems',
    year: '2024',
    description:
      'Built a flexible, typographically driven component system. Focused on readability, scalable spacing, and seamless developer handoff tokens.',
    tags: ['Design System', 'Typography Scale', 'Tokens'],
    image: 'https://framerusercontent.com/images/c57f8e2b10c46d080fa5304882381c8ae0810894.png',
  },
];

export default function SelectedProjects() {
  return (
    <section id="works" className="py-16 px-6 max-w-5xl mx-auto space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">
            Portfolio Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Selected Projects
          </h2>
        </div>
        <p className="text-sm text-gray-600 max-w-sm">
          A showcase of product UX case studies, developer collaborations, and user-tested interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group framer-card rounded-3xl overflow-hidden flex flex-col justify-between"
          >
            {/* Project Image Frame */}
            <div className="h-64 w-full bg-gray-100 relative overflow-hidden border-b border-black/5">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundColor: '#e5e0d8',
                }}
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/90 backdrop-blur-md text-gray-900 shadow-sm border border-black/10">
                  {project.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-2.5 py-1 rounded-full text-xs font-mono text-gray-700 bg-white/90 backdrop-blur-md border border-black/10">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-gray-500">{project.subtitle}</p>
                <p className="text-sm text-gray-600 pt-2 leading-relaxed">{project.description}</p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 border border-black/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">Case Study & Prototype</span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors"
                  >
                    Read Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
