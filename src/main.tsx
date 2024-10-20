import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './layout/App.tsx'
import './style/index.css'
import { BoardContextProvider } from './store/BoardContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BoardContextProvider>
      <App />
    </BoardContextProvider>
  </StrictMode>,
)
