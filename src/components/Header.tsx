import { SecondaryButton } from "@/components/SecondaryButton";
import { PrimaryButton } from "./PrimaryButton";

function Header() {
  return (
    <section className="container mx-auto text-center">
      <h1 className="text-6xl text-white xs:text-8xl font-dancing-script mt-4 md:mt-16 mx-4">Hi I'm Kaushik</h1>

      <div className="py-8 md:py-16 flex flex-col items-center xs:flex-row gap-4 justify-center">
        <PrimaryButton text={"Download CV"} href={"/assets/resume/Kaushik Kumar Mitra - Resume.pdf"} />
        <SecondaryButton text={"Contact Me"} href={"mailto:kaushik0976@gmail.com"} />
      </div>
    </section>
  )
}

export default Header;