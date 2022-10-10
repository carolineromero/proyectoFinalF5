import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Workers from '../pages/Workers'



function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workers" element={<Workers />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router