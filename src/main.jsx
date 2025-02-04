import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
