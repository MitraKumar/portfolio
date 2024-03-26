import { ComponentProps, ReactNode } from "react";
import { Badge } from "../ui/badge";

export function ListItem({
  children,
  ...props
}: ComponentProps<"li"> & { children?: ReactNode }) {
  return (
    <li {...props}>
      <Badge>{children}</Badge>
    </li>
  );
}
