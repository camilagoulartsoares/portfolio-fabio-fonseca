"use client";

import { motion } from "framer-motion";
import {
  Box,
  DraftingCompass,
  RefreshCcw,
  Settings2,
  Wrench,
} from "lucide-react";
import { specialties } from "@/data/content";

type IconProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
};

function Printing3DIcon({
  className,
  size = 22,
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M3 5.5H7.5M16.5 5.5H21"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7.5 4H16.5V7L15 8.5H9L7.5 7V4Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M10 9V11L11.3 13.5H12.7L14 11V9"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.5V16"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12 16H15.2C16.1 16 16.7 16.9 16.3 17.7L16 18.3C15.8 18.7 15.4 19 14.9 19H8.1C7.5 19 7 18.5 7 17.9C7 17.3 7.5 16.8 8.1 16.8H10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DroneIcon({ className, size = 22, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <rect
        x="9"
        y="9"
        width="6"
        height="6"
        rx="2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M10.1 10.1L7.3 7.3M13.9 10.1L16.7 7.3M10.1 13.9L7.3 16.7M13.9 13.9L16.7 16.7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="6.4" cy="6.4" r="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="17.6" cy="6.4" r="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="6.4" cy="17.6" r="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="17.6" cy="17.6" r="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M4.5 4.2C3.8 4.4 3.2 5 3.1 5.8C3 6.8 3.8 7.7 4.9 7.6C5.7 7.5 6.3 6.9 6.5 6.2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M17.5 6.2C17.7 6.9 18.3 7.5 19.1 7.6C20.2 7.7 21 6.8 20.9 5.8C20.8 5 20.2 4.4 19.5 4.2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6.5 17.8C6.3 17.1 5.7 16.5 4.9 16.4C3.8 16.3 3 17.2 3.1 18.2C3.2 19 3.8 19.6 4.5 19.8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M19.5 19.8C20.2 19.6 20.8 19 20.9 18.2C21 17.2 20.2 16.3 19.1 16.4C18.3 16.5 17.7 17.1 17.5 17.8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ElectronicsIntegrationIcon({
  className,
  size = 22,
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <rect
        x="7.5"
        y="7.5"
        width="9"
        height="9"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <rect
        x="10"
        y="10"
        width="4"
        height="4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 4V6M9 4.5V6M15 4.5V6M12 18V20M9 18V19.5M15 18V19.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M4 12H6M4.5 9H6M4.5 15H6M18 12H20M18 9H19.5M18 15H19.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8.2 6L7 4.8M10 6V3.8M13.9 6V3.8M15.8 6L17 4.8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8.2 18L7 19.2M10 20.2V18M13.9 20.2V18M15.8 18L17 19.2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="6.2" cy="9" r="0.6" fill="currentColor" />
      <circle cx="6.2" cy="15" r="0.6" fill="currentColor" />
      <circle cx="17.8" cy="9" r="0.6" fill="currentColor" />
      <circle cx="17.8" cy="15" r="0.6" fill="currentColor" />
      <circle cx="9" cy="6.2" r="0.6" fill="currentColor" />
      <circle cx="15" cy="6.2" r="0.6" fill="currentColor" />
      <circle cx="9" cy="17.8" r="0.6" fill="currentColor" />
      <circle cx="15" cy="17.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

const iconByTitle: Record<string, React.ComponentType<IconProps>> = {
  "Projetos Mecânicos": Wrench,
  "Modelagem CAD 3D": Box,
  "Impressão 3D": Printing3DIcon,
  "Miniaturas e Maquetes": Settings2,
  "Drones Agrícolas": DroneIcon,
  Prototipagem: RefreshCcw,
  "Desenho Técnico": DraftingCompass,
  "Integração eletrônica": ElectronicsIntegrationIcon,
};

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
            const Icon = iconByTitle[item.title] ?? Wrench;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-petroleum hover:shadow-[0_16px_40px_rgba(15,76,92,0.1)]"
              >
                <Icon
                  className="mb-4 text-petroleum transition-transform duration-300 group-hover:scale-110"
                  size={22}
                  strokeWidth={1.5}
                />
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
