import React, { ReactNode, useContext, useState } from 'react'

import type { Excuse } from '../api/excuses'
import { getExcuses } from '../api/excuses'

type ExcusesContextType = {
  excuses: Excuse[]
  loading: boolean
  fetchExcuses: () => Promise<void>
}

type ExcusesProviderProps = {
  children: ReactNode
}

const ExcusesContext = React.createContext<ExcusesContextType>({
  excuses: [],
  loading: false,
  fetchExcuses: () => Promise.resolve(),
})

const useExcuses = () => useContext(ExcusesContext)

const ExcusesProvider = ({ children }: ExcusesProviderProps) => {
  const [excuses, setExcuses] = useState<Excuse[]>([])
  const [loading, setLoading] = useState(false)

  const fetchExcuses = async () => {
    setLoading(true)

    const excuses = await getExcuses()

    setExcuses(excuses)
    setLoading(false)
  }

  return (
    <ExcusesContext.Provider value={{ excuses, loading, fetchExcuses }}>
      {children}
    </ExcusesContext.Provider>
  )
}

export { useExcuses, ExcusesProvider }
