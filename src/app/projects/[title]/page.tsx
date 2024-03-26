import Footer from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx-remote";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
    <>
      <NavBar />

      <div className="container mx-auto mt-8 px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/projects">Projects</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="container mx-auto my-16 px-4">
        <CustomMDX source={markdown_data} />
      </section>

      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return getProjectTitles();
}
