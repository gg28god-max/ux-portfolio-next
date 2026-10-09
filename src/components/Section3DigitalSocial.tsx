export default function Section3DigitalSocial() {
  return (
    <section id="digital-social" className="bg-[#0b0e14] text-white py-24 px-6 border-b border-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="brief-eyebrow text-amber-400 font-bold">03 &mdash; DIGITAL ARCHITECTURE</span>
              <span>/</span>
              <span>B2B SOCIAL & ENGAGEMENT</span>
            </div>
            <h2 className="font-display text-4xl sm:text-7xl text-white leading-[0.92] tracking-wide">
              B2B Social & Thought Leadership Architecture
            </h2>
          </div>
          <p className="text-sm text-neutral-400 font-mono max-w-md">
            Elevating firm visibility across LinkedIn, digital newsletters, and web publications with zero brand dilution.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Device Mockups & LinkedIn Carousel Framework (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#141923] p-8 sm:p-12 border border-white/10 relative">
              {/* Flat Bezel / Social Card Frame */}
              <div className="bg-[#0e121a] border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl">
                {/* Header of social asset */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white text-black font-display flex items-center justify-center text-xl">
                      KRB
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block font-sans">KRB Avocats | Lawyers</span>
                      <span className="text-[10px] text-neutral-400 font-mono block">12,400+ Followers &bull; Corporate Law Practice</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 border border-white/20 text-[10px] font-mono text-neutral-400 uppercase">
                    LinkedIn Asset Spec
                  </span>
                </div>

                {/* Content graphic mockup */}
                <div className="p-6 bg-[#080a0e] border border-white/15 space-y-3">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                    TRANSACTION SPOTLIGHT // MONTREAL
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-white leading-tight tracking-wide">
                    Advising in the Acquisition of $85M Industrial Logistics Hub
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    KRB's Real Estate & Financing practice acted as lead counsel in orchestrating structured debt syndication and municipal zoning compliance.
                  </p>
                  <div className="pt-2 flex items-center gap-4 text-[10px] font-mono text-neutral-500 border-t border-white/10">
                    <span>Lead Counsel: Partner Profile Linked</span>
                    <span>Format: 1080 &times; 1350 Carousel</span>
                  </div>
                </div>

                {/* Engagement metrics breakdown */}
                <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs font-mono">
                  <div className="p-2 border border-white/10 bg-white/5">
                    <span className="text-neutral-400 text-[10px] block">ORGANIC REACH</span>
                    <span className="text-white font-bold text-sm">+184%</span>
                  </div>
                  <div className="p-2 border border-white/10 bg-white/5">
                    <span className="text-neutral-400 text-[10px] block">ENGAGEMENT RATE</span>
                    <span className="text-white font-bold text-sm">6.2%</span>
                  </div>
                  <div className="p-2 border border-white/10 bg-white/5">
                    <span className="text-neutral-400 text-[10px] block">C-SUITE INBOUNDS</span>
                    <span className="text-white font-bold text-sm">Top Quartile</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>&bull; Strict brand typography hierarchy</span>
                <span>&bull; Automated Figma auto-layout templates for marketing team</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Disciplines (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight tracking-wide">
              Consistency That Commands Authority
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans font-light">
              <p>
                In professional legal services, digital marketing must mirror the caliber of the firm's counsel. Scattershot social graphics and disjointed visuals erode institutional trust.
              </p>
              <p>
                I established a cohesive digital asset engine: standardized LinkedIn transaction announcements, partner appointment badges, thought leadership quotes, and SEO-optimized web banners.
              </p>
              <p>
                Every asset adheres to rigorous French/English bilingual grammar conventions, optimal aspect ratio guidelines, and web accessibility color contrast thresholds.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">CHANNELS</span>
                <span className="text-white font-semibold">LinkedIn, WordPress CMS, Mailchimp</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">SEO & CONTENT</span>
                <span className="text-white font-semibold">OpenGraph Meta, Alt Tags, Editorial Snippets</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">BILINGUAL EXECUTION</span>
                <span className="text-white font-semibold">Native French & English Parity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
