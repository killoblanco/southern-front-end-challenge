import { Box, Stack, Typography } from '@mui/material'

export const Header: React.FC = () => (
  <Stack direction="row" spacing={2} alignItems="center">
    <Box
      component="img"
      src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
      alt="nasa-logo"
      sx={{ width: 90, aspectRatio: '1 / 1' }}
    />
    <Stack spacing={1}>
      <Typography variant="h3" color="primary">Mars Rover</Typography>
      <Typography variant="h6">
        Image data gathered by NASA&apos;s Curiosity, Opportunity, and Spirit rovers on Mars.
      </Typography>
    </Stack>
  </Stack>
)
