// create.jsx needs to check if a user is auth'd before being able to create a form request to the databse.
// also send the data for the user's info with each submission: Post by {user.name}
import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function clear(){
    setTitle('')
    setBody('')
  }

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
        clear()
      })
      .catch(error => {
          console.log(error.message)
      })
    alert('Thank you! Your survey has been submitted.')
  }

  return (
    <div className="flex flex-wrap justify-center items-center w-full h-screen">
      <div className='bg-white text-black rounded-md w-96 h-1/2 border border-custom-dark-brown flex justify-center drop-shadow-lg'>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
          <h1 className="font-bold text-lg mt-2">Create a Survey</h1>
          <label htmlFor="title" className="m-2 font-medium">Post Title</label>
          <input id="title" 
          value={title} type="text" 
          placeholder="Post Title" 
          onChange={ e => setTitle(e.target.value)}
          className='block p-1 border rounded-lg w-full border-custom-dark-brown focus:outline-none focus:ring-2'>  
          </input>

          <label htmlFor="body" className="m-2 font-medium"> Post Body </label>
          <textarea 
          id="body" 
          rows="9"
          cols="45"
          className="block p-2.5 text-sm rounded-lg border border-custom-dark-brown resize-none focus:outline-none focus:ring-2" 
          placeholder="Submission goes here..."
          onChange={ e => setBody(e.target.value)}>
          </textarea>
          <button type="submit"
          className="transition-all text-off-white opacity-90 bg-custom-blue rounded-md m-3 w-2/3 cursor-pointer focus:outline-none focus:ring-2 hover:opacity-100 p-1">
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default Create