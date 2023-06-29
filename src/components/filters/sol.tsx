import { DEFAULT_FILTERS } from '@/mars/constants'
import { Slider, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface Props {
  max: number
}

export const SolFilter: React.FC<Props> = ({ max }) => {
  const { query, push } = useRouter()
  const [sol, setSol] = useState(parseInt((query.sol ?? '1') as string, 10))

  const marks = [
    { value: 1, label: '1' },
    ...(Array.from(
      { length: 5 },
      (_, idx) => {
        if (idx === 4) return max
        return Math.floor((max / 5) * (idx + 1))
      }).map((value) => ({ value, label: value.toString() })))
  ]

  useEffect(() => {
    delete query.earthDate
    void push({
      pathname: '/',
      query: {
        ...query,
        sol,
        page: 1
      }
    })
  }, [sol])

  const handleOnChange = (event: React.SyntheticEvent | Event, sol: number | number[]): void => {
    setSol(sol as number)
  }

  return (
    <>
      <Typography>Sol Date</Typography>
      <Slider
        step={1}
        value={sol}
        onChangeCommitted={handleOnChange}
        min={1}
        max={max}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </>
  )
}
