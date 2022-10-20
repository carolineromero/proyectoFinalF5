import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
  //setear los hooks useState
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  //función para traer los datos de la API

  const [adminRights, setAdminRights] = useState(false)

  const methodGet = async () => {
    await axios.get("http://localhost/proyectofinalBack/trabajadores.php")
      .then(response => {
        if (response.data.rol != "admin") { }
        setUsers(response.data);
      }).catch(error => {
        console.log(error);
      })
  }
  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }
  //metodo de filtrado 1
  let results = []
  if (!search) {
    results = users
  } else {
    results = users.filter((data) =>
      data.name.toLowerCase().includes(search.toLocaleLowerCase()) +
      data.surname.toLowerCase().includes(search.toLocaleLowerCase())

    )

  }
  useEffect(() => {
    methodGet()
  }, [])
  return (
    <>

      <div className="flex">
        <form className='text-slate-100 '>
          <h2 className="relative flex justify-center h-10 text-moradoFuerteF5">
            <input value={search} onChange={searcher} type="search" id="default-search" className="bg-grisF5 rounded-xl flex content-center" fill=" moradoFuerteF5 " required>
            </input>
          </h2>
        </form>

        <div className="flex justify-center">
          <button className="w-40 h-6 text-1xl flex justify-center items-center bg-moradoFuerteF5  p-5 m-4 rounded-xl border-2 text-white">
            Crear nuevo
          </button>
        </div>
      </div>

      {results.map((user) => (

        <div class="mx-5 my-2 grid-cols-5 grid-row-2 rounded-lg border-2 border-b-4 border-l-4 border-moradoFuerteF5 px-4 shadow-xl">
          <div class="flex h-16 items-center justify-between">
            <a href="http://localhost:3000/profile"><img alt="photo" class="w-10 rounded-full" src={user.image} /></a>
            <div class="ml-2">

              <div class="text-xs flex font-semibold text-moradoFuerteF5 w-40">{`${user.name} ${user.surname}`} </div>

              <div class="flex text-xs font-light text-gray-600">
                {user.cargo}
              </div>
            </div>
            <div className="flex flex-row-reverse w-full relative bottom-0">
              <div className="grid gap-4 grid-cols-3 border-t divide-x text-[#0ED3CF]  bg-gray-50 dark:bg-transparent py-3">
                <a className=" cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                  <div className="mr-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#4311B9"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                  </div>
                </a>
                <a className="cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                  <div className="mr-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#4311B9"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                  </div>
                </a>
                <a className="cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                  <div className="mr-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#4311B9">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      ))}

    </>
  )
}
export default Search