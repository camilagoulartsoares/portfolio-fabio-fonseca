"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-bg-soft pt-[76px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='600' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%230F4C5C' stroke-width='1'%3E%3Ccircle cx='300' cy='300' r='120'/%3E%3Ccircle cx='300' cy='300' r='180'/%3E%3Cpath d='M300 80v440M80 300h440M160 160l280 280M440 160L160 440'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundPosition: "right 8% center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "min(520px, 55vw)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[22px] bg-[#dfe7ea]">
            <div
              className="absolute inset-0 scale-110 bg-cover bg-center opacity-40 blur-sm"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=60)",
              }}
            />
            <div className="relative flex min-h-[520px] items-end justify-center px-4 pt-10 sm:min-h-[580px]">
              <Image
                src="/images/fabio-hero.png"
                alt="Fábio Fonseca, Engenheiro Mecânico"
                width={480}
                height={869}
                priority
                className="relative z-10 h-auto w-[min(100%,420px)] object-contain drop-shadow-[0_20px_40px_rgba(15,76,92,0.25)]"
              />
            </div>
          </div>

          <div className="absolute top-5 left-5 z-20 max-w-[210px] rounded-xl bg-petroleum px-4 py-3 text-white shadow-lg">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase">
              Engenheiro Mecânico
            </p>
            <p className="mt-1 text-[13px] leading-snug text-white/90">
              Desenvolvendo soluções que movem ideias.
            </p>
          </div>

          <div className="absolute bottom-5 left-5 z-20 overflow-hidden rounded-xl border border-white/70 bg-white/90 shadow-md backdrop-blur">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=280&q=80"
              alt="Interface de software CAD"
              width={140}
              height={96}
              className="h-24 w-36 object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <p className="text-[12px] font-semibold tracking-[0.16em] text-muted uppercase">
            Olá, sou
          </p>
          <h1 className="mt-2 text-[clamp(3rem,8vw,5.4rem)] leading-[0.92] font-extrabold tracking-[-0.04em] uppercase">
            <span className="block text-ink">Fábio</span>
            <span className="block text-petroleum">Fonseca</span>
          </h1>
          <p className="mt-4 inline-flex items-center gap-3 text-[13px] font-bold tracking-[0.12em] text-ink uppercase">
            <span className="h-px w-8 bg-petroleum" />
            Engenheiro Mecânico
          </p>
          <p className="mt-5 max-w-xl text-[clamp(1.15rem,2.2vw,1.45rem)] leading-snug font-semibold text-ink">
            Transformando desafios de engenharia em soluções inteligentes.
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
            Combino precisão técnica e criatividade para desenvolver projetos
            mecânicos sob medida — do conceito à entrega — com foco em qualidade,
            clareza documental e resultado prático para a indústria.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-petroleum px-6 py-3.5 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-petroleum-soft"
            >
              Ver Projetos <ArrowRight size={16} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-[12px] font-bold tracking-[0.08em] text-ink uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-petroleum hover:text-petroleum"
            >
              Entrar em Contato <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
