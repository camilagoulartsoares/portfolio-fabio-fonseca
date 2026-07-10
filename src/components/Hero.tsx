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
    <section
      id="topo"
      className="relative overflow-hidden bg-[#f3f6f7] pt-[76px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[55%] bg-[radial-gradient(ellipse_at_70%_40%,rgba(15,76,92,0.09),transparent_60%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-end gap-8 px-5 pt-10 pb-0 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-center py-8 lg:min-h-[640px] lg:py-16"
        >
          <p className="text-[12px] font-semibold tracking-[0.2em] text-petroleum uppercase">
            Engenheiro Mecânico · UNIFEI
          </p>

          <h1 className="mt-5 text-[clamp(3.2rem,7.5vw,5.6rem)] leading-[0.9] font-extrabold tracking-[-0.045em] text-ink uppercase">
            Fábio
            <span className="mt-1 block text-petroleum">Fonseca</span>
          </h1>

          <p className="mt-7 max-w-[34rem] text-[clamp(1.05rem,2vw,1.35rem)] leading-snug font-medium text-ink/90">
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
              className="inline-flex items-center gap-2 rounded-full border border-petroleum/25 bg-white/70 px-7 py-3.5 text-[12px] font-bold tracking-[0.08em] text-petroleum uppercase backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-petroleum"
            >
              Contato
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 border-t border-petroleum/10 pt-7">
            <p className="mr-1 text-[10px] font-bold tracking-[0.14em] text-muted uppercase">
              Destaques
            </p>
            {highlights.map((item) => (
              <a
                key={item.label}
                href="#projetos"
                className="group relative h-14 w-14 overflow-hidden rounded-xl border border-white bg-white shadow-[0_8px_24px_rgba(15,76,92,0.08)] transition-transform duration-300 hover:-translate-y-0.5"
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
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
        >
          <div className="relative isolate">
            <div
              aria-hidden
              className="absolute inset-x-[8%] bottom-0 h-[78%] rounded-[2rem] bg-gradient-to-b from-[#d7e4e8] via-[#c5d6db] to-[#0f4c5c]/15"
            />
            <div
              aria-hidden
              className="absolute inset-x-[18%] top-[12%] h-[42%] rounded-full bg-white/50 blur-3xl"
            />

            <Image
              src={`${base}/images/fabio-hero.png`}
              alt="Fábio Fonseca, Engenheiro Mecânico"
              width={480}
              height={869}
              priority
              className="relative z-10 mx-auto h-auto w-[min(100%,440px)] object-contain object-bottom drop-shadow-[0_30px_50px_rgba(15,76,92,0.22)]"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-[#f3f6f7] to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
