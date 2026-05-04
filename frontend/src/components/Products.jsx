import React from "react";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/brand";

const CATEGORIES = [
  {
    id: "sol",
    label: "Óculos de Sol",
    desc: "Proteção UV com estilo afiado.",
    img: BRAND.products.sun,
    span: "md:col-span-7 md:row-span-2",
  },
  {
    id: "grau",
    label: "Óculos de Grau",
    desc: "Lentes precisas para o seu dia a dia.",
    img: BRAND.products.grau,
    span: "md:col-span-5 md:row-span-1",
  },
  {
    id: "premium",
    label: "Premium",
    desc: "Marcas e acabamentos exclusivos.",
    img: BRAND.products.premium,
    span: "md:col-span-5 md:row-span-1",
  },
  {
    id: "masculino",
    label: "Masculino",
    desc: "Atitude em cada detalhe.",
    img: BRAND.products.masculino,
    span: "md:col-span-4 md:row-span-1",
  },
  {
    id: "feminino",
    label: "Feminino",
    desc: "Sofisticação e leveza.",
    img: BRAND.products.feminino,
    span: "md:col-span-4 md:row-span-1",
  },
  {
    id: "infantil",
    label: "Infantil",
    desc: "Resistente, confortável e divertido.",
    img: BRAND.products.infantil,
    span: "md:col-span-4 md:row-span-1",
  },
];

export default function Products() {
  return (
    <section
      id="produtos"
      data-testid="products-section"
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      {/* Top divider line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-brand/90">
              <span className="h-px w-8 bg-brand/70" />
              Coleção
            </span>
            <h2
              data-testid="products-headline"
              className="font-display mt-4 text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] max-w-3xl"
            >
              Para todos os <span className="text-brand">olhares</span>.
              <br /> Para todos os <span className="text-brand">estilos</span>.
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-base">
            Explore nossas categorias e encontre o par certo. Toque em qualquer
            card para falar com a gente direto no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 md:auto-rows-[260px]">
          {CATEGORIES.map((c, idx) => (
            <a
              key={c.id}
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              data-testid={`product-card-${c.id}`}
              className={`relative group rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all duration-500 hover:border-brand hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(34,197,94,0.2)] min-h-[260px] ${c.span}`}
            >
              <img
                src={c.img}
                alt={c.label}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 ring-0 ring-brand/0 group-hover:ring-1 group-hover:ring-brand/40 transition-all" />

              <div className="relative h-full flex flex-col justify-between p-5 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand">
                    0{idx + 1}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 group-hover:bg-brand group-hover:text-black group-hover:border-brand">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-white text-2xl md:text-3xl font-extrabold tracking-tight">
                    {c.label}
                  </h3>
                  <p className="text-zinc-300/80 text-sm mt-1 max-w-[28ch]">
                    {c.desc}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
