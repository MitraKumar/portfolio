import { ComponentProps } from "react";

export function Paragragraph({ children, ...props }: ComponentProps<"p">) {
  return (
    <div {...props} className="mt-2">
      {children}
    </div>
  );
}
