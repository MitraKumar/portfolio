import Footer from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { CustomMDX } from "@/components/mdx-remote";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { getProjectTitles, getProjectWithTitle } from "@/lib/projects";

export default async function ProjectPage({
  params,
}: {
  params: { title: string };
}) {
  const markdown_data = await getProjectWithTitle(params.title);
  if (markdown_data === "") {
    return notFound();
  }

  return (
    <main className="pb-24">
      <div className="container mx-auto mt-8 px-4 max-w-4xl">
        <div className="flex items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="hover:text-primary transition-colors text-muted-foreground text-sm font-semibold">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-muted-foreground/30" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/projects" className="hover:text-primary transition-colors text-muted-foreground text-sm font-semibold">Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-muted-foreground/30" />
              <BreadcrumbItem>
                <span className="text-white text-sm font-semibold select-none capitalize">
                  {params.title.replace(/-/g, " ")}
                </span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link href="/projects" className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-white transition-colors">
            <ChevronLeft size={16} />
            Back to projects
          </Link>
        </div>
      </div>

      <section className="container mx-auto my-12 px-4 max-w-4xl">
        <div className="glass-card rounded-2xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle glow effect behind container */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="prose prose-invert max-w-none">
            <CustomMDX source={markdown_data} />
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return await getProjectTitles();
}
