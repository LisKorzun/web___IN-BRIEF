import { graphql } from 'gatsby'

export const postFields = graphql`
  fragment postFields on Mdx {
    id
    slug
    frontmatter {
      title
      tags
      description
      date(formatString: "MMM DD, YYYY")
    }
  }
`

export const tagFields = graphql`
  fragment tagFields on Mdx {
    id
    slug
    frontmatter {
      name
      related
      description
      cover {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
