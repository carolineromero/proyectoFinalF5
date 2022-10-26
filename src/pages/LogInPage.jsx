import LogIn from "../components/login/LogIn";
import React from "react";
import "../index.css"
import BgMain from '../components/global/BgMain';
import Home from "./Home";


function LogInPage(){
    const [usuario, setUsuario] = React.useState(null);
  return (
    <>
      {usuario ? (
        <>
          
          <BgMain /> <Home />
        </>
      ) : (
        <LogIn setUsuriario={setUsuario} />
      )}
    </>
  );
}
export default LogInPage;