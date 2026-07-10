"use client";

import { motion } from "framer-motion";
import {
  Box,
  Cog,
  DraftingCompass,
  Printer,
  Puzzle,
  RefreshCcw,
  Settings2,
  Wrench,
} from "lucide-react";
import { specialties } from "@/data/content";

const icons = [Wrench, Box, DraftingCompass, Printer, Puzzle, Settings2, RefreshCcw, Cog];

export function Specialties() {
  return (
    <section id="especialidades" className="bg-bg-muted py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
            Especialidades
          </p>
          <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-ink">
            Capacidades técnicas para cada etapa do projeto.
          </h2>
          <div className="mt-4 h-px w-24 bg-petroleum/40" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-petroleum hover:shadow-[0_16px_40px_rgba(15,76,92,0.1)]"
              >
                <Icon className="mb-4 text-petroleum transition-transform duration-300 group-hover:scale-110" size={22} strokeWidth={1.5} />
                <h3 className="text-[15px] font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
