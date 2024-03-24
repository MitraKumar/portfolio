import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NavBar } from "@/components/Navbar";
import Projects from "@/components/ProjectsSection";
import Timeline from "@/components/Timeline";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AnimatedLinkWithUnderline } from "@/components/AnimatedLinksWithUnderline";
import { SecondaryButton } from "@/components/SecondaryButton";
import { PageTitle } from "@/components/PageHeading";

export default function AboutPage() {
  return (
    <main>
      <NavBar />

      <PageTitle>About Myself</PageTitle>

      <AboutMe />

      <section className="container mx-auto px-4 my-16">
        <h2 className="text-5xl text-center">Skills</h2>


        <Carousel>
          <CarouselContent className="space-x-4">
            <CarouselItem className="lg:basis-1/2" key={1}>

              <CardContainer className="inter-var" key={1}>
                <CardBody className="bg-white relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-primary"
                  >
                    Backend Tech
                  </CardItem>

                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black"
                  >
                    PHP
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black"
                  >
                    Drupal
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black"
                  >
                    MySQL
                  </CardItem>
                </CardBody>
              </CardContainer>


            </CarouselItem>

            <CarouselItem className="lg:basis-1/2" key={2}>

              <CardContainer className="inter-var" key={2}>
                <CardBody className="bg-white relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-primary"
                  >
                    Frontend Tech
                  </CardItem>

                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black"
                  >
                    Javascript
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black"
                  >
                    React / NextJs
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black"
                  >
                    MySQL
                  </CardItem>
                </CardBody>
              </CardContainer>
            </CarouselItem>

          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>


        <div className="my-16 flex justify-center">
          <SecondaryButton href="/projects">View Projects</SecondaryButton>
        </div>
      </section>



      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center">My Journey</h2>
      </div>
      <Timeline />

      <Footer />

    </main>
  );
}
