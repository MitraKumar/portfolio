"use client";

import { useState, ReactNode, MouseEvent } from "react"
import { PrimaryButton } from "@/components/PrimaryButton";
import Link from "next/link";


type HamBurgurMenuProps = {
  isOpen: boolean,
  handleMobileNavClick: (event: MouseEvent<HTMLButtonElement>) => void,
}
function HamBurgurMenu({ isOpen, handleMobileNavClick }: HamBurgurMenuProps) {

  return (
    <button className="m-4 flex flex-col justify-center items-center z-[9999] md:hidden" onClick={handleMobileNavClick}>
      <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
      <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-500'}`}></span>
      <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
    </button>
  );

}

type NavBarMenuItemuProps = {
  href: string,
  text: string,
}
function NavBarMenuItem({ href, text }: NavBarMenuItemuProps) {
  return (
    <li className="inline-block p-4">
      <Link className="text-white relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-br from-accent to-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href={href}>{ text }</Link>
    </li>
  );
}

export function NavBar() {

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const handleMobileNavClick =  (_: MouseEvent<HTMLButtonElement>) => {
    setMobileMenuIsOpen((value) => {
      return !value;
    })
  }

  return (
    <header className="container mx-auto flex sticky top-0 z-[9999] bg-white md:bg-transparent">

      <HamBurgurMenu isOpen={mobileMenuIsOpen} handleMobileNavClick={handleMobileNavClick} />

      <div className={`z-50 fixed md:static w-full inset-0 left-0 p-6 pt-16 xs:p-24 sm:p-32 md:p-0 bg-primary md:bg-inherit flex flex-col md:flex-row items-start md:items-center transition-transform ${!mobileMenuIsOpen ? 'translate-x-full' : ''} md:translate-x-0`}>
        <nav className="w-full md:flex items-center justify-between">
          <ul className="flex flex-col md:flex-row gap-4">
            <NavBarMenuItem href="/" text="Home" />
            <NavBarMenuItem href="#" text="About Me" />
            <NavBarMenuItem href="/projects" text="Projects" />
            <NavBarMenuItem href="#" text="Contact" />
          </ul>
        </nav>
      </div>

    </header>
  )
}
