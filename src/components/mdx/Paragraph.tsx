import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";

export function Paragragraph({ children, ...props }: { props: ComponentPropsWithRef<"p"> ,children: ReactNode}) {
    return <div {...props} className="mt-2">{ children }</div>;
}