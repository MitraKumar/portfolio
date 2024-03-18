export const AnimatedLinkWithUnderline = ({ text, href, isExternal, isDownloadble }: { text: string, href: string, isExternal?: boolean, isDownloadble?: boolean }) => {
    return (
        isDownloadble ?
            <a className="relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-br from-accent to-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left text-zinc-100" target={isExternal ? "_blank" : "" } href={href}>{text}</a> :
            <a className="relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-br from-accent to-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left text-zinc-100" target={isExternal ? "_blank" : "" } href={href}>{text}</a>
    );
}