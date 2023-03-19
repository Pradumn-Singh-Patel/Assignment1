import React from 'react'
import '../postCard/card.css'

const Card = ({commentInfo}) => {
  return (
    <div className='commentCard'>
    <div className='name'><h5>{commentInfo.name}</h5></div>
    <div className='email'>{commentInfo.email}</div>
    </div>
    
  )
}

export default Card