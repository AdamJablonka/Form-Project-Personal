import React from 'react'

const Create = () => {

  
  return (
    <div className="flex flex-wrap justify-center items-center w-full h-screen">
      <div className='bg-white text-black rounded-md w-64 h-64 max-w-3xl border border-black flex justify-center drop-shadow-lg'>
        <form className='flex flex-col justify-center items-center font-medium'>
          <label for="stitle" className="m-2">Post Title</label>
          <input type="text" id="stitle" name="stitle" placeholder="Post Title" className='block p-1 border rounded-lg w-full border-custom-dark-brown focus:outline-none focus:ring-2'></input>
          
          <textarea id="body" className="block p-2.5 w-full text-sm rounded-lg border border-custom-dark-brown resize-none mt-2 focus:outline-none focus:ring-2" placeholder="Survey body goes here..."></textarea>

          <input type="submit" className='bg-custom-orange rounded-md m-3 w-2/3 cursor-pointer border border-custom-dark-brown focus:outline-none focus:ring-2' placeholder="Write your thoughts here..."></input>
        </form>
      </div>
    </div>
  )
}

export default Create