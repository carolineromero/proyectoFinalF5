import React from 'react'


 
function Button() {
  return (
    <div className="flex justify-center ">

<button onClick={toggle} /* onClick={() => showTimeSalida()} */ className={'toggle--button ' + (state ? 'toggle--close':'')} >
{state ? 'Registrar salida' : 'Registrar entrada'}
</button>

<button onClick={() => showTimeEntrada() + setShow(!show)} className="text-1xl font-bold flex self-center bg-cianF5 w-max p-5 m-4 rounded-2xl text-white">
 {show ? 'Registar entrada' : 'Registrar Salida'}  
 </button>
 <button onClick={() => showTimeSalida() + setShow(show)} className="text-1xl font-bold flex self-center bg-naranjaF5 w-max p-5 m-4 rounded-2xl text-white"> 
 </button>

  { /*<button 
   {show ? ' Registrar entrada' : 'Registrar salida'}
   </button>

   <button onClick={() => showTimeSalida() +setShow(show)} className="text-1xl font-bold flex self-center bg-naranjaF5 w-max p-5 m-4 rounded-2xl text-white">
  
  </button>*/} 
 </div>

  )
}

export default Button