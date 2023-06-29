export type RoversT = 'curiosity' | 'opportunity' | 'spirit'
export type CamerasT =
  'fhaz'
  | 'rhaz'
  | 'mast'
  | 'chemcam'
  | 'mahli'
  | 'mardi'
  | 'navcam'
  | 'pancam'
  | 'minites'
  | 'all'

export interface Cameras {
  value: CamerasT
  label: string
  rover: RoversT[]
}

export interface NasaApiManifestResponse {
  photo_manifest: {
    name: RoversT
    landing_date: string
    launch_date: string
    status: string
    max_sol: number
    max_date: string
    total_photos: number
  }
}

export interface NasaApiPhotosResponse {
  photos: Array<{
    id: number
    img_src: string
    earth_date: string
    sol: number
    camera: {
      full_name: string
    }
  }>
}

export interface Manifest {
  landingDate: string
  launchDate: string
  status: string
  maxSol: number
  maxDate: string
  name: RoversT
}

export interface Photo {
  id: number
  src: string
  earthDate: string
  sol: number
  camera: string
}

export type GetManifestResponse = Record<RoversT, Manifest>
export type GetPhotosResponse = Photo[]

export interface PhotosFilters {
  rover: RoversT
  camera: CamerasT
  earthDate?: string
  sol?: number
  page: number
}
