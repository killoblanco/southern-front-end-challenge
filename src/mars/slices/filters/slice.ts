import { createSlice } from '@reduxjs/toolkit'
import { DEFAULT_FILTERS } from '@/mars/constants'

const initialState = DEFAULT_FILTERS

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setRover: (state, action) => {
      state.rover = action.payload
    },
    setCamera: (state, action) => {
      state.camera = action.payload
    },
    setEarthDate: (state, action) => {
      state.earthDate = action.payload
      state.sol = undefined
    },
    setSol: (state, action) => {
      state.sol = action.payload
      state.earthDate = undefined
    },
    setPage: (state, action) => {
      state.page = action.payload
    }
  }
})
