import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";

export function HeaderTwo({ children, ...props }: { props: ComponentPropsWithRef<"h2"> ,children: ReactNode}) {
    return <h2 {...props} className="text-3xl mt-16 mb-6">{ children }</h2>;
}