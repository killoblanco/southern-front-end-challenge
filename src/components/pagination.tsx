import { type GetPhotosResponse } from '@/mars/types'
import { Button, Stack } from '@mui/material'
import { useRouter } from 'next/router'

interface Props {
  photos: GetPhotosResponse
}

export const PhotoPagination: React.FC<Props> = ({ photos }) => {
  const { query, push } = useRouter()
  const page = parseInt(query.page as string, 10)

  const handleOnChange = (nextPage: number) => () => {
    void push({
      pathname: '/',
      query: {
        ...query,
        page: page + nextPage
      }
    })
  }

  return (
    <Stack direction="row" spacing={2} my={2} justifyContent="space-evenly">
      {page > 1 && (
        <Button onClick={handleOnChange(-1)}>
          Previous
        </Button>
      )}
      {photos.length >= 25 && (
        <Button onClick={handleOnChange(1)}>
          Next
        </Button>
      )}
    </Stack>
  )
}
