
import { Routes, Route } from 'react-router-dom'
import './App.css'
// @ts-ignore: no declaration file for Login
import Login from './components/Login'
// @ts-ignore: no declaration file for Home
import Home from './components/Home';
// @ts-ignore: no declaration file for CreateAccount
import CreateAccount from './components/CreateAccount';


function App() {
  

  return (
    
      <Routes>
        <Route index element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />}></Route>
      </Routes>
    
  )
}

export default App
