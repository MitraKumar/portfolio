"use client";

import { cn } from "@/lib/utils";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
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
            "fixed inset-0 w-full h-screen z-50 flex flex-col items-center justify-center bg-black p-6 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-auto md:flex md:flex-row md:items-center md:bg-transparent md:p-0 md:translate-x-0 md:visible",
            !mobileMenuIsOpen ? "translate-x-full invisible" : "translate-x-0 visible",
          )}
        >
          <nav className="w-full md:flex md:items-center md:gap-6">
            <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-2 w-full md:w-auto">
              <NavBarMenuItem href="/" text="Home" onClick={closeMenu} />
              <NavBarMenuItem href="/about" text="About Me" onClick={closeMenu} />
              <NavBarMenuItem href="/projects" text="Projects" onClick={closeMenu} />
              <Show when="signed-in">
                <NavBarMenuItem href="/keystatic" text="Admin" onClick={closeMenu} />
              </Show>
            </ul>
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-4 mt-6 md:mt-0 pt-6 md:pt-0 border-t border-white/10 md:border-t-0 w-full md:w-auto">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="text-sm font-semibold text-muted-foreground hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-white/5 w-full md:w-auto text-center">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="text-sm font-semibold bg-primary hover:bg-primary/80 text-white transition-colors px-4 py-1.5 rounded-md shadow-[0_0_15px_rgba(255,90,54,0.3)] w-full md:w-auto text-center">
                    Sign Up
                  </button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
