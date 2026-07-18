import { ComponentProps } from "react";

export function UnorderedList({ children, ...props }: ComponentProps<"ul">) {
  return (
    <ul {...props} className="flex flex-wrap gap-2.5 my-4">
      {children}
    </ul>
  );
}
