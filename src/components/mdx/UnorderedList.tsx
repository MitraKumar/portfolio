import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";

export function UnorderedList({ children, ...props }: ComponentProps<"ul">) {
    return <ul {...props} className="flex gap-2">{ children }</ul>;
}