import React, { FC } from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import map from 'lodash/map'

import { IPostNode, ITagNode } from '../common'

type DataType = {
  tag: ITagNode
  posts: {
    nodes: IPostNode[]
    totalCount: number
  }
}

const Tag: FC<PageProps<DataType>> = (props) => {
  console.log(props)

  const {
    data: {
      tag: {
        frontmatter: { name, description, related },
      },
      posts: { totalCount, nodes },
    },
  } = props
  console.log(map, nodes)
  map(nodes, (prop, key) => {
    console.log(prop, key)
  })
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <div>{totalCount}</div>
      <div>
        {map(nodes, ({ id, slug, frontmatter: { title, description, date, tags } }) => (
          <div key={id}>
            <h2>
              <Link to={`/${slug}`}>{title}</Link>
            </h2>
            <p>{description}</p>
            <p>{date}</p>
            <div>
              {map(tags, (tag) => (
                <span>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query ($id: String!, $name: String!) {
    tag: mdx(id: { eq: $id }) {
      ...tagFields
    }
    posts: allMdx(filter: { fileAbsolutePath: { regex: "/posts/" }, frontmatter: { tags: { in: [$name] } } }) {
      nodes {
        ...postFields
      }
      totalCount
    }
  }
`
export default Tag
