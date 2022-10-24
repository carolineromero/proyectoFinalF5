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
    <div className='flex justify-center flex-col justify-center'>
          
        <h2 className="text-3xl font-bold self-center text-moradoFuerteF5 z-20">
          Carol
        </h2>
        <img src={rayarosa} alt="raya" rosa className='absolute self-center mt-1 h-2 opacity-1  w-28 z-0 opacity-30' />
        </div>
    </div>

  </>
  )
}

export default Hero