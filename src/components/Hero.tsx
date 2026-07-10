"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const highlights = [
  { src: `${base}/images/projects/mitsubishi-3000gt.png`, label: "3000GT" },
  { src: `${base}/images/projects/bandeirante-frente.png`, label: "Bandeirante" },
  { src: `${base}/images/projects/troller-frente.png`, label: "Troller" },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-white pt-[76px]">
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[12px] font-semibold tracking-[0.2em] text-petroleum uppercase">
            Engenheiro Mecânico · UNIFEI
          </p>

          <h1 className="mt-5 text-[clamp(3.2rem,7.5vw,5.4rem)] leading-[0.9] font-extrabold tracking-[-0.045em] text-ink uppercase">
            Fábio
            <span className="mt-1 block text-petroleum">Fonseca</span>
          </h1>

          <p className="mt-7 max-w-[34rem] text-[clamp(1.05rem,2vw,1.3rem)] leading-snug font-medium text-ink/90">
            Projetos mecânicos, impressão 3D e miniaturas com precisão de
            engenharia.
          </p>

          <p className="mt-4 max-w-[32rem] text-[15px] leading-7 text-muted">
            Modelagem CAD, prototipagem e confecção de veículos em escala — do
            conceito à peça física, com polímeros, resinas e documentação
            técnica.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-petroleum px-7 py-3.5 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-petroleum-soft"
            >
              Ver projetos <ArrowRight size={16} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-[12px] font-bold tracking-[0.08em] text-ink uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-petroleum hover:text-petroleum"
            >
              Contato
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 border-t border-line pt-7">
            <p className="mr-1 text-[10px] font-bold tracking-[0.14em] text-muted uppercase">
              Destaques
            </p>
            {highlights.map((item) => (
              <a
                key={item.label}
                href="#projetos"
                className="group relative h-14 w-14 overflow-hidden rounded-xl border border-line bg-bg-muted transition-transform duration-300 hover:-translate-y-0.5"
                aria-label={item.label}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="56px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
        >
          {/* Foto natural em quadro limpo — sem cutout */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-bg-muted shadow-[0_24px_60px_rgba(15,76,92,0.12)] ring-1 ring-black/5">
            <Image
              src={`${base}/images/fabio-portrait.jpg`}
              alt="Fábio Fonseca, Engenheiro Mecânico"
              fill
              priority
              sizes="(max-width:1024px) 90vw, 420px"
              className="object-cover object-[center_20%]"
            />
          </div>

          <p className="mt-4 text-center text-[11px] font-semibold tracking-[0.14em] text-muted uppercase lg:text-left">
            Poço Fundo · Minas Gerais
          </p>
        </motion.div>
      </div>
    </section>
  );
}
