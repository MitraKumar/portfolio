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


export default async function ProjectPage({ params }: { params: { title: string } }) {


  const file = await fs.readFile(process.cwd() + '/src/data/projects/portfolio.md', 'utf8');

  return (
    <>
      <NavBar />

      <div className="container mx-auto px-4 mt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Portfolio</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className='container mx-auto my-16 px-4'>
        
        <CustomMDX source={file} />

      </div>

      <Footer />

    </>
  );


}