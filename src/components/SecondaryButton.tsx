import { AnimatedLinkWithUnderline } from "./AnimatedLinksWithUnderline";

export const SecondaryButton = ({ text, href, isExternal, isDownloadble }: { text: string, href: string, isExternal?: boolean, isDownloadble?: boolean }) => {
    return (
      <button className="p-1 bg-gradient-to-br from-accent to-primary">
        <span className="py-2 px-5 flex h-full w-full items-center justify-center bg-zinc-900">
          <AnimatedLinkWithUnderline text={text} href={href} isDownloadble={isDownloadble} isExternal={isExternal} />
        </span>
      </button>
    );
  }