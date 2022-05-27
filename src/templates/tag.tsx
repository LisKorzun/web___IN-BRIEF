import React, { FC } from 'react'
import { graphql, PageProps } from 'gatsby'

type DataType = {
  mdx: {
    frontmatter: {
      name: string
      description: string
      related: string[]
    }
  }
}

const Tag: FC<PageProps<DataType>> = (props) => {
  console.log(props)
  return <article>{props.data.mdx.frontmatter.name}</article>
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        description
        related
      }
    }
  }
`
export default Tag
