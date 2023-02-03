import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError ] = useState('')
  const {user, logIn} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await logIn(email, password);
        console.log(user)
        navigate('/Assignment')
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
  }
  return (
    <div className=" flex flex-wrap justify-center items-center w-full h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col px-36 py-36 bg-white border h-2/3 rounded-lg ">
                <input type="email" placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}></input>
                <button className="text-black">Login</button>
                {error && <span>{error}</span>}
            </form>
    </div>
  )
}

export default Login