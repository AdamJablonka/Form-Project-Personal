// create.jsx needs to check if a user is auth'd before being able to create a form request to the databse.
import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (title === '' || body === '') {
      alert("Title or Body can NOT be empty.")
      return
    }
    const postsRef = collection(db, "posts"); 
    addDoc(postsRef, {title, body})
      .then(res => {
        console.log("res: ", res.id)
      })
      .catch(error => {
          console.log(error.message)
      })
    alert(title)
  }

  return (
    <div className="flex flex-wrap justify-center items-center w-full h-screen">
      <div className='bg-white text-black rounded-md w-64 h-64 max-w-3xl border border-custom-dark-brown flex justify-center drop-shadow-lg'>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
          <label htmlFor="title" className="m-2 font-medium">Post Title</label>
          <input id="title" 
          value={title} type="text" 
          placeholder="Post Title" 
          onChange={ e => setTitle(e.target.value)}
          className='block p-1 border rounded-lg w-full border-custom-dark-brown focus:outline-none focus:ring-2'>  
          </input>

          <label htmlFor="body" className="m-2 font-medium" onChange={ e => setBody(e.target.value)}> Post Body </label>
          <textarea 
          id="body" 
          className="block p-2.5 w-full text-sm rounded-lg border border-custom-dark-brown resize-none focus:outline-none focus:ring-2" 
          placeholder="Post body goes here..."
          onChange={ e => setBody(e.target.value)}>
          </textarea>

          <input type="submit" className="text-off-white bg-custom-blue rounded-md m-3 w-2/3 cursor-pointer focus:outline-none ring-2 focus:ring-4 p-1" placeholder="Write your thoughts here..."></input>
        </form>
      </div>
    </div>
  )
}

export default Create