import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tiendanube from './pages/Tiendanube.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tiendanube />
  </StrictMode>
)
