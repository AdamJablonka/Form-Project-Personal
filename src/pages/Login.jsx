import React from 'react'

const Login = () => {
  return (
    <div className=" flex flex-wrap justify-center items-center w-full h-screen">
            <form className="flex flex-col px-36 py-36 bg-white border h-2/3 rounded-lg ">
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button className="text-black">Log In</button>
            </form>
    </div>
  )
}

export default Login