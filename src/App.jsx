import React from 'react'
import { Route, Routes } from 'react-router'
import HomeLayouts from './shared/layouts/homeLayout/HomeLayouts'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayouts />} />
    </Routes>
  )
}

export default App