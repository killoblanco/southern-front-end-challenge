import { CssBaseline, ThemeProvider } from '@mui/material'
import { appTheme } from './theme'

export const MuiProvider: React.FC<React.PropsWithChildren> = ({
  children
}: React.PropsWithChildren) => (
  <ThemeProvider theme={appTheme}>
    <CssBaseline/>
    {children}
  </ThemeProvider>
)
