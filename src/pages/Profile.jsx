import React from 'react'
import image from '../assets/img/perfil.png'
import ProfileForm from '../components/ProfileForm'



function Profile() {
  return (
<div className='ProfileForm md:container md:mx-auto box-border place-content-center '>
    
<div className="containerImg m-80-auto, py-30-20,pl-0,rounded-none object-cover place-items-center bg-violet-300">
 <img className="h-48 w-full object-cover md:h-full md:w-48 flex items-center rounded-l" src={image} alt=""/>
</div>
    <ProfileForm>
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
                </ProfileForm>
    </div>
  )
  
  
}


export default Profile