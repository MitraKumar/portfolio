"use client";

import { type Project } from "@/lib/projects";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { SecondaryButton } from "./SecondaryButton";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";


export const ProjectList = function ({ projects }: { projects: Project[] }) {

  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-4">
        {
          projects.map(project => (
            <CardContainer className="inter-var" key={project.id}>
              <CardBody className="bg-white relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-primary"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-black text-sm max-w-sm mt-2 "
                >
                  {project.subTitle}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
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
          ))
        }
      </div>
    </section>
  )
}
