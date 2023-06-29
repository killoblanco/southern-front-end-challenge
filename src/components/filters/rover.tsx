import { DEFAULT_FILTERS, ROVERS } from '@/mars/constants'
import { Icon } from '@iconify/react'
import { Chip, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export const RoverFilter: React.FC = () => {
  const { query, push } = useRouter()
  const rover = query.rover ?? DEFAULT_FILTERS.rover

  const handleOnChange = (roverName: string) => () => {
    void push({
      pathname: '/',
      query: {
        camera: DEFAULT_FILTERS.camera,
        rover: roverName,
        page: 1
      }
    })
  }

  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Icon icon="tabler:robot" width={24} height={24} />
        <Typography variant="subtitle1">Rover</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        {ROVERS.map((roverName) => (
          <Chip
            key={`rover-${roverName}`}
            label={roverName}
            variant={rover === roverName ? 'filled' : 'outlined'}
            color={rover === roverName ? 'primary' : 'default'}
            sx={{ textTransform: 'capitalize' }}
            onClick={handleOnChange(roverName)}
          />
        ))}
      </Stack>
    </Stack>
  )
}
