import { MaterialTailwindTheme } from '@material-tailwind/react'
import "../../index.css"
import rayarosa from '../../assets/img/home/rayarosa.png'
import React, { useState } from 'react'
import IconEdit from '../../assets/img/header/editIcon.png'
import { Link } from 'react-router-dom'


function Main() {
  var curr = new Date; // get current date
  var first = curr.getDate(); // First day is the day of the month - the day of the week
  var last = first + 6; // last day is the first day + 6

  var firstday = new Date(curr.setDate(first)).toLocaleDateString('es', { day: "numeric" })
  var lastday = new Date(curr.setDate(last)).toLocaleDateString('es', { month: "long", day: "numeric" })

  //fecha actual
  const fechaActual = new Date().toLocaleDateString('es', { year: "numeric", month: "long", day: "numeric" })

  //entrada
  const [showEntrada, setShowEntrada] = useState(false);
  const date = new Date();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const year = date.getFullYear();

  const showTimeEntrada = () => {
    setShowEntrada(true)
  }
  //salida
  const [showSalida, setShowSalida] = useState(false);
  const showTimeSalida = () => {
    setShowSalida(true)
  }
  

//para que desaparezca boton entrada al clicar
const [show, setShow] = useState(true);



return (
<>
<div className=" mx-5 w-600 h-3/4 lg:mx-100 bg-grisF5 rounded-2xl "> 

<div className='flex justify-center'>
  <h4 className="text-1xl font-bold flex self-center mt-8 text-moradoFuerteF5">
     Semana {firstday + " - " + lastday}
  </h4>
</div>
   


<div className="flex justify-center mt-5 ">
  <div className="justify-center bg-white rounded-2xl mx-5 w-64 ">
    <div className='flex justify-center text-moradoFuerteF5 text-sm mt-5 '>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-moradoFuerteF5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
      {fechaActual}
     </div>

     <img src={rayarosa} alt="rayarosa" className='ml-14 h-1 w-40  mt-2'/>


     <div className="flex justify-center mt-5 w-48 mx-8">
        <button style={{ display: show ? "block" : "none" }} onClick={() => {showTimeEntrada(); setShow((s) => !s)}} id="boton-fichaje-entrada" className='togglebutton' >
          Registrar entrada
        </button>
        <button  style={{ display: show ? "none" : "block" }} onClick={() => {showTimeSalida()}} className='toggleclose' >
          Registrar salida
        </button>
      </div>

      <div className="flex justify-center  mt-5">
        <div className="flex-col justify-between bg-white p-4 rounded-xl ">
          <div className="flex grid-4 gap-2 ">
            <div className="bg-cianF5 w-8 h-8 rounded-full ml-0.5"> </div>
            {showEntrada ? (
              <h2 className="flex self-center text-sm font-medium">
                {" "}
                {hour}:{minutes}
              </h2>
            ) : (
              <h4 className="flex self-center text-sm font-medium">--:--</h4>
            )}
            <h2 className="flex self-center text-sm font-medium">
              {" "}
              Entrada{" "}
            </h2>
            <img src={IconEdit} alt="icono editar" className="w-5 h-5 flex self-center "/>
          </div>

          <div className="flex mt-8 grid-4 gap-3">
            <div className="bg-naranjaF5 w-8 h-8 rounded-full  "> </div>
            {showSalida ? (
              <h2 className="flex self-center text-sm font-medium ">
                {" "}
                {hour}:{minutes}
              </h2>
            ) : (<h4 className="flex self-center text-sm font-medium ">--:--</h4>)
            }
            <h2 className="flex self-center text-sm font-medium ">
              {" "}
              Salida{" "}
            </h2>
            <img src={IconEdit} alt="icono editar" className="w-5 h-5 flex self-center "/>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
          }
export default Main