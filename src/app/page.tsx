import AboutMe from "@/components/AboutMeSnippet";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NavBar } from "@/components/Navbar";
import { ProjectList } from "@/components/ProjectList";
import Projects from "@/components/ProjectsSection";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Header />

      <AboutMe />

      <Projects />

      <Footer />

    </main>
  );
}
