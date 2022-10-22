import React, { useEffect } from "react";
import BgMain from "../components/global/BgMain";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Main from "../components/home/Main";
import LogIn from "../components/login/LogIn";
import axios from "axios";
import { render } from "@testing-library/react";

function Home(props) {
  const userLoggedIn = () => {
    axios
      .get(
        "https://fichajefactoria-default-rtdb.europe-west1.firebasedatabase.app/empleados.json"
      )
      .then((res) => {
        const test = Object.keys(res.data);
        const diffears = test.map((a) => {
          if (a.length > 10) {
            console.log(a);
          }
          return a;
        });
      });
  };

  userLoggedIn();

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
