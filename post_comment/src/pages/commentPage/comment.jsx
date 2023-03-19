import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from '../../components/commentCard/card'
import '../dashboard/dashboard.css'

const Comment = () => {
    const [commentInfo,setcommentInfo]=useState([])
    const [loading, setLoading] = useState(true)

    const commentUrl='https://jsonplaceholder.typicode.com/comments'
    useEffect(() => {
        const getComment= async()=>{
            const response=await axios.get(commentUrl)
            setcommentInfo(response.data)
            setLoading(false)
          }
          getComment()
          
     
    }, [])

    if(loading){
      return(
        <h3>Loading...</h3>
      )
    }
    else{
  return (
    <div className="commentContainer">
    {commentInfo.map((commentData)=>
    <Card commentInfo={commentData}/>
    )}
    </div>
  )
    }
}

export default Comment