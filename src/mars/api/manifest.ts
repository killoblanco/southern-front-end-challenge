import { BASE_API_URL } from '@/mars/constants'
import { type GetManifestResponse, type NasaApiManifestResponse } from '@/mars/types'

export const getManifests = async (): Promise<GetManifestResponse> => (
  await Promise.all([
    fetch(`${BASE_API_URL}/manifests/curiosity?api_key=${process.env.NASA_API_KEY ?? 'DEMO_KEY'}`)
      .then<NasaApiManifestResponse>(async r => await r.json()),
    fetch(`${BASE_API_URL}/manifests/opportunity?api_key=${process.env.NASA_API_KEY ?? 'DEMO_KEY'}`)
      .then<NasaApiManifestResponse>(async r => await r.json()),
    fetch(`${BASE_API_URL}/manifests/spirit?api_key=${process.env.NASA_API_KEY ?? 'DEMO_KEY'}`)
      .then<NasaApiManifestResponse>(async r => await r.json())
  ])
)
  .reduce((acc, { photo_manifest: manifest }) => ({
    ...acc,
    [manifest.name.toLowerCase()]: {
      landingDate: manifest.landing_date,
      launchDate: manifest.launch_date,
      status: manifest.status,
      maxSol: manifest.max_sol,
      maxDate: manifest.max_date,
      name: manifest.name
    }
  }), {} as unknown as GetManifestResponse)
