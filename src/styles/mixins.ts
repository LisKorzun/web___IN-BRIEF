import { css } from 'styled-components'

const mixins = {
  content: css`
    width: 70%;
    max-width: var(--page-max-width);
    margin: 0 auto;
  `,
  menuIcon: css`
    mask-size: auto var(--menu-icon-size);
    mask-repeat: no-repeat;
    transition: background-color 200ms;
    background-color: var(--color-text);
    width: var(--menu-icon-size);
    height: var(--menu-icon-size);
    cursor: pointer;
  `,
}

export default mixins
