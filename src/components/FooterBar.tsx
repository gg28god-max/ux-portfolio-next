export default function FooterBar() {
  return (
    <footer className="border-t border-black/15 bg-neutral-50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-500">
        <div className="space-y-1 text-center sm:text-left">
          <span className="font-bold text-black block">GUILLAUME GODER</span>
          <span className="block text-[11px]">
            Targeted Portfolio Presentation &bull; Graphic Design & Digital Marketing Coordinator
          </span>
        </div>

        <div className="text-center sm:text-right space-y-1">
          <span className="block text-[11px] text-neutral-400">
            CONFIDENTIAL CANDIDACY DOSSIER // KRB AVOCATS
          </span>
          <span className="block text-black">
            MONTREAL &bull; TORONTO &bull; QUEBEC CITY
          </span>
        </div>
      </div>
    </footer>
  );
}
