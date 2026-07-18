import { ComponentProps } from "react";
import { AnimatedLinkWithUnderline } from "../AnimatedLinksWithUnderline";

export function MdxLink({ children, ...props }: ComponentProps<"a">) {
  const href = props.href ?? "/";
  // Dynamically determine if the link is external (starts with http/https)
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <AnimatedLinkWithUnderline
      href={href}
      isExternal={isExternal}
      type="light"
    >
      {children}
    </AnimatedLinkWithUnderline>
  );
}
