import React from 'react'


function FormNewEmploy() {
  return (
    <> 
<div className=" flex items-center justify-center p-12 rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-moradoFuerteF5
 ">

    <div className="mx-auto w-full max-w-[550px] ">
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
                    for="Apellido"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Apellido
                </label>
                <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className="mb-2">
                <label
                    for="Dni"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Dni
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
                    for="Telefono"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Telefono
                </label>
                <input
                    type="number"
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
                    type="Text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="Imagen"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Imagen
                </label>
                <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="Contraseña"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Contraseña
                </label>
                <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                   Crear nuevo
                </button>
            </div>
            
            
         
        </form>
  </div>
</div>
    </>
  )
}

export default FormNewEmploy
