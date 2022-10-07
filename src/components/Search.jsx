import React from 'react'

function search() {
  return (
    
    <>
    <form>
         <h2 className="relative w-96 md:w-32">
            <input type="search" id="default-search"  placeholder="Buscar" required>
            </input>
            <button type="submit" >Buscador</button>
         </h2> 
    </form>
   
    </>
  )
}

export default search