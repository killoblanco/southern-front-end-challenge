import { type RootState, useAppSelector } from '@/redux/store'

export const useFilterSelector = (): RootState['filter'] => useAppSelector(state => state.filter)
