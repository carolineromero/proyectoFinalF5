import LogIn from "../components/login/LogIn";
import React from "react";
import "../index.css"

function LogInPage(){
    return(
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mx-6">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-moradoFuerteF5 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-moradoFuerteF5 underline uppercase decoration-wavy">
                   Sign in
                </h1>
        <LogIn/>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    No tienes cuenta?{" "}
                    <a href="#"className="font-medium text-moradoFuerteF5 hover:underline">
                    Creala
                    </a>
                </p>
            </div>
        </div>
    

    )
}
export default LogInPage;