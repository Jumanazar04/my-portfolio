import Hero from "@/components/Hero";
import ProjectsPage from "./projects/page";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsPage />
      <Skills />
      <Contact />
    </>
  );
}
