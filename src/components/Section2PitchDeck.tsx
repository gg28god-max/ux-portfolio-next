export default function Section2PitchDeck() {
  return (
    <section id="pitch-deck" className="py-24 px-6 max-w-7xl mx-auto border-b border-black/10">
      {/* Section Tag */}
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">
        <span className="brief-eyebrow text-black font-bold">02 &mdash; CASE STUDY</span>
        <span>/</span>
        <span>MERGERS & ACQUISITIONS COLLATERAL</span>
      </div>

      {/* Staggered Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Case Study Narrative (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display text-4xl sm:text-6xl text-black leading-[0.95] tracking-wide">
            Corporate Pitch Deck: Cross-Border M&A Practice
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-sans font-normal">
            <p>
              In high-stakes corporate transactions, design is not ornamental; it is an instrument of credibility and risk mitigation. For this institutional M&A pitch deck, I transformed dense transactional data, multi-jurisdictional tax structures, and regulatory timelines into an authoritative, scannable presentation system.
            </p>
            <p>
              Built specifically in Microsoft PowerPoint to ensure firm partners and legal counsel can manipulate slides under strict closing deadlines without breaking baseline grids or typography styles.
            </p>
          </div>

          {/* Technical Disciplines */}
          <div className="pt-4 border-t border-neutral-200 space-y-3 font-mono text-xs">
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-500">CORE DELIVERABLE</span>
              <span className="text-black font-semibold">45-Slide Master Deck & Deal Sheet Template</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-500">INFORMATION ARCHITECTURE</span>
              <span className="text-black font-semibold">Deal Timelines, Waterfall Charts, Organigrams</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-500">SOFTWARE STACK</span>
              <span className="text-black font-semibold">Microsoft PowerPoint, Adobe Illustrator</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-500">STANDARDS</span>
              <span className="text-black font-semibold">Strict 12-Column Grid, Bilingual Typographic Rules</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Presentation Slides Grid (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Overlapping Presentation Slides Mockup with subtle harsh drop shadow */}
          <div className="relative bg-neutral-100 p-8 sm:p-12 border border-black/15 shadow-[12px_12px_0px_0px_rgba(17,17,17,0.08)]">
            {/* Primary Slide Mockup */}
            <div className="bg-white border border-black p-6 sm:p-8 space-y-6 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] relative z-20">
              <div className="flex justify-between items-start border-b border-black pb-3 text-xs font-mono">
                <div>
                  <span className="font-bold text-black uppercase tracking-wider block">KRB AVOCATS // CONFIDENTIAL</span>
                  <span className="text-neutral-500 text-[10px]">TRANSACTION STRUCTURING & REGULATORY ADVISORY</span>
                </div>
                <span className="text-[10px] text-neutral-400">SLIDE 14</span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block">
                  FIGURE 2.4 — DEAL ARCHITECTURE & TAX SEQUENCING
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-black leading-tight tracking-wide">
                  Multi-Tier Entity Acquisition: Closing Sequence & Escrow Allocation
                </h3>
              </div>

              {/* Data Viz Chart Mockup */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-neutral-50 border border-neutral-300 space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 block">PHASE 01: DUE DILIGENCE</span>
                  <span className="text-base font-bold text-black font-mono block">$140M</span>
                  <span className="text-[10px] text-neutral-600 block font-sans">Asset Allocation Verified</span>
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-300 space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 block">PHASE 02: REGULATORY</span>
                  <span className="text-base font-bold text-black font-mono block">100%</span>
                  <span className="text-[10px] text-neutral-600 block font-sans">Competition Bureau Cleared</span>
                </div>
                <div className="p-3 bg-black text-white space-y-1">
                  <span className="text-[10px] font-mono text-neutral-400 block">PHASE 03: CLOSING</span>
                  <span className="text-base font-bold text-white font-mono block">T-ZERO</span>
                  <span className="text-[10px] text-neutral-300 block font-sans">Funds Escrow Released</span>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex justify-between text-[11px] font-mono text-neutral-500">
                <span>Typography: Bebas Neue + Plus Jakarta Sans</span>
                <span>PowerPoint Master Layout</span>
              </div>
            </div>

            {/* Staggered Underlapping Slide 2 */}
            <div className="bg-[#fcfcfc] border border-neutral-400 p-6 space-y-4 mt-[-15px] ml-6 shadow-sm relative z-10 opacity-95">
              <div className="flex justify-between items-center text-xs font-mono text-neutral-500 border-b border-neutral-200 pb-2">
                <span>TRANSACTION TOMBSTONE SUMMARY</span>
                <span className="text-[10px]">SLIDE 15</span>
              </div>
              <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                Comparative analysis of cross-border statutory compliance frameworks in Quebec and Ontario commercial jurisdictions.
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-neutral-500 flex items-center justify-between px-1">
            <span>&bull; Strict formatting adherence to firm guidelines</span>
            <span>&bull; Rapid turnaround for partner meetings</span>
          </div>
        </div>
      </div>
    </section>
  );
}
