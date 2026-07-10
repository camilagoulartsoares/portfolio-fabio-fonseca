"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-sm font-extrabold text-black">
            F
          </span>
          <div>
            <p className="text-sm font-bold tracking-[0.04em] uppercase">Fábio Fonseca</p>
            <p className="text-[11px] text-white/60">Engenheiro Mecânico</p>
          </div>
        </div>
        <p className="text-sm text-white/65">
          © {new Date().getFullYear()} Fábio Fonseca. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <p className="text-sm text-white/65">Desenvolvido com precisão e propósito.</p>
          <a
            href="#topo"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-black"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
