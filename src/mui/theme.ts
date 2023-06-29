import { components } from '@/mui/components'
import { createTheme, responsiveFontSizes } from '@mui/material'
import { palette } from './palette'
import { typography } from './typography'

export const appTheme = responsiveFontSizes(createTheme({
  ...components,
  ...palette,
  ...typography
}))
