import Home from "./pages/Home";
import LogIn from "./components/login/LogIn";
import React, { useState } from "react";
import {appfirebase} from "../src/auth/firebaseconfig";
import BgMain from "./components/global/BgMain";
import buttonText from "@material-tailwind/react/theme/components/button/buttonText";

function App() {
  const [usuario, setUsuario] = React.useState(null);
  return (
    <>
      {usuario ? (
        <>
          <BgMain />
         <Home />
        </>
      ) : (
        <LogIn setUsuriario={setUsuario} />
      )}
    </>
  );
}

export default App;
