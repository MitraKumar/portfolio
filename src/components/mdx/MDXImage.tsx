import Image from "next/image";
import { ComponentProps } from "react";

type MdxImageProps = ComponentProps<"img">;

export function MdxImage(props: MdxImageProps) {
  return (
    <div className="flex justify-center my-10 select-none">
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl max-w-2xl w-full p-2 bg-black/25">
        <Image
          src={props.src ?? ""}
          alt={props.alt ?? ""}
          width={800}
          height={480}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>
    </div>
  );
}
