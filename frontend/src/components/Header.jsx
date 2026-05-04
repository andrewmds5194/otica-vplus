import React from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/brand";

const NAV = [
  { id: "sobre", label: "Sobre" },
  { id: "produtos", label: "Produtos" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-[72px] md:h-[84px] flex items-center justify-between">
        <a
          href="#top"
          data-testid="header-logo"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="relative inline-flex items-center justify-center h-11 w-11 md:h-12 md:w-12 rounded-xl bg-black border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-brand group-hover:glow-brand-sm">
            <img
              src={BRAND.logoUrl}
              alt="Ótica V+ logo"
              className="h-9 w-9 md:h-10 md:w-10 object-contain"
              loading="eager"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[22px] md:text-[24px] font-extrabold tracking-tight text-white">
              Ótica <span className="text-brand">V+</span>
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-zinc-400 mt-1">
              Foco em Visão
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => goTo(n.id)}
              className="text-[13px] uppercase tracking-[0.18em] text-zinc-400 hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            data-testid="header-whatsapp-btn"
            className="hidden sm:inline-flex items-center gap-2 bg-brand text-black font-bold uppercase tracking-wider text-[12px] px-5 py-3 rounded-full transition-all duration-300 hover:bg-white hover:shadow-[0_0_24px_rgba(34,197,94,0.55)]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 text-white hover:border-brand hover:text-brand transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu-panel"
          className="lg:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                data-testid={`mobile-nav-${n.id}`}
                onClick={() => goTo(n.id)}
                className="text-left text-zinc-300 hover:text-brand py-3 text-sm uppercase tracking-[0.2em] border-b border-white/5"
              >
                {n.label}
              </button>
            ))}
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              data-testid="mobile-whatsapp-btn"
              className="mt-4 inline-flex justify-center items-center gap-2 bg-brand text-black font-bold uppercase tracking-wider text-[13px] px-5 py-3 rounded-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.11 4.91A10.05 10.05 0 0 0 12.04 2C6.5 2 2 6.5 2 12.04c0 1.77.46 3.5 1.34 5.02L2 22l5.08-1.33a10 10 0 0 0 4.96 1.27h.01c5.54 0 10.04-4.5 10.04-10.04 0-2.68-1.05-5.2-2.98-7.99zM12.05 20.2h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.02.79.81-2.94-.2-.31a8.13 8.13 0 1 1 14.79-4.39 8.13 8.13 0 0 1-7.93 8.16zm4.46-6.09c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}
