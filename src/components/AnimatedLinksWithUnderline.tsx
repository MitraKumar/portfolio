import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type AnimatedLinksWithUnderlineProps = {
  children: ReactNode;
  label?: string;
  isExternal?: boolean;
  isDownloadble?: boolean;
  type?: string;
} & LinkProps;
export const AnimatedLinkWithUnderline = ({
  children,
  label,
  isExternal,
  isDownloadble,
  type = "light",
  ...props
}: AnimatedLinksWithUnderlineProps) => {
  return isDownloadble ? (
    <Link
      aria-label={label}
      className={cn(
        "relative inline-block w-fit from-accent to-primary font-bold text-white after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-br after:transition after:duration-300 after:content-[''] after:hover:scale-x-100",
        type === "light" ? "text-primary" : "text-black",
      )}
      target={isExternal ? "_blank" : ""}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <Link
      aria-label={label}
      className={cn(
        "relative inline-block w-fit from-accent to-primary font-bold after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-br after:transition after:duration-300 after:content-[''] after:hover:scale-x-100",
        type === "light" ? "text-primary" : "text-black",
      )}
      target={isExternal ? "_blank" : ""}
      {...props}
    >
      {children}
    </Link>
  );
};
