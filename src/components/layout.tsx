import { FiltersOptions } from '@/components/filters'
import { Header } from '@/components/header'
import { Container } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container component="section" maxWidth="lg" sx={{ my: 4 }}>
      <Grid2 component="section" container spacing={6}>
        <Grid2 component="header" xs={12}>
          <Header />
        </Grid2>
        <Grid2 component="aside" xs={4}>
          <FiltersOptions />
        </Grid2>
        <Grid2 component="main" xs={8}>
          {children}
        </Grid2>
      </Grid2>
    </Container>
  )
}
