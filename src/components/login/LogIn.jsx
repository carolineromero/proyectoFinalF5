import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/header/somosF5-logoMorado.svg'


/* import { useHistory } from 'react-router-dom' */

function Login() {
  const [name, setName] = useState("");
  const [cont, setCont] = useState("");
  const [user, setUser] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    methodPost()
  }
  const methodPost = async () => {
  const params = new URLSearchParams();
    params.append('email', name);
    params.append('password', cont);

  await axios.post("https://jsonplaceholder.typicode.com/users", params)
      .then(response => {
        console.log(response.data, "resss")
        localStorage.setItem("loggedUser", JSON.stringify(response.data))
        setUser(response.data);
        setSuccess(true)
        if (response.data.id !== undefined) {
          {/* <Link to={'/home'}/>; */ }
          navigate("/home", {
            "id": response.data.id
          })
          alert(response.data.name);
        } else {
          alert('error de contraseña'); 
        }
      })
  }


return (
<>  
<div className='flex-col  '>
      <div  className='flex justify-center items-center mt-24 sm:mt-10 '>
        <img src={logo} alt="logo" className='w-40  sm:w-80' ></img>
      </div>
    <div className=" relative rounded-3xl flex items-center mt-10 bg-white z-40 justify-center backdrop-opacity-60 p-12 mx-10 sm:mx-80  ">
      <div className=" mx-auto w-full max-w-[400px]">
        <form onSubmit={handleSubmit} /* action="http://localhost/proyectofinalBack/passwords.php" method="POST" */ >
          <div className="mb-5">
            <label for="email" className="mb-3 block text-base font-medium text-moradoFuerteF5">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              /*  id="" */
              placeholder=""
              className="w-full rounded-md border trak border-[#e0e0e0] bg-grislyF5 py-3 px-6 text-base font-medium text-moradoFuerteF5 outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>

          <div className="mb-5">
            <label for="password" className="mb-3 block text-base font-medium text-moradoFuerteF5">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setCont(e.target.value)}
              id=""
              placeholder=""
              className="w-full rounded-md border  border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>

          <div>
           <button onClick={''} className="w-full py-3 px-8 tracking-wide  text-white transition-colors duration-200 transform bg-moradoFuerteF5 rounded-md jover:bg-purple-600 focus:outline-none focus:bg-lilaF5">Login</button>
          
          </div>
         </form>
       </div>
      </div>
    </div>
</>  
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);

export default Login;
