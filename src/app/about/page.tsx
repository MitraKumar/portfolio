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

export default function AboutPage() {
  return (
    <main>
      <NavBar />

      <AboutMe />

      <section className="container mx-auto px-4 my-8">
        <h2 className="text-5xl">Skills</h2>


        <Carousel>
          <CarouselContent className="space-x-4">
            <CarouselItem className="lg:basis-1/2" key={1}>

              <CardContainer className="inter-var" key={1}>
                <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-primary dark:text-white"
                  >
                    Backend Tech
                  </CardItem>

                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black dark:text-white"
                  >
                    PHP
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black dark:text-white"
                  >
                    Drupal
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black dark:text-white"
                  >
                    MySQL
                  </CardItem>
                </CardBody>
              </CardContainer>


            </CarouselItem>

            <CarouselItem className="lg:basis-1/2" key={2}>

              <CardContainer className="inter-var" key={2}>
                <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-primary dark:text-white"
                  >
                    Frontend Tech
                  </CardItem>

                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black dark:text-white"
                  >
                    Javascript
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black dark:text-white"
                  >
                    React / NextJs
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-black dark:text-white"
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

      </section>



      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center text-primary">My Journey</h2>
      </div>
      <Timeline />

      <Footer />

    </main>
  );
}
