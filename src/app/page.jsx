import Hero from "@/components/Hero";
import ProjectsPage from "./projects/page";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsPage />
      <Skills />
      <Contact />
    </>
  );
}
