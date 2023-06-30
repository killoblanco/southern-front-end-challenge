import { CAMERAS } from '@/mars/constants'
import { Icon } from '@iconify/react'
import { InputAdornment, MenuItem, TextField } from '@mui/material'
import { useFilterSelector } from '@/mars/slices/filters/selector'
import { useFilterActions } from '@/mars/slices/filters/actions'

export const CameraFilter: React.FC = () => {
  const { camera, rover } = useFilterSelector()
  const { setCamera } = useFilterActions()

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCamera(event.target.value)
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
