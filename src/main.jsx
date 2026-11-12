import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import ChildSafety from './pages/ChildSafety.jsx'
import { HaneulbadaTerms, HaneulbadaOdds, HaneulbadaDelete } from './pages/Haneulbada.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/child-safety" element={<ChildSafety />} />
        <Route path="/haneulbada/terms" element={<HaneulbadaTerms />} />
        <Route path="/haneulbada/odds" element={<HaneulbadaOdds />} />
        <Route path="/haneulbada/delete" element={<HaneulbadaDelete />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)