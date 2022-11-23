import { Home } from '@material-ui/icons'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './About/About'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
    </Routes>
  )
}

export default Allroutes;