import React from 'react'


function FormNewEmploy() {
  return (
    <> 
<div className="">
<div className="">      
  <h1>New Employee Admission</h1>
  <form >        
         <p>
        <label for="name" className="place_name">Name
                <span className="required">*</span>
        </label>
            <input type="text" name="enter_name" id="name" required="required" placeholder="write your name"/>
         </p>  
        <p>
             <label for="email" className="place_email">Email
                <span className="required">*</span>
              </label>
                <input type="email" name="enter_email" id="email" required="required" placeholder="write your email"/>
            </p>
        
            <p>
              <label for="telephone" className="place_telephone">Teléfono
              </label>
                <input type="tel" name="enter_telephone" id="telephone" placeholder="write your telephone"/>
            </p>    
          
            <p>
              <label for="dni" className="place_dni">Dni
              </label>
                <input type="url" name="enter_dni" id="dni" placeholder=" dni"/>
            </p>    
          
            <p>
              <label for="position" className="place_position">cargo
                <span className="resquired">*</span>
              </label>
                <input type="text" name="enter_position" id="position" required="required" placeholder="Escribe un cargo"/>
            </p>    
          
            <p>
              <label for="mensaje" className="colocar_mensaje">Mensaje
                <span className="obligatorio">*</span>
              </label>                     
                                <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                            </p>                    
          
            <button type="submit" name="enviar_formulario" id="nuevo"><p>enviar</p></button>

            <p class="aviso">
              <span class="obligatorio"> * </span>los campos son obligatorios.
            </p>          
        
      </form>
</div>  
</div>
    </>
  )
}

export default FormNewEmploy
