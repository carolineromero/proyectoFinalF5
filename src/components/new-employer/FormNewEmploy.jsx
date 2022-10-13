import React from 'react'


function FormNewEmploy() {
  return (
    <> 

<div className="flex items-center justify-center p-12">

    <div className="mx-auto w-full max-w-[550px]">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
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
           type="surnames"
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
           type="email"
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
           type="dni"
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
            type="text"
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
            type="cargo"
            name="cargo"
            id="cargo"
            placeholder="enter your position"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div>
        <button className="hover:shadow-form rounded-md bg-moradoFuerteF5 py-3 px-8 text-base font-semibold text-white outline-none">
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
