export const PrimaryButton = ({ text, href, label, isExternal, isDownloadble }: { text: string, href: string, label?: string, isExternal?: boolean, isDownloadble?: boolean }) => {
  return (
    <button className="py-3 px-6 bg-gradient-to-br from-accent to-primary hover:opacity-80">
      {
        isDownloadble ?
          <a aria-label={label} className="text-black" href={href} target={isExternal ? "_blank" : ""} download>{text}</a> :
          <a aria-label={label} className="text-black" href={href} target={isExternal ? "_blank" : ""}>{text}</a>
      }
    </button>
  );
}