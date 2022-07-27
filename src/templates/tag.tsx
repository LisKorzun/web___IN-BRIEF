import React, { FC, useMemo, useState } from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import map from 'lodash/map'
import noop from 'lodash/noop'
import filter from 'lodash/filter'

import { IPostNode, ITagNode } from '../common'
import { getUniqueTags } from '../utils/posts'
import {
  SFilterCell,
  STagBanner,
  STagContent,
  STagFilter,
  SContentContainer,
  SPostCard,
  STagBannerLine,
} from '../components'

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
        frontmatter: { key, title, colorRGB, logo },
      },
      posts: { nodes },
    },
  } = props

  const uniqTags = useMemo(() => filter(getUniqueTags(nodes), (i) => i !== key), [key, nodes])

  const onTagClick = (tag: string) => () => {
    if (appliedFilters.includes(tag)) {
      setAppliedFilters((prev) => filter(prev, (i) => i !== tag))
    } else {
      setAppliedFilters((prev) => [...prev, tag])
    }
  }

  const filteredPosts = useMemo(() => {
    return filter(nodes, (n) => appliedFilters.every((i) => n.frontmatter.tags.includes(i)))
  }, [appliedFilters, nodes])

  const isTagActive = (tag: string) => getUniqueTags(filteredPosts).includes(tag)
  return (
    <>
      <STagBanner color={colorRGB} image={logo.childImageSharp.fluid.srcWebp} />
      <STagBannerLine color={colorRGB} />
      <STagContent>
        <h1>{title}</h1>
        <SContentContainer>
          <div>
            {map(filteredPosts, ({ id, slug, frontmatter: { title, description, date, tags } }) => (
              <SPostCard key={id}>
                <h6>
                  {map(tags, (tag, key) => (
                    <span key={key}>{tag}</span>
                  ))}
                </h6>
                <h2>
                  <Link to={`/${slug}`}>{title}</Link>
                </h2>
                <p>{description}</p>
                <h5>{date}</h5>
                <hr />
              </SPostCard>
            ))}
          </div>
          <STagFilter>
            {map(uniqTags, (tag, key) => (
              <SFilterCell
                key={key}
                onClick={isTagActive(tag) ? onTagClick(tag) : noop}
                selected={appliedFilters.includes(tag)}
                available={isTagActive(tag)}
                color={colorRGB}
              >
                {tag}
              </SFilterCell>
            ))}
          </STagFilter>
        </SContentContainer>
      </STagContent>
    </>
  )
}

export const pageQuery = graphql`
  query ($id: String!, $key: String!) {
    tag: mdx(id: { eq: $id }) {
      ...tagFields
    }
    posts: allMdx(filter: { fileAbsolutePath: { regex: "/content/posts/" }, frontmatter: { tags: { in: [$key] } } }) {
      nodes {
        ...postFields
      }
      totalCount
    }
  }
`
export default Tag
