import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import { NavBar } from "@/components/Navbar";
import Projects from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <div className="bg-brush-pattern bg-full-width bg-no-repeat bg-center">
        <NavBar />
        <Header />
      </div>

      <AboutMe />
      <Projects />
    </main>
  );
}
