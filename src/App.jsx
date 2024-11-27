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

  const [tagsList, setTagsList] = useState([])
  const [categoriesList, setCategoriesList] = useState([])

  //ajax call function for tags and categories
  function fetchSet(uri, set, slug) {
    const url = `${uri}${slug}` //create url

    fetch(url)
      .then(resp => resp.json())
      .then(data => set(data[slug]))
      .catch(err => console.error(err))
  }
 
  
  // AJAX call
  function fetchData(url = "http://localhost:3000/posts") {
    fetch(url)
      .then(response => response.json())
      .then(data => setPosts(data.data))
      .catch(err => console.error(err))
  }


  //get tags and categories
  useEffect(() => fetchSet(resourcePath, setTagsList, 'tags'),[])
  useEffect(() => fetchSet(resourcePath, setCategoriesList, 'categories'), [])

  //get posts
  useEffect(() => fetchData(uri),[])

  return (

    <GlobalContext.Provider /*  context provider */
        value={{ posts,setPosts, resourcePath, uri, tagsList, categoriesList }}>
      <BrowserRouter > 
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />}/> {/* Home */}
            <Route path='/posts' element={<PostList />}/> {/* Posts list */}
            <Route path='/chi-siamo' element={<ChiSiamo />}/> {/* Chi siamo */}
            <Route path='posts/:slug' element={<SinglePost />}/> {/* Single post by slug */}
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App