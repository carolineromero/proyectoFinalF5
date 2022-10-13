import React from 'react'

function ProfileForm() {
  return (
    <body>
    <div className="container columns-1 place-content-center">
        <form action="" class="formulario">
            <h2 className="titulo">informe de Registro</h2>
            <div className="padre">
                <div className="DNI">
                    <label for="">DNI</label>
                    <input type="text"/>
                </div>
                <div className="Telefono">
                    <label for="">Telefono</label>
                    <input type="numbers"/>
                </div>
                <div className="Email">
                    <label for="">Email</label>
                    <input type="email"/>
                </div>
                <div className="cargo">
                    <label for="">Cargo</label>
                    <input type="text"/>
                </div>
                <div className="button">
                    <input type="button" value="Editar"/>
                </div>
            </div>
        </form>
    </div>
</body>
  )
}

export default ProfileForm