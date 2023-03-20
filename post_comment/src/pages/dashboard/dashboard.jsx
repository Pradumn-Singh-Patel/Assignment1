import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import './dashboard.css'
import Card from '../../components/postCard/card'
import {Logic} from '../../components/srcollLogic'

const Dashboard = () => {
    const [postInfo, setpostInfo] = useState([])
    const [loading,setlLoading]=useState(true)
    const [visible, setVisible] = useState(20)
    const postUrl='https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
      const getPost= async()=>{
        const response=await axios.get(postUrl)
        setpostInfo(response.data)
        setlLoading(false)
      }
      getPost()
      
    }, [])
    Logic(visible,setVisible)

  if(loading){
    return(
      <h3>Loading...</h3>
    )
  }
  else{
  return (
    
    <div className='container'>
      <h3>Post Data</h3>
    <div className="postContainer">
    {postInfo.slice(0,visible).map((postData)=>
    <Card postInfo={postData}/>
    )}
    </div>
</div>
  )
    }
}

export default Dashboard