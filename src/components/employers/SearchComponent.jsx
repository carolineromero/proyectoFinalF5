import React, {useState, useEffect} from 'react';
import axios from 'axios';



const SearchComponent = () => {
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
  
  //renderizamos la vista
  return (
    <div>
    <form className='text-slate-100 top-3 bottom-1'>
         <h2 className="relative flex justify-center">
            <input value={search} onChange={searcher} type="search" id="default-search"   className="bg-lilaF5  rounded-xl flex content-center" fill="moradoFuerteF5"required> 
            </input>
         </h2> 
    </form>
    <table>
        <thead className="">
          <tr className="relative flex justify-center text-moradoFuerteF5">
            <th>NAME</th>
            <th>USER NAME</th>
          </tr>
        </thead>
        <tbody>
            { results.map( (user) => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
            </tr>    
            ))}
        </tbody>
      </table>
    </div>
  )
}



export default SearchComponent
