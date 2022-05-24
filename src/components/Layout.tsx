import React, { FC } from 'react'

const Layout: FC = ({ children, ...propsUsedByPage }) => {
  console.log(propsUsedByPage)
  // Layout receives same data as Page element will get
  // including location, path, uri, params, data, pageContext, etc

  return (
    <>
      <main>{children}</main>
      <footer>Designed & Built by Alesia Korzun</footer>
    </>
  )
}

export default Layout
