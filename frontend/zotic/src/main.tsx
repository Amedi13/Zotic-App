import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// @ts-ignore: no declaration file for BrowserRouter
import { BrowserRouter, Routes,Route } from 'react-router-dom'



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>,
)
