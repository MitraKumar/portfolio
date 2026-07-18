import { cn } from "@/lib/utils";
import Link from "next/link";
import { CardContainer, CardItem } from "./ui/3d-card";

type PrimaryButtonProps = {
  text: string;
  href: string;
  label?: string;
  isExternal?: boolean;
  isDownloadble?: boolean;
  className?: string;
};

export const PrimaryButton = ({
  text,
  href,
  label,
  isExternal,
  isDownloadble,
  className,
}: PrimaryButtonProps) => {
  const buttonStyles =
    "inline-block bg-gradient-to-br from-accent to-primary px-8 py-3.5 font-bold text-black rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_20px_rgba(255,90,54,0.35)] text-center";

  // Check if link is external or download link to use normal anchor, else Next.js Link
  const isInternal = href.startsWith("/") && !isDownloadble;

  return (
    <CardContainer containerClassName="py-2 inline-block">
      <CardItem
        as={isInternal ? Link : "a"}
        translateZ="40"
        href={href}
        aria-label={label}
        download={isDownloadble ? true : undefined}
        target={isExternal ? "_blank" : undefined}
        className={cn(buttonStyles, className)}
      >
        {text}
      </CardItem>
    </CardContainer>
  );
};
