import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function HeaderOne({ children, className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      {...props}
      className={cn(
        "text-4xl md:text-5xl font-black tracking-tight text-white mt-12 mb-6 border-b border-white/[0.08] pb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-muted-foreground",
        className
      )}
    >
      {children}
    </h1>
  );
}
