import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";

export function HeaderOne({ children, ...props }: { props: ComponentPropsWithRef<"h1"> ,children: ReactNode}) {
    return <h1 {...props} className="text-5xl mt-16 mb-6">{ children }</h1>;
}