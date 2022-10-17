import React from 'react'
import image from '../../assets/img/perfil.png'
import Vector from '../../assets/img/background/Vector.png'

function ProfileForm() {
  return (
           <body>
           
        <div className='relative bg-gray-80 opasity-0 w-full ,ax-w-lg '>
          <div className='absolute top-0 -right-4 w-60 h-60 bg-purple-300 z-10 filter blur-3xl rounded-full overflow-hidden  -translate-x-1 -translate-y-1 opacity-70'></div>
          <div className='absolute bottom-0 -left-4 w-60 h-60 bg-slate-300 filter blur-3xl rounded-full overflow-hidden'></div>
          <img className="absolute content-center -right-10 inset-y-1/2 z-10 w-60 h-60 fiter blur-3xl" src={Vector} alt=""/>
        {/*   <img className="absolute m-400 -right-10 w-40 h-40 " src={Vector} alt=""/> */}
          
        
         <div className='item-center justify-center p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-moradoFuerteF5 '>
        
        <div className=" w-auto p-6 m-auto bg-white rounded-md ring-2 ring-moradoFuerteF5">
         <img className="h-48 w-full object-cover md:h-full md:w-20 flex items-center rounded-l" src={image} alt=""/>
        </div>
        </div>
        <div className="flex min-h-full items-center justify-center ">
        <form className="mt-6 item-center justify-center">
            
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
                                <div className="mb-2">
                                    <label
                                        for="Filtro de fichaje"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                       Filtro de fichaje
                                    </label>
                                    <input
                                        type="Horas Semanales"
                                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
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
    
    export default ProfileForm
    