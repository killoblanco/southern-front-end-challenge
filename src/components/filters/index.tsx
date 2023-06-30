import { Icon } from '@iconify/react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { CameraFilter } from './cameras'
import { EarthDateFilter } from './earth-date'
import { RoverFilter } from './rover'
import { SolFilter } from './sol'

export const FiltersOptions: React.FC = () => (
  <Box sx={t => ({ position: 'sticky', top: t.spacing(2) })}>
    <Stack direction="row" spacing={2} alignItems="center">
      <Icon icon="tabler:adjustments-horizontal" width={24} height={24} />
      <Typography variant="h5">Filters</Typography>
    </Stack>
    <Divider sx={{ my: 2 }} />
    <RoverFilter />
    <Divider sx={{ my: 2 }} />
    <CameraFilter />
    <Divider sx={{ my: 2 }} />
    <SolFilter />
    <Divider sx={{ my: 2 }} />
    <EarthDateFilter />
  </Box>
)
