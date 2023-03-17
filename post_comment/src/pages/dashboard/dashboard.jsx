import React from 'react'
import "./dashboard.css"
function dashboard() {
  return (
    <div>
        <nav>
        <div className='post' >
            <h4>Post</h4>
            </div>
        <div>
            <h4 className='comment'>Comment</h4>
        </div>
        </nav>
    </div>
  )
}

export default dashboard