"use client";

import { ArrowRight, Mail, MessageCircle } from "lucide-react";

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconLinkedin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 10.5V16M8 8v.01M12 16v-3.5a2 2 0 0 1 4 0V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contato" className="bg-bg-soft py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-[900px] gap-8 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
            Contato
          </p>
          <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-ink">
            Vamos Conversar?
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">
            Conte o desafio do seu projeto. Posso ajudar com concepção, CAD,
            prototipagem e documentação técnica.
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_16px_40px_rgba(17,17,17,0.05)]">
          <div className="grid gap-3">
            <a
              href="https://wa.me/5500000000000"
              className="inline-flex items-center gap-3 rounded-xl border border-line px-4 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-petroleum hover:text-petroleum"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href="https://instagram.com/fabio.ofonseca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-line px-4 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-petroleum hover:text-petroleum"
            >
              <IconInstagram /> Instagram
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-line px-4 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-petroleum hover:text-petroleum"
            >
              <IconLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:contato@fabiofonseca.dev"
              className="inline-flex items-center gap-3 rounded-xl border border-line px-4 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-petroleum hover:text-petroleum"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href="mailto:contato@fabiofonseca.dev"
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-petroleum px-5 py-3.5 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-petroleum-soft"
            >
              Entrar em Contato <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
