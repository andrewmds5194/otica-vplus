import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { WhatsAppIcon } from "@/components/Header";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Backdrop image */}
      <div className="absolute inset-0">
        <img
          src={BRAND.hero}
          alt="Modelo com óculos premium"
          className="h-full w-full object-cover object-[60%_center] scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30 md:to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
      </div>

      {/* Vertical brand accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand/40 to-transparent hidden md:block" />

      {/* Floating stat card top-right */}
      <div className="absolute right-5 top-28 md:right-10 md:top-32 hidden md:flex items-center gap-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-4 py-2 z-10">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-7 w-7 rounded-full border-2 border-black bg-gradient-to-br from-zinc-300 to-zinc-600"
            />
          ))}
        </div>
        <div className="flex items-center gap-1 text-xs text-zinc-300">
          <Star className="h-3.5 w-3.5 fill-brand text-brand" />
          <span className="font-semibold">+1.200 clientes felizes</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-36 md:pt-48 pb-24 md:pb-32 min-h-[100svh] flex flex-col justify-center">
        <span
          data-testid="hero-eyebrow"
          className="fade-up fade-up-1 inline-flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.32em] text-brand/90 mb-6"
        >
          <span className="h-px w-8 bg-brand/70" />
          Ótica V+ — Brasília · DF
        </span>

        <h1
          data-testid="hero-headline"
          className="fade-up fade-up-2 font-display text-white text-[44px] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tighter max-w-4xl"
        >
          Foco em visão,
          <br className="hidden sm:block" />{" "}
          <span className="text-brand text-glow-brand">estilo</span> em você.
        </h1>

        <p
          data-testid="hero-sub"
          className="fade-up fade-up-3 mt-7 max-w-xl text-zinc-300/90 text-base md:text-lg leading-relaxed"
        >
          Armações premium, lentes de alta performance e um atendimento que
          enxerga você por inteiro. Encontre o par perfeito que combina com a
          sua expressão.
        </p>

        <div className="fade-up fade-up-4 mt-10 flex flex-wrap items-center gap-4">
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            data-testid="hero-whatsapp-btn"
            className="group inline-flex items-center gap-3 bg-brand text-black font-bold uppercase tracking-wider text-sm px-7 py-4 rounded-full transition-all duration-300 hover:bg-white hover:shadow-[0_0_36px_rgba(34,197,94,0.7)]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <button
            onClick={() =>
              document
                .getElementById("produtos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            data-testid="hero-explore-btn"
            className="inline-flex items-center gap-2 text-white/90 hover:text-brand text-sm uppercase tracking-[0.22em] transition-colors duration-300"
          >
            Ver coleção
            <span className="h-px w-10 bg-white/30 group-hover:bg-brand transition-colors" />
          </button>
        </div>

        {/* Bottom strip */}
        <div className="absolute left-0 right-0 bottom-0 border-t border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            {[
              ["Sol & Grau", "Coleção completa"],
              ["Atendimento", "Personalizado 1:1"],
              ["Garantia", "Qualidade certificada"],
              ["Entrega", "Rápida e segura"],
            ].map(([t, s], i) => (
              <div
                key={i}
                data-testid={`hero-strip-${i}`}
                className="flex flex-col"
              >
                <span className="text-brand uppercase tracking-[0.22em] text-[10px]">
                  {t}
                </span>
                <span className="text-white/80 mt-1">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
