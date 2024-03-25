import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";

export function UnorderedList({ children, ...props }: { props: ComponentPropsWithRef<"ul"> ,children: ReactNode}) {
    return <ul {...props} className="flex gap-2">{ children }</ul>;
}