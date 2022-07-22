import { ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'

export type FullImageDataLike = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
    fluid: {
      base64: string
      tracedSVG: string
      srcWebp: string
      originalImg: string
      originalName: string
    }
  }
}

export interface IPostNode {
  id: string
  slug: string
  frontmatter: {
    title: string
    date: string
    description: string
    tags: string[]
    cover: ImageDataLike
  }
}

export interface ITagNode {
  id: string
  slug: string
  body: string
  frontmatter: {
    key: string
    title: string
    description: string
    colorRGB: string
    related: string[]
    cover: ImageDataLike
    logo: FullImageDataLike
  }
}
