import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import LogInPage from '../pages/LogInPage'
import PageNewEmploy from '../pages/PageNewEmploy'
import Profile from '../pages/Profile'



function Router() {
  return (
    <BrowserRouter>
        <Routes> 
            <Route path="/login" element={<LogInPage/>} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new-employ" element={<PageNewEmploy />} />

        </Routes>
    </BrowserRouter>
  )
}

export default Router