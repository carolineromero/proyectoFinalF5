import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Workers from '../pages/Workers'
import LogIn from '../pages/LogIn'
import NewEmploy from '../pages/NewEmploy'
import Profile from '../pages/Profile'
import {AuthProvider} from '../context/authContext'



function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes> 
            <Route path="/" element={<LogIn/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new-employ" element={<NewEmploy />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Router