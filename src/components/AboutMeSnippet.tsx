import Image from "next/image";
import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";
import { Badge } from "./ui/badge";

function AboutMeSnippet() {
  return (
    <section className="container mx-auto px-4 mt-20 md:mt-32">
      <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-5xl mx-auto">
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary opacity-65 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative overflow-hidden rounded-xl bg-background border border-white/[0.08] p-2">
            <Image
              className="rounded-lg max-w-60 scale-100 transition-transform duration-500 group-hover:scale-105"
              src="/assets/headshot.png"
              alt="Kaushik Kumar Mitra Profile Headshot"
              width={220}
              height={255}
              priority
            />
          </div>
        </div>

        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-primary font-bold uppercase tracking-wider text-xs">Background</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">About Me</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            I’m a software developer based in Kolkata, specialized in crafting robust backend architectures, automated deployments, and custom modules using Drupal and Laravel. With over 5 years of professional experience, I blend solid server-side expertise with a clean understanding of frontend systems.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
            <Badge className="bg-primary/10 text-primary border-primary/20 font-semibold px-3 py-1">Drupal</Badge>
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-semibold px-3 py-1">Laravel</Badge>
            <Badge className="bg-accent/10 text-accent border-accent/20 font-semibold px-3 py-1">Docker & IaC</Badge>
            <Badge className="bg-white/5 text-white/80 border-white/10 font-semibold px-3 py-1">Next.js</Badge>
          </div>

          <div className="pt-4 flex justify-center md:justify-start">
            <AnimatedLinkWithUnderline href="/about">
              Discover my full journey & skills
            </AnimatedLinkWithUnderline>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSnippet;
