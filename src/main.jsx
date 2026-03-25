import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext'

if (typeof document !== 'undefined') {
  document.documentElement.removeAttribute('contenteditable')
  document.body.removeAttribute('contenteditable')
  document.designMode = 'off'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>,
)
