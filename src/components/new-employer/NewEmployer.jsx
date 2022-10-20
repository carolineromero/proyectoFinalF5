import React from 'react'


function NewEmployer() {
  return (
    <> 
<div className="flex items-center justify-center p-12">

    <div className="mx-auto w-full max-w-[550px]">
      <form action="">
      <div className="mb-5">
          <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
          Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>

      <div className="mb-5">
          <label for="surnames" className="mb-3 block text-base font-medium text-[#07074D]">
           Surnames
          </label>
          <input
           type="text"
            name="surnames"
            id="surnames"
            placeholder="Surnames"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>

      <div className="mb-5">
         <label for="email" className="mb-3 block text-base font-medium text-[#07074D]">
          Email
          </label>
          <input
           type="text"
            name="email"
            id="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>

      <div className="mb-5">
          <label
            for="dni"
            className="mb-3 block text-base font-medium text-[#07074D]">
           DNI
          </label>
          <input
           type="number"
           name="dni"
           id="dni"
           placeholder="enter your dni"
           className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>

      <div className="mb-5">
          <label for="telephone" className="mb-3 block text-base font-medium text-[#07074D]">
          Telefono
          </label>
          <input
            type="number"
            name="telephone"
            id="telephone"
            placeholder="Enter your number"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div className="mb-5">
          <label
            for="cargo"
            className="mb-3 block text-base font-medium text-[#07074D]">
            Cargo
          </label>
          <input
            type="text"
            name="cargo"
            id="cargo"
            placeholder="enter your cargo"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div className="mb-5">
          <label
            for="image"
            className="mb-3 block text-base font-medium text-[#07074D]">
            Image
          </label>
          <input
            type="png"
            name="image"
            id="image"
            placeholder=""
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div className="mb-5">
          <label
            for="contraseña"
            className="mb-3 block text-base font-medium text-[#07074D]">
           Contraseña
          </label>
          <input
           type="text"
           name="contraseña"
           id="contraseña"
           placeholder="enter your contraseña"
           className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
     
      <div>
        <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
          Crear Nuevo
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default NewEmployer