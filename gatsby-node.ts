import path from 'path'
import type { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const LIMIT = '2000'
  const SORT = '{ fields: frontmatter___date, order: DESC }'

  const postTemplate = path.resolve('src/templates/post.tsx')

  const result = await graphql(`
  {
  posts: allMdx(limit: ${LIMIT}, sort: ${SORT}) {
        nodes {
          slug
        }
      }
  }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`🚨  ERROR: Loading "createPages" query`)
    return
  }

  const posts = result.data.posts.nodes

  posts.forEach(({ slug }) => {
    createPage({
      path: slug,
      component: postTemplate,
      context: { slug: slug },
    })
  })
}
