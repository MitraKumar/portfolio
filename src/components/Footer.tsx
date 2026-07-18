import Image from "next/image";
import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";

function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.06] bg-black/40 backdrop-blur-sm px-4 py-12">
      <section className="container mx-auto">
        <div className="flex flex-col gap-8 md:flex-row justify-between pb-8 border-b border-white/[0.06] items-start md:items-center">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white">Kaushik Mitra</h3>
              <p className="text-sm text-muted-foreground font-medium">Technical Associate / Software Developer</p>
            </div>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/social-icons/gmail.png"
                  alt="Email icon"
                  width={16}
                  height={16}
                />
                <AnimatedLinkWithUnderline href="mailto:kaushik0976@gmail.com">
                  kaushik0976@gmail.com
                </AnimatedLinkWithUnderline>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/social-icons/telephone.png"
                  alt="Phone icon"
                  width={16}
                  height={16}
                />
                <span>(+91) 9674391121</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/social-icons/google-maps.png"
                  alt="Location icon"
                  width={16}
                  height={16}
                />
                <span>Kolkata, West Bengal</span>
              </div>
            </div>
          </div>

          <nav>
            <ul className="flex flex-row md:flex-col gap-6 md:gap-3 text-sm font-semibold">
              <li>
                <AnimatedLinkWithUnderline href="/">Home</AnimatedLinkWithUnderline>
              </li>
              <li>
                <AnimatedLinkWithUnderline href="/about">About</AnimatedLinkWithUnderline>
              </li>
              <li>
                <AnimatedLinkWithUnderline href="/projects">Projects</AnimatedLinkWithUnderline>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/kkmitra/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] transition-all duration-300 hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Image
                src="/assets/social-icons/linkedin.png"
                alt="LinkedIn Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://github.com/MitraKumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] transition-all duration-300 hover:scale-105"
              aria-label="Github Profile"
            >
              <Image
                src="/assets/social-icons/github.png"
                alt="Github Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.drupal.org/u/kkmitra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] transition-all duration-300 hover:scale-105"
              aria-label="Drupal Profile"
            >
              <Image
                src="/assets/social-icons/drupal.png"
                alt="Drupal Icon"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        
        <div className="pt-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground items-center gap-4">
          <p>© {new Date().getFullYear()} Kaushik Kumar Mitra. All rights reserved.</p>
          <p>
            Developed by <span className="text-primary font-bold">Yours Truly 😎</span>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
