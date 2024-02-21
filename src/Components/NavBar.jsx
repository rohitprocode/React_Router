import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <ul style={{display:'flex', gap: '25px'}}>
        <Link to="/Home"> <li>Home</li> </Link> 
        <Link to="/Contact"> <li>Contact</li> </Link> 
        <Link to="/About"> <li>  About</li> </Link> 
      </ul>
    </div>
  )
}

export default NavBar
