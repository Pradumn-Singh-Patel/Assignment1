import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from '../../components/commentCard/card'
import '../dashboard/dashboard.css'
import {Logic} from '../../components/srcollLogic'

const Comment = () => {
    const [commentInfo,setcommentInfo]=useState([])
    const [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(20)


    const commentUrl='https://jsonplaceholder.typicode.com/comments'
    useEffect(() => {
        const getComment= async()=>{
          try{
            const response=await axios.get(commentUrl)
            setcommentInfo(response.data)
            setLoading(false)
          }catch(error){
            console.log(error)
          }
          }
          getComment()
          
     
    }, [])
    Logic(visible,setVisible)

    if(loading){
      return(
        <h3>Loading...</h3>
      )
    }
    else{
  return (
    <div>
      <h3>Comment Data</h3>
    <div className="commentContainer">
    {commentInfo.slice(0,visible).map((commentData)=>
    <Card commentInfo={commentData} key={commentData.id}/>
    )}
    </div>
    </div>
  )
    }
}

export default Comment