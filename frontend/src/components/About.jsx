import React from "react";
import { Sparkles, Heart, ShieldCheck, MapPin, Clock } from "lucide-react";
import { BRAND } from "@/lib/brand";

const VALUES = [
  {
    icon: Heart,
    title: "Atendimento personalizado",
    desc: "Consultoria individual para encontrar o estilo e o conforto ideais para o seu dia a dia.",
  },
  {
    icon: Sparkles,
    title: "Variedade de armações",
    desc: "Coleções masculinas, femininas, infantis e premium das principais tendências.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade garantida",
    desc: "Lentes certificadas e armações testadas. Você sai daqui com confiança.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      data-testid="about-section"
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 radial-glow opacity-60" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-14 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-brand/90">
            <span className="h-px w-8 bg-brand/70" />
            Sobre a Ótica V+
          </span>
          <h2
            data-testid="about-headline"
            className="font-display mt-5 text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]"
          >
            Mais que uma <span className="text-brand">ótica</span>.
            <br />
            Um cuidado com <span className="text-brand">o seu olhar</span>.
          </h2>
          <p className="mt-7 text-zinc-300/90 text-base md:text-lg leading-relaxed max-w-xl">
            Na Ótica V+, cada visita começa com uma escuta atenta. Trabalhamos
            com armações selecionadas, lentes de alta tecnologia e um time que
            entende que escolher um óculos é, antes de tudo, um gesto pessoal.
          </p>

          <ul className="mt-10 space-y-5">
            {VALUES.map((v, i) => (
              <li
                key={i}
                data-testid={`about-value-${i}`}
                className="flex items-start gap-4 group"
              >
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 border border-brand/30 text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-black group-hover:glow-brand-sm">
                  <v.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-white text-lg md:text-xl font-bold">
                    {v.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base mt-1">
                    {v.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-6 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" /> Brasília · DF
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand" /> Seg–Sáb · 9h às 18h
            </span>
          </div>
        </div>

        {/* Right: image collage */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 h-[520px] md:h-[640px]">
            <div
              data-testid="about-img-front"
              className="col-span-6 row-span-3 rounded-2xl overflow-hidden border border-white/10 relative group"
            >
              <img
                src={BRAND.storeImages.facade}
                alt="Fachada Ótica V+"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-brand">
                    Nossa loja
                  </p>
                  <p className="font-display text-2xl font-bold mt-1">
                    Visite a Ótica V+
                  </p>
                </div>
                <span className="text-xs text-white/70 hidden sm:inline">
                  {BRAND.instagramHandle}
                </span>
              </div>
            </div>
            <div
              data-testid="about-img-women"
              className="col-span-3 row-span-3 rounded-2xl overflow-hidden border border-white/10 relative group"
            >
              <img
                src={BRAND.storeImages.interiorWomen}
                alt="Vitrine feminina"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div
              data-testid="about-img-men"
              className="col-span-3 row-span-3 rounded-2xl overflow-hidden border border-white/10 relative group"
            >
              <img
                src={BRAND.storeImages.interiorMen}
                alt="Vitrine masculina"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
