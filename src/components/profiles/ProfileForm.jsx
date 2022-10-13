import React from 'react'
import image from '../../assets/img/perfil.png'

function ProfileForm() {
  return (
           <body>
            <div className='ProfileForm w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-moradoFuerteF5 object-fill '>
        
        <div className="containerImg w-full p-6 m-auto bg-white rounded-md ring-2 ring-moradoFuerteF5 max-h-full">
         <img className="h-48 w-full object-cover md:h-full md:w-48 flex items-center rounded-l" src={image} alt=""/>
        </div>
        </div>
        <div className="container columns-1 place-content-center shadow-sm lg:max-w-xxl">
        <form className="mt-6">
                                <div className="mb-2">
                                    <label
                                        for="Nombre"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="DNI"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        DNI
                                    </label>
                                    <input
                                        type="numbers"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
    
                                <div className="mb-2">
                                    <label
                                        for="Telefono"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Telefono
                                    </label>
                                    <input
                                        type="numbers"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
    
                                <div className="mb-2">
                                    <label
                                        for="Email"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="Cargo"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Cargo
                                    </label>
                                    <input
                                        type="cargo"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="Horas semanales"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Horas Semanales
                                    </label>
                                    <input
                                        type="Horas Semanales"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                
                                <div className="mt-6">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                       Editar
                                    </button>
                                </div>
                            </form>
            
                       
        
        </div>
        
    </body>
    
        
    
    
   
      )
    }
    
    export default ProfileForm
    