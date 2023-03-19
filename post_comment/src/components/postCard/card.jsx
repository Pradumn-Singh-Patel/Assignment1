import React from 'react'
import "./card.css"

const Card = ({postInfo,commentInfo}) => {
  
  return (
    <div className='postCard'>
        <div className='title'><h5>{postInfo.title}</h5></div>
        <div className='body'>{postInfo.body}</div>
        {/* <div className="name">{commentInfo.}</div> */}
    </div>
  )
}

export default Card