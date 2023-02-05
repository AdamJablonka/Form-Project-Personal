import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { AuthContextProvider } from './context/AuthContext'
import Assignment from './pages/Assignment'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Create from './pages/Create'

function App() {
  
  return(
    <div>
      <AuthContextProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Assignment' element={<Assignment/>} />
          <Route path='/Create' element={<Create/>} />
        </Routes>
      </AuthContextProvider>
  </div>
  )
}

export default App
