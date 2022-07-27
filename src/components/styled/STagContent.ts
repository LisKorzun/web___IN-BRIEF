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
  column-gap: 8rem;
`

export const STagFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
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
  color: var(--color-secondary-text);
  font-weight: var(--font-weight-semi-bold);
  background-color: var(--color-grey100);
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
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
    color: var(--color-hint-text);
    margin: 2rem 0;
    span {
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
