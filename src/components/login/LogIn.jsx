import React from "react";
import "../../index.css";
import { useState} from "react";
import { Navigate } from "react-router-dom";

const persons = [
    {
      email: "alexandra@gmail.com",
      password: "alexandra@gmail.com",
      rol: "admin",
    },
    {
      email: "carlos@gmail.com",
      password: "carlos@gmail.com",
      rol: "admin",
    },
    {
      email: "dina@gmail.com",
      password: "dina@gmail.com",
      rol: "employer",
    },
    {
      email: "carol@gmail.com",
      password: "carol@gmail.com",
      rol: "employer",
    },
  ];
  function LogIn() {
    const [inputUser, setInputUser] = useState("");
    console.log(inputUser);
    const [inputPassword, setInputPassword] = useState("");
    console.log(inputPassword);
    const [userMatch, setUserMatch] = useState("");
    const [success, setSuccess] = useState(false);
  
    const goToDashboard = () => {
      persons.map((person) => {
          if (inputUser === person.email && inputPassword === person.password) {
            setSuccess(true);
           
          } else {
            console.log("email false");
          //   alert("El usuario o contraseña ");
          }
        });
    }
   
  
    return (
      <div>
          <div>
              {success ? <Navigate replace to="/home"/> : "" }
          </div>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              value={inputUser}
              onChange={(e) => setInputUser(e.target.value)}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              value={inputPassword}
              onChange={(i) => setInputPassword(i.target.value)}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              onClick={() => goToDashboard()}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
  export default LogIn;
  
