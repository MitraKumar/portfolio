import { TypewriterEffect } from "./ui/typewriter-effect";

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
      <h1 className="mx-4 mt-4 flex justify-center md:mt-16">
        <TypewriterEffect words={words} />
      </h1>
    </section>
  );
}

export default Header;
