import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Lost() {
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/')
    }, 5000)

    return () => clearTimeout(timeout)
  })

  return (
    <div>
      <iframe
        title="giphy-embed"
        src="https://giphy.com/embed/gKsJUddjnpPG0"
        width="480"
        height="260"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/gKsJUddjnpPG0">via GIPHY</a>
      </p>
    </div>
  )
}

export default Lost
