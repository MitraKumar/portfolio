import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { Badge } from "../ui/badge";

export function ListItem({ children, ...props }: { props: ComponentPropsWithRef<"li">, children: ReactNode }) {
    return <li {...props}><Badge>{children}</Badge></li>;
}