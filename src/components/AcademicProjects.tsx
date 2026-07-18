"use client";

import { motion } from "framer-motion";
import { academicProjects } from "@/data/content";

export function AcademicProjects() {
  return (
    <section className="bg-bg-soft py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
            Projetos acadêmicos
          </p>
          <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-ink">
            Pesquisa, experimentação e desenvolvimento aplicados à engenharia.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {academicProjects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-line bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.04)]"
            >
              <p className="text-[11px] font-bold tracking-[0.1em] text-petroleum uppercase">
                {project.period}
              </p>
              <h3 className="mt-2 text-[17px] font-bold text-ink">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
