export type TModes = 'light' | 'dark'
export type TColorNames = 'grey0' | 'grey100' | 'grey200' | 'grey300' | 'grey500' | 'grey700' | 'grey900'

export type TColors = {
  [key in TColorNames]: {
    [key in TModes]: string
  }
}

export const COLORS: TColors = {
  grey0: {
    light: '#fff', // rgb(255, 255, 255)
    dark: '#0F172A', // rgb(15, 23, 42)
  },
  grey100: {
    light: '#e5e7eb', // rgb(229, 231, 235)
    dark: '#1E293B ', // rgb(30, 41, 59)
  },
  grey200: {
    light: '#e6e9ee',
    dark: '#4b4c53',
  },
  grey300: {
    light: '#6E748B', // rgb(100, 116, 139)
    dark: '#6E748B ', // rgb(100, 116, 139)
  },
  grey500: {
    light: '#334155', // rgb(51, 65, 85)
    dark: '#94a3b8', // rgb(148, 163, 184)
  },
  grey700: {
    light: '#3a3d4a',
    dark: '#e6e9ee',
  },
  grey900: {
    light: '#0F172A', // rgb(15, 23, 42)
    dark: '#E2E8F0', // rgb(226, 232, 240)
  },
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'
