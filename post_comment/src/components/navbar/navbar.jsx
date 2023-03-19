import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  return (
        <nav>
    <div className='post' >
        <Link to="/" style={{textDecoration:"none"}}><h3>Post</h3></Link>
        </div>
    <div className='comment'>
        <Link to="/comment" style={{textDecoration:"none"}}><h3>Comment</h3></Link>
    </div>
    </nav>
  )
}

export default Navbar