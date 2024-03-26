import Image from "next/image";
import { ComponentProps } from "react";

type MdxImageProps = ComponentProps<"img">;
export function MdxImage(props: MdxImageProps) {
  return (
    <div className="flex justify-center">
      <div className="border-4 border-primary">
        <Image
          {...props}
          src={props.src ?? ""}
          alt={props.alt ?? ""}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
