"use client";

import { useState, ReactNode, MouseEvent } from "react"
import { PrimaryButton } from "@/components/PrimaryButton";


type HamBurgurMenuProps = {
  isOpen: boolean,
  handleMobileNavClick: (event: MouseEvent<HTMLButtonElement>) => void,
}
function HamBurgurMenu({ isOpen, handleMobileNavClick }: HamBurgurMenuProps) {

  return (
    <button className="m-4 flex flex-col justify-center items-center z-[9999] md:hidden" onClick={handleMobileNavClick}>
      <span className={`bg-zinc-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
      <span className={`bg-zinc-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-500'}`}></span>
      <span className={`bg-zinc-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
    </button>
  );

}

type NavBarMenuItemuProps = {
  children?: ReactNode
}
function NavBarMenuItem({ children }: NavBarMenuItemuProps) {
  return (
    <li className="inline-block p-4">
      <a className="text-black relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-br from-accent to-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="#">{ children }</a>
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
    <header className="container mx-auto flex">

      <HamBurgurMenu isOpen={mobileMenuIsOpen} handleMobileNavClick={handleMobileNavClick} />

      <div className={`z-50 fixed md:static w-full inset-0 left-1/2 p-6 pt-16 xs:p-24 sm:p-32 md:p-0 bg-secondary opacity-95 md:opacity-100 md:bg-inherit flex flex-col md:flex-row items-start md:items-center transition-transform ${!mobileMenuIsOpen ? 'translate-x-full' : ''} md:translate-x-0`}>
        <nav className="w-full md:flex items-center justify-between">
          <ul className="flex flex-col md:flex-row gap-4">
            <NavBarMenuItem>Home</NavBarMenuItem>
            <NavBarMenuItem>About Me</NavBarMenuItem>
            <NavBarMenuItem>Projects</NavBarMenuItem>
            <NavBarMenuItem>Contact</NavBarMenuItem>
          </ul>
        </nav>
      </div>

    </header>
  )
}
