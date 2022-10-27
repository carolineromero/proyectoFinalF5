import React from 'react'
import {useAuth} from '../../context/authContext'


function ProfileForm(){

  const {user, userData} = useAuth()
 

if (user!==null){

        return (
          <>
         
 <div className='flex justify-center mt-10'>
          <div className="lg:flex justify-center border-none bg-white w-3/4 py-5 sm: rounded-xl">
            <div>
              <div className="flex justify-center rounded-xl">
                
                <div className="mt-0 sm:mt-05 md:col-span-2 md:mt-0">
                  <form action="#" method="POST">
                    <div className="sm:overflow-hidden mt-0 sm:rounded-md">
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        
                        <div>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block  h-20 w-20 overflow-hidden rounded-full bg-gray-100">
    
                              <img className="h-full w-full object-cover flex justify-center" viewBox="0 0 24 24 " src={userData.image} alt="perfil imagen"/>

                            </span>
                            
                          </div>
                        </div>
                      </div>
               
                    </div>
                  </form>
                </div>
              </div>
            </div>
      
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="" />
              </div>
            </div>
      
            <div className="mt-2 sm:mt-0">
              <div className="attendees-cont ">
              
                <div className="mt-5  md:mt-0">
                  <form action="#" method="POST">
                    <div className="overflow-hidden sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid sm:cols-1 sm:grid-cols-2 gap-6">
                          <div className="">
                            <label htmlFor="first-name" className="block text-sm  text-moradoFuerteF5 font-semibold">
                              Nombre
                            </label>

                            <p className="mt-1 block w-9/12 m-2 rounded-md  ">{userData.name}
                            </p>
                          </div>
      
                          <div className="">
                            <label htmlFor="last-name" className="block text-sm  text-moradoFuerteF5 font-semibold">
                              Apellido
                            </label>
                            <p className="mt-1 block w-9/12 m-2 rounded-md ">{userData.surname}
                            </p>
                            
                          </div>
      
                          <div className="">
                            <label htmlFor="dni" className="col-span-6 sm:col-span-6 lg:col-span-2  text-moradoFuerteF5 font-semibold">
                          DNI
                            </label>
                            <p className="mt-1 block w-9/12 m-2 rounded-md ">{userData.dni}
                            </p>
                          </div>
      
      
                          <div className="">
                            <label htmlFor="email" className="block text-sm w-auto  text-moradoFuerteF5 font-semibold ">
                              Teléfono de contacto
                            </label>
                            <p className="mt-1 block w-9/12 m-2 rounded-md ">{userData.email}
                            </p>
                          </div>
      
                          <div className="">
                            <label htmlFor="phone-number" className="block text-sm text-moradoFuerteF5 font-semibold">
                              Correo electrónico
                            </label>
                            <p className="mt-1 block w-9/12 m-2 rounded-md ">{userData.phone}
                            </p>
                          </div>
      
                          <div className="">
                            <label htmlFor="cargo" className="block text-sm text-moradoFuerteF5 font-semibold">
                            Cargo laboral 
                            </label>
                            <p className="mt-1 block w-9/12 m-2 rounded-md ">{userData.cargo}
                            </p>
                          </div>
      
                          <div className="">
                            <label htmlFor="horario" className="block text-sm text-moradoFuerteF5 font-semibold">
                              Jornada laboral
                            </label>
                            <p className="mt-1 block w-9/12 m-2 rounded-md  p-2">{userData.horario + " horas semanales"}
                            </p>
                          </div>
                         
                          <div className=" ">
                            <label htmlFor="region" className="block text-sm text-moradoFuerteF5 font-semibold">
                            Rol 
                            </label>
                            <p className="mt-1 block w-9/12 m-2 rounded-md   p-2 ">{userData.rol}
                            </p>
                          </div>

                        </div>
                      </div>
                      </div>
                  </form>
                </div>
              </div>
            </div>
      </div>
      </div>
          </>
        )
      }
    }


    export default ProfileForm