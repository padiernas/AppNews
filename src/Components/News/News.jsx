import React, { useEffect, useState } from 'react'
import axios from "axios"

const News = () => {
    const [newsInfo, setNwesInfo] = useState([])
    const fetchNews=async()=>{
        const response=await axios.get ("http://localhost:8000/news")
        setNwesInfo(response.data)
    }


     useEffect(() => {
        fetchNews()
       }, [])

  return (
    <div>
        {
            newsInfo.map(newInfo=>(
                <div key={newInfo.id}>
                    <h1>
                        {newInfo.title}
                    </h1>
                    <img src={newInfo.imageUrl}/>
                </div>
            ))
        }
    </div>
  )
}

export default News