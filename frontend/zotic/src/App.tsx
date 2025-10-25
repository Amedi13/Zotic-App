
import { Routes, Route } from 'react-router-dom'
import './App.css'
// @ts-ignore: no declaration file for SearchBar.jsx
import SearchBar from './components/SearchBar'
// @ts-ignore: no declaration file for home.jsx
import Login from './components/Login'
// @ts-ignore: no declaration file for home.jsx
import Home from './components/Home';


function App() {
  

  return (
    
      <Routes>
        <Route index element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    
  )
}

export default App
