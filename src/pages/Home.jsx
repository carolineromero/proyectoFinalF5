import React, { useEffect } from "react";
import BgMain from "../components/global/BgMain";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Main from "../components/home/Main";
import LogIn from "../components/login/LogIn";
import axios from "axios";
import { render } from "@testing-library/react";

function Home(props) {
  useEffect(() => {
    userLoggedIn();
  }, []);

  const userLoggedIn = () => {
    axios
      .get(
        "https://fichajefactoria-default-rtdb.europe-west1.firebasedatabase.app/empleados.json"
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  const test = "1";
  if (test === "1") {
    return (
      <>
        <BgMain />
        <Header />
        <Hero />
        <Main />
        <LogIn />
      </>
    );
  } else {
    <LogIn />;
  }
}

export default Home;
