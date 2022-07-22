import styled from 'styled-components'

export const STagBanner = styled.div<{
  color: string
  image: string
}>`
  position: fixed;
  z-index: -1;
  overflow: hidden;
  top: 0;
  bottom: 0;
  width: var(--tag-page-preview-width);
  margin-left: var(--page-nav-width);
  background-image: ${({ color }) =>
    `linear-gradient(rgba(${color}, 0.1) 70%, rgba(${color}, 0.2), rgba(${color}, 0.3))`};

  &::before {
    content: '';
    position: absolute;
    bottom: -80px;
    right: -80px;
    width: 500px;
    height: 500px;
    background-image: ${({ image }) => `url(${image})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    filter: brightness(0.7) blur(1px);
    opacity: 0.15;
  }
`
