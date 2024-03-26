import { ComponentProps } from "react";

export function HeaderTwo({ children, ...props }: ComponentProps<"h2">) {
  return (
    <h2 {...props} className="mb-6 mt-16 text-3xl">
      {children}
    </h2>
  );
}
