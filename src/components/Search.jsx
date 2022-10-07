import React from 'react'

function search() {
  return (
    
    <>
    <form className=''>
         <h2 className="relative w-96 md:w-32 flex justify-center">
            <input type="search" id="default-search"  placeholder="Buscar" required>
            </input>
            <button type="submit" >Buscador</button>
         </h2> 
    </form>
   
    </>
  )
}

export default search