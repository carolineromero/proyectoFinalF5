import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "../pages/Home";
import Workers from "../pages/Workers";
import LogInPage from "../pages/LogInPage";
import PageNewEmploy from "../pages/PageNewEmploy";
import Profile from "../pages/Profile";

function RouterComp() {
  return (
    // <Router>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new-employ" element={<PageNewEmploy />} />
        </Routes>
      </BrowserRouter>
    // </Router>
  );
}

export default RouterComp;
