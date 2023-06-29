import { type Cameras, type PhotosFilters } from '@/mars/types'
import { DateTime } from 'luxon'

export const BASE_API_URL = 'https://api.nasa.gov/mars-photos/api/v1'
export const ROVERS = ['curiosity', 'opportunity', 'spirit'] as const

export const CAMERAS: Cameras[] = [
  { value: 'all', label: 'All Cameras', rover: ['curiosity', 'opportunity', 'spirit'] },
  { value: 'fhaz', label: 'Front Hazard Avoidance Camera', rover: ['curiosity', 'opportunity', 'spirit'] },
  { value: 'rhaz', label: 'Rear Hazard Avoidance Camera', rover: ['curiosity', 'opportunity', 'spirit'] },
  { value: 'mast', label: 'Mast Camera', rover: ['curiosity'] },
  { value: 'chemcam', label: 'Chemistry and Camera Complex', rover: ['curiosity'] },
  { value: 'mahli', label: 'Mars Hand Lens Imager', rover: ['curiosity'] },
  { value: 'mardi', label: 'Mars Descent Imager', rover: ['curiosity'] },
  { value: 'navcam', label: 'Navigation Camera', rover: ['curiosity', 'opportunity', 'spirit'] },
  { value: 'pancam', label: 'Panoramic Camera', rover: ['opportunity', 'spirit'] },
  {
    value: 'minites',
    label: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
    rover: ['opportunity', 'spirit']
  }
]

export const DEFAULT_FILTERS: PhotosFilters = {
  rover: 'curiosity',
  camera: 'all',
  earthDate: DateTime.now().minus({ day: 1 }).toISODate() ?? undefined,
  sol: undefined,
  page: 1
}
