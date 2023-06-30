import { DatePicker } from '@mui/x-date-pickers'
import { useFilterSelector } from '@/mars/slices/filters/selector'
import { DateTime } from 'luxon'
import { useFilterActions } from '@/mars/slices/filters/actions'
import { useEffect, useState } from 'react'
import { useGetManifestByRoverQuery } from '@/mars/slices/api'

export const EarthDateFilter: React.FC = () => {
  const { rover, earthDate } = useFilterSelector()
  const { setEarthDate } = useFilterActions()
  const { data, isLoading } = useGetManifestByRoverQuery(rover)
  const [maxDate, setMaxDate] = useState<DateTime | undefined>(undefined)
  const [minDate, setMinDate] = useState<DateTime | undefined>(undefined)
  const [value, setValue] = useState<DateTime | null>(null)

  useEffect(() => {
    if (data != null) {
      setMaxDate(DateTime.fromISO(data.maxDate))
      setMinDate(DateTime.fromISO(data.landingDate))
    }
  }, [data])

  useEffect(() => {
    if (earthDate != null) {
      const dtEarthDate = DateTime.fromISO(earthDate)

      setValue(dtEarthDate)

      if (maxDate != null && dtEarthDate > maxDate) {
        setValue(maxDate)
        setEarthDate(maxDate.toISODate())
      }
      if (minDate != null && dtEarthDate < minDate) {
        setValue(minDate)
        setEarthDate(minDate.toISODate())
      }
    } else {
      setValue(null)
    }
  }, [maxDate, minDate, earthDate, setEarthDate])

  const handleOnChange = (date: DateTime | null): void => {
    if (date != null) {
      setEarthDate(date.toISODate())
    }
  }

  return (
    <DatePicker
      disabled={isLoading}
      sx={{ width: '100%' }}
      label="Earth Date"
      maxDate={maxDate}
      minDate={minDate}
      value={value}
      onChange={handleOnChange}
    />
  )
}
