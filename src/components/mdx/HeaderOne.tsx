import { ComponentProps } from "react";

export function HeaderOne({ children, ...props }: ComponentProps<"h1">) {
  return (
    <h1 {...props} className="mb-6 mt-16 text-5xl">
      {children}
    </h1>
  );
}
