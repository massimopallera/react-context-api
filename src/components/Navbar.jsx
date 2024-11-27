import { NavLink } from "react-router-dom"
export default function Navbar() {
   return(
    <nav>
       <NavLink className='mx-4' to='/'>Home</NavLink>
       <NavLink className='mx-4' to='/posts'>Posts</NavLink>
       <NavLink className='mx-4' to='/chi-siamo'>Chi Siamo</NavLink>
    </nav>
  )
}