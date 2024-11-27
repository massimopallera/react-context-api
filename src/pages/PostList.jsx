import { useState,useEffect } from 'react'

import List from '../components/List'
import FormComponent from '../components/Form'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'


export default function PostList() {

  const { posts, resourcePath, uri } = useContext(GlobalContext)
  
  function handleOverlay() { 
    document.querySelector('.overlay').classList.toggle('active')
  }

  return (
    <>
        
      <div className='buttonContainer'>
        <button className='btn btn-light' popovertarget="offCanvas" onClick={handleOverlay}>Aggiungi Post</button>
      </div>

      <div className="overlay">
        {/* FORM */}
        <FormComponent
          // uri={resourcePath}
          handleOverlay={handleOverlay}
          // returnNewPosts={(newPosts) => setPosts(newPosts)}
        />
      </div>

      <div className="row row-cols-1 d-flex align-items-stretch g-5 my-3">
      {/* create list of posts */}
      {posts.map((post, index) =>
        <List
          post={post}
          index={index}
          key={index}
          uri={uri}
          resourcePath={resourcePath}
          returnNewPosts={(newPosts) => setPosts(newPosts)} />
      )}
      </div>
          
    </>
  )
}