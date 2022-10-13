import React from 'react'
import IconEdit from '../../assets/img/header/editIcon.png'

function BtnRegistroEntrada() {
  return (
    <>
   
    <div className="flex justify-center relative">
        <h4 className="text-1xl font-bold flex self-center bg-cianF5 w-max p-5 m-4 rounded-2xl text-white">
          Registrar entrada
        </h4> 

    </div>
    <div className='flex justify-center relative'>
        <div className='flex flex-col justify-between   bg-violet-300 p-5 rounded-lg w-200'>
            <div className='flex justify-around '>
                <div className="bg-green-400 w-14 h-14 rounded-full ml-0.5"> </div>
                <h2 className="flex self-center text-1xl text-black font-bold "> 7:58h </h2>
                <h2 className="flex self-center text-1xl text-black font-bold "> Entrada </h2>
                <img src={IconEdit} alt="icono editar" className="w-7 h-7 flex self-center " />
        </div>
       
     

        <div className='flex justify-around mt-20'>
                <div className="bg-red-500 w-14 h-14 rounded-full "> </div>
                <h2 className="flex self-center text-1xl text-black font-bold "> 17:00h </h2>
                <h2 className="flex self-center text-1xl text-black font-bold "> Salida </h2>
                <img src={IconEdit} alt="icono editar" className="w-7 h-7 flex self-center " />
        
        </div>
 </div>
</div> 
</>
  )
}

export default BtnRegistroEntrada