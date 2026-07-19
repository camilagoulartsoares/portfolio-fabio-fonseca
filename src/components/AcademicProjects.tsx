"use client";

import Image from "next/image";
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

        <div className="space-y-6">
          {academicProjects.map((project, i) => {
            const [mainImage, ...extraImages] = project.images;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="grid gap-6 rounded-[30px] border border-line bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.04)] lg:grid-cols-[0.92fr_1.08fr]"
              >
                <div>
                  <p className="text-[11px] font-bold tracking-[0.1em] text-petroleum uppercase">
                    {project.period}
                  </p>
                  <h3 className="mt-2 text-[19px] font-bold text-ink">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                </div>

                <div className="grid gap-3 md:grid-cols-[1.35fr_0.65fr]">
                  <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-soft">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={mainImage.src}
                        alt={mainImage.alt}
                        fill
                        sizes="(max-width:1024px) 100vw, 30vw"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {extraImages.map((image) => (
                      <div
                        key={image.src}
                        className="relative overflow-hidden rounded-2xl border border-line bg-bg-soft"
                      >
                        <div className="relative aspect-[4/3] w-full">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width:1024px) 100vw, 18vw"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
