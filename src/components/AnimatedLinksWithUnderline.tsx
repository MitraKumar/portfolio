import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

type AnimatedLinksWithUnderlineProps = {
  children: ReactNode;
  label?: string;
  isExternal?: boolean;
  isDownloadble?: boolean;
  type?: string;
  className?: string;
} & LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export const AnimatedLinkWithUnderline = React.forwardRef<
  HTMLAnchorElement,
  AnimatedLinksWithUnderlineProps
>(
  (
    {
      children,
      label,
      isExternal,
      isDownloadble,
      type = "light",
      className,
      ...props
    },
    ref,
  ) => {
    return isDownloadble ? (
      <Link
        ref={ref}
        aria-label={label}
        className={cn(
          "relative inline-block w-fit from-accent to-primary font-bold text-white after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-br after:transition after:duration-300 after:content-[''] after:hover:scale-x-100",
          type === "light" ? "text-primary" : "text-black",
          className,
        )}
        target={isExternal ? "_blank" : undefined}
        {...props}
      >
        {children}
      </Link>
    ) : (
      <Link
        ref={ref}
        aria-label={label}
        className={cn(
          "relative inline-block w-fit from-accent to-primary font-bold after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-br after:transition after:duration-300 after:content-[''] after:hover:scale-x-100",
          type === "light" ? "text-primary" : "text-black",
          className,
        )}
        target={isExternal ? "_blank" : undefined}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

AnimatedLinkWithUnderline.displayName = "AnimatedLinkWithUnderline";

