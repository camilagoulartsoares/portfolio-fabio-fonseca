"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const highlights = [
  {
    src: `${base}/images/projects/mini-torno-projeto.png`,
    label: "Mini torno",
    className: "left-0 top-6 z-10 w-[50%] rotate-[-7deg]",
    imageClassName: "object-contain object-left bg-white p-3",
  },
  {
    src: `${base}/images/projects/mitsubishi-3000gt.png`,
    label: "Mitsubishi 3000GT",
    className: "bottom-0 left-[27%] z-30 w-[46%] rotate-[-1deg]",
    imageClassName: "object-cover object-center",
  },
  {
    src: `${base}/images/projects/bomba-corte-projeto.png`,
    label: "Bomba em corte",
    className: "right-0 top-3 z-20 w-[46%] rotate-[6deg]",
    imageClassName: "object-contain object-right bg-white p-3",
  },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-[#f7f8f8] pt-[76px]">
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-7 flex items-center gap-4">
            <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-[0_8px_24px_rgba(15,76,92,0.15)] sm:h-[88px] sm:w-[88px]">
              <Image
                src={`${base}/images/fabio-portrait.jpg`}
                alt="Fábio Fonseca"
                fill
                priority
                sizes="88px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-[12px] font-semibold tracking-[0.18em] text-petroleum uppercase">
                Engenheiro Mecânico
              </p>
              <p className="mt-1 text-sm text-muted">Poço Fundo · Minas Gerais</p>
            </div>
          </div>

          <h1 className="text-[clamp(3rem,7vw,5.2rem)] leading-[0.9] font-extrabold tracking-[-0.045em] text-ink uppercase">
            Fábio
            <span className="mt-1 block text-petroleum">Fonseca</span>
          </h1>

          <p className="mt-6 max-w-[34rem] text-[clamp(1.05rem,2vw,1.3rem)] leading-snug font-medium text-ink/90">
            Projetos mecânicos, impressão 3D e miniaturas com precisão de
            engenharia.
          </p>

          <p className="mt-4 max-w-[32rem] text-[15px] leading-7 text-muted">
            Experiência em engenharia do produto para transformar conceitos em
            peças prontas com qualidade.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-petroleum px-7 py-3.5 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-petroleum-soft"
            >
              Ver projetos <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/553598705746"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-[12px] font-bold tracking-[0.08em] text-ink uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-petroleum hover:text-petroleum"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative mx-auto h-[340px] w-full max-w-[420px] sm:h-[400px] lg:mx-0 lg:h-[440px] lg:max-w-none"
          aria-hidden
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className={`absolute overflow-hidden rounded-2xl border border-white bg-white shadow-[0_18px_40px_rgba(17,17,17,0.12)] ${item.className}`}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="220px"
                  className={item.imageClassName}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
