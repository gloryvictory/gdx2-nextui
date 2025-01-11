import {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'
import { ICount } from '@/types/count'

export function useCounts(url : string) {
  const [stat_count, setCount] = useState<ICount>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  
  async function fetchCounts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<ICount>(url)
      // const counts:string = response.data['count']
      setCount(response.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchCounts()
  }, [])

  return { stat_count, error, loading }
}
