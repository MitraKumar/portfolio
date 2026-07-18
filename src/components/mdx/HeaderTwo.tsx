import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function HeaderTwo({ children, className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      {...props}
      className={cn(
        "text-2xl md:text-3xl font-bold tracking-tight text-white mt-10 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70",
        className
      )}
    >
      {children}
    </h2>
  );
}
