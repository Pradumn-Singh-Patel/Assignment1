import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './dashboard.css'
import Card from '../../components/postCard/card'

const Dashboard = () => {
    const [postInfo, setpostInfo] = useState([])
    const [loading,setlLoading]=useState(true)
   
    const postUrl='https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
      const getPost= async()=>{
        const response=await axios.get(postUrl)
        setpostInfo(response.data)
        setlLoading(false)
      }
      getPost()
      
    }, [])
  if(loading){
    return(
      <h3>Loading...</h3>
    )
  }
  else{
  return (
    
    <div>
      <h3>Post Data</h3>
    <div className="postContainer">
    {postInfo.map((postData)=>
    <Card postInfo={postData}/>
    )}
    </div>
</div>
  )
    }
}

export default Dashboard