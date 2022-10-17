import LogIn from "../components/login/LogIn";
import React from "react";
import "../index.css"
import logoSomosF5 from '../assets/img/header/somosF5-logoMorado.svg'
import Vector from '../assets/img/background/Vector.png'

function LogInPage(){
    return(
        <>
            <div className="relative w-full max-w-lg z-1"></div>
            <div className='absolute top-0 -right-0 inset-0 w-60 h-60 bg-purple-300 filter blur-3xl rounded-full '></div>
            <img className="absolute content-center -right-10 top-2/4 z-10  inset-0w-60 h-60 fiter blur-3xl opacity-75" src={Vector} alt=""/>
       
             <div className='absolute bottom-0 -left-4 w-60 h-60 bg-purple-300 filter blur-3xl rounded-full '></div>
             
             
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden w-auto z-10  bg-transparent">
        
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-moradoFuerteF5 lg:max-w-xl item-center">
            <img src={logoSomosF5} alt="logo F5" className='w-18' />
        <LogIn/>
        {/* <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    No tienes cuenta?{" "}
                    <a href="#"className="font-medium text-moradoFuerteF5 hover:underline">
                    Creala
                    </a>
                </p> */}
            </div>
        </div>
    
        </>
    )
}
export default LogInPage;