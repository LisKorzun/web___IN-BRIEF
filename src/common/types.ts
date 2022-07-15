import { ImageDataLike } from 'gatsby-plugin-image'

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
  frontmatter: {
    name: string
    description: string
    related: string[]
    cover: ImageDataLike
  }
}
