"use client";

import { motion } from "framer-motion";
import { tools } from "@/data/content";

export function Tools() {
  return (
    <section id="ferramentas" className="bg-white py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
            Ferramentas
          </p>
          <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-ink">
            Stack técnica utilizada no dia a dia.
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <motion.li
              key={tool}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="grid min-h-[88px] place-items-center rounded-2xl border border-line bg-white text-[14px] font-bold text-ink shadow-[0_8px_24px_rgba(17,17,17,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-petroleum hover:text-petroleum"
            >
              {tool}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
