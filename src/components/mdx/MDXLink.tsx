import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { Badge } from "../ui/badge";
import Image from 'next/image';
import { AnimatedLinkWithUnderline } from "../AnimatedLinksWithUnderline";
import { LinkProps } from "next/link";

export function MdxLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <AnimatedLinkWithUnderline {...props} href={props.href ?? "/"} isExternal>{ children }</AnimatedLinkWithUnderline>
  );
}