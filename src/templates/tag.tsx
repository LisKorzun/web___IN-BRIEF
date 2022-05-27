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
  allMdx: {
    nodes: { slug: string; id: string }[]
    totalCount: number
  }
}

const Tag: FC<PageProps<DataType>> = (props) => {
  console.log(props)
  return <article>{`${props.data.mdx.frontmatter.name} - ${props.data.allMdx.totalCount}`}</article>
}

export const pageQuery = graphql`
  query ($id: String!, $name: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        description
        related
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/posts/" }, frontmatter: { tags: { in: [$name] } } }) {
      nodes {
        id
        slug
        frontmatter {
          description
          title
          tags
        }
      }
      totalCount
    }
  }
`
export default Tag
