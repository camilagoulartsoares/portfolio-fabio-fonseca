"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projetos" className="bg-white py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
            Projetos em destaque
          </p>
          <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-ink">
            Soluções desenvolvidas com precisão e propósito.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-black shadow-[0_16px_40px_rgba(17,17,17,0.12)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-[10px] font-bold tracking-[0.12em] text-white/70 uppercase">
                  {project.category}
                </p>
                <h3 className="mt-1 pr-8 text-[14px] leading-snug font-semibold">
                  {project.title}
                </h3>
              </div>
              <span className="absolute right-3 bottom-3 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors duration-300 group-hover:bg-petroleum">
                <ArrowUpRight size={16} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
