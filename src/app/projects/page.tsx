import { AnimatedLinkWithUnderline } from "@/components/AnimatedLinksWithUnderline";
import Footer from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { ProjectList } from "@/components/ProjectList";

import { getProjects } from "@/lib/projects";
import { getBlogs, type Blog} from "@/lib/blogs";

function BlogItem(blog: Blog) {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="block p-4 bg-primary rounded-full">{ blog.id }</span>
        <div>
          <h2>{ blog.description }</h2>
          <AnimatedLinkWithUnderline href={blog.url} isExternal>{ "Read Blog" }</AnimatedLinkWithUnderline>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {

  const projects = getProjects();
  const blogs = getBlogs();

  return (
    <main>

      <NavBar />

      <div className="mt-8">
        <ProjectList projects={projects} />
      </div>

      <div className="mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-2">Write Ups</h2>
          <div className="space-y-4">
            {
              blogs.map(blog => <BlogItem {...blog} key={blog.id}/>)
            }
          </div>
        </div>
      </div>

      <Footer />

    </main>
  );
}
