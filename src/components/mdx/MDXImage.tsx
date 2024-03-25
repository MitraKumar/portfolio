import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { Badge } from "../ui/badge";
import Image, { ImageProps } from 'next/image';

export function MdxImage({ children, ...props }: ImageProps & { children: ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="border-4 border-primary">
        <Image {...props} width={500} height={300}/>
      </div>
    </div>
  );
}