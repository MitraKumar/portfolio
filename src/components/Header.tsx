import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/../keystatic.config';
import { TypewriterEffect } from "./ui/typewriter-effect";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { BannerSubheading } from "../components/mdx-remote";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Header() {
  const bannerData = await reader.singletons.banner.read();

  if (!bannerData) {
    return null; 
  }

  const headingArray = bannerData.heading.split(' ');
  const words = headingArray.map((word, index) => ({
    text: word,
    className: index === headingArray.length - 1
      ? "text-5xl text-primary md:text-7xl lg:text-8xl font-dancing-script text-glow"
      : "text-5xl text-white md:text-7xl lg:text-8xl font-dancing-script",
  }));

  const rawSubheading = await bannerData.subheading();

  return (
    <section className="container mx-auto mt-16 md:mt-24 px-4 flex flex-col items-center justify-center text-center">
      <div className="relative z-10 max-w-4xl space-y-6">
        
        <h1 className="flex justify-center select-none pb-4">
          <TypewriterEffect words={words} />
        </h1>
        
        <BannerSubheading source={rawSubheading as unknown as string} />

        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <PrimaryButton
            text="View My Work"
            href="/projects"
          />
          <SecondaryButton
            href="/about"
          >
            More About Me
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}