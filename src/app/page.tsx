import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NavBar } from "@/components/Navbar";
import Projects from "@/components/ProjectsSection";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main>
      <div className="bg-brush-pattern bg-full-width bg-no-repeat bg-center">
        <NavBar />
        <Header />
      </div>

      <AboutMe />
      <Timeline />
      <Projects />

      <Footer />

    </main>
  );
}
