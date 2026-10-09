'use client';

import { ArrowUpRight, FileText, Linkedin, Mail } from 'lucide-react';

export default function Section5TheCloser() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <section id="closer" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Tag */}
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-12">
        <span className="font-bold text-black">SECTION 04</span>
        <span>/</span>
        <span>ABOUT & DIRECT INQUIRY</span>
      </div>

      {/* Split Screen Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: B&W Professional Headshot Placeholder (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="relative border border-black p-4 bg-neutral-50 shadow-[10px_10px_0px_0px_rgba(17,17,17,1)]">
            <div
              className="w-full h-[460px] bg-neutral-200 border border-black/20 bg-cover bg-center grayscale contrast-125 relative"
              style={{
                backgroundImage: `url('https://framerusercontent.com/images/ue9IClg37SpZ5YcBTAPeavvDUNo.png')`,
                backgroundColor: '#d8d8d8',
              }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-4 left-4 right-4 bg-black text-white p-3 font-mono text-xs flex justify-between items-center">
                <span>GUILLAUME GODER</span>
                <span className="text-neutral-400">MONTREAL, QC</span>
              </div>
            </div>
            <div className="mt-3 flex justify-between text-[11px] font-mono text-neutral-500">
              <span>Bilingual: English & French</span>
              <span>Visual Design & Digital Marketing</span>
            </div>
          </div>
        </div>

        {/* Right Column: Statement, Qualifications & Direct Actions (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              CANDIDATE STATEMENT
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-black leading-tight">
              Bridging Rigorous Institutional Standards with Modern Digital Reach.
            </h2>
          </div>

          <blockquote className="border-l-2 border-black pl-6 text-lg sm:text-xl text-neutral-800 font-light leading-relaxed italic">
            "I combine a deep understanding of corporate marketing with advanced technical design proficiency. I am comfortable bridging the gap between rigorous print standards and modern digital CMS platforms. Let's discuss how I can elevate KRB's brand visibility."
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-4 border-t border-neutral-200">
            <div className="p-4 bg-neutral-50 border border-neutral-200 space-y-1">
              <span className="font-bold text-black block">RELEVANT PROFICIENCIES</span>
              <p className="text-neutral-600 font-sans text-xs">
                Adobe Creative Cloud (InDesign, Illustrator, Photoshop), PowerPoint Pitch Decks, WordPress CMS, LinkedIn Campaign Management, Mailchimp, SEO Best Practices.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 border border-neutral-200 space-y-1">
              <span className="font-bold text-black block">CULTURAL & WORKPLACE FIT</span>
              <p className="text-neutral-600 font-sans text-xs">
                Accustomed to fast-paced legal and financial transaction deadlines, partner-level review feedback, and maintaining uncompromising quality under pressure.
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="mailto:gg28.god@gmail.com?subject=KRB%20Avocats%20Interview%20Request%20-%20Guillaume%20Goder"
              className="btn-sharp px-8 py-4 text-xs font-mono flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact via Email
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sharp-outline px-6 py-4 text-xs font-mono flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn Profile
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handlePrint}
              type="button"
              className="btn-sharp-outline px-6 py-4 text-xs font-mono flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Print / Save Dossier
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
