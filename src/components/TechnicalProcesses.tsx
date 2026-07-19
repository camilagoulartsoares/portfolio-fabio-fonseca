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
        </div>

        <div className="mt-16 space-y-10">
          {processShowcase.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.04 }}
              className="grid items-center gap-6 md:gap-8 lg:grid-cols-[1fr_0.9fr_1fr]"
            >
              <div className="order-1">
                <div className="relative overflow-hidden rounded-[28px]">
                  <div className="relative aspect-[5/4] w-full">
                    <Image
                      src={item.leftImage}
                      alt={item.leftAlt}
                      fill
                      sizes="(max-width:1024px) 100vw, 30vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="order-2 text-center">
                <h3 className="text-[clamp(1.35rem,2.1vw,1.9rem)] leading-tight font-bold text-ink">
                  {item.title}
                </h3>
              </div>

              <div className="order-3">
                <div className="relative overflow-hidden rounded-[28px]">
                  <div className="relative aspect-[5/4] w-full">
                    <Image
                      src={item.rightImage}
                      alt={item.rightAlt}
                      fill
                      sizes="(max-width:1024px) 100vw, 30vw"
                      className="object-contain"
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
