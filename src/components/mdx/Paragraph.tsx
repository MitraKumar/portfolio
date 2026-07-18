import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Paragraph({ children, className, ...props }: ComponentProps<"p">) {
  return (
    <p
      {...props}
      className={cn("mt-4 text-muted-foreground leading-relaxed text-lg", className)}
    >
      {children}
    </p>
  );
}
