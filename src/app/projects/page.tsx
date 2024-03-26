import { AnimatedLinkWithUnderline } from "@/components/AnimatedLinksWithUnderline";
import Footer from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { ProjectList } from "@/components/ProjectList";
import { PageTitle } from "@/components/PageHeading";
import { getBlogs, type Blog } from "@/lib/blogs";
import { getProjects } from "@/lib/projects";

function BlogItem(blog: Blog) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="block rounded-full bg-primary p-4">{blog.id}</span>
        <div>
          <h2>{blog.description}</h2>
          <AnimatedLinkWithUnderline href={blog.url} isExternal>
            {"Read Blog"}
          </AnimatedLinkWithUnderline>
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

      <PageTitle>Projects</PageTitle>

      <div className="mt-8">
        <ProjectList projects={projects} />
      </div>

      <div className="mt-8">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-5xl">Write Ups</h2>
          <div className="space-y-4">
            {blogs.map((blog) => (
              <BlogItem {...blog} key={blog.id} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
