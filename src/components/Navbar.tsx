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
  onClick?: () => void;
};

function NavBarMenuItem({ href, text, onClick }: NavBarMenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="inline-block md:px-1 py-4 w-full md:w-auto text-center" onClick={onClick}>
      <Link
        className={cn(
          "relative block md:inline-block w-full md:w-auto text-base md:text-sm font-semibold transition-all duration-300 text-muted-foreground hover:text-white px-4 py-2.5 md:py-2 rounded-md",
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

  const closeMenu = () => setMobileMenuIsOpen(false);

  return (
    <header className="sticky top-0 z-[9999] bg-background/80 backdrop-blur-md border-b border-white/[0.06] shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        <Link
          href="/"
          className="font-dancing-script text-3xl font-bold text-white tracking-wide hover:text-primary transition-colors"
          onClick={closeMenu}
        >
          Mitra.
        </Link>
        <HamburgerMenu
          isOpen={mobileMenuIsOpen}
          handleMobileNavClick={handleMobileNavClick}
        />
        <div
          className={cn(
            "fixed inset-0 left-0 z-50 flex w-full flex-col items-center justify-center bg-background p-6 pt-16 transition-transform duration-300 ease-in-out md:static md:flex md:w-auto md:flex-row md:items-center md:bg-transparent md:p-0 md:translate-x-0 md:visible",
            !mobileMenuIsOpen ? "translate-x-full invisible" : "translate-x-0 visible",
          )}
        >
          <nav className="w-full md:flex">
            <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-2 w-full md:w-auto">
              <NavBarMenuItem href="/" text="Home" onClick={closeMenu} />
              <NavBarMenuItem href="/about" text="About Me" onClick={closeMenu} />
              <NavBarMenuItem href="/projects" text="Projects" onClick={closeMenu} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
