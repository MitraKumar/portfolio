import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { Badge } from "../ui/badge";
import Image from 'next/image';
import { AnimatedLinkWithUnderline } from "../AnimatedLinksWithUnderline";

export function MdxLink({ children, ...props }: { props: ComponentPropsWithRef<"img">, children: ReactNode }) {
  return (
    <AnimatedLinkWithUnderline href="/ubo" >Hello</AnimatedLinkWithUnderline>
  );
}