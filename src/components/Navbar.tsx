"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useState } from "react";

type HamBurgurMenuProps = {
  isOpen: boolean;
  handleMobileNavClick: (event: MouseEvent<HTMLButtonElement>) => void;
};
function HamBurgurMenu({ isOpen, handleMobileNavClick }: HamBurgurMenuProps) {
  return (
    <button
      aria-label="navigation-button"
      className="z-[9999] m-4 flex flex-col items-center justify-center md:hidden"
      onClick={handleMobileNavClick}
    >
      <span
        className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"}`}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${isOpen ? "opacity-0" : "opacity-500"}`}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"}`}
      ></span>
    </button>
  );
}

type NavBarMenuItemuProps = {
  href: string;
  text: string;
};
function NavBarMenuItem({ href, text }: NavBarMenuItemuProps) {
  const pathname = usePathname();

  return (
    <li className="inline-block p-4">
      <Link
        className={cn(
          "relative w-fit from-accent to-primary text-black after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-br after:transition after:duration-300 after:content-[''] after:hover:scale-x-100",
          pathname === href && "text-white md:text-primary",
        )}
        href={href}
      >
        {text}
      </Link>
    </li>
  );
}

export function NavBar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const handleMobileNavClick = (_: MouseEvent<HTMLButtonElement>) => {
    setMobileMenuIsOpen((value) => {
      return !value;
    });
  };

  return (
    <header className="sticky top-0 z-[9999] bg-white">
      <div className="container mx-auto flex">
        <HamBurgurMenu
          isOpen={mobileMenuIsOpen}
          handleMobileNavClick={handleMobileNavClick}
        />
        <div
          className={`fixed inset-0 left-0 z-50 flex w-full flex-col items-start bg-primary p-6 pt-16 transition-transform xs:p-24 sm:p-32 md:static md:flex-row md:items-center md:bg-inherit md:p-0 ${!mobileMenuIsOpen ? "translate-x-full" : ""} md:translate-x-0`}
        >
          <nav className="w-full items-center justify-center md:flex">
            <ul className="flex flex-col gap-4 md:flex-row">
              <NavBarMenuItem href="/" text="Home" />
              <NavBarMenuItem href="/about" text="About Me" />
              <NavBarMenuItem href="/projects" text="Projects" />
              {/* <NavBarMenuItem href="#" text="Contact" /> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
