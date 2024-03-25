import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";

export function Paragragraph({ children, ...props }: { props: ComponentPropsWithRef<"p"> ,children: ReactNode}) {
    return <p {...props} className="mt-2">{ children }</p>;
}