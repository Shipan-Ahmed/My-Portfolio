
import About from "@/Components/About";
import CompetiveProgramming from "@/Components/Competitive";
import Contract from "@/Components/Contact";
import Education from "@/Components/Education";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Project from "@/Components/Project";
import Skills from "@/Components/Skills";


export default function Home() {
  return (
    <main className="bg-[#111111] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <CompetiveProgramming />
      <Project />
      <Education />
      <Contract />
      <Footer />
    </main>
  );
}
