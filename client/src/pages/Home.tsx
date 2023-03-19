import React, { useEffect, useState } from 'react'

import { ExcuseButton } from '../components'
import { useExcuses } from '../contexts/ExcusesContext'

function Home() {
  const { fetchExcuses, loading } = useExcuses()
  const [excuse, setExcuse] = useState('')

  useEffect(() => {
    ;(async () => await fetchExcuses())()
  }, [])

  return (
    <div>
      <p>Excuse de dev:</p>
      <p>{excuse}</p>
      <ExcuseButton
        onClick={(e) => {
          console.log(e)
          setExcuse(e)
        }}
        disabled={loading}
      />
    </div>
  )
}

export default Home
