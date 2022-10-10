import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import LogInPage from '../pages/LogInPage'



function Router() {
  return (
    <BrowserRouter>
        <Routes> 
            <Route path="/login" element={<LogInPage/>} />
            <Route path="/" element={<Home />} />
           

        </Routes>
    </BrowserRouter>
  )
}

export default Router