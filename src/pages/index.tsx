import { Layout } from '@/components/layout'
import { PhotoPagination } from '@/components/pagination'
import { PhotoGrid } from '@/components/photo-grid'

export default function Home (): React.JSX.Element {
  return (
    <Layout>
      <PhotoPagination />
      <PhotoGrid />
      <PhotoPagination />
    </Layout>
  )
}
