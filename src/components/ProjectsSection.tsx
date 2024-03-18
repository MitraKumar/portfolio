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
  
  function Projects() {
  
    return (
      <div className="bg-wave-pattern py-16 px-4 mt-16">
        <section className="container mx-auto text-white">
          <h2 className="text-6xl">Projects</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Card>
                    <CardContent className="p-4">
                      <h2 className="text-4xl mb-4">phil-o-sophy</h2>
                      <p>
                        This is a simple package which just generates random quotes from Phil Dunphy, the lovable and hilarious character from the TV show Modern Family
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <SecondaryButton text={"Read More"} href={"https://github.com/MitraKumar/phil-s-osophy"} />
                    </CardFooter>
                  </Card>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <div>
              <h2 className="text-xl mb-2">Write Ups</h2>
              <Carousel orientation="vertical">
                <CarouselContent>
                  <CarouselItem>
                    <Card>
                      <CardContent className="p-4">
                        <p>
                          Use bunx for running npm packages with lightning fast speed.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <a href="https://dev.to/mitrakumar/use-bunx-for-running-npm-packages-with-lightning-fast-speed-2p32" target="_blank" className="text-accent hover:opacity-80">Check Out Blog...</a>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card>
                      <CardContent className="p-4">
                        <p>
                          Journey of creating and publishing a nodejs package with typescript & eslint support
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-end bg-gradient-primary">
                        <a href="https://dev.to/mitrakumar/journey-of-creating-and-publishing-a-nodejs-package-with-typescript-eslint-support-3gh7" target="_blank" className="text-accent hover:opacity-80">Check Out Blog...</a>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  
  export default Projects;