import React, { FC } from 'react'
import { graphql, PageProps } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

type DataType = {
  mdx: {
    body: string
  }
}

const Post: FC<PageProps<DataType>> = (props) => {
  console.log(props)
  return <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
}

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
    }
  }
`
export default Post
