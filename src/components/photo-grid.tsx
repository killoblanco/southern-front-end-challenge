import { useFilterSelector } from '@/mars/slices/filters/selector'
import { useGetPhotosByFiltersQuery } from '@/mars/slices/api'
import { Box, CircularProgress, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'

export const PhotoGrid: React.FC = () => {
  const filters = useFilterSelector()
  const { data, isLoading } = useGetPhotosByFiltersQuery(filters)

  if (isLoading) {
    return (
      <Box mx="auto" width="fit-content">
        <CircularProgress />
      </Box>
    )
  }

  if (data == null || data.length === 0) {
    return (
      <Typography variant="h5" align="center">
        No photos found
      </Typography>
    )
  }

  return (
    <ImageList variant="masonry" cols={3} gap={16}>
      {(data ?? []).map((photo) => (
        <ImageListItem key={photo.id}>
          <img src={photo.src} alt={`photo-${photo.id}`} />
          <ImageListItemBar title={photo.camera} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
