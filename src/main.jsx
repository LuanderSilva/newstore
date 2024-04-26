import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './globalStyles.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
