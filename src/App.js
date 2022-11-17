import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './Components/Form/Form'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import News from './Components/News/News'

const App = () => {
  return (
    <div>
      <Navbar/> 
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/Form' element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App