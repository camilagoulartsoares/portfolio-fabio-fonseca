"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 md:py-24">
      <div className="mx-auto w-full max-w-[760px] px-5 text-center">
        <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
          Depoimentos
        </p>
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 rounded-3xl border border-line bg-bg-soft px-8 py-10 shadow-[0_16px_40px_rgba(17,17,17,0.04)]"
        >
          <span className="block text-5xl leading-none font-serif text-petroleum/30">“</span>
          <p className="mt-2 text-[clamp(1.1rem,2.2vw,1.35rem)] leading-relaxed font-semibold text-ink">
            O Fábio entregou um projeto claro, bem documentado e alinhado com a
            necessidade da produção. Comunicação excelente e prazo cumprido.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 text-left">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-bold text-ink">Carlos Mendes</p>
              <p className="text-xs text-muted">Gerente de Produção · Indústria Metalúrgica</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2" aria-hidden>
            <span className="h-1.5 w-6 rounded-full bg-petroleum" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
