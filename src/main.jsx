import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './theme.css'
import App from './App.jsx'
import siteIcon from './assets/meenakshi consultancy.jpeg'

document.title = 'Meekshi Consultancy'

const existingIcon = document.querySelector('link[rel="icon"]')
if (existingIcon) {
  existingIcon.href = siteIcon
  existingIcon.type = 'image/jpeg'
} else {
  const link = document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/jpeg'
  link.href = siteIcon
  document.head.appendChild(link)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
