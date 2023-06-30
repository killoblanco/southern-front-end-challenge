import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from '@/mars/constants'
import type { Manifest, Photo, PhotosFilters, RoversT, NasaApiManifestResponse, NasaApiPhotosResponse } from '@/mars/types'

export const nasaApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL
  }),
  endpoints: (builder) => ({
    getManifestByRover: builder.query<Manifest, RoversT>({
      query: (rover) => `manifests/${rover}/?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY ?? 'DEMO_KEY'}`,
      transformResponse: (response: NasaApiManifestResponse) => ({
        landingDate: response.photo_manifest.landing_date,
        launchDate: response.photo_manifest.launch_date,
        status: response.photo_manifest.status,
        maxSol: response.photo_manifest.max_sol,
        maxDate: response.photo_manifest.max_date,
        name: response.photo_manifest.name
      })
    }),
    getPhotosByFilters: builder.query<Photo[], PhotosFilters>({
      query: ({ rover, ...filters }) => {
        const queryParams = new URLSearchParams({
          ...(Object.entries(filters).reduce<Record<string, string>>((acc, [key, value]) => {
            if (key === 'camera' && value === 'all') return acc
            if (value === undefined) return acc
            if (key === 'earthDate') return { ...acc, earth_date: value as string }
            return { ...acc, [key]: String(value) }
          }, {})),
          api_key: process.env.NEXT_PUBLIC_NASA_API_KEY ?? 'DEMO_KEY'
        })

        return `rovers/${rover}/photos?${queryParams.toString()}`
      },
      transformResponse: (response: NasaApiPhotosResponse) => {
        return response.photos.map(photo => ({
          id: photo.id,
          src: photo.img_src,
          earthDate: photo.earth_date,
          sol: photo.sol,
          camera: photo.camera.full_name
        }))
      }
    })
  })
})

export const {
  useGetManifestByRoverQuery,
  useGetPhotosByFiltersQuery
} = nasaApi
