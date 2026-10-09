export default function Section1Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col justify-between px-6 pt-16 pb-12 max-w-7xl mx-auto border-b border-black/10">
      {/* Top Pre-header */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-500 pb-8 border-b border-neutral-200">
        <span className="brief-eyebrow text-black">01 &mdash; TARGETED CANDIDACY</span>
        <span>ROLE: GRAPHIC DESIGN & DIGITAL MARKETING COORDINATOR</span>
      </div>

      {/* Main Massive Left-Aligned Typography Block */}
      <div className="my-auto py-12 max-w-5xl space-y-6">
        <div className="inline-block px-3 py-1 bg-black text-white text-[11px] font-mono tracking-widest uppercase">
          MONTREAL, QC // BILINGUAL (ENGLISH & FRANÇAIS)
        </div>

        <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl text-black tracking-wide leading-[0.92]">
          VISUAL CLARITY FOR COMPLEX COMMUNICATIONS.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
          <p className="md:col-span-9 font-sans text-lg sm:text-2xl text-neutral-800 font-normal leading-relaxed">
            Bilingual Graphic Design & Digital Marketing Coordinator based in Montreal. Specializing in high-stakes B2B collateral, brand identity, and legal sector marketing.
          </p>
        </div>

        <div className="pt-6 flex flex-wrap items-center gap-4">
          <a href="#pitch-deck" className="btn-sharp px-8 py-4 text-xs font-mono">
            View Selected Work &darr;
          </a>
          <a
            href="mailto:gg28.god@gmail.com?subject=KRB%20Avocats%20Candidacy%20-%20Guillaume%20Goder"
            className="btn-sharp-outline px-8 py-4 text-xs font-mono"
          >
            Initiate Discussion
          </a>
        </div>
      </div>

      {/* Institutional Metadata & Pillars */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-black/10 text-xs font-mono">
        <div>
          <span className="text-neutral-400 block mb-1">PRACTICE DOMAINS</span>
          <span className="text-black font-semibold block">M&A, Real Estate, Corporate</span>
        </div>
        <div>
          <span className="text-neutral-400 block mb-1">TECHNICAL SUITE</span>
          <span className="text-black font-semibold block">InDesign, PowerPoint, Web CMS</span>
        </div>
        <div>
          <span className="text-neutral-400 block mb-1">LOCATION & LANGUAGE</span>
          <span className="text-black font-semibold block">Montreal, QC // FR & EN</span>
        </div>
        <div>
          <span className="text-neutral-400 block mb-1">AVAILABILITY</span>
          <span className="text-black font-semibold block">Full-Time Permanent</span>
        </div>
      </div>
    </section>
  );
}
