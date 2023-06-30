import { ROVERS } from '@/mars/constants'
import { Icon } from '@iconify/react'
import { Chip, Stack, Typography } from '@mui/material'
import { useFilterSelector } from '@/mars/slices/filters/selector'
import { useFilterActions } from '@/mars/slices/filters/actions'

export const RoverFilter: React.FC = () => {
  const { rover } = useFilterSelector()
  const { setRover } = useFilterActions()

  const handleOnChange = (roverName: string) => () => {
    setRover(roverName)
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
