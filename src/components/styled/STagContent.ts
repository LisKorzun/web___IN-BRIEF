import styled, { css } from 'styled-components'

export const STagContent = styled.div`
  margin-left: calc(var(--tag-page-preview-width) + var(--page-nav-width));
  padding: 4rem;

  & h1 {
    margin: 0 0 2rem 0;
    line-height: 1;
  }

  & .description {
    color: var(--color-hint-text);
    max-width: var(--tag-page-content-width);
  }
`

export const SContentContainer = styled.div`
  display: grid;
  grid-template-columns: auto 20vw;
  column-gap: 25rem;
`
export const SAsideContainer = styled.div`
  height: fit-content;
  position: sticky;
  top: 20rem;
`
export const STagFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const SFilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 calc(var(--page-gutter) * -1) 2rem 0;
  position: relative;
  h4 {
    color: var(--color-border);
    font-weight: 900;
    font-size: 3rem;
    text-transform: uppercase;
  }
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: var(--color-border);
    content: ' ';
  }
  div {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 80px;
    color: var(--color-border);
    font-weight: 900;
    font-family: 'Genos', sans-serif;
    line-height: 0.5;
  }
`

export const SFilterCell = styled.div<{
  selected: boolean
  available: boolean
  color: string
}>`
  margin: 0 13px 13px 0;
  padding: 13px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: var(--color-hint-text);
  font-weight: var(--font-weight-semi-bold);
  background-color: var(--color-grey100);
  cursor: not-allowed;
  opacity: 0.3;

  ${({ available }) =>
    available &&
    css`
      cursor: pointer;
      opacity: 1;
      &:hover {
        background-color: transparent;
        box-shadow: var(--color-background) 0 0 0 4px, ${({ color }) => `rgba(${color})`} 0 0 0 6px,
          rgba(0, 0, 0, 0) 0 0 0 0;
      }
    `}
  ${({ selected }) =>
    selected &&
    css`
      background-color: var(--color-text);
      color: var(--color-background);
      &:hover {
        background-color: var(--color-text);
      }
    `}
`

export const SPostCard = styled.div`
  & h6 {
    margin: 2rem 0;
    font-weight: 400;
    a {
      color: var(--color-grey200);
      padding-right: 2rem;
    }
  }
  & h2 {
    margin: 0;
  }
  & h5 {
    color: var(--color-hint-text);
    margin-bottom: 3rem;
  }
`
