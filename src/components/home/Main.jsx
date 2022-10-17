import { MaterialTailwindTheme } from '@material-tailwind/react'
import React from 'react'
import IconEdit from '../../assets/img/header/editIcon.png'
import { Link } from 'react-router-dom'


function Main() {
  return (
    <>
   <div className='flex justify-center relative'>
         <h4 className="text-1xl font-bold flex self-center m-10 text-moradoFuerteF5">
          Semana 10 Oct - 14 Oct
        </h4> 

    </div>
    <div className="flex justify-center relative">
        <button className="text-1xl font-bold flex self-center bg-cianF5 hover:bg-naranjaF5 w-max p-5 m-4 rounded-2xl text-white">
          Registrar entrada
        </button> 
    </div>
    <div className='flex justify-center relative'>
        <div className='flex flex-col justify-between   bg-white p-5 rounded-lg w-200'>
            <div className='flex justify-around '>
                <div className="bg-green-400 w-14 h-14 rounded-full ml-0.5"> </div>
                <h2 className="flex self-center text-1xl text-black font-bold "> 7:58h </h2>
                <h2 className="flex self-center text-1xl text-black font-bold "> Entrada </h2>
                <Link to='/profile'src={IconEdit} className="w-7 h-7 flex self-center  "
                 >Perfil</Link>


                {/* <img  href='/profile' alt="icono editar"  /> */}
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

export default Main