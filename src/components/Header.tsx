"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/95 shadow-[0_8px_30px_rgba(17,17,17,0.04)] backdrop-blur"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1200px] items-center justify-between gap-4 px-5">
        <a href="#topo" className="flex items-center gap-3" aria-label="Fábio Fonseca">
          <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-petroleum text-sm font-extrabold text-white">
            F
          </span>
          <span className="leading-tight">
            <span className="block text-[13px] font-bold tracking-[0.04em] text-ink uppercase">
              Fábio Fonseca
            </span>
            <span className="block text-[10px] font-medium tracking-[0.12em] text-muted uppercase">
              Engenheiro Mecânico
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] font-semibold tracking-[0.1em] text-muted uppercase transition-colors duration-300 hover:text-petroleum"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden rounded-full bg-petroleum px-5 py-2.5 text-[11px] font-bold tracking-[0.08em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-petroleum-soft sm:inline-flex"
          >
            Vamos Conversar
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-white px-5 py-3 lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm font-semibold tracking-[0.08em] text-ink uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
