import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { ComponentPropsWithRef, ReactNode } from "react";

type AnimatedLinksWithUnderlineProps = {
  children: ReactNode,
  label?: string,
  isExternal?: boolean,
  isDownloadble?: boolean,
  type?: string
} & LinkProps
export const AnimatedLinkWithUnderline = ({ children, label, isExternal, isDownloadble, type = "light", ...props }: AnimatedLinksWithUnderlineProps) => {
    return (
        isDownloadble ?
            <Link aria-label={label} className={cn("inline-block font-bold relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-br from-accent to-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left text-white", type === "light" ? "text-primary" : "text-black")} target={isExternal ? "_blank" : ""} {...props}>{children}</Link> :
            <Link aria-label={label} className={cn("inline-block font-bold relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-br from-accent to-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left", type === "light" ? "text-primary" : "text-black")} target={isExternal ? "_blank" : ""} {...props}>{children}</Link>
    );
}