import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {user, signUp } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try{
          await signUp(email,password);
          navigate('/')
      } catch (error) {
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
                <button className="text-black">Sign up</button>
                {error && <span>{error}</span>}
            </form>
    </div>
  )
}

export default Signup