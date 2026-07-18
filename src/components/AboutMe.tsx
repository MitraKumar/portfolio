import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";
import { Badge } from "./ui/badge";

function AboutMe() {
  return (
    <section className="container mx-auto px-4 mt-8 md:mt-16 max-w-5xl">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="relative group shrink-0 select-none">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary via-accent to-secondary opacity-75 blur-xl group-hover:opacity-100 transition duration-500"></div>
          <div className="relative overflow-hidden rounded-full bg-background border border-white/[0.08] p-3 shadow-2xl">
            <Image
              className="rounded-full max-w-60 scale-100 transition-transform duration-700 hover:scale-110"
              src="/assets/headshot.png"
              alt="Kaushik Kumar Mitra Full Profile Headshot"
              width={240}
              height={278}
              priority
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white select-none">
            Kaushik Kumar Mitra
          </h2>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Greetings! I am a software developer with more than five years of professional experience, currently working as a <span className="text-white font-medium">Technical Associate</span> at Sundew. My core engineering expertise lies in building resilient, secure, and scalable backend applications using <span className="text-primary font-medium">Drupal, Laravel, and PHP</span>.
            </p>
            <p>
              Over the years, I've had the opportunity to design robust database schemas, write custom modules, and automate infrastructure deployments utilizing containerization tools like <span className="text-secondary font-medium">Docker</span> and Infrastructure-as-Code (IaC) tools like <span className="text-accent font-medium">Terraform</span> inside cloud environments (AWS).
            </p>
            <p>
              My passion is coding and engineering robust software products that solve real-world problems. When I'm not programming, I'm constantly learning new frameworks and improving systems to make them fast and secure.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center pt-4">
            <PrimaryButton
              href="/assets/resume/Kaushik - CV 2025.pdf"
              text="Download CV"
              isDownloadble
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
