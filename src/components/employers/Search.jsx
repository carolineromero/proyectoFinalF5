import React, {useState, useEffect} from 'react';
import axios from 'axios';
import face from '../../assets/img/face.jpg'

const Search = () => {
    //setear los hooks useState
    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")
  
    //función para traer los datos de la API
   
const methodGet=async()=>{
      await axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response=>{
        setUsers(response.data);
      }).catch(error=>{
        console.log(error);
      })
    }  
     //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value) 
    }
    
    //metodo de filtrado 1 
  
    let results = []
     if(!search)
     {
         results = users
     }else{
          results = users.filter( (data) =>
          data.name.toLowerCase().includes(search.toLocaleLowerCase())
      )
     }
        
    useEffect( ()=> {
    methodGet()
    }, [])
  
  return (
    <>
     <form className='text-slate-100'>
         <h2 className="relative flex justify-center">
            <input value={search} onChange={searcher} type="search" id="default-search"   className="bg-lilaF5  rounded-xl flex content-center" fill="moradoFuerteF5"required> 
            </input>
         </h2> 
    </form>
 
    <div class="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 
    border-moradoFuerteF5 px-4 shadow-xl">
      <div class="flex items-center">
      <a href="http://localhost:3000/profile"><img alt="photo" class="w-10 rounded-full"src={face} /></a>
        <div class="ml-2">
          <div class="text-xs font-semibold text-moradoFuerteF5">Nombre</div>
          <div class="flex text-xs font-light text-gray-600">
            Horario de trabajo
          </div>
          </div>
            <div className="flex flex-col w-full relative bottom-0">
                <div className="grid grid-cols-3 border-t divide-x text-[#0ed3cf]  bg-gray-50 dark:bg-transparent py-3">
                    <a className=" cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                        <div className="mr-2" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#4311B9"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                        </div>
                    </a>
                    <a className="cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                        <div className="mr-2" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"fill="#4311B9"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </div>
                    </a>
                    <a className="cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                        <div className="mr-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"fill="#4311B9">
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
 
</>
)}


export default Search