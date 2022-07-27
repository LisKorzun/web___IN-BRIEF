import React, { FC } from 'react'
import styled from 'styled-components'

import ColorModeToggle from './ColorModeToggle'

import Head from './Head'

const SPageWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`

const SPageHeader = styled.div`
  position: fixed;
  width: calc(var(--page-nav-width) - 1rem);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: end;
  height: 100vh;
  font-weight: 400;
  font-size: 14px;
  color: var(--color-secondary-text);
  line-height: normal;
  & .logo {
    writing-mode: vertical-rl;
    align-self: start;
    justify-self: center;
    padding-top: 40px;
    font-size: 2rem;
    font-weight: 400;
  }
  & .tags {
    writing-mode: vertical-rl;
    align-self: center;
    justify-self: center;
  }
`

const Layout: FC = ({ children, ...propsUsedByPage }) => {
  console.log(propsUsedByPage)
  // Layout receives same data as Page element will get
  // including location, path, uri, params, data, pageContext, etc

  return (
    <>
      <Head />
      <SPageWrapper>
        <SPageHeader>
          <div className="logo">web IN BRIEF</div>
          <div className="tags">TAGS</div>
          <ColorModeToggle />
        </SPageHeader>
        <main>{children}</main>
        <footer>Designed & Built by Alesia Korzun</footer>
      </SPageWrapper>
    </>
  )
}

export default Layout
