import { ReactNode } from "react";
import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";

export const SecondaryButton = ({ href, label, isExternal, isDownloadble, children }: { href: string, label: string, isExternal?: boolean, isDownloadble?: boolean, children: ReactNode }) => {
    return (
      <button aria-label={label} className="p-1 bg-gradient-to-br from-accent to-primary">
        <span className="py-2 px-5 flex h-full w-full items-center justify-center bg-black">
          <AnimatedLinkWithUnderline label={label} href={href} isDownloadble={isDownloadble} isExternal={isExternal}>
            { children }
          </AnimatedLinkWithUnderline>
        </span>
      </button>
    );
  }