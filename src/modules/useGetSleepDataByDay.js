// Custom hook, hace un fetch a la api para obtener los datos de sueño del usuario
import { useState, useEffect } from 'react'
import { API } from '../../data'

export function useGetUserSleepDataByDay (day) {
  console.log(day)
  const options = {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ day })
  }

  const [sleepData, setSleepData] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  useEffect(() => {
    fetch(API.SLEEP.DAY, options)
      .then(response => {
        console.log(response)
        return response
      })
      .then(jsonResult => jsonResult.json())
      .then(data => {
        setSleepData(data)
        console.log(data)
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return {
    sleepData,
    isLoading,
    error
  }
}
