import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './dashboard.css'
import Card from './components/card/card'
const Dashboard = () => {
  console.log("hiii")
    const [Info, setInfo] = useState([])
    const postUrl='https://jsonplaceholder.typicode.com/posts'
    const commentUrl='https://jsonplaceholder.typicode.com/comments'
    useEffect(() => {
    
      const getPost= async()=>{
        const response=await axios.get(postUrl)
        setInfo(response.data)
      }
      getPost()
    }, [])
    console.log(Info)
    
  return (
    <div>
    <nav>
    <div className='post' >
        <h3>Post</h3>
        </div>
    <div>
        <h3 className='comment'>Comment</h3>
    </div>
    
    </nav>
    {Info.map((postData)=>
    <Card info={Info}/>
    )}
</div>
  )
}

export default Dashboard