import React, { FC, useMemo, useState } from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import map from 'lodash/map'
import filter from 'lodash/filter'

import { IPostNode, ITagNode } from '../common'
import { getUniqueTags } from '../utils/posts'

type DataType = {
  tag: ITagNode
  posts: {
    nodes: IPostNode[]
    totalCount: number
  }
}

const Tag: FC<PageProps<DataType>> = (props) => {
  const [appliedFilters, setAppliedFilters] = useState<string[]>([])

  const {
    data: {
      tag: {
        frontmatter: { name, description },
      },
      posts: { totalCount, nodes },
    },
  } = props

  const uniqTags = useMemo(() => filter(getUniqueTags(nodes), (i) => i !== name), [name, nodes])

  const onTagClick = (tag: string) => () => {
    if (appliedFilters.includes(tag)) return
    setAppliedFilters((prev) => [...prev, tag])
  }
  const removeFilter = (tag: string) => (e: React.MouseEvent) => {
    e.stopPropagation()
    setAppliedFilters((prev) => filter(prev, (i) => i !== tag))
  }

  const filteredPosts = useMemo(() => {
    return filter(nodes, (n) => appliedFilters.every((i) => n.frontmatter.tags.includes(i)))
  }, [appliedFilters, nodes])

  const isTagActive = (tag: string) => (getUniqueTags(filteredPosts).includes(tag) ? 1 : 0.3)

  return (
    <>
      <h1>
        {name} - {totalCount}
      </h1>
      <p>{description}</p>
      <div>
        {map(uniqTags, (tag, key) => (
          <pre
            key={key}
            onClick={onTagClick(tag)}
            style={{ fontWeight: appliedFilters.includes(tag) ? 800 : 400, opacity: isTagActive(tag) }}
          >
            {tag}
            <span onClick={removeFilter(tag)}>{appliedFilters.includes(tag) ? '✖️' : ''}️</span>
          </pre>
        ))}
      </div>
      <div>
        {map(filteredPosts, ({ id, slug, frontmatter: { title, description, date, tags } }) => (
          <div key={id}>
            <h2>
              <Link to={`/${slug}`}>{title}</Link>
            </h2>
            <p>{description}</p>
            <h5>{date}</h5>
            <h6>
              {map(tags, (tag, key) => (
                <span key={key}>🔖 {tag}</span>
              ))}
            </h6>
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
