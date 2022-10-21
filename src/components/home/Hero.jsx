/* import React, { useState} from 'react'
import axios from 'axios'
 */

import rayarosa from '../../assets/img/home/rayarosa.png'

function Hero() {
  const user = JSON.parse(localStorage.getItem("loggedUser"))
  console.log(user)

  /*  const [ user, setUser ] = useState()
 
   const methodGet=async()=>{
     await axios.get("http://localhost/proyectofinalBack/trabajadores.php")
     .then(response=>{
       setUser(response.data);
     }).catch(error=>{
       console.log(error);
     })
   }
 
   methodGet() */

  return (
    <>
      <div className="flex justify-center flex-col md ">
    <h4 className="text-1xl font-bold self-center text-moradoFuerteF5">
    👋 Hola..
    </h4>  
    <div className='flex justify-center flex-col '>
          <img src={rayarosa} alt="raya" rosa className='absolute self-center  h-2 opacity-1  w-28 z-0 opacity-25' />
        <h2 className="text-3xl font-bold mb-16 self-center text-moradoFuerteF5 ">
          {user.name}
        </h2>
        </div>
    </div>
       
      

     
      
    </>
  )
}

export default Hero