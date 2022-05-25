import React, { FC } from 'react'
import styled from 'styled-components'

import ColorModeToggle from './ColorModeToggle'

import Head from './Head'

const SPageWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  ${({ theme }) => theme.mixins.content};
`

const Layout: FC = ({ children, ...propsUsedByPage }) => {
  console.log(propsUsedByPage)
  // Layout receives same data as Page element will get
  // including location, path, uri, params, data, pageContext, etc

  return (
    <>
      <Head />
      <SPageWrapper>
        <main>{children}</main>
        <ColorModeToggle />
        <footer>Designed & Built by Alesia Korzun</footer>
      </SPageWrapper>
    </>
  )
}

export default Layout
