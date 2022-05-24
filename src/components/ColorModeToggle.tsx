import React from 'react'
import styled from 'styled-components'

import { TModes } from '../styles'
import { useColorModeContext } from '../store'
import SunIcon from '../assets/svg/sun.svg'
import MoonIcon from '../assets/svg/moon.svg'

const SSunIcon = styled.img`
  mask-image: url(${SunIcon});
  ${({ theme }) => theme.mixins.menuIcon};
`
const SMoonIcon = styled.img`
  mask-image: url(${MoonIcon});
  ${({ theme }) => theme.mixins.menuIcon};
`

const SColorModeToggle = styled.label<{ mode: TModes | null }>`
  visibility: ${({ mode }) => (mode ? 'visible' : 'hidden')};
  transition: visibility 250ms;
  && input {
    display: none;
  }
`

const ColorModeToggle = () => {
  const { mode, setMode } = useColorModeContext()

  return (
    <SColorModeToggle mode={mode}>
      {mode === 'dark' ? <SMoonIcon alt="dark mode" /> : <SSunIcon alt="light mode" />}
      <input
        type="checkbox"
        checked={mode === 'dark'}
        onChange={(e) => {
          setMode(e.target.checked ? 'dark' : 'light')
        }}
      />
    </SColorModeToggle>
  )
}

export default ColorModeToggle
