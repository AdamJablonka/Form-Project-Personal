import React from 'react'
// create.jsx needs to check if a user is auth'd before being able to create a form request to the databse.

const Create = () => {


  return (
    <div className="flex flex-wrap justify-center items-center w-full h-screen">
      <div className='bg-white text-black rounded-md w-64 h-64 max-w-3xl border border-custom-dark-brown flex justify-center drop-shadow-lg'>
        <form className='flex flex-col justify-center items-center font-medium'>
          <label for="stitle" className="m-2">Post Title</label>
          <input type="text" id="stitle" name="stitle" placeholder="Post Title" className='block p-1 border rounded-lg w-full border-custom-dark-brown focus:outline-none focus:ring-2'></input>
          
          <textarea id="body" className="block p-2.5 w-full text-sm rounded-lg border border-custom-dark-brown resize-none mt-2 focus:outline-none focus:ring-2" placeholder="Post body goes here..."></textarea>

          <input type="submit" className='text-off-white bg-custom-blue rounded-md m-3 w-2/3 cursor-pointer focus:outline-none ring-2 focus:ring-4 p-1' placeholder="Write your thoughts here..."></input>
        </form>
      </div>
    </div>
  )
}

export default Create