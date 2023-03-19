import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Home, Lost } from './pages'
import { ExcusesProvider } from './contexts/ExcusesContext'

function App() {
  return (
    <ExcusesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lost" element={<Lost />} />
      </Routes>
    </ExcusesProvider>
  )
}

export default App
