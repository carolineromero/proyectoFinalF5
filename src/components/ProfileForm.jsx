import React from 'react'

function ProfileForm() {
  return (
    <body>
    <div className="container columns-1 place-content-center shadow-sm">
    <form className="mt-6">
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