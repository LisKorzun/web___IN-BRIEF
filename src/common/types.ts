export interface IPostNode {
  id: string
  slug: string
  frontmatter: {
    title: string
    date: string
    description: string
    tags: string[]
  }
}

export interface ITagNode {
  id: string
  slug: string
  frontmatter: {
    name: string
    description: string
    related: string[]
  }
}
