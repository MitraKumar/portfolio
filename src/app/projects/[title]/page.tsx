import { AnimatedLinkWithUnderline } from '@/components/AnimatedLinksWithUnderline';
import Footer from '@/components/Footer';
import { NavBar } from '@/components/Navbar';
import { PageTitle } from '@/components/PageHeading';
import { Badge } from '@/components/ui/badge';
import { promises as fs } from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CustomMDX } from '@/components/mdx-remote';

import { getProjectWithTitle } from "@/lib/projects";


export default async function ProjectPage({ params }: { params: { title: string } }) {


  const markdown_data = await getProjectWithTitle(params.title);
  if (markdown_data === "") {
    return notFound();
  }

  return (
    <>
      <NavBar />

      <div className="container mx-auto px-4 mt-8">
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

      <section className='container mx-auto my-16 px-4'>

        <CustomMDX source={markdown_data} />

      </section>

      <Footer />

    </>
  );


}