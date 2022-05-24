import React from 'react'
import styled from 'styled-components'

const SLogo = styled.div`
  font-family: 'Genos';
  padding-top: calc(var(--page-top-margin) + var(--page-padding));
  padding-left: var(--page-padding);
  padding-right: var(--page-padding);
  display: grid;
  align-items: center;
  column-gap: 20px;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: var(--page-logo-size);
  font-size: 60px;
  font-weight: 900;
  text-transform: lowercase;
  line-height: 1;
  span {
    background-color: var(--color-text);
    color: var(--color-background);
    padding: 10px 20px;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 300;
  }
`

const Logo = () => (
  <SLogo>
    <div>WEB</div>
    <span>in brief</span>
  </SLogo>
)

export default Logo
