import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './__styled__/globalStyle'
import { BrowserRouter } from 'react-router-dom'
import theme from './__styled__/theme'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
