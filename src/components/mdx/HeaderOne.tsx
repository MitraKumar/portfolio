import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";

export function HeaderOne({ children, ...props }: ComponentProps<"h1">) {
    return <h1 {...props} className="text-5xl mt-16 mb-6">{ children }</h1>;
}