import { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { Badge } from "../ui/badge";
import Image from 'next/image';

export function MdxImage({ children, ...props }: { props: ComponentPropsWithRef<"img">, children: ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="border-4 border-primary">
        <Image src={"/assets/projects/portfolio.png"} alt="buii" width={500} height={500} />
      </div>
    </div>
  );
}