import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext'
import { AuthProviderWithRefresh } from './contexts/AuthContextWithRefresh'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProviderWithRefresh>
        <App />
      </AuthProviderWithRefresh>
    </StrictMode>
  </BrowserRouter>,
)
