import { CAMERAS, DEFAULT_FILTERS } from '@/mars/constants'
import { type RoversT } from '@/mars/types'
import { Icon } from '@iconify/react'
import { InputAdornment, MenuItem, TextField } from '@mui/material'
import { useRouter } from 'next/router'

export const CameraFilter: React.FC = () => {
  const { query, push } = useRouter()
  const rover = (query.rover ?? DEFAULT_FILTERS.rover) as RoversT
  const camera = query.camera ?? DEFAULT_FILTERS.camera

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    void push({
      pathname: '/',
      query: {
        ...query,
        camera: event.target.value,
        page: 1
      }
    })
  }

  return (
    <TextField
      label="Camera"
      select
      value={camera}
      onChange={handleOnChange}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon icon="tabler:camera" width={24} height={24} />
          </InputAdornment>
        )
      }}
    >
      {CAMERAS
        .filter(camera => camera.rover.includes(rover))
        .map((camera) => (
          <MenuItem key={camera.value} value={camera.value}>
            {camera.label}
          </MenuItem>
        ))
      }
    </TextField>
  )
}
