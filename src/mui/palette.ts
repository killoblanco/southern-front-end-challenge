import { argbFromHex, hexFromArgb, themeFromSourceColor } from '@material/material-color-utilities'
import { type ThemeOptions } from '@mui/material'
import { blueGrey, deepOrange } from '@mui/material/colors'

const {
  schemes,
  palettes: { neutralVariant }
} = themeFromSourceColor(argbFromHex(blueGrey[500]))

export const palette: Pick<ThemeOptions, 'palette'> = {
  palette: {
    mode: 'dark',
    common: {
      black: hexFromArgb(neutralVariant.tone(10)),
      white: hexFromArgb(neutralVariant.tone(98))
    },
    primary: deepOrange,
    secondary: blueGrey,
    divider: hexFromArgb(schemes.dark.outline),
    text: {
      primary: 'rgba(236, 239, 241, 0.87)',
      secondary: 'rgba(236, 239, 241, 0.6)',
      disabled: 'rgba(236, 239, 241, 0.38)'
    },
    background: {
      default: hexFromArgb(schemes.dark.surfaceVariant),
      paper: hexFromArgb(schemes.dark.surface)
    }
  }
}
