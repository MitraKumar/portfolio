import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="bg-wave-pattern py-8 px-4">
        <section className="container mx-auto p-1">
          <div className="flex justify-between py-4 border-y-4">
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/kkmitra/" target="_blank" className="w-[30px]">
                <Image src={"/assets/social-icons/linkedin.png"} alt="" width={30} height={30}/>
              </a>
              <a href="mailto://kaushik0976@gmail.com" target="_blank" className="w-[30px]">
                <Image src={"/assets/social-icons/gmail.png"} alt="Connect me with mail." width={30} height={30}/>
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.drupal.org/u/kkmitra" target="_blank" className="w-[30px]">
                <Image src={"/assets/social-icons/drupal.png"} alt="Drupal account" width={30} height={30}/>
              </a>
              <a href="https://github.com/MitraKumar" target="_blank" className="w-[30px]">
                <Image src={"/assets/social-icons/github.png"} alt="Github User account" width={30} height={30}/>
              </a>
            </div>
          </div>
          <div className="pt-4 text-center text-zinc-100">
           <p>Copyright © 2024. Made by - Kaushik</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;