import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SmartInterviews from './pages/SmartInterviews.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmartInterviews />
  </StrictMode>
)
