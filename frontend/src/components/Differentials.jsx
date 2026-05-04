import React from "react";
import { Zap, BadgePercent, Headphones, Award } from "lucide-react";

const ITEMS = [
  {
    icon: Zap,
    title: "Tendências atualizadas",
    desc: "Coleções renovadas com as marcas que estão em alta.",
  },
  {
    icon: BadgePercent,
    title: "Preço acessível",
    desc: "Condições especiais e parcelamento que cabem no seu bolso.",
  },
  {
    icon: Headphones,
    title: "Atendimento rápido",
    desc: "Tire dúvidas e agende pelo WhatsApp em minutos.",
  },
  {
    icon: Award,
    title: "Garantia de qualidade",
    desc: "Lentes e armações com procedência e garantia real.",
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      data-testid="differentials-section"
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.5), transparent 60%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-brand/90">
            <span className="h-px w-8 bg-brand/70" />
            Por que a V+
          </span>
          <h2
            data-testid="differentials-headline"
            className="font-display mt-4 text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]"
          >
            Detalhes que fazem
            <br /> a <span className="text-brand">diferença</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((it, i) => (
            <div
              key={i}
              data-testid={`differential-${i}`}
              className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 md:p-7 transition-all duration-500 hover:border-brand hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(34,197,94,0.18)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/30 text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-black group-hover:glow-brand-sm">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display mt-6 text-white text-xl font-bold tracking-tight">
                {it.title}
              </h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                {it.desc}
              </p>
              <span className="absolute right-5 top-5 text-[10px] uppercase tracking-[0.3em] text-zinc-600 group-hover:text-brand transition-colors">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
