/* import React, { useState} from 'react'
import axios from 'axios'
 */
function Hero() {

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
    <div className="flex justify-center flex-col md relative ">
    <h4 className="text-1xl font-bold self-center text-moradoFuerteF5">
      Hola..
    </h4>  
    <h2 className="text-3xl font-bold self-center text-moradoFuerteF5 ">
   {/* {user.name} */} JUANI
    </h2> 
    </div>
  </>
  )
}

export default Hero