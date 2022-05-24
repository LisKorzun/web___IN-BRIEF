import React, { FC } from 'react'
import styled from 'styled-components'

import HamburgerIcon from '../assets/svg/hamburger.svg'
import SearchIcon from '../assets/svg/search.svg'

import ColorModeToggle from './ColorModeToggle'
import Logo from './Logo'

const SSearchIcon = styled.img`
  mask-image: url(${SearchIcon});
  ${({ theme }) => theme.mixins.menuIcon};
`

const SHamburgerIcon = styled.img`
  mask-image: url(${HamburgerIcon});
  ${({ theme }) => theme.mixins.menuIcon};
`

const SHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  min-height: var(--page-header-height);
  background: linear-gradient(
    var(--color-background) calc(var(--page-top-margin) + var(--page-padding)),
    rgba(40, 44, 59, 0)
  );
  & .content {
    ${({ theme }) => theme.mixins.content};
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: var(--page-top-margin);
      left: 0;
      width: 60%;
      border-bottom: var(--page-border);
    }
  }
`

const SRightSection = styled.div`
  position: absolute;
  top: var(--page-top-margin);
  right: 0;
  height: 50vh;
  display: grid;
  grid-template-rows: auto 1fr;
  .space {
    border-right: var(--page-border-width) solid var(--color-background);
  }
`

const SLeftSection = styled.div`
  position: absolute;
  top: var(--page-top-margin);
  left: 0;
  height: calc(100vh - var(--page-top-margin) * 2);
  display: grid;
  grid-template-rows: 1fr auto;
  .space {
    border-left: var(--page-border);
  }
`

const SSideIconMenu = styled.div`
  margin-left: calc(var(--menu-icon-size) / 2 * -1);
  display: grid;
  row-gap: var(--page-padding);
  grid-template-columns: var(--menu-icon-size);
  padding-top: var(--page-top-margin);
`

const Header: FC = () => (
  <SHeader>
    <div className="content">
      <SLeftSection>
        <div className="space" />
        <SSideIconMenu>
          <SSearchIcon alt="search" />
          <ColorModeToggle />
        </SSideIconMenu>
      </SLeftSection>
      <SRightSection>
        <SHamburgerIcon alt="menu" />
        <div className="space" />
      </SRightSection>
      <Logo />
    </div>
  </SHeader>
)

export default Header
