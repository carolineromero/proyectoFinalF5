import React from 'react'
import iconProfile from '../../assets/img/new-profile/icon-profile.png'

function NewEmployer() {
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
       <img className="h-full w-full object-cover flex justify-center" viewBox="0 0 24 24 " src={iconProfile} alt="perfil imagen"/>
       </span>
      </div>
      </div>

      <div>
      <div className="space-y-1 text-center">
        <div className="flex text-sm text-gray-600">
        <label htmlFor="file-upload"className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
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
    <div className="" />
  </div>

</div>

  <div className="mt-2 sm:mt-0">
    <div className="attendees-cont grid gx3 gg30 ">
     <div className="mt-5 md:col-span-2 md:mt-0">
     <form action="#" method="POST">
      <div className="overflow-hidden sm:rounded-md">
        <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input type="text" name="name"id="name"placeholder=""className="mt- block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"/>
      </div>

      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
         Apellido
        </label>
        <input type="text" name="surname" id="surname" placeholder="" className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"/>
      </div>      

      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
         DNI
        </label>
        <input type="number" name="dni" id="dni" placeholder="" className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"/>
      </div>
      
      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Teléfono de contacto
        </label>
        <input type="number" name="phone" id="phone" placeholder=""className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"/>
      </div>
      
      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input type="text" name="email" id="email" placeholder=""                        className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"/>
      </div>

      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Cargo laboral
        </label>
        <input type="text" name="name" id="cargo" placeholder=""                          className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"/>
      </div>

      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Jornada laboral
        </label>
        <input type="number " name="horario" id="horario" placeholder=""             className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"/>
      </div>
  
      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="rol" className="block text-sm font-medium text-gray-700">
        Rol 
        </label>
        <input type="text" name="text" id="rol" placeholder=""                          className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"/>
      </div>
    </div>
  </div>

  <div className="px-4 py-3 text-right sm:px-6">
    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-moradoFuerteF5 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    Guardar
    </button>
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

export default NewEmployer