import { Component, ComponentProps, ComponentPropsWithRef, DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from "react";
import { Badge } from "../ui/badge";
import Image, { ImageProps } from 'next/image';
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type MdxImageProps = ComponentProps<"img">
export function MdxImage(props: MdxImageProps) {
  return (
    <div className="flex justify-center">
      <div className="border-4 border-primary">
        <Image {...props} src={props.src ?? ""} alt={props.alt ?? ""} width={500} height={300}/>
      </div>
    </div>
  );


}