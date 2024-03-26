import { MDXRemote } from 'next-mdx-remote/rsc'
import { HeaderOne } from './mdx/HeaderOne'
import { HeaderTwo } from './mdx/HeaderTwo'
import { Paragragraph } from './mdx/Paragraph'
import { UnorderedList } from './mdx/UnorderedList'
import { ListItem } from './mdx/ListItem'
import { MdxImage } from './mdx/MDXImage'
import { MdxLink } from './mdx/MDXLink'
import { Component, ComponentProps, ComponentPropsWithRef, DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from 'react'
import { MDXRemoteProps } from 'next-mdx-remote/rsc'
import { LinkProps } from 'next/link'
import Image, { ImageProps } from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props: ComponentProps<"h1">) => <HeaderOne {...props}>{ props.children }</HeaderOne>,
  h2: (props: ComponentProps<"h2">) => <HeaderTwo {...props}>{ props.children }</HeaderTwo>,
  p: (props: ComponentProps<"p">) => <Paragragraph {...props}>{ props.children }</Paragragraph>,
  ul: (props: ComponentProps<"ul">) => <UnorderedList {...props}>{ props.children }</UnorderedList>,
  li: (props: ComponentProps<"li">) => <ListItem {...props}>{ props.children }</ListItem>,
  img: (props: ComponentProps<"img">) => <MdxImage {...props} />,
  a: (props: ComponentProps<"a">) => <MdxLink {...props}>{ props.children }</MdxLink>,
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}