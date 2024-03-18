import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { SecondaryButton } from "@/components/SecondaryButton"

interface Project {
  title: string,
  description: string,
  url: {
    github?: string,
    website?: string,
  }
}
const projects: Project[] = [
  {
    title: "phil-o-sophy",
    description: "This is a simple package which just generates random quotes from Phil Dunphy, the lovable and hilarious character from the TV show Modern Family",
    url: {
      github: "https://github.com/MitraKumar/phil-s-osophy",
    },
  },
];

interface Blog {
  description: string,
  url: string
}
const blogs: Blog[] = [
  {
    description: "Use bunx for running npm packages with lightning fast speed.",
    url: "https://dev.to/mitrakumar/use-bunx-for-running-npm-packages-with-lightning-fast-speed-2p32",
  },
  {
    description: "Journey of creating and publishing a nodejs package with typescript & eslint support",
    url: "https://dev.to/mitrakumar/journey-of-creating-and-publishing-a-nodejs-package-with-typescript-eslint-support-3gh7",
  },
]

function ProjectItem(project: Project) {
  return (
    <CarouselItem>
      <Card>
        <CardContent className="p-4">
          <h2 className="text-4xl mb-4">{project.title}</h2>
          <p>{project.description}</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          {project.url.github ? <SecondaryButton text={"Read More"} href={project.url.github} /> : ""}
          {project.url.website ? <SecondaryButton text={"Read More"} href={project.url.website} /> : ""}
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}

function BlogItem(blog: Blog) {
  return (
    <CarouselItem>
      <Card>
        <CardContent className="p-4">
          <p>{ blog.description }</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <a href={blog.url} target="_blank" className="text-accent hover:opacity-80">Check Out Blog...</a>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}

function Projects() {

  return (
    <div className="bg-wave-pattern py-16 px-4 mt-16">
      <section className="container mx-auto text-white">
        <h2 className="text-6xl">Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <Carousel>
            <CarouselContent>
              {
                projects.map(project => <ProjectItem {...project} />)
              }
            </CarouselContent>
          </Carousel>
          <div>
            <h2 className="text-xl mb-2">Write Ups</h2>
            <Carousel orientation="vertical">
              <CarouselContent>
                {
                  blogs.map(blog => <BlogItem {...blog} />)
                }
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Projects;