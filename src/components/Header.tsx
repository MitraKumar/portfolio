import { TypewriterEffect } from "./ui/typewriter-effect";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

function Header() {
  const words = [
    {
      text: "Hi,",
      className: "text-5xl text-white md:text-7xl lg:text-8xl font-dancing-script",
    },
    {
      text: "I'm",
      className: "text-5xl text-white md:text-7xl lg:text-8xl font-dancing-script",
    },
    {
      text: "Kaushik",
      className: "text-5xl text-primary md:text-7xl lg:text-8xl font-dancing-script text-glow",
    },
  ];

  return (
    <section className="container mx-auto mt-16 md:mt-24 px-4 flex flex-col items-center justify-center text-center">
      <div className="relative z-10 max-w-4xl space-y-6">
        <h1 className="flex justify-center select-none pb-4">
          <TypewriterEffect words={words} />
        </h1>
        
        <p className="mx-auto max-w-[55ch] text-lg md:text-xl text-muted-foreground leading-relaxed">
          I am a passionate <span className="text-white font-semibold">Software Developer</span> with 5+ years of professional experience building scalable backend architectures using <span className="text-secondary font-semibold">Drupal & Laravel</span>, database systems, and automating infrastructure.
        </p>

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

export default Header;
