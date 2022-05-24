import React from 'react'
import type { GatsbySSR } from 'gatsby'

import wrapRoot from './src/components/wrapRoot'
import wrapPage from './src/components/wrapPage'
import { getInitialColorModeScript, getFallBackColorStyles } from './src/utils/colorMode'
import { getFontLoaderScript } from './src/utils/fontsLoader'

export const wrapRootElement = wrapRoot
export const wrapPageElement = wrapPage

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents([<style key="initial_color_mode">{getFallBackColorStyles()}</style>])
  setPreBodyComponents([
    <script key="initial_color_mode" dangerouslySetInnerHTML={{ __html: getInitialColorModeScript().code! }} />,
    <script key="font_load" dangerouslySetInnerHTML={{ __html: getFontLoaderScript().code! }} />,
  ])
}
