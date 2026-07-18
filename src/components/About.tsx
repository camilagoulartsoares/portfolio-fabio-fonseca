"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Boxes, Sparkles, Target } from "lucide-react";
import { aboutText, stats, timeline } from "@/data/content";

const icons = [Boxes, Target, Award, Sparkles];

export function About() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
            Sobre mim
          </p>
          <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] leading-tight font-bold text-ink">
            {aboutText.headline}
          </h2>
          {aboutText.body.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-4 text-[15px] leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <Link
            href="/#especialidades"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-petroleum px-5 py-3 text-[11px] font-bold tracking-[0.08em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver especialidades <ArrowRight size={15} />
          </Link>
        </motion.div>

        <ol className="relative space-y-6 border-l border-line pl-6">
          {timeline.map((item, i) => (
            <motion.li
              key={`${item.year}-${item.role}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute top-1.5 -left-[31px] h-2.5 w-2.5 rounded-full bg-petroleum" />
              <p className="text-[11px] font-bold tracking-[0.1em] text-muted uppercase">
                {item.year}
              </p>
              <h3 className="mt-1 text-[15px] font-bold text-ink">{item.role}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
            </motion.li>
          ))}
        </ol>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-line bg-white p-5 shadow-[0_12px_30px_rgba(17,17,17,0.04)]"
              >
                <Icon className="mb-4 text-petroleum" size={20} strokeWidth={1.6} />
                <p className="text-2xl font-extrabold text-ink">{item.value}</p>
                <p className="mt-1 text-[12px] leading-5 text-muted">{item.label}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
