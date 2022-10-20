import React from 'react'
import image from '../../assets/img/perfil.png'


/* function ProfileForm() {
    const user = JSON.parse(localStorage.getItem("loggedUser"))
    console.log(user)

    
  return (
           <body>
           
        <div className='relative bg-gray-80 opasity-0 w-full ,ax-w-lg '>
        
        
          
        
         <div className='bg-clip-content p-6 bg-violet-600 w-full h-full border-4 border-violet-300 '>
        
        <div className=" w-auto p-6 m-auto bg-white rounded-md ring-2 ring-moradoFuerteF5 max-h-full">
         <img className="h-48 w-full object-cover md:h-full md:w-48 flex items-center rounded-l" src={image} alt=""/>
        </div>
        </div>
        <div className="flex min-h-full items-center justify-center ">
        <form className="mt-6 item-center justify-center">
            
                                <div className="mb-2">
                                    <label
                                        for="Nombre"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Nombre y Apellidos
                                    </label>
                                    <p
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    >{user.name + " " + user.surname}</p>
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="DNI"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        DNI
                                    </label>
                                    <p
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    >{user.dni}</p>
                                </div>
    
                                <div className="mb-2">
                                    <label
                                        for="Telefono"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Telefono
                                    </label>
                                    <p
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    >{user.phone}</p>
                                </div>
    
                                <div className="mb-2">
                                    <label
                                        for="Email"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Email
                                    </label>
                                    <p
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    >{user.email}</p>
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="Cargo"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Cargo
                                    </label>
                                    <p
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    >{user.cargo}</p>
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="Horas semanales"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Horas Semanales
                                    </label>
                                    <p
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    >{user.horario}</p>
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="Horas semanales"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Función:
                                    </label>
                                    <p
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    >{user.rol}</p>
                                </div>
                                
                                <div className="mt-6">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                       Editar
                                    </button>
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="Filtro de fichaje"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                       Filtro de fichaje
                                    </label>
                                    <p
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    ></p>
                                </div>
                                <div className="mt-6">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                       Entrar
                                    </button>
                                </div>
                             
                            </form>
            
                       
        
        </div>
        </div>
    
    </body>
    
        
    
    
   
      )
    }
    


    function ProfileForm() { */


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
