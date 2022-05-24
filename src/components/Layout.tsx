import React, { FC } from 'react'
import styled from 'styled-components'

import Head from './Head'
import Header from './Header'

const SPageWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  ${({ theme }) => theme.mixins.content};
`

const SMainContent = styled.div`
  position: relative;
  margin-top: var(--page-header-height);
  padding: 0 var(--page-padding);
  border-right: var(--page-border);
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    border-bottom: var(--page-border);
  }
`

const Layout: FC = ({ children, ...propsUsedByPage }) => {
  console.log(propsUsedByPage)
  // Layout receives same data as Page element will get
  // including location, path, uri, params, data, pageContext, etc

  return (
    <>
      <Head />
      <Header />
      <SPageWrapper>
        <SMainContent>
          <main>{children}</main>
        </SMainContent>
        <footer>Designed & Built by Alesia Korzun</footer>
      </SPageWrapper>
    </>
  )
}

export default Layout
