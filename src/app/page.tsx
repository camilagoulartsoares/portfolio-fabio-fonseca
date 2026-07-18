import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { Process } from "@/components/Process";
import { TechnicalProcesses } from "@/components/TechnicalProcesses";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <Process />
        <TechnicalProcesses />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
