import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { AcademicProjects } from "@/components/AcademicProjects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="topo" className="pt-[76px]">
        <About />
        <AcademicProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
