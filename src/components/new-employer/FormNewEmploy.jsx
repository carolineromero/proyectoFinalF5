import React from "react";
import iconProfile from "../../assets/img/header/somosF5-logoMorado.svg";
import axios from "axios";
import {useState} from 'react';
import { Link } from "react-router-dom";

function FormNewEmploy() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dni, setDni] = useState();
    const [rol, setRol] = useState('');
    const [phone, setPhone] = useState();
    const [horario, setHorario] = useState();
    const [password, setPassword] = useState();
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [cargo, setCargo] = useState('');

  

    const postData = () =>{
      axios.post("https://fichajefactoria-default-rtdb.europe-west1.firebasedatabase.app/empleados.json",{
      name,
      surname,
      email,
      phone,
      cargo,
      rol,
      password,
      horario,
      image,
    })}
  
  return (
    <>
      {/* <div className="flex items-center justify-center p-12">

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
</div> */}

      <div className="flex justify-center mt-10">
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
                            <img
                              className="h-full w-full object-cover flex justify-center"
                              viewBox="0 0 24 24 "
                              src={iconProfile}
                              alt="perfil imagen"
                            />
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
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
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
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nombre
                          </label>
                          <input
                          onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            id="name"
                            placeholder=""
                            className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="surname"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Apellido
                          </label>
                          <input
                          onChange={(e) => setSurname(e.target.value)}
                            type="text"
                            name="surname"
                            id="surname"
                            placeholder=""
                            className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            DNI
                          </label>
                          <input
                          onChange={(e) => setDni(e.target.value)}
                            type="text"
                            name="dni"
                            id="dni"
                            placeholder=""
                            className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Repita su DNI
                          </label>
                          <input
                          onChange={(e) => setId(e.target.value)}
                            type="text"
                            name="dni"
                            id="dni"
                            placeholder=""
                            className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Teléfono de contacto
                          </label>
                          <input
                          onChange={(e) => setPhone(e.target.value)}
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder=""
                            className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Correo electrónico
                          </label>
                          <input
                          onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            name="email"
                            id="email"
                            placeholder=""
                            className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Cargo laboral
                          </label>
                          <input
                          onChange={(e) => setCargo(e.target.value)}
                            type="text"
                            name="name"
                            id="cargo"
                            placeholder=""
                            className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Jornada laboral
                          </label>
                          <input
                          onChange={(e) => setHorario(e.target.value)}
                            type="number "
                            name="horario"
                            id="horario"
                            placeholder=""
                            className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="rol"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Rol
                          </label>
                          <input
                          onChange={(e) => setRol(e.target.value)}
                            type="text"
                            name="text"
                            id="rol"
                            placeholder=""
                            className="mt-1 block w-11/12 m-2 rounded-md bg-grisF5  p-1 border-none shadow-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 
                      <div className="mb-5">
          <label for="image" className="mb-3 block text-base font-medium text-[#07074D]">
            Image
          </label>
          <input
            type="png"
            name="image"
            id="image"
            placeholder=""
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div> */}

                    <div className="px-4 py-3 text-right sm:px-6">
                      <Link to="/workers"
                      onClick={postData}
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-moradoFuerteF5 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Guardar
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default FormNewEmploy;
