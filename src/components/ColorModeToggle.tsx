import React from 'react'
import styled from 'styled-components'

import { TModes } from '../styles'
import { useColorModeContext } from '../store'

const SColorModeToggle = styled.label<{ mode: TModes | null }>`
  visibility: ${({ mode }) => (mode ? 'visible' : 'hidden')};
  transition: visibility 250ms;
  writing-mode: vertical-rl;
  align-self: end;
  justify-self: center;
  padding-bottom: 40px;
  text-transform: uppercase;
  && input {
    display: none;
  }
`

const ColorModeToggle = () => {
  const { mode, setMode } = useColorModeContext()

  return (
    <SColorModeToggle mode={mode}>
      {mode === 'dark' ? 'Dark' : 'Light'}
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
