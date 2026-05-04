import React from "react";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Mariana Souza",
    role: "Cliente desde 2023",
    text: "Atendimento incrível e muita paciência pra escolher minha armação. Saí amando o resultado e o conforto das lentes.",
  },
  {
    name: "Rafael Lima",
    role: "Engenheiro",
    text: "Procurei várias óticas e a V+ teve o melhor custo-benefício. Lente antirreflexo perfeita pro meu home office.",
  },
  {
    name: "Juliana Pereira",
    role: "Designer",
    text: "Variedade absurda de armações modernas. Acabei levando duas porque não consegui escolher só uma.",
  },
  {
    name: "Carlos Mendes",
    role: "Pai do João, 9 anos",
    text: "Levei meu filho e o atendimento foi impecável. Armação resistente e lentes de qualidade — recomendo demais.",
  },
  {
    name: "Beatriz Campos",
    role: "Professora",
    text: "Profissionais atenciosos e que realmente entendem o que combina com você. Voltei mais 2 vezes desde então.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      data-testid="testimonials-section"
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-brand/90">
            <span className="h-px w-8 bg-brand/70" />
            O que dizem
          </span>
          <h2
            data-testid="testimonials-headline"
            className="font-display mt-4 text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]"
          >
            Histórias que <span className="text-brand">enxergam</span> a gente.
          </h2>
          <p className="mt-5 text-zinc-400 text-base md:text-lg max-w-xl">
            Centenas de clientes confiam na Ótica V+ para encontrar o par
            perfeito. Veja alguns relatos.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} highlight={i === 1} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.slice(3).map((t, i) => (
            <TestimonialCard key={i + 3} t={t} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, index, highlight = false }) {
  return (
    <article
      data-testid={`testimonial-${index}`}
      className={`group relative rounded-2xl border bg-[#0A0A0A] p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 ${
        highlight
          ? "border-brand/60 shadow-[0_0_28px_rgba(34,197,94,0.18)]"
          : "border-white/10 hover:border-brand"
      }`}
    >
      <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-brand rounded-r" />
      <Quote className="h-6 w-6 text-brand/70" />
      <div className="mt-3 flex items-center gap-1 text-brand">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-brand" />
        ))}
      </div>
      <p className="mt-5 text-zinc-200 text-base leading-relaxed">
        “{t.text}”
      </p>
      <div className="mt-7 flex items-center gap-3">
        <span className="h-10 w-10 rounded-full bg-gradient-to-br from-brand/40 to-zinc-800 inline-flex items-center justify-center font-display font-bold text-black">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div>
          <p className="font-display text-white font-bold text-sm">{t.name}</p>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.18em] mt-0.5">
            {t.role}
          </p>
        </div>
      </div>
    </article>
  );
}
