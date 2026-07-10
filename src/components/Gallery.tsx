"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { gallery } from "@/data/content";

const filters = [
  { id: "todos", label: "Todos" },
  { id: "projetos", label: "Projetos" },
  { id: "maquetes", label: "Maquetes" },
  { id: "processos", label: "Processos" },
] as const;

export function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("todos");
  const [active, setActive] = useState<string | null>(null);

  const items = useMemo(
    () =>
      filter === "todos" ? gallery : gallery.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <section id="galeria" className="bg-bg-muted py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
              Galeria
            </p>
            <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-ink">
              Detalhes, protótipos e entregas técnicas.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.08em] uppercase transition-all duration-300 ${
                  filter === item.id
                    ? "bg-petroleum text-white"
                    : "border border-line bg-white text-muted hover:border-petroleum hover:text-petroleum"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(item.src)}
              className="mb-4 block w-full overflow-hidden rounded-2xl break-inside-avoid"
            >
              <Image
                src={item.src}
                alt="Registro técnico"
                width={800}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-5"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"
              aria-label="Fechar"
              onClick={() => setActive(null)}
            >
              <X size={18} />
            </button>
            <Image
              src={active}
              alt="Visualização ampliada"
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
