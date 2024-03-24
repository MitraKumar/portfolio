import Footer from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { ProjectList } from "@/components/ProjectList";

import { getProjects, type Project} from "@/lib/projects";

export default function ProjectsPage() {

  const projects = getProjects();

  return (
    <main>

      <NavBar />

      <ProjectList projects={projects} />

      <Footer />

    </main>
  );
}
