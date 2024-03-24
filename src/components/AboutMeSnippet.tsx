import Image from "next/image";
import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";
// import headshot_image from "../assets/headshot.png";


function AboutMe() {
  return (
    <section className="mx-4 md:mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-24 justify-center">

      <div className="mt-8 p-4 shadow-2xl bg-brick-pattern rounded-full overflow-hidden">
        {/* <img className="" src={headshot_image} alt="" /> */}
        <Image className="max-w-60 scale-110 hover:scale-125 transition-transform" src={"/assets/headshot.png"} alt="Profile Headshot" width={240} height={278} />
      </div>
      <div className="max-w-[45ch] lg:max-w-[65ch]">
        {/* <h2 className="text-4xl xs:text-6xl mb-6">About Me</h2> */}
        <p className="mb-4">
          I’m Kaushik Kumar Mitra, a software developer with 4 years of experience at Innoraft, specializing in Drupal backend development. I also have basic frontend skills in HTML, CSS, and JavaScript. I hold a Bachelor of Technology degree from Budge Budge Institute of Technologies. My passion lies in coding and creating software solutions that solve real-world problems and enhance people’s lives.
        </p>
        <div className="mt-4">
          <AnimatedLinkWithUnderline href="/about">Want to know more about me?</AnimatedLinkWithUnderline>
        </div>
      </div>


    </section>
  )
}

export default AboutMe;