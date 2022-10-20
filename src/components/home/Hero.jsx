
function Hero() {
  const user = JSON.parse(localStorage.getItem("loggedUser"))
  console.log(user)

  return (
    <>
      <div className="flex justify-center flex-col md relative ">
        <h4 className="text-1xl font-bold self-center text-moradoFuerteF5">
          Hola..
        </h4>
        <h2 className="text-3xl font-bold self-center text-moradoFuerteF5 ">
          {user.name}
        </h2> 
      </div>  
    </>
  )
}

export default Hero