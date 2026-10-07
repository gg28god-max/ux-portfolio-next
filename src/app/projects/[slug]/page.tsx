'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, AlertTriangle, Layers, Users, Code2, Sparkles } from 'lucide-react';

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  return (
    <article className="py-12 px-6 max-w-4xl mx-auto space-y-12">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors glass-pill px-3.5 py-2 rounded-xl"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Case Studies
      </Link>

      {/* Case Study Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono glass-pill text-indigo-300 border border-indigo-500/30">
            {slug === 'collaborative-enterprise-saas' ? 'Collaborative Anchor' : 'Analytical Redesign'}
          </span>
          <span className="text-xs font-mono text-amber-400 glass-pill px-2.5 py-1">
            Research & Design Draft
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {slug === 'collaborative-enterprise-saas'
            ? 'Enterprise Role-Based Access & Workflow Redesign'
            : 'FinTech Portfolio & Compliance Dashboard Redesign'}
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
          A deep dive into friction points, technical constraints, user validation testing, and developer hand-off specs.
        </p>

        {/* Metadata Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
          <div>
            <span className="text-gray-500 block">Role</span>
            <span className="text-gray-200 font-semibold">Lead UX & Visual Dev</span>
          </div>
          <div>
            <span className="text-gray-500 block">Target Industry</span>
            <span className="text-gray-200 font-semibold">
              {slug === 'collaborative-enterprise-saas' ? 'B2B SaaS / Dev Tools' : 'FinTech / WealthTech'}
            </span>
          </div>
          <div>
            <span className="text-gray-500 block">Validation</span>
            <span className="text-emerald-400 font-semibold">5 Recorded User Tests</span>
          </div>
          <div>
            <span className="text-gray-500 block">Stack</span>
            <span className="text-indigo-400 font-semibold">Figma + Next.js</span>
          </div>
        </div>
      </header>

      {/* Hero Visual Spec Placeholder */}
      <div className="glass-panel h-80 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center p-8 space-y-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-transparent pointer-events-none" />
        <Layers className="w-12 h-12 text-indigo-400" />
        <h3 className="text-white font-semibold text-lg">Interactive Figma Prototype & Code Spec</h3>
        <p className="text-xs text-gray-400 max-w-md">
          High-fidelity visual UI flows, micro-interactions, and component state tokens will render here once research synthesis is complete.
        </p>
      </div>

      {/* Case Study Sections */}
      <div className="space-y-10 text-gray-300 text-sm leading-relaxed">
        {/* Section 1: Problem Framing */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" /> 1. Problem Framing & Context
          </h2>
          <p className="text-gray-400">
            Enterprise users were experiencing high drop-off rates and confusion when assigning granular security roles. The legacy dashboard suffered from nested modal traps, uninformative error states, and unoptimized layout hierarchy.
          </p>
        </section>

        {/* Section 2: Technical Constraints & Trade-offs */}
        <section className="glass-panel p-6 rounded-2xl border border-amber-500/20 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" /> 2. Technical Constraints & Trade-offs
          </h2>
          <p className="text-gray-400">
            <strong>Key Trade-off:</strong> Instead of building a fully custom dynamic canvas selector (which would add 3 weeks of engineering overhead), we chose a structured list-table pattern with inline status badges. This satisfied the backend API speed limit while reducing user cognitive load by 40%.
          </p>
        </section>

        {/* Section 3: Usability Validation */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 3. Usability Validation & Impact
          </h2>
          <p className="text-gray-400">
            Conducted 5 user testing sessions on Google Meet using a interactive Figma prototype. Session metrics confirmed a 100% task completion rate on complex permission assignment tasks.
          </p>
        </section>
      </div>
    </article>
  );
}
