import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CreateList from './CreateList'
import Show from './Show'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="create" />} />
        <Route path="create" element={<CreateList />} />
        <Route path="show/:code" element={<Show />} />
      </Routes>
    </div>
  )
}

export default App
