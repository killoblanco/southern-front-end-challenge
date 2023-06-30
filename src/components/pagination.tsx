import { Button, Stack } from '@mui/material'

export const PhotoPagination: React.FC = () => {
  return (
    <Stack direction="row" spacing={2} my={2} justifyContent="space-evenly">
      <Button>
        Previous
      </Button>
      <Button>
        Next
      </Button>
    </Stack>
  )
}
