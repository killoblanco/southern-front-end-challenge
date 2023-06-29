import { type Manifest } from '@/mars/types'
import { Icon } from '@iconify/react'
import { Divider, Stack, Typography } from '@mui/material'
import { CameraFilter } from './cameras'
import { EarthDateFilter } from './earth-date'
import { RoverFilter } from './rover'
import { SolFilter } from './sol'

interface Props {
  manifest: Manifest
}

export const FiltersOptions: React.FC<Props> = ({ manifest }) => (
  <>
    <Stack direction="row" spacing={2} alignItems="center">
      <Icon icon="tabler:adjustments-horizontal" width={24} height={24} />
      <Typography variant="h5">Filters</Typography>
    </Stack>
    <Divider sx={{ my: 2 }} />
    <RoverFilter />
    <Divider sx={{ my: 2 }} />
    <CameraFilter />
    <Divider sx={{ my: 2 }} />
    <SolFilter max={manifest.maxSol} />
    <Divider sx={{ my: 2 }} />
    <EarthDateFilter min={manifest.landingDate} max={manifest.maxDate} />
  </>
)
