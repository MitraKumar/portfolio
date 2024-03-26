import { ReactNode } from "react";
import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";

export const SecondaryButton = ({
  href,
  label,
  isExternal,
  isDownloadble,
  children,
}: {
  href: string;
  label?: string;
  isExternal?: boolean;
  isDownloadble?: boolean;
  children: ReactNode;
}) => {
  return (
    <button
      aria-label={label}
      className="bg-gradient-to-br from-accent to-primary p-1"
    >
      <span className="flex h-full w-full items-center justify-center bg-black px-5 py-2">
        <AnimatedLinkWithUnderline
          label={label}
          href={href}
          isDownloadble={isDownloadble}
          isExternal={isExternal}
        >
          {children}
        </AnimatedLinkWithUnderline>
      </span>
    </button>
  );
};
