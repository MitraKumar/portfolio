import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";

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
          Greetings, I am Kaushik Kumar Mitra, a software developer with more than five
          years of professional experience currently working at Sundew, a company that provides
          web and mobile solutions. My main expertise lies in developing backend
          applications using Drupal, Laravel & PHP applications. I also
          have some basic skills in frontend development, such as HTML, CSS and
          JavaScript. And have experience with Docker and Terraform for containerization and infrastructure automation in cloud environments.. I hold a Bachelor of Technology degree from Budge Budge
          Institute of Technologies, an engineering college affiliated to
          Maulana Abul Kalam Azad University of Technology.
        </p>
        <p>
          My passion is to code and create software products that can solve
          real-world problems and improve people’s lives.
        </p>

        <div className="my-4">
          <PrimaryButton
            href="/assets/resume/Kaushik - CV 2025.pdf"
            text="Download CV"
            isDownloadble
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
