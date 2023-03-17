import React from 'react'
import "./card.css"

const card = ({info}) => {
  
  return (
    <div className='card'>
        <div className='title'>{info.title}</div>
        <div className='body'>{info.body}</div>
    </div>
  )
}

export default card