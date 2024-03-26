import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { PageTitle } from "@/components/PageHeading";
import { SecondaryButton } from "@/components/SecondaryButton";
import Timeline from "@/components/Timeline";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutPage() {
  return (
    <main>
      <NavBar />

      <PageTitle>About Myself</PageTitle>

      <AboutMe />

      <section className="container mx-auto my-16 px-4">
        <h2 className="text-center text-5xl">Skills</h2>

        <Carousel>
          <CarouselContent className="space-x-4">
            <CarouselItem className="lg:basis-1/2" key={1}>
              <CardContainer className="inter-var" key={1}>
                <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-white p-6 sm:w-[30rem]  ">
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
                <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-white p-6 sm:w-[30rem]  ">
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
        <h2 className="text-center text-5xl">My Journey</h2>
      </div>
      <Timeline />

      <Footer />
    </main>
  );
}
