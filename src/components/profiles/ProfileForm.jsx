import React from 'react'

function ProfileForm() {
  return (
    <body>
    <div className="container columns-1 place-content-center">
        <form action="" class="formulario">
           
            <h2 class="titulo">informe de Registro</h2>
            <div class="padre">
                <div class="DNI">
                    <label for="">DNI</label>
                    <input type="text"/>

                </div>
                <div class="Telefono">
                    <label for="">Telefono</label>
                    <input type="numbers"/>

                </div>
                <div class="Email">
                    <label for="">Email</label>
                    <input type="email"/>

                </div>
                <div class="cargo">
                    <label for="">Cargo</label>
                    <input type="text"/>

                </div>
                <div class="button">
                    <input type="button" value="Editar"/>
                </div>

            </div>

        </form>

    </div>
</body>
  )
}

export default ProfileForm