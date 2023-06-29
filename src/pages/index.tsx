import { Layout } from '@/components/layout'
import { PhotoPagination } from '@/components/pagination'
import { PhotoGrid } from '@/components/photo-grid'
import { getManifests } from '@/mars/api/manifest'
import { getPhotos } from '@/mars/api/photos'
import { type GetManifestResponse, type GetPhotosResponse, type PhotosFilters } from '@/mars/types'
import { type GetServerSideProps } from 'next'

interface PageProps {
  manifests: GetManifestResponse
  photos: GetPhotosResponse
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ query }) => {
  const manifests = await getManifests()
  const photos = await getPhotos(query as unknown as PhotosFilters)

  return {
    props: {
      manifests,
      photos
    }
  }
}

export default function Home ({ manifests, photos }: PageProps): React.JSX.Element {
  return (
    <Layout manifests={manifests}>
      <PhotoPagination photos={photos} />
      <PhotoGrid photos={photos} />
      <PhotoPagination photos={photos} />
    </Layout>
  )
}
