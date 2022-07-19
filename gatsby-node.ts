import path from 'path'
import type { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const LIMIT = '2000'
  const SORT = '{ fields: frontmatter___date, order: DESC }'

  const postTemplate = path.resolve('src/templates/post.tsx')
  const tagTemplate = path.resolve('src/templates/tag.tsx')

  const result = await graphql(`
  {
    posts: allMdx(limit: ${LIMIT}, sort: ${SORT}, filter: {fileAbsolutePath: {regex: "/content/posts/"}}) {
      nodes {
        id
        slug
      }
    }
    tags: allMdx(filter: {fileAbsolutePath: {regex: "/content/tags/"}}) {
      edges {
        node {
          slug
          id
          frontmatter {
            key
          }
        }
      }
    }
  }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`🚨  ERROR: Loading "createPages" query`)
    return
  }

  const posts = result.data.posts.nodes
  const tags = result.data.tags.edges

  posts.forEach(({ slug, id }) => {
    createPage({
      path: slug,
      component: postTemplate,
      context: { id },
    })
  })

  tags.forEach(
    ({
      node: {
        slug,
        id,
        frontmatter: { key },
      },
    }) => {
      createPage({
        path: `t/${slug}`,
        component: tagTemplate,
        context: { id, key },
      })
    }
  )
}
