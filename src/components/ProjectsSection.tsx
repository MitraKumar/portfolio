import { SecondaryButton } from "@/components/SecondaryButton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProjects, type Project } from "@/lib/projects";
import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";
import Image from "next/image";

function ProjectItem(project: Project) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-4">
      <div className="glass-card flex flex-col h-full rounded-2xl overflow-hidden group select-none active:scale-[0.98] active:border-primary/30 transition-all duration-300">
        <div className="relative h-48 w-full overflow-hidden border-b border-white/[0.06]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
        </div>

        <CardContent className="p-6 flex-1 flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tech.map((t, idx) => (
              <Badge key={idx} variant="outline" className="text-xs text-white/80 border-white/10 px-2 py-0.5">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 border-t border-white/[0.04] mt-auto">
          <SecondaryButton href={`/projects/${project.title}`} className="w-full">
            Explore Project
          </SecondaryButton>
        </CardFooter>
      </div>
    </CarouselItem>
  );
}

function Projects() {
  const projects = getProjects();

  return (
    <div className="mt-20 md:mt-32 px-4 py-16 bg-gradient-to-b from-transparent via-black/30 to-transparent">
      <section className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="text-primary font-bold uppercase tracking-wider text-xs">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Featured Projects</h2>
          </div>
          <div className="mt-4 md:mt-0">
            <AnimatedLinkWithUnderline href="/projects">
              View all projects
            </AnimatedLinkWithUnderline>
          </div>
        </div>

        <div className="relative mt-8 px-8 md:px-0">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <ProjectItem key={project.id} {...project} />
              ))}
            </CarouselContent>
            
            <div className="hidden md:flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 border-white/10 bg-white/5 text-white hover:bg-white/10" />
              <CarouselNext className="static translate-y-0 border-white/10 bg-white/5 text-white hover:bg-white/10" />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Projects;
