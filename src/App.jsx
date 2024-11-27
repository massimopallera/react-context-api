import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import PostList from './pages/PostList'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DefaultLayout from './components/DefaultLayout'
import SinglePost from './pages/SinglePost'



const protocol = 'http:' 
const domain = `localhost:3000` //insert domain
const resourcePath = `${protocol}//${domain}/` //insert resource path
const uri = `${protocol}//${domain}/posts`

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/posts' element={<PostList uri={uri} resourcePath={resourcePath} />}/>
          <Route path='/chi-siamo' element={<ChiSiamo />}/>
          <Route path='posts/:slug' element={<SinglePost uri={uri} resourcePath={resourcePath}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App