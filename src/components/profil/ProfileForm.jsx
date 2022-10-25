import React from 'react'
import image from '../../assets/img/perfil.png'

           function ProfileForm() {
            const user = JSON.parse(localStorage.getItem("loggedUser"))
            console.log(user)
        

        return (
          <>
          <div className="flex justify-center bg-white min-h-min">
            <div>
              <div className="flex justify-center rounded-xl">
                
                <div className="mt-2 sm:mt-05 md:col-span-2 md:mt-0">
                  <form action="#" method="POST">
                    <div className="shadow sm:overflow-hidden mt-5 sm:rounded-md">
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        
                        <div>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block  h-20 w-20 overflow-hidden rounded-full bg-gray-100">
    
                              <img className="h-full w-full object-cover" viewBox="0 0 24 24 " src={user.image} alt="perfil imagen"/>

                            </span>
                            
                          </div>
                        </div>
      


                        <div>
                          
                          
                            <div className="space-y-1 text-center">
                             
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  <span>Subir imagen</span>
                                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                             
                              </div>
                            
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
                <div className=" border-gray-200" />
              </div>
            </div>
      
            <div className="mt-2 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                 
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                              Nombre
                            </label>

                            <p className="mt-1 block w-full m-2 rounded-md bg-grisF5 p-1 border-gray-300 shadow-sm">{user.name}
                            </p>
                          </div>
      
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                              Apellido
                            </label>
                            <p className="mt-1 block w-full m-2 rounded-md bg-grisF5  p-1 border-gray-300 shadow-sm">{user.surname}
                            </p>
                            
                          </div>
      
                          <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          DNI
                            </label>
                            <p className="mt-1 block w-full m-2 rounded-md bg-grisF5  p-1 border-gray-300 shadow-sm">{user.dni}
                            </p>
                          </div>
      
      
                          <div className="col-span-6">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                              Teléfono de contacto
                            </label>
                            <p className="mt-1 block w-full m-2 rounded-md bg-grisF5  p-1 border-gray-300 shadow-sm">{user.phone}
                            </p>
                          </div>
      
                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                              Correo electrónico
                            </label>
                            <p className="mt-1 block w-full m-2 rounded-md bg-grisF5  p-1 border-gray-300 shadow-sm">{user.email}
                            </p>
                          </div>
      
                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                            Cargo laboral 
                            </label>
                            <p className="mt-1 block w-full m-2 rounded-md bg-grisF5  p-1 border-gray-300 shadow-sm">{user.cargo}
                            </p>
                          </div>
      
                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                              Jornada laboral
                            </label>
                            <p className="mt-1 block w-full m-2 rounded-md bg-grisF5  p-1 border-gray-300 shadow-sm">{user.horario + " horas semanales"}
                            </p>
                          </div>
                         
                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                            Rol 
                            </label>
                            <p className="mt-1 block w-full m-2 rounded-md bg-grisF5  p-1 border-gray-300 shadow-sm">{user.rol}
                            </p>
                          </div>

                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-cianF5 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
      </div>

          </>
        )
      }


    export default ProfileForm
