import React from 'react'
import image from '../assets/img/perfil.png'
import ProfileForm from '../components/ProfileForm'
import Header from '../components/Header'



function Profile() {
  return (
    <div>
        <Header/>
<div className='ProfileForm w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-moradoFuerteF5 lg:max-w-xxl '>
    
<div className="containerImg w-full p-6 m-auto bg-white rounded-md ring-2 ring-moradoFuerteF5 max-h-full">
 <img className="h-48 w-full object-cover md:h-full md:w-48 flex items-center rounded-l" src={image} alt=""/>
</div>
    <ProfileForm/>
   
{/*  
    <div className="body">
        <div className="Informe de Registro flexsm (640px)shadow-md ">
    <label for="">Informe de Registro</label>
                    <input type="text">
                        </input>
                        </div>


                   <div className="#cbd5e1"> <label for="">DNI</label>
                    <input type="">
                        </input></div>

                       <div className="#cbd5e1"> <label for="Telefono">Telefono</label>
                    <input type="number">
                        </input></div>

                      <div> <label for="">Email</label>
                    <input type="text">
                        </input></div> 

                       <div> <label for="">Cargo</label>
                    <input type="text">
                        </input></div>
                        <button className="btn">Editar</button>
                </div> */}
              
    </div>
    </div>
  )
  
  
}


export default Profile