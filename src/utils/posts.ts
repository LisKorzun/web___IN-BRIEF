import uniq from 'lodash/uniq'
import reduce from 'lodash/reduce'

import { IPostNode } from '../common'

export const getUniqueTags = (posts: IPostNode[]) =>
  uniq(reduce(posts, (res: string[], v) => [...res, ...v.frontmatter.tags], []))
