import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const SecondaryButton = ({
  href,
  label,
  isExternal,
  isDownloadble,
  children,
  className,
}: {
  href: string;
  label?: string;
  isExternal?: boolean;
  isDownloadble?: boolean;
  children: ReactNode;
  className?: string;
}) => {
  const isInternal = href.startsWith("/") && !isDownloadble;
  const Tag = isInternal ? Link : "a";

  return (
    <Tag
      href={href}
      aria-label={label}
      download={isDownloadble ? true : undefined}
      target={isExternal ? "_blank" : undefined}
      className={cn(
        "relative inline-flex items-center justify-center p-[1px] overflow-hidden text-sm font-semibold text-white rounded-lg group bg-gradient-to-br from-accent to-primary hover:text-black focus:ring-2 focus:outline-none focus:ring-primary/30 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(255,90,54,0.25)]",
        className
      )}
    >
      <span className="relative px-6 py-3 transition-all ease-in duration-75 bg-background rounded-[7px] group-hover:bg-transparent w-full text-center">
        {children}
      </span>
    </Tag>
  );
};
