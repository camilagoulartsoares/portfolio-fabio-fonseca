"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section id="processo" className="bg-bg-soft py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
            Meu processo
          </p>
          <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-ink">
            Do briefing à entrega, com método e clareza.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-7 right-4 left-4 hidden h-px bg-line lg:block" />
          <ol className="grid gap-4 sm:grid-cols-3 lg:grid-cols-9">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group relative text-center"
              >
                <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full border border-line bg-white text-[12px] font-extrabold text-petroleum shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-petroleum group-hover:shadow-md">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[13px] font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-[11px] leading-4 text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:h-8">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
