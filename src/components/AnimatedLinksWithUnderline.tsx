import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const AnimatedLinkWithUnderline = ({ children, href, isExternal, isDownloadble, type = "light" }: { children: ReactNode, href: string, isExternal?: boolean, isDownloadble?: boolean, type?: string }) => {
    return (
        isDownloadble ?
            <a className={ cn("relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-br from-accent to-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left text-white", type === "light" ? "text-primary" : "text-black") } target={isExternal ? "_blank" : "" } href={href}>{ children }</a> :
            <a className={ cn("relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-br from-accent to-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left", type === "light" ? "text-primary" : "text-black") } target={isExternal ? "_blank" : "" } href={href}>{ children }</a>
    );
}