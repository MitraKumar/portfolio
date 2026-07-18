"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useState } from "react";

type HamburgerMenuProps = {
  isOpen: boolean;
  handleMobileNavClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

function HamburgerMenu({ isOpen, handleMobileNavClick }: HamburgerMenuProps) {
  return (
    <button
      aria-label="Toggle navigation menu"
      className="z-[9999] m-4 flex flex-col items-center justify-center md:hidden gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
      onClick={handleMobileNavClick}
    >
      <span
        className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      ></span>
    </button>
  );
}

type NavBarMenuItemProps = {
  href: string;
  text: string;
};

function NavBarMenuItem({ href, text }: NavBarMenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="inline-block md:px-1 py-4">
      <Link
        className={cn(
          "relative w-fit text-sm font-semibold transition-all duration-300 text-muted-foreground hover:text-white px-3 py-2 rounded-md",
          isActive && "text-primary bg-primary/10 font-bold",
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
    setMobileMenuIsOpen((value) => !value);
  };

  return (
    <header className="sticky top-0 z-[9999] bg-background/80 backdrop-blur-md border-b border-white/[0.06] shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        <Link
          href="/"
          className="font-dancing-script text-3xl font-bold text-white tracking-wide hover:text-primary transition-colors"
        >
          Mitra.
        </Link>
        <HamburgerMenu
          isOpen={mobileMenuIsOpen}
          handleMobileNavClick={handleMobileNavClick}
        />
        <div
          className={cn(
            "fixed inset-0 left-0 z-50 flex w-full flex-col items-center justify-center bg-background/95 p-6 pt-16 transition-transform duration-300 ease-in-out md:static md:flex md:w-auto md:flex-row md:items-center md:bg-transparent md:p-0 md:translate-x-0",
            !mobileMenuIsOpen ? "translate-x-full" : "translate-x-0",
          )}
        >
          <nav className="w-full md:flex">
            <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
              <NavBarMenuItem href="/" text="Home" />
              <NavBarMenuItem href="/about" text="About Me" />
              <NavBarMenuItem href="/projects" text="Projects" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
