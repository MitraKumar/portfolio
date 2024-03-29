import { SecondaryButton } from "@/components/SecondaryButton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProjects, type Project } from "@/lib/projects";
import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";

function ProjectItem(project: Project) {
  return (
    <CarouselItem className="md:basis-1/3">
      <Card>
        <CardContent className="p-4">
          <h2 className="mb-4 text-4xl">{project.title}</h2>
          <p>{project.description}</p>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          {/* {project.links.github ? <SecondaryButton href={project.links.github} isExternal label="Github Source Code">Read More</SecondaryButton> : ""}
          {project.links.liveUrl ? <SecondaryButton href={project.links.liveUrl} isExternal label="Live Website Link">Visit</SecondaryButton> : ""} */}
          <SecondaryButton href={`/projects/${project.title}`}>
            Know More
          </SecondaryButton>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}

function Projects() {
  const projects = getProjects();

  return (
    <div className="mt-16 px-4 py-16">
      <section className="container mx-auto text-white">
        <h2 className="text-6xl">Projects</h2>
        <div className="mt-4">
          <AnimatedLinkWithUnderline href="/projects">
            See all Projects...
          </AnimatedLinkWithUnderline>
        </div>

        <div className="mt-8">
          <Carousel>
            <CarouselContent className="mb-8">
              {projects.map((project) => (
                <ProjectItem {...project} />
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Projects;
