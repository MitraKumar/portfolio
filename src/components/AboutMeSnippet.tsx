import Image from "next/image";
import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";

function AboutMe() {
  return (
    <section className="mx-4 flex flex-col items-center justify-center gap-8 md:mt-16 md:flex-row md:gap-24">
      <div className="mt-8 overflow-hidden rounded-full bg-brick-pattern p-4 shadow-2xl">
        {/* <img className="" src={headshot_image} alt="" /> */}
        <Image
          className="max-w-60 scale-110 transition-transform hover:scale-125"
          src={"/assets/headshot.png"}
          alt="Profile Headshot"
          width={240}
          height={278}
        />
      </div>
      <div className="max-w-[45ch] lg:max-w-[65ch]">
        {/* <h2 className="text-4xl xs:text-6xl mb-6">About Me</h2> */}
        <p className="mb-4">
          I’m Kaushik Kumar Mitra, Software developer with 5+ years of experience in backend development using Drupal and Laravel. Skilled in frontend technologies like HTML, CSS, JavaScript, and React. Experienced with Docker and Terraform for containerization and infrastructure automation in cloud environments.
        </p>
        <div className="mt-4">
          <AnimatedLinkWithUnderline href="/about">
            Want to know more about me?
          </AnimatedLinkWithUnderline>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
