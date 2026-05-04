import React from "react";
import { Loader2, CheckCircle2, ArrowRight, User, Phone } from "lucide-react";
import { toast } from "sonner";
import { BRAND } from "@/lib/brand";
import { WhatsAppIcon } from "@/components/Header";

export default function FinalCTA() {
  const [form, setForm] = React.useState({ nome: "", telefone: "" });
  const [status, setStatus] = React.useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = React.useState({});

  const formatPhone = (v) => {
    const digits = v.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    const ddd = digits.slice(0, 2);
    const rest = digits.slice(2);
    if (rest.length === 0) return `(${ddd})`;
    if (digits.length === 11) {
      // mobile: (XX) 9 XXXX-XXXX
      return `(${ddd}) ${rest.slice(0, 1)} ${rest.slice(1, 5)}${rest.length > 5 ? "-" + rest.slice(5) : ""}`;
    }
    // landline / partial: (XX) XXXX-XXXX
    if (rest.length <= 4) return `(${ddd}) ${rest}`;
    return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`;
  };

  const validate = () => {
    const e = {};
    if (!form.nome.trim() || form.nome.trim().length < 2)
      e.nome = "Informe seu nome";
    const digits = form.telefone.replace(/\D/g, "");
    if (digits.length < 10) e.telefone = "Telefone inválido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch(BRAND.webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome.trim(),
          telefone: form.telefone.replace(/\D/g, ""),
        }),
      });
      if (!res.ok && res.status !== 0) throw new Error("falha");
      setStatus("success");
      toast.success("Recebemos seu contato! Redirecionando para o WhatsApp...");
      setTimeout(() => {
        window.location.href = BRAND.whatsapp;
      }, 900);
    } catch (err) {
      // Even on network errors (CORS), still redirect — webhook may have received
      setStatus("success");
      toast.success("Redirecionando para o WhatsApp...");
      setTimeout(() => {
        window.location.href = BRAND.whatsapp;
      }, 900);
    }
  };

  return (
    <section
      id="contato"
      data-testid="cta-section"
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 radial-glow" />
      <div
        className="absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.6), transparent 60%)" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-brand/90">
            <span className="h-px w-8 bg-brand/70" />
            Bora encontrar o seu
          </span>
          <h2
            data-testid="cta-headline"
            className="font-display mt-5 text-white text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.92]"
          >
            Escolha <span className="text-brand">enxergar melhor</span>
            <br /> hoje.
          </h2>
          <p className="mt-6 max-w-xl text-zinc-300/90 text-base md:text-lg leading-relaxed">
            Deixe seu nome e telefone — em instantes você fala direto com o
            nosso time pelo WhatsApp e recebe um atendimento personalizado.
          </p>

          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            data-testid="cta-whatsapp-btn"
            className="mt-8 inline-flex items-center gap-3 bg-brand text-black font-bold uppercase tracking-wider text-sm px-7 py-4 rounded-full transition-all duration-300 hover:bg-white hover:shadow-[0_0_36px_rgba(34,197,94,0.7)]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chamar no WhatsApp agora
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <span>{BRAND.whatsappPretty}</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>{BRAND.instagramHandle}</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>Brasília · DF</span>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl p-7 md:p-10 overflow-hidden">
            <div
              className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(34,197,94,0.6), transparent 60%)" }}
            />
            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.3em] text-brand">
                Atendimento rápido
              </p>
              <h3 className="font-display mt-3 text-white text-3xl md:text-4xl font-black tracking-tighter">
                Receba um atendimento exclusivo
              </h3>
              <p className="mt-3 text-zinc-400 text-sm">
                Seus dados são usados apenas para entrar em contato com você.
              </p>

              <form
                onSubmit={submit}
                data-testid="contact-form"
                className="mt-8 space-y-5"
              >
                <Field
                  id="nome"
                  label="Nome"
                  Icon={User}
                  testid="form-input-nome"
                  error={errors.nome}
                >
                  <input
                    id="nome"
                    type="text"
                    placeholder="Seu nome completo"
                    value={form.nome}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, nome: e.target.value }))
                    }
                    className="w-full bg-transparent text-white placeholder-zinc-600 focus:outline-none text-base"
                    data-testid="contact-input-nome"
                    autoComplete="name"
                  />
                </Field>
                <Field
                  id="telefone"
                  label="Telefone"
                  Icon={Phone}
                  testid="form-input-telefone"
                  error={errors.telefone}
                >
                  <input
                    id="telefone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="(61) 9 9999-9999"
                    value={form.telefone}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        telefone: formatPhone(e.target.value),
                      }))
                    }
                    className="w-full bg-transparent text-white placeholder-zinc-600 focus:outline-none text-base"
                    data-testid="contact-input-telefone"
                    autoComplete="tel"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  data-testid="contact-form-submit"
                  className="group relative w-full inline-flex items-center justify-center gap-3 bg-brand text-black font-bold uppercase tracking-wider text-sm px-7 py-4 rounded-full transition-all duration-300 hover:bg-white hover:shadow-[0_0_36px_rgba(34,197,94,0.7)] disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {status === "loading" && (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Redirecionando...
                    </>
                  )}
                  {(status === "idle" || status === "error") && (
                    <>
                      <WhatsAppIcon className="h-5 w-5" />
                      Falar no WhatsApp
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-zinc-500 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp da Ótica V+.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, Icon, children, error, testid }) {
  return (
    <label
      htmlFor={id}
      data-testid={testid}
      className={`group flex items-center gap-3 rounded-xl border px-4 py-3.5 transition-all duration-300 ${
        error
          ? "border-red-500/60 bg-red-500/5"
          : "border-white/10 bg-black/40 focus-within:border-brand focus-within:shadow-[0_0_18px_rgba(34,197,94,0.18)]"
      }`}
    >
      <Icon
        className={`h-5 w-5 ${
          error ? "text-red-400" : "text-zinc-500 group-focus-within:text-brand"
        } transition-colors`}
      />
      <div className="flex-1">
        <span className="block text-[10px] uppercase tracking-[0.24em] text-zinc-500">
          {label}
        </span>
        {children}
      </div>
      {error && (
        <span className="text-[10px] text-red-400 uppercase tracking-wider">
          {error}
        </span>
      )}
    </label>
  );
}
