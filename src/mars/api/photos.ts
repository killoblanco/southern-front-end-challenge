import { BASE_API_URL, DEFAULT_FILTERS } from '@/mars/constants'
import { type GetPhotosResponse, type NasaApiPhotosResponse, type PhotosFilters } from '@/mars/types'

export const getPhotos = async (query: PhotosFilters): Promise<GetPhotosResponse> => {
  try {
    const { rover, ...filters } = Object.assign({}, DEFAULT_FILTERS, query)
    const queryParams = Object.entries(filters).reduce<Record<string, string>>((acc, [key, value]) => {
      if (key === 'camera' && value === 'all') return acc
      if (value === undefined) return acc
      return { ...acc, [key]: String(value) }
    }, {})

    const searchParams = new URLSearchParams({
      ...queryParams,
      api_key: process.env.NASA_API_KEY ?? 'DEMO_KEY'
    } as unknown as Record<string, string>)
    const url = new URL(`${BASE_API_URL}/rovers/${rover}/photos?${searchParams.toString()}`)
    const { photos } = (await (await fetch(url)).json()) as NasaApiPhotosResponse

    return photos.map(photo => ({
      id: photo.id,
      src: photo.img_src,
      earthDate: photo.earth_date,
      sol: photo.sol,
      camera: photo.camera.full_name
    }))
  } catch (err) {
    console.error(err)
    return []
  }
}
