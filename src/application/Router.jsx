import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from '../pages/LogIn'
import Home from '../pages/Home'
import Workers from '../pages/Workers'
import Profile from '../pages/Profile'
import NewEmploy from '../pages/NewEmploy'

function Router() {
  return (
    <BrowserRouter>
        <Routes> 
            <Route path="/" element={<LogIn/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new-employ" element={<NewEmploy />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router