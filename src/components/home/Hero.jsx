import React, { useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

function Hero() {
  /*const user = JSON.parse(localStorage.getItem("loggedUser"))
  console.log(user)*/
  const [user, setUser] = useState([]);
  // const methodGet = () => {
  //   axios.get("https://fichajefactoria-default-rtdb.europe-west1.firebasedatabase.app/empleados.json")
  //     .then((response) => {
       
  //       setUser(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // methodGet();

  return (
    <>
      <div className="flex justify-center flex-col md relative ">
        <h4 className="text-1xl font-bold self-center text-moradoFuerteF5">
          Hola..
        </h4>
        <h2 className="text-3xl font-bold self-center text-moradoFuerteF5 ">{data.name}</h2>
      </div>


      
    </>
  );
}

export default Hero;
