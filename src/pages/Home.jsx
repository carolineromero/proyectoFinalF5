import React, { useEffect, useState } from "react";
import BgMain from "../components/global/BgMain";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Main from "../components/home/Main";
import LogIn from "../components/login/LogIn";
import axios from "axios";
import { render } from "@testing-library/react";

function Home(props) {
  const [success, setSuccess] = useState(false);
  const userLoggedIn = () => {
    axios
      .get(
        "https://fichajefactoria-default-rtdb.europe-west1.firebasedatabase.app/empleados.json"
      )
      .then((res) => {
        const test = Object.keys(res.data);
        const diffears = test.map((a) => {
          if (a.length > 10) {
            setSuccess(true);
          }
          return a;
        });
      });
  };

  
  userLoggedIn();

  if (success) {
    return (
      <>
        <BgMain />
        <Header />
        <Hero />
        <Main />
      </>
    );
  } else {
    return(
    <LogIn />);
  }
}

export default Home;
