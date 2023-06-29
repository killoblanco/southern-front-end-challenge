import { type GetPhotosResponse } from '@/mars/types'
import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'

interface Props {
  photos: GetPhotosResponse
}

export const PhotoGrid: React.FC<Props> = ({ photos }) => {
  if (photos.length === 0) {
    return (
      <Typography variant="h4" align="center">
        No photos found.
      </Typography>
    )
  }

  return (
    <ImageList variant="masonry" cols={3} gap={16}>
      {photos.map((photo) => (
        <ImageListItem key={photo.id}>
          <img src={photo.src} alt={`photo-${photo.id}`} />
          <ImageListItemBar title={photo.camera} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
