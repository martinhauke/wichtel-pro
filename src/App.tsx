import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CreateList from './CreateList'
import Show from './Show'
import { ThemeProvider } from 'styled-components'
import theme from './__styled__/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route path="/" element={<Navigate replace to="create" />} />
          <Route path="create" element={<CreateList />} />
          <Route path="show/:code" element={<Show />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
