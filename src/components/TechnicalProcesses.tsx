"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { processShowcase } from "@/data/content";

export function TechnicalProcesses() {
  return (
    <section id="processos-tecnicos" className="bg-white py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
            Processos
          </p>
          <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold text-ink">
            Recursos técnicos utilizados no dia a dia.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted">
            Uma operação organizada para transformar conceito, protótipo e
            acabamento em entregas com padrão visual e técnico consistente.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {processShowcase.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.04 }}
              className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.1fr_0.95fr]"
            >
              <div className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-[28px] border border-line bg-bg-soft shadow-[0_20px_50px_rgba(17,17,17,0.06)]">
                  <div className="relative aspect-[5/6] w-full">
                    <Image
                      src={item.leftImage}
                      alt={item.leftAlt}
                      fill
                      sizes="(max-width:1024px) 100vw, 28vw"
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </div>

              <div className="order-1 text-center lg:order-2">
                <p className="text-[11px] font-bold tracking-[0.16em] text-petroleum uppercase">
                  {item.subtitle}
                </p>
                <h3 className="mt-4 text-[clamp(1.5rem,2.3vw,2rem)] leading-tight font-bold text-ink">
                  {item.title}
                </h3>
                <div className="mx-auto mt-5 h-px w-20 bg-petroleum/35" />
                <p className="mx-auto mt-6 max-w-md text-[15px] leading-7 text-muted">
                  {item.description}
                </p>
              </div>

              <div className="order-3">
                <div className="relative overflow-hidden rounded-[28px] border border-line bg-bg-soft shadow-[0_20px_50px_rgba(17,17,17,0.06)]">
                  <div className="relative aspect-[5/6] w-full">
                    <Image
                      src={item.rightImage}
                      alt={item.rightAlt}
                      fill
                      sizes="(max-width:1024px) 100vw, 28vw"
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
