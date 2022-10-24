import { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Home from "../../pages/Home";

import logo from "../../assets/img/header/somosF5-logoMorado.svg";

import { Navigate } from "react-router-dom";
import { getRoles } from "@testing-library/react";

function LogIn() {
  // 1. recoger email y password que escribe el usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  
  //resultado data obtenida
  const [success, setSuccess] = useState(false);

  // 2. llamada a la api
  const methodGet = (e) => {
    //e.preventDefault se usa para que no actualice la página
    e.preventDefault();
    axios
      .get(
        "https://fichajefactoria-default-rtdb.europe-west1.firebasedatabase.app/empleados.json"
      )
      .then((res) => {
        // Comprovar que la data escrita coincide con la guardada en la Api
        res.data.map((user) => {
          if (user != null) {
            if (user.email === email && user.password === password) {
              setSuccess(true);
              userLogged();
            } else {
              return;
            }
          }
        });
      });
  };

  const userLogged = () => {
    const test = { test: "1", user: email, user: rol };

    axios
      .post(
        "https://fichajefactoria-default-rtdb.europe-west1.firebasedatabase.app/empleados.json",
        test
      )
      .then((res) => console.log(res));
  };

  console.log(success);
  return (
    <div className="flex-col  ">
      <div className="flex justify-center items-center mt-24 sm:mt-10 ">
        <img src={logo} alt="logo" className="w-40  sm:w-80"></img>
      </div>
      {/* if success is true will go to home */}
      {console.log(success, "true?")}
      {success && <Navigate to="/home" replace={true} />}

      <div className=" relative rounded-3xl flex items-center mt-10 bg-white z-40 justify-center backdrop-opacity-60 p-12 mx-10 sm:mx-80  ">
        <div className=" mx-auto w-full max-w-[400px]">
          <form /* action="http://localhost/proyectofinalBack/passwords.php" method="POST" */
          >
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /*  id="" */
                placeholder=""
                className="w-full rounded-md border trak border-[#e0e0e0] bg-grislyF5 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                for="password"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder=""
                className="w-full rounded-md border  border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button
                onClick={(e) => methodGet(e)}
                className="w-full py-3 px-8 tracking-wide  text-white transition-colors duration-200 transform bg-moradoFuerteF5 rounded-md jover:bg-purple-600 focus:outline-none focus:bg-lilaF5"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<LogIn />);

export default LogIn;
