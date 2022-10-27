import React from 'react'
import Toastify from 'toastify-js'

function Alert(message, type) {
  return (
   
  Toastify({
    text: "    Contraseña o email incorrecto",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "center", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === "success" ? "green" : "orange"  
    },
    onClick: function(){} // Callback after click
  }).showToast()

  )
}

export default Alert