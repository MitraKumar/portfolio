import Image from "next/image";
import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";

function Footer() {
  return (
    <>
      <div className="px-4 py-16">
        <section className="container mx-auto p-1">
          <div className="flex flex-col sm:flex-row gap-4 justify-between border-y-2 border-white py-8 sm:items-center">
            <div className="space-y-4 sm:space-y-6">
              <Image
                src={"/assets/logo-KKM.png"}
                alt="Connect me with mail."
                width={120}
                height={120}
                className="inline-block"
              />
              <div>
                <h3 className="text-3xl">Kaushik Mitra</h3>
                <p className="font-thin">Software Developer</p>
              </div>
              <div className="space-y-1">
                <p className="flex items-center gap-4">
                  <Image
                    src={"/assets/social-icons/gmail.png"}
                    alt="Connect me with mail."
                    width={20}
                    height={20}
                    className="inline-block"
                  />
                  <span>
                    <AnimatedLinkWithUnderline href="mailto://kaushik0976@gmail.com" isExternal>
                      kaushik0976@gmail.com
                    </AnimatedLinkWithUnderline>
                  </span>
                </p>
                <p className="flex items-center gap-4">
                  <Image
                    src={"/assets/social-icons/telephone.png"}
                    alt="Connect me with mail."
                    width={20}
                    height={20}
                    className="inline-block"
                  />
                  <span>
                    (+91) 9674391121
                  </span>
                </p>
                <p className="flex items-center gap-4">
                  <Image
                    src={"/assets/social-icons/google-maps.png"}
                    alt="Connect me with mail."
                    width={20}
                    height={20}
                    className="inline-block"
                  />
                  <span>
                    Kolkata, West Bengal
                  </span>
                </p>
              </div>
            </div>

            <nav>
              <ul className="flex sm:flex-col gap-6 md:gap-2">
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
                className="w-[30px]"
                aria-label="LinkedIn"
              >
                <Image
                  src={"/assets/social-icons/linkedin.png"}
                  alt="Linked Icon"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://github.com/MitraKumar"
                target="_blank"
                className="w-[30px]"
                aria-label="Github"
              >
                <Image
                  src={"/assets/social-icons/github.png"}
                  alt="Github User account"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.drupal.org/u/kkmitra"
                target="_blank"
                className="w-[30px]"
                aria-label="Drupal"
              >
                <Image
                  src={"/assets/social-icons/drupal.png"}
                  alt="Drupal account"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
          <div className="pt-4 flex flex-col md:flex-row justify-between text-white items-center">
            <p>Copyright © 2024.</p>
            <p>Developed by <span className="text-primary">your's trully 😎</span></p>
          </div>
        </section >
      </div >
    </>
  );
}

export default Footer;
