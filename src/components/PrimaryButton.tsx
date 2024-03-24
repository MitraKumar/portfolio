import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

type PrimaryButtonProps = {
  text: string,
  href: string,
  label?: string,
  isExternal?: boolean,
  isDownloadble?: boolean
};

export const PrimaryButton = ({ text, href, label, isExternal, isDownloadble }: PrimaryButtonProps) => {
  return (
    <CardContainer>
      {/* <CardBody> */}
        <CardItem
          as="button"
          translateZ="100"
          className=""
        >
          {
            isDownloadble ?
              <a aria-label={label} className="py-3 px-6 bg-gradient-to-br from-accent to-primary text-black font-bold" href={href} target={isExternal ? "_blank" : ""} download>{text}</a> :
              <a aria-label={label} className="py-3 px-6 bg-gradient-to-br from-accent to-primary text-black font-bold" href={href} target={isExternal ? "_blank" : ""}>{text}</a>
          }
        </CardItem>
        {/* <button className="py-3 px-6 bg-gradient-to-br from-accent to-primary hover:opacity-80">

        </button> */}
      {/* </CardBody> */}
    </CardContainer>
  );
}