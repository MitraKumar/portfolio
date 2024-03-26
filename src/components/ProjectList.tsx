"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { type Project } from "@/lib/projects";
import Image from "next/image";
import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";

export const ProjectList = function ({ projects }: { projects: Project[] }) {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col gap-4 md:flex-row">
        {projects.map((project) => (
          <CardContainer className="inter-var" key={project.id}>
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-white p-6 sm:w-[30rem]  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-primary"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-black "
              >
                {project.subTitle}
              </CardItem>
              <CardItem translateZ="100" className="mt-4 w-full">
                <Image
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="mt-20 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as={AnimatedLinkWithUnderline}
                  href={`/projects/${project.title}`}
                  target="__blank"
                  type="dark"
                  isAnimatedLinkWithUnderline
                >
                  Know More
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};
