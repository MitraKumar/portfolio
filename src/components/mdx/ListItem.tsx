import { ComponentProps, ReactNode } from "react";
import { Badge } from "../ui/badge";

export function ListItem({
  children,
  ...props
}: ComponentProps<"li"> & { children?: ReactNode }) {
  return (
    <li {...props} className="inline-block">
      <Badge
        variant="outline"
        className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors font-semibold px-3 py-1 text-sm rounded-md"
      >
        {children}
      </Badge>
    </li>
  );
}
