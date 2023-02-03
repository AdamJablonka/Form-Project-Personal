import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { AuthContextProvider } from './context/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  
  return(
    <div className="w-screen h-screen">
      {/* <AuthContextProvider> */}
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
      {/* </AuthContextProvider> */}
  </div>
  )
}

export default App
