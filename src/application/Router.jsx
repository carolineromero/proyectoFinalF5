import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Profle from '../pages/Profile'



function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Profile" element={<Profile />} />

        </Routes>
    </BrowserRouter>
  )
}

export default Router