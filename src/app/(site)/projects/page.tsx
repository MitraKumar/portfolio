import { AnimatedLinkWithUnderline } from "@/components/AnimatedLinksWithUnderline";
import { PageTitle } from "@/components/PageHeading";
import { ProjectList } from "@/components/ProjectList";
import { getBlogs, type Blog } from "@/lib/blogs";
import { getProjects } from "@/lib/projects";
import Image from "next/image";

function BlogItem(blog: Blog) {

  const blog_url = blog.url ? blog.url : `/blogs/${blog.title}`;
  const isExternal = blog.url ? true : false;

  return (
    <div className="glass-card rounded-xl p-6 flex items-start gap-5 hover:border-primary/20 transition-all duration-300">
      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary border border-primary/20 font-bold shrink-0">
        #{blog.id}
      </div>
      <div className="space-y-3 flex-1">
        <h3 className="text-xl font-bold tracking-tight text-white leading-snug">
          {blog.title}
        </h3>
        <div>
          <AnimatedLinkWithUnderline href={blog_url} isExternal={isExternal}>
            Read Article
          </AnimatedLinkWithUnderline>
        </div>
      </div>
    </div>
  );
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  const blogs = await getBlogs();

  return (
    <main className="pb-24">
      <PageTitle>My Projects</PageTitle>

      <div className="mt-8">
        <ProjectList projects={projects} />
      </div>

      <div className="mt-24 md:mt-32 max-w-5xl mx-auto px-4">
        <div className="space-y-2 mb-12 text-center md:text-left select-none">
          <span className="text-primary font-bold uppercase tracking-wider text-xs">Publications</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Write-ups & Blogs</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogItem {...blog} key={blog.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
