import rayarosa from '../../assets/img/home/rayarosa.png';

function Hero() {
  const user = JSON.parse(localStorage.getItem("loggedUser"))
  console.log(user)

  return (
    <>
    <div className="flex justify-center flex-col h-8 mt-4">
      <h4 className="text-1xl font-bold self-center text-moradoFuerteF5">
        👋 Hola..
      </h4>  
    
      <h2 className="text-3xl font-bold self-center text-moradoFuerteF5 mt-2">
        Isabel
      </h2>
    </div>
    </>
  )
}

export default Hero