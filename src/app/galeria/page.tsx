import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main id="topo" className="pt-[76px]">
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto w-full max-w-[1200px] px-5">
            <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
              Galeria de Projetos
            </p>
            <h1 className="mt-4 max-w-3xl text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.95] font-extrabold tracking-[-0.04em] text-ink uppercase">
              Trabalhos reunidos para apresentar processo, detalhe e acabamento.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted">
              Uma visão mais completa dos projetos desenvolvidos, com miniaturas,
              protótipos, soluções mecânicas e registros visuais de cada etapa.
            </p>
          </div>
        </section>
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
