import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { Badge } from "../ui/badge";
import Image from 'next/image';
import { AnimatedLinkWithUnderline } from "../AnimatedLinksWithUnderline";
import { LinkProps } from "next/link";

export function MdxLink({ children, ...props }: LinkProps & { children: ReactNode }) {
  return (
    <AnimatedLinkWithUnderline {...props} isExternal>{ children }</AnimatedLinkWithUnderline>
  );
}