import React from 'react'
import logo from '../../assets/img/header/somosF5-logoMorado.svg'

/*
function LogIn() {
  return (
       
    <div className='flex-col  '>
          <div  className='flex justify-center items-center mt-24 sm:mt-10 '>
            <img src={logo} alt="logo" className='w-40  sm:w-80' ></img>
          </div>
                  
    
        <div className=" relative rounded-3xl flex items-center mt-10 bg-white z-40 justify-center backdrop-opacity-60 p-12 mx-10 sm:mx-80  ">
    
          <div className=" mx-auto w-full max-w-[400px]">
            <form  action="http://localhost/proyectofinalBack/passwords.php" method="POST"  >
              <div className="mb-5">
                <label for="email" className="form-control mb-3 block text-base font-medium text-[#07074D]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
              
                    /* onChange={(e) => setName(e.target.value)} 
                 id=""
                  placeholder="" 
                  className="w-full rounded-md border trak border-[#e0e0e0] bg-grislyF5 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
    
              <div className="mb-5">
                <label for="password" className="mb-3 block text-base font-medium text-[#07074D]">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  /* onChange={(e) => setCont(e.target.value)} 
                  id=""
                  placeholder=""  
                  className="w-full rounded-md border  border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
    
              <div>
                <button onClick={console.log('click')} className="w-full py-3 px-8 tracking-wide  text-white transition-colors duration-200 transform bg-moradoFuerteF5 rounded-md jover:bg-purple-600 focus:outline-none focus:bg-lilaF5">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
    
    
        </div>
    
    
      
  )
}

export default LogIn*/

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext"
import { Alert } from "../../components/alert/Alert";

export function LogIn() {
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
  

      <div className='flex-col'>
      <div  className='flex justify-center items-center mt-24 sm:mt-10 '>
        <img src={logo} alt="logo" className='w-40  sm:w-80' ></img>
      </div>

      <div className=" relative rounded-3xl flex items-center mt-10 bg-white z-40 justify-center backdrop-opacity-60 p-12 mx-10 sm:mx-80  ">


<div className=" mx-auto w-full max-w-[400px]">
      <form
        onSubmit={handleSubmit}
        /* className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4" */
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="form-control mb-3 block text-base font-medium text-[#07074D]"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="E-mail"
            className="w-full rounded-md border trak border-[#e0e0e0] bg-grislyF5 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            for="password"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full rounded-md border  border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            placeholder="*************"
          />
        </div>

        <button className="w-full py-3 px-8 tracking-wide  text-white transition-colors duration-200 transform bg-moradoFuerteF5 rounded-md jover:bg-purple-600 focus:outline-none focus:bg-lilaF5"> 
          Login
        </button>
      </form>
    </div>
    </div>
    </div>
  
  );
 
}

export default LogIn