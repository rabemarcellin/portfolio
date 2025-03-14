import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './providers/AppProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
)
