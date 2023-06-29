import { Readex_Pro } from 'next/font/google'
import { type ThemeOptions } from '@mui/material'

export const readexPro = Readex_Pro({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin-ext'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

export const typography: Pick<ThemeOptions, 'typography'> = {
  typography: {
    fontFamily: readexPro.style.fontFamily,
    button: {
      textTransform: 'capitalize'
    }
  }
}
