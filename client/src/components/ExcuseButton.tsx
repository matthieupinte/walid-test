import React from 'react'

import { useExcuses } from '../contexts/ExcusesContext'

type ExcuseButtonProps = {
  onClick: (excuse: string) => void
  disabled: boolean
}

const ExcuseButton = ({ onClick, disabled }: ExcuseButtonProps) => {
  const { excuses } = useExcuses()

  const handleClick = () => {
    const excuse = excuses[Math.floor(Math.random() * excuses.length)]

    console.log(excuse)

    onClick(excuse.message)
  }

  return (
    <button onClick={handleClick} disabled={disabled}>
      Get Excuse
    </button>
  )
}

export { ExcuseButton }
