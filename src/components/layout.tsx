import { FiltersOptions } from '@/components/filters'
import { Header } from '@/components/header'
import { DEFAULT_FILTERS } from '@/mars/constants'
import { type GetManifestResponse, type RoversT } from '@/mars/types'
import { Container } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { useRouter } from 'next/router'

interface Props {
  manifests: GetManifestResponse
}

export const Layout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  manifests
}) => {
  const { query } = useRouter()
  const manifest = manifests[(query.rover ?? DEFAULT_FILTERS.rover) as RoversT]

  return (
    <Container component="section" maxWidth="lg" sx={{ my: 4 }}>
      <Grid2 component="section" container spacing={6}>
        <Grid2 component="header" xs={12}>
          <Header />
        </Grid2>
        <Grid2 component="aside" xs={4}>
          <FiltersOptions manifest={manifest} />
        </Grid2>
        <Grid2 component="main" xs={8}>
          {children}
        </Grid2>
      </Grid2>
    </Container>
  )
}
