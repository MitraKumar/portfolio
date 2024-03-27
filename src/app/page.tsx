import AboutMe from "@/components/AboutMeSnippet";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NavBar } from "@/components/Navbar";
import Projects from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <Header />

      <AboutMe />

      <Projects />
    </main>
  );
}
