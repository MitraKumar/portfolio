import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { ComponentProps } from "react";
import { HeaderOne } from "./mdx/HeaderOne";
import { HeaderTwo } from "./mdx/HeaderTwo";
import { ListItem } from "./mdx/ListItem";
import { MdxImage } from "./mdx/MDXImage";
import { MdxLink } from "./mdx/MDXLink";
import { Paragragraph } from "./mdx/Paragraph";
import { UnorderedList } from "./mdx/UnorderedList";

const components = {
  h1: (props: ComponentProps<"h1">) => (
    <HeaderOne {...props}>{props.children}</HeaderOne>
  ),
  h2: (props: ComponentProps<"h2">) => (
    <HeaderTwo {...props}>{props.children}</HeaderTwo>
  ),
  p: (props: ComponentProps<"p">) => (
    <Paragragraph {...props}>{props.children}</Paragragraph>
  ),
  ul: (props: ComponentProps<"ul">) => (
    <UnorderedList {...props}>{props.children}</UnorderedList>
  ),
  li: (props: ComponentProps<"li">) => (
    <ListItem {...props}>{props.children}</ListItem>
  ),
  img: (props: ComponentProps<"img">) => <MdxImage {...props} />,
  a: (props: ComponentProps<"a">) => (
    <MdxLink {...props}>{props.children}</MdxLink>
  ),
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
