import { useAppDispatch } from '@/redux/store'
import { bindActionCreators } from 'redux'
import { filterSlice } from '@/mars/slices/filters/slice'

export const useFilterActions = (): typeof filterSlice.actions => {
  const dispatch = useAppDispatch()

  return {
    setRover: bindActionCreators(filterSlice.actions.setRover, dispatch),
    setCamera: bindActionCreators(filterSlice.actions.setCamera, dispatch),
    setEarthDate: bindActionCreators(filterSlice.actions.setEarthDate, dispatch),
    setSol: bindActionCreators(filterSlice.actions.setSol, dispatch),
    setPage: bindActionCreators(filterSlice.actions.setPage, dispatch)
  }
}
