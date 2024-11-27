import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import GlobalContext from './context/GlobalContext'

import PostList from './pages/PostList'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import DefaultLayout from './components/DefaultLayout'
import SinglePost from './pages/SinglePost'



const protocol = 'http:' 
const domain = `localhost:3000` //insert domain
const resourcePath = `${protocol}//${domain}/` //insert resource path
const uri = `${protocol}//${domain}/posts`

function App() {

  const [posts, setPosts] = useState([])
  

  // AJAX call
  function fetchData(url = "http://localhost:3000/posts") {
    fetch(url)
      .then(response => response.json())
      .then(data => setPosts(data.data))
      .catch(err => console.error(err))
  }



  useEffect(() => fetchData(uri),[])

  return (
    <GlobalContext.Provider value={{posts, resourcePath, uri}}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/posts' element={<PostList />}/>
            <Route path='/chi-siamo' element={<ChiSiamo />}/>
            <Route path='posts/:slug' element={<SinglePost />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App