import { DatePicker } from '@mui/x-date-pickers'
import { DateTime } from 'luxon'
import { useRouter } from 'next/router'

interface Props {
  min: string
  max: string
}

export const EarthDateFilter: React.FC<Props> = ({ min, max }) => {
  const { query, push } = useRouter()

  const handleOnChange = (date: DateTime | null): void => {
    if (date != null) {
      delete query.sol
      void push({
        pathname: '/',
        query: {
          ...query,
          earthDate: date.toISODate(),
          page: 1
        }
      })
    }
  }

  return (
    <DatePicker
      sx={{ width: '100%' }}
      maxDate={DateTime.fromISO(max)}
      minDate={DateTime.fromISO(min)}
      label="Earth Date"
      onChange={handleOnChange}
    />
  )
}
