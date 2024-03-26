import { ComponentProps } from "react";
import { AnimatedLinkWithUnderline } from "../AnimatedLinksWithUnderline";

export function MdxLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <AnimatedLinkWithUnderline {...props} href={props.href ?? "/"} isExternal>
      {children}
    </AnimatedLinkWithUnderline>
  );
}
