import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="px-4 py-16">
        <section className="container mx-auto p-1">
          <div className="flex justify-between border-y-2 border-white py-4">
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
                href="mailto://kaushik0976@gmail.com"
                target="_blank"
                className="w-[30px]"
                aria-label="Gmail"
              >
                <Image
                  src={"/assets/social-icons/gmail.png"}
                  alt="Connect me with mail."
                  width={30}
                  height={30}
                />
              </a>
            </div>
            <div className="flex gap-4">
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
            </div>
          </div>
          <div className="pt-4 text-center text-white">
            <p>Copyright © 2024. Made by - Kaushik</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
