import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const Assignment = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
  }, [])

  function getPosts(){
    const postRef = collection(db, 'posts')
    getDocs(postRef).then(res => {
      const postArray = res.docs.map(doc => ({
        data: doc.data(),
        id: doc.id,
      }))
      setPosts(postArray)
      console.log("id:", posts)
    })
    .catch(error => console.log(error.message))
  }

  return (
    <div className="z-1 pt-16 flex justify-center items-center">
      <div className="flex flex-col bg-white text-black rounded-md w-1/2 h-fit border border-custom-dark-brown drop-shadow-lg">
        <h1 className='flex justify-center'>Data will appear here:</h1>
        <button id="refresh_button" className="w-36 bg-custom-blue text-white p-1.5 m-1 rounded-md" onClick={() => getPosts()}>Refresh Posts</button>
        <ul>
          {posts.map(post => (
            <div className='m-2 border border-custom-dark-brown rounded-md text-black flex-row'>
              <p key={post.id} className='font-medium flex justify-center'>{post.data.title}</p>
              <p key={post.id} className='font-medium flex justify-center'>{post.data.body}</p>
            </div>
          ))}
        </ul>   
      </div>
    </div>
  )
}

export default Assignment