import Link from 'next/link';

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Name & Target */}
        <div className="flex items-center gap-3">
          <Link href="/" className="font-display text-2xl tracking-wider text-black hover:opacity-80">
            GUILLAUME GODER
          </Link>
          <span className="hidden sm:inline-block w-px h-4 bg-black/20" />
          <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
            KRB AVOCATS &bull; GRAPHIC DESIGN & DIGITAL MARKETING
          </span>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-700">
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#pitch-deck" className="hover:text-black hover:underline underline-offset-4">
              01. Pitch Deck
            </a>
            <a href="#digital-social" className="hover:text-black hover:underline underline-offset-4">
              02. Digital & Social
            </a>
            <a href="#print-collateral" className="hover:text-black hover:underline underline-offset-4">
              03. Print
            </a>
            <a href="#closer" className="hover:text-black hover:underline underline-offset-4">
              04. About
            </a>
          </nav>

          <a
            href="mailto:gg28.god@gmail.com?subject=KRB%20Avocats%20-%20Graphic%20Design%20%26%20Digital%20Marketing%20Coordinator"
            className="btn-sharp px-4 py-2 text-[11px]"
          >
            Direct Contact
          </a>
        </div>
      </div>
    </header>
  );
}
