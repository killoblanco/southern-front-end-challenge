import { Slider, Typography } from '@mui/material'
import { useFilterSelector } from '@/mars/slices/filters/selector'
import { useFilterActions } from '@/mars/slices/filters/actions'
import { useEffect, useState } from 'react'
import { useGetManifestByRoverQuery } from '@/mars/slices/api'

export const SolFilter: React.FC = () => {
  const { rover, sol } = useFilterSelector()
  const { setSol } = useFilterActions()
  const { data, isLoading } = useGetManifestByRoverQuery(rover)
  const [max, setMax] = useState<number | undefined>(undefined)
  const [marks, setMarks] = useState<number[]>([1])

  useEffect(() => {
    if (data != null) {
      setMax(data.maxSol)
    }
  }, [data])

  useEffect(() => {
    if (max != null) {
      setMarks([1, ...(Array.from(
        { length: 5 },
        (_, idx) => Math.floor((max / 5) * (idx + 1))
      ))])
    }
  }, [max])

  const handleOnChange = (event: React.SyntheticEvent | Event, sol: number | number[]): void => {
    setSol(sol as number)
  }

  return (
    <>
      <Typography>Sol Date</Typography>
      <Slider
        disabled={isLoading}
        step={1}
        min={1}
        max={max}
        marks={marks.map((mark) => ({ value: mark, label: mark }))}
        value={sol ?? 1}
        onChangeCommitted={handleOnChange}
        valueLabelDisplay="auto"
      />
    </>
  )
}
