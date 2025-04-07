import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fingerprint from './pages/Fingerprint.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Fingerprint />
  </StrictMode>
)
