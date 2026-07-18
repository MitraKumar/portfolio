"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { type Project } from "@/lib/projects";
import Image from "next/image";
import { Badge } from "./ui/badge";

export const ProjectList = function ({ projects }: { projects: Project[] }) {
  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
          <CardContainer className="w-full" key={project.id}>
            <CardBody className="relative group/card h-[32rem] w-full rounded-2xl p-6 glass-card select-none flex flex-col justify-between active:scale-[0.98] active:border-primary/30 transition-all duration-300">
              <div>
                <CardItem
                  translateZ="30"
                  className="text-2xl font-bold text-white tracking-tight"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="20"
                  className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3"
                >
                  {project.subTitle}
                </CardItem>
                
                <CardItem translateZ="50" className="mt-6 w-full relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary opacity-20 group-hover/card:opacity-40 blur-md transition duration-500"></div>
                  <div className="relative h-48 w-full rounded-lg overflow-hidden border border-white/[0.08]">
                    <Image
                      src={project.image}
                      fill
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                      alt={`${project.title} thumbnail`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardItem>
              </div>
              
              <div>
                <CardItem translateZ="30" className="flex flex-wrap gap-1.5 mt-6">
                  {project.tech.map((t, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs text-white/70 border-white/10 px-2 py-0.5">
                      {t}
                    </Badge>
                  ))}
                </CardItem>

                <div className="mt-8 flex items-center justify-between">
                  <CardItem
                    translateZ="40"
                    href={`/projects/${project.title}`}
                    type="light"
                    isAnimatedLinkWithUnderline
                  >
                    Explore Project
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};
