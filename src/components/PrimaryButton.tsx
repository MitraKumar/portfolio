export const PrimaryButton = ({ text, href, isExternal, isDownloadble }: { text: string, href: string, isExternal?: boolean, isDownloadble?: boolean }) => {
  return (
    <button className="py-3 px-6 bg-gradient-to-br from-cyan-700 to-green-500 hover:opacity-80">
      {
        isDownloadble ?
          <a className="text-zinc-100" href={href} target={isExternal ? "_blank" : ""} download>{text}</a> :
          <a className="text-zinc-100" href={href} target={isExternal ? "_blank" : ""}>{text}</a>
      }
    </button>
  );
}