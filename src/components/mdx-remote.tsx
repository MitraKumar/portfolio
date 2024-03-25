import { MDXRemote } from 'next-mdx-remote/rsc'
import { HeaderOne } from './mdx/HeaderOne'
import { HeaderTwo } from './mdx/HeaderTwo'
import { Paragragraph } from './mdx/Paragraph'
import { UnorderedList } from './mdx/UnorderedList'
import { ListItem } from './mdx/ListItem'
import { MdxImage } from './mdx/Image'
import { MdxLink } from './ui/MDXLink'

const components = {
  h1: (props: any) => <HeaderOne {...props}>{ props.children }</HeaderOne>,
  h2: (props: any) => <HeaderTwo {...props}>{ props.children }</HeaderTwo>,
  p: (props: any) => <Paragragraph {...props}>{ props.children }</Paragragraph>,
  ul: (props: any) => <UnorderedList {...props}>{ props.children }</UnorderedList>,
  li: (props: any) => <ListItem {...props}>{ props.children }</ListItem>,
  img: (props: any) => <MdxImage {...props}>{ props.children }</MdxImage>,
  a: (props: any) => <MdxLink {...props}>{ props.children }</MdxLink>,
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}