import { type ThemeOptions } from '@mui/material'

export const components: Pick<ThemeOptions, 'components'> = {
  components: {
    MuiImageList: {
      styleOverrides: {
        root: {
          overflow: 'visible'
        }
      }
    },
    MuiImageListItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          overflow: 'hidden',
          transition: theme.transitions.create('box-shadow'),
          '&:hover': {
            boxShadow: theme.shadows[8]
          }
        })
      }
    }
  }
}
