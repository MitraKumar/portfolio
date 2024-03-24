import { SecondaryButton } from "@/components/SecondaryButton";
import { PrimaryButton } from "./PrimaryButton";
import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/typewriter-effect";

function Header() {
  const words = [
    {
      text: "Hi",
      className: "text-6xl text-white xs:text-8xl font-dancing-script",
    },
    {
      text: "I'm",
      className: "text-6xl text-white xs:text-8xl font-dancing-script",
    },
    {
      text: "Kaushik",
      className: "text-6xl text-primary xs:text-8xl font-dancing-script",
    },
  ];

  return (
    <section className="container mx-auto mb-16">
      <h1 className="mt-4 md:mt-16 mx-4 flex justify-center">
        <TypewriterEffect words={words} />
      </h1>
    </section>
  )
}

export default Header;