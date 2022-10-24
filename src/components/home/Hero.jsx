import rayarosa from '../../assets/img/home/rayarosa.png';

function Hero() {
  const user = JSON.parse(localStorage.getItem("loggedUser"))
  console.log(user)

  return (

  <>
    <div className="flex justify-center flex-col md ">
      <h4 className="text-1xl font-bold self-center text-moradoFuerteF5">
      👋 Hola..
      </h4>  
    <div className='flex justify-center flex-col '>
      <h2 className="text-3xl font-bold mb-2 self-center text-moradoFuerteF5">
      Isabel
      </h2>
    </div>
    </div>
  </>
  )
}

export default Hero