import React from "react";
import { BRAND } from "@/lib/brand";
import { WhatsAppIcon } from "@/components/Header";

export default function FloatingWhatsApp() {
  return (
    <a
      href={BRAND.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      data-testid="floating-whatsapp"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group inline-flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-brand text-black pulse-glow transition-transform duration-300 hover:scale-110"
    >
      <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
      <span className="absolute right-full mr-3 hidden md:inline-block whitespace-nowrap rounded-full bg-black/80 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-wider text-white border border-white/10 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
        Fale conosco
      </span>
    </a>
  );
}
