export default function Section4PrintCollateral() {
  return (
    <section id="print-collateral" className="py-24 px-6 max-w-7xl mx-auto border-b border-black/10">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">
        <span className="font-bold text-black">PROJECT 03</span>
        <span>/</span>
        <span>CLIENT SUMMIT & TACTILE PRINT COLLATERAL</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative & Technical Print Precision (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-black leading-tight">
            Tactile Print Collateral: Annual Client Gala & M&A Monograph
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
            <p>
              In a digital-first world, bespoke physical print collateral remains the hallmark of elite institutional relationships. When high-net-worth clients, corporate directors, and institutional lenders hold a firm's publication, paper weight, binding, and ink density communicate prestige before a single word is read.
            </p>
            <p>
              This suite was designed in Adobe InDesign using mathematical baseline grids, custom kerning tables, and strict typographic hierarchy. I handled complete pre-press prep: color profiles (FOGRA39 / GRACoL), spot-varnish overlays, bleed/slug definitions, and direct vendor press-check coordination with Montreal print shops.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-200 space-y-3 font-mono text-xs">
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-500">FORMATS</span>
              <span className="text-black font-semibold">Foil-Stamped Invitation, 32-Page Monograph, Menu</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-500">PRINT SPECS</span>
              <span className="text-black font-semibold">130lb Mohawk Superfine, Blind Emboss, Black Foil</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-500">SOFTWARE</span>
              <span className="text-black font-semibold">Adobe InDesign, Illustrator, Acrobat Pro</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-500">PRODUCTION</span>
              <span className="text-black font-semibold">CMYK + Pantone Spot Black, Prepress Certified</span>
            </div>
          </div>
        </div>

        {/* Right Column: Large Immersive Macro-Texture Print Mockup (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative bg-[#f4f2ee] p-8 sm:p-14 border border-black/15 shadow-[12px_12px_0px_0px_rgba(17,17,17,0.08)]">
            {/* The Print Mockup Presentation Sheet */}
            <div className="bg-[#faf9f6] border border-neutral-300 p-8 sm:p-12 shadow-xl relative space-y-8">
              {/* Foil Stamp Emblem Header */}
              <div className="flex justify-between items-start border-b border-black/15 pb-6">
                <div className="space-y-1">
                  <span className="font-serif-editorial text-2xl font-bold tracking-tight text-black block">
                    KRB AVOCATS
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                    ANNUAL PARTNERS & CLIENT SUMMIT // RITZ-CARLTON MONTREAL
                  </span>
                </div>
                <div className="px-3 py-1 border border-black text-[10px] font-mono uppercase tracking-wider text-black">
                  Print Proof v4.2
                </div>
              </div>

              {/* Monograph Body Text Grid Preview */}
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
                  CHAPTER I // ADAPTIVE DEALMAKING IN VOLATILE MARKETS
                </span>
                <p className="font-serif-editorial text-lg sm:text-xl font-normal text-black leading-snug">
                  "The modern corporate landscape demands legal agility paired with unshakeable financial discipline. We architect agreements that endure."
                </p>
                <div className="grid grid-cols-2 gap-6 pt-2 text-xs text-neutral-600 font-sans leading-relaxed border-t border-neutral-200">
                  <div>
                    <span className="font-bold text-black block font-mono text-[10px] uppercase mb-1">
                      SECTION 01: LEGAL FRAMEWORK
                    </span>
                    Rigorous cross-examination of emerging private equity structures and fiduciary disclosure mandates under the Civil Code of Quebec.
                  </div>
                  <div>
                    <span className="font-bold text-black block font-mono text-[10px] uppercase mb-1">
                      SECTION 02: RISK ARBITRAGE
                    </span>
                    Strategic indemnification covenants, earn-out provisions, and escrow management for multi-party commercial syndicates.
                  </div>
                </div>
              </div>

              {/* Colophon & Print Barcode */}
              <div className="pt-6 border-t border-black/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>Binding: PUR Perfect Bound // 300gsm Cover</span>
                <span>Printer: Imprimerie Montreal QC</span>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-neutral-500 flex items-center justify-between px-1">
            <span>&bull; Zero margin for typographic error in client-facing print</span>
            <span>&bull; Strict budget & turnaround management</span>
          </div>
        </div>
      </div>
    </section>
  );
}
