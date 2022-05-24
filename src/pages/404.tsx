import React, { FC } from 'react'

import { Link, PageProps } from 'gatsby'

const NotFoundPage: FC<PageProps> = () => {
  return (
    <>
      <h1>Page not found</h1>
      <Link to="/">Go home</Link>.
    </>
  )
}

export default NotFoundPage
