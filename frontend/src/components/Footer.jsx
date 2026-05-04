import React from "react";
import { Instagram, MapPin, Phone } from "lucide-react";
import { BRAND } from "@/lib/brand";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-black border-t border-white/5 pt-16 pb-10"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-white/10 overflow-hidden">
                <img
                  src={BRAND.logoUrl}
                  alt="Ótica V+"
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold tracking-tight text-white">
                  Ótica <span className="text-brand">V+</span>
                </p>
                <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 mt-1">
                  Foco em Visão
                </p>
              </div>
            </div>
            <p className="mt-6 text-zinc-400 text-sm max-w-md leading-relaxed">
              Armações premium, lentes certificadas e atendimento humano. A
              Ótica V+ é o seu novo lugar para enxergar o mundo com mais estilo.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand">
              Navegação
            </p>
            <ul className="mt-5 space-y-3 text-sm text-zinc-300">
              {[
                ["Sobre", "sobre"],
                ["Produtos", "produtos"],
                ["Diferenciais", "diferenciais"],
                ["Depoimentos", "depoimentos"],
                ["Contato", "contato"],
              ].map(([l, id]) => (
                <li key={id}>
                  <button
                    data-testid={`footer-nav-${id}`}
                    onClick={() =>
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-brand transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand">
              Contato
            </p>
            <ul className="mt-5 space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand" />
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-brand transition-colors"
                  data-testid="footer-whatsapp"
                >
                  {BRAND.whatsappPretty}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-brand" />
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-brand transition-colors"
                  data-testid="footer-instagram"
                >
                  {BRAND.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand" />
                <span>Brasília · DF</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Ótica V+. Todos os direitos reservados.
          </p>
          <p className="uppercase tracking-[0.22em]">Foco em visão · estilo em você</p>
        </div>
      </div>
    </footer>
  );
}
